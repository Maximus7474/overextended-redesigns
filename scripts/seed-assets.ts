import * as dotenv from "dotenv";
import { resources } from "@/data/resources";
import { db } from "@/lib/db";

dotenv.config({ path: ".env" });

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define MONGODB_URI inside .env");
}

async function seedAssets() {
  try {
    console.log("Connected to MongoDB Atlas...");
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
  } finally {
    await client.close();
  }
}

seedAssets();
