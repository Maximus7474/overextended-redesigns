import * as dotenv from "dotenv";
import { resources } from "@/data/resources";
import { Db, MongoClient } from "mongodb";

dotenv.config({ path: ".env" });

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define MONGODB_URI inside .env");
}

let db: false | Db = false;
let client: false | MongoClient = false;

async function connect() {
	if (db !== false) return db;

	client = new MongoClient(process.env.MONGODB_URI!);
	await client.connect();
	db = client.db("redesigns_db");

	console.log("Connected to MongoDB Atlas...");

	return db;
}

async function close() {
	if (!client) return;
	await client.close();
}

async function seedAssets() {
	const db = await connect();
  try {
    const assetsCollection = db.collection("assets");

    const allRedesigns = resources.flatMap((resource) =>
      resource.redesigns.map((redesign) => ({
        id: redesign.id,
        resourceId: resource.id,
        name: redesign.name,
      }))
    );

    console.log(`Found ${allRedesigns.length} redesigns across ${resources.length} resources.`);

    for (const redesign of allRedesigns) {
      await assetsCollection.updateOne(
        { _id: redesign.id as any },
        {
          $setOnInsert: { likesCount: 0 },
          $set: {
            resourceId: redesign.resourceId,
            name: redesign.name,
            updatedAt: new Date(),
          },
        },
        { upsert: true }
      );
    }

    console.log("Assets synchronized successfully!");
  } catch (error) {
    console.error("Error seeding assets:", error);
  }
}

async function createIndexes() {
	const db = await connect();
  try {
	  await db.collection("rate_limits").createIndex(
	    { createdAt: 1 },
	    { expireAfterSeconds: 10 }
	  );

    console.log("Rate limit index synchronized successfully!");
  } catch (error) {
    console.error("Error indexing rate limits:", error);
  }
}

seedAssets();
createIndexes();
close();
