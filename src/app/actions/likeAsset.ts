"use server";

import { MongoError } from "mongodb";
import { getClientIdentifier } from "@/lib/identifier";
import { db } from "@/lib/db";

const MAX_ACTIONS_PER_WINDOW = 1;

export async function toggleLike(redesignId: string) {
  const identifier = await getClientIdentifier();
  const rateLimitCollection = db.collection("rate_limits");

  const recentActionCount = await rateLimitCollection.countDocuments({
    identifier,
  });

  if (recentActionCount >= MAX_ACTIONS_PER_WINDOW) {
    return { error: "TOO_MANY_REQUESTS", message: "Rate limit exceeded. Please slow down." };
  }

  await rateLimitCollection.insertOne({
    identifier,
    createdAt: new Date(),
  });

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
