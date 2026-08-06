"use client";

import { useState, useTransition } from "react";
import { Heart } from "lucide-react";
import { toggleLike } from "@/app/actions/likeAsset";
import { cn } from "@/lib/utils";

interface LikeButtonProps {
  assetId: string;
  initialLikesCount: number;
  initialHasLiked: boolean;
  className?: string;
}

export function LikeButton({
  assetId,
  initialLikesCount,
  initialHasLiked,
  className,
}: LikeButtonProps) {
  const [likesCount, setLikesCount] = useState(initialLikesCount);
  const [hasLiked, setHasLiked] = useState(initialHasLiked);
  const [isPending, startTransition] = useTransition();

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const nextHasLiked = !hasLiked;
    const nextCount = nextHasLiked ? likesCount + 1 : likesCount - 1;

    // Optimistic UI update
    setHasLiked(nextHasLiked);
    setLikesCount(nextCount);

    startTransition(async () => {
    const res = await toggleLike(assetId);

      if ("error" in res && res.error === "TOO_MANY_REQUESTS") {
        setHasLiked(hasLiked);
				setLikesCount(likesCount);
				console.error(res.error, res.message);
        return;
      }

      if (res.liked !== undefined) {
        setHasLiked(res.liked);
      }
    });
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md transition-all shadow-sm border",
        hasLiked
          ? "bg-rose-500/10 text-rose-600 border-rose-300 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-800"
          : "bg-background/80 text-muted-foreground border-border/60 hover:text-foreground hover:bg-background",
        className
      )}
      aria-label={hasLiked ? "Unlike redesign" : "Like redesign"}
    >
      <Heart
        className={cn(
          "size-3.5 transition-transform active:scale-125",
          hasLiked ? "fill-rose-500 text-rose-500" : "text-muted-foreground"
        )}
      />
      <span>{likesCount}</span>
    </button>
  );
}
