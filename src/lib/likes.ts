import { getClientIdentifier } from "@/lib/identifier";
import { db } from "./db";

export async function getLikesForRedesigns(redesignIds: string[]) {
  if (!redesignIds.length) return {};

  try {
    const identifier = await getClientIdentifier();

    const assets = await db
      .collection("assets")
      .find({ _id: { $in: redesignIds as any } })
      .toArray();

    const userLikes = await db
      .collection("likes")
      .find({ identifier, assetId: { $in: redesignIds } })
      .toArray();

    const countMap = new Map(assets.map((item) => [String(item._id), item.likesCount || 0]));
    const likedSet = new Set(userLikes.map((item) => item.assetId));

    return redesignIds.reduce((acc, id) => {
      acc[id] = {
        count: countMap.get(id) || 0,
        hasLiked: likedSet.has(id),
      };
      return acc;
    }, {} as Record<string, { count: number; hasLiked: boolean }>);
  } catch (error) {
    console.error("Failed to fetch likes data:", error);
    return {};
  }
}
