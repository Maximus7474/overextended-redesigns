import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getRedesignById } from "@/data/resources";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  Download, 
  ArrowLeft,
  CheckCircle2, 
  AlertCircle, 
  BookOpen 
} from "lucide-react";
import { GithubIcon } from "@/components/custom-icons";
import { NotFoundDisplay } from "@/components/not-found";
import FullScreenImage from "@/components/fullscreen-image";

interface PageProps {
  params: Promise<{ 
    resourceId: string; 
    redesignId: string 
  }>;
}

export default async function RedesignDetailPage({ params }: PageProps) {
  const { resourceId, redesignId } = await params;
  const redesign = getRedesignById(resourceId, redesignId);
	
		if (!redesign) {
			return <NotFoundDisplay
				title="Redesign not found"
				message="The redesign you are looking for doesn't exist."
				backLink={`/resources/${resourceId}`}
			/>
		}

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <Button asChild variant="ghost" className="mb-6">
          <Link href={`/resources/${resourceId}`}>
            <ArrowLeft className="mr-2 size-4" /> Back to Resource
          </Link>
        </Button>

        <div className="mb-12 space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-muted border">
            <Image
              src={redesign.screenshot}
              alt={redesign.name}
              fill
              priority 
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>

          {/* Title and Stats */}
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold tracking-tight mb-2 italic uppercase">
                  {redesign.name}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl">
                  {redesign.description}
                </p>
              </div>
              <div className="flex gap-4 md:flex-col md:items-end">
                <div className="flex items-center gap-2 text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border">
                  <Star className="size-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold">{redesign.stars.toLocaleString()}</span>
                  <span className="text-xs uppercase tracking-wider">stars</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href={redesign.githubUrl} target="_blank" rel="noopener noreferrer">
                  <GithubIcon className="mr-2 size-4" /> View on GitHub
                </a>
              </Button>
              {redesign.githubReleaseUrl && <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href={`${redesign.githubReleaseUrl}`} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 size-4" /> Download Latest
                </a>
              </Button>}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="size-5 text-primary" />
                <CardTitle>Features</CardTitle>
              </div>
              <CardDescription>
                Key improvements and additions in this version
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {redesign.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Requirements */}
          {redesign.requirements && redesign.requirements.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertCircle className="size-5 text-destructive" />
                  <CardTitle>Requirements</CardTitle>
                </div>
                <CardDescription>
                  Necessary dependencies for a smooth setup
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {redesign.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="size-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                      <span className="text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Installation Guide */}
        {redesign.installationGuide && redesign.installationGuide.length > 0 && (
          <Card className="mb-12 shadow-sm border-2 border-muted">
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="size-5 text-primary" />
                <CardTitle>Installation Guide</CardTitle>
              </div>
              <CardDescription>
                Follow these logical steps to integrate the redesign
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="grid gap-4">
                {redesign.installationGuide.map((step, index) => (
                  <li key={index} className="flex gap-4 p-4 rounded-lg bg-muted/30 border border-transparent hover:border-primary/20 transition-colors">
                    <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium pt-1.5">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        )}

        {/* Gallery */}
        {redesign.gallery.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-end justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 uppercase tracking-tight">Gallery</h2>
                <p className="text-muted-foreground text-sm">
                  In-depth visual preview of the redesign interface
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {redesign.gallery.map((image, index) => (
                <div key={index} className="relative aspect-video rounded-xl overflow-hidden border bg-muted shadow-sm group">
                  <FullScreenImage
                    src={image}
                    alt={`${redesign.name} screenshot ${index + 1}`}
                    imageClassName="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
										width={768}
										height={768}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
