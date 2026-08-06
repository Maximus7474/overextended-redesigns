"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlagBadge } from "@/components/flag-badge";
import { LikeButton } from "@/components/like-button";
import { Redesign } from "@/types";
import { Shuffle, Heart } from "lucide-react";

export type RedesignWithLikes = Redesign & {
  initialLikesCount: number;
  initialHasLiked: boolean;
};

interface RedesignGridProps {
  initialItems: RedesignWithLikes[];
  resourceId: string;
}

export function RedesignGrid({ initialItems, resourceId }: RedesignGridProps) {
  const [sortByLikes, setSortByLikes] = useState(false);

  const displayedItems = useMemo(() => {
    if (!sortByLikes) return initialItems;
    return [...initialItems].sort(
      (a, b) => b.initialLikesCount - a.initialLikesCount
    );
  }, [sortByLikes, initialItems]);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          Showing {initialItems.length} redesign{initialItems.length !== 1 ? "s" : ""}
        </p>

        <Button
          variant={sortByLikes ? "default" : "outline"}
          size="sm"
          onClick={() => setSortByLikes((prev) => !prev)}
        >
          {sortByLikes ? (
            <>
              <Heart className="mr-2 size-4 fill-current" /> Most Liked
            </>
          ) : (
            <>
              <Shuffle className="mr-2 size-4" /> Default
            </>
          )}
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((redesign) => (
          <ResourceCard
            key={redesign.id}
            {...redesign}
            resourceId={resourceId}
          />
        ))}
      </div>
    </div>
  );
}

function ResourceCard({
  id,
  screenshot,
  flags,
  name,
  description,
  features,
  resourceId,
  initialLikesCount,
  initialHasLiked,
}: RedesignWithLikes & { resourceId: string }) {
  return (
    <Link
      href={`/resources/${resourceId}/${id}`}
      className="group"
    >
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 pt-0 relative">
        <div className="relative aspect-video overflow-hidden bg-muted">
          <Image
            src={screenshot}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          <div className="absolute top-3 right-3 z-20">
            <LikeButton
              assetId={id}
              initialLikesCount={initialLikesCount}
              initialHasLiked={initialHasLiked}
            />
          </div>
        </div>

        <CardHeader className="relative">
          {flags && flags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {flags.map((flag) => (
                <FlagBadge key={flag} flag={flag} />
              ))}
            </div>
          )}

          <CardTitle className="group-hover:text-primary transition-colors">
            <h1>{name}</h1>
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {features.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{features.length - 2} more
              </Badge>
            )}
          </div>

          <p className="w-full text-center">View details</p>
        </CardContent>
      </Card>
    </Link>
  );
}
