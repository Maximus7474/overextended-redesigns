import { Layers } from "lucide-react";
import Link from "next/link";
import { resources } from "@/data/resources";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "@/components/custom-icons";
import { Button } from "@/components/ui/button";

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 space-y-4">
          <p className="text-lg text-muted-foreground">
            Browse our collection of redesigned ox resources. Click on any resource 
            to view available redesigns.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => {

						const Icon = resource.icon ?? Layers;
						
						return (
							<Card key={resource.id} className="h-full transition-all hover:shadow-lg hover:border-primary/50">
								<CardHeader>
									<div className="flex items-start justify-between gap-4 mb-2">
										<div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
											<Icon className="size-6 text-primary" />
										</div>
										<Badge variant="secondary">
											{resource.redesigns.length} {resource.redesigns.length === 1 ? 'redesign' : 'redesigns'}
										</Badge>
									</div>
									<CardTitle className="group-hover:text-primary transition-colors">
										{resource.name}
									</CardTitle>
								</CardHeader>
								<CardContent>
									{resource.description}
								</CardContent>
								<CardFooter className="grid grid-cols-2 gap-2 pt-4 border-t">
									<Button variant="outline" size="sm" asChild>
										<a href={resource.githubUrl} target="_blank" rel="noreferrer">
											<GithubIcon className="mr-2 size-4" />
											Code
										</a>
									</Button>
									<Button size="sm" asChild>
										<Link href={`/resources/${resource.id}`}>
											View Redesigns
										</Link>
									</Button>
								</CardFooter>
							</Card>
          	);
					})}
        </div>

        {resources.length === 0 && (
          <div className="text-center py-20">
            <Layers className="size-16 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Resources Yet</h3>
            <p className="text-muted-foreground">
              Check back soon for new redesigns!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
