"use server";

import { MongoError } from "mongodb";
import { getClientIdentifier } from "@/lib/identifier";
import { db } from "@/lib/db";

export async function toggleLike(redesignId: string) {
  const identifier = await getClientIdentifier();
  const likesCollection = db.collection("likes");
  const assetsCollection = db.collection("assets");

  const existingLike = await likesCollection.findOne({
    assetId: redesignId,
    identifier,
  });

  if (existingLike) {
    await likesCollection.deleteOne({ _id: existingLike._id });
    await assetsCollection.updateOne(
      { _id: redesignId as any },
      { $inc: { likesCount: -1 } },
      { upsert: true }
    );
    return { liked: false };
  } else {
    try {
      await likesCollection.insertOne({
        assetId: redesignId,
        identifier,
        createdAt: new Date(),
      });
      await assetsCollection.updateOne(
        { _id: redesignId as any },
        { $inc: { likesCount: 1 } },
        { upsert: true }
      );
      return { liked: true };
		} catch (error) {
			const err = error as MongoError;
      if (err.code === 11000) {
        return { liked: true };
      }
      throw error;
    }
  }
}
