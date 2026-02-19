import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getResourceById } from "@/data/resources";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Download, ArrowLeft } from "lucide-react";
import { GithubIcon } from "@/components/custom-icons";

interface PageProps {
  params: Promise<{ resourceId: string }>;
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { resourceId } = await params;
  const resource = getResourceById(resourceId);

  if (!resource) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/resources">
            <ArrowLeft className="mr-2 size-4" /> Back to Resources
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12 space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            {resource.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {resource.description}
          </p>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">
              {resource.redesigns.length} {resource.redesigns.length === 1 ? 'Redesign' : 'Redesigns'} Available
            </Badge>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resource.redesigns.map((redesign) => (
            <Link
              key={redesign.id}
              href={`/resources/${resource.id}/redesigns/${redesign.id}`}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:border-primary/50 pt-0">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={redesign.screenshot}
                    alt={redesign.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {redesign.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {redesign.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="size-4 fill-current" />
                      <span>{redesign.stars.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Download className="size-4" />
                      <span>{redesign.downloads.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {redesign.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {redesign.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{redesign.features.length - 2} more
                      </Badge>
                    )}
                  </div>

									<Button
										variant="ghost"
										size="sm"
										className="w-full"
										asChild
									>
										<Link
											href={redesign.githubUrl}
											target="_blank"
										>
											<GithubIcon className="mr-2 size-4" />
											<span>View on GitHub</span>
										</Link>
									</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
