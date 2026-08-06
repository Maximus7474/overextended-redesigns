import Link from "next/link";
import { getResourceById } from "@/data/resources";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Layers } from "lucide-react";
import { GithubIcon } from "@/components/custom-icons";
import { NotFoundDisplay } from "@/components/not-found";
import { Metadata } from "next";
import { shuffleArray } from "@/lib/utils";
import { getLikesForRedesigns } from "@/lib/likes";
import { RedesignGrid, RedesignWithLikes } from "@/components/redesign-grid";

export const dynamic = "force-dynamic";

interface PageProps {
  params: Promise<{ resourceId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { resourceId } = await params;
  const resource = getResourceById(resourceId);

  if (!resource) return {};

  const description =
    resource.description.charAt(0).toLowerCase() + resource.description.slice(1);

  return {
    title: `${resource.name} - Ox Redesigns`,
    description: `Redesigns of ${resource.name}, ${description}`,
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { resourceId } = await params;
  const resource = getResourceById(resourceId);

  if (!resource) {
    return (
      <NotFoundDisplay
        title="Resource not found"
        message="The resource you are looking for doesn't exist."
        backLink="/resources"
      />
    );
  }

  const redesignIds = resource.redesigns.map((r) => r.id);
  const likesData = await getLikesForRedesigns(redesignIds);

  const redesignsWithLikes: RedesignWithLikes[] = resource.redesigns.map((redesign) => ({
    ...redesign,
    initialLikesCount: likesData[redesign.id]?.count ?? 0,
    initialHasLiked: likesData[redesign.id]?.hasLiked ?? false,
  }));

  const initialShuffledRedesigns = shuffleArray(redesignsWithLikes);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/resources">
            <ArrowLeft className="mr-2 size-4" /> Back to Resources
          </Link>
        </Button>

        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {resource.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {resource.description}
          </p>
          <Button variant="outline" size="sm" asChild>
            <a href={resource.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="mr-2 size-4" />
              Original Repository
            </a>
          </Button>
        </div>

        {resource.redesigns.length > 0 ? (
          <RedesignGrid
            initialItems={initialShuffledRedesigns}
            resourceId={resource.id}
          />
        ) : (
          <div className="text-center py-20">
            <Layers className="size-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Redesigns Yet</h3>
            <p className="text-muted-foreground">
              Check back soon for new redesigns!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
