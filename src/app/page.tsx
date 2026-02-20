import { ArrowRight, Palette, Users } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/custom-icons";
import MemberLink from "@/components/member-link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            Discover Overextended Resource Redesigns
          </h1>
          <p className="text-xl text-muted-foreground">
            A curated collection of redesigns and expansions<br/>
						for the popular Overextended resources.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link href="/resources">
                Browse Redesigns <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Palette className="size-6 text-primary" />
              </div>
              <CardTitle>Curated Submissions</CardTitle>
              <CardDescription>
                A hand-picked selection of redesigns, ensuring every resource meets
								high standards of performance and aesthetics.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="size-6 text-primary" />
              </div>
              <CardTitle>Developer Ecosystem</CardTitle>
              <CardDescription>
                A diverse collection of styles from global creators, ensuring every
								redesign honors the original author's vision and contribution.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GithubIcon className="size-6 text-primary" />
              </div>
              <CardTitle>Open Source</CardTitle>
              <CardDescription>
                Every redesign is open source and available on GitHub with installation guides.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto space-y-10">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">About This Website</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-muted-foreground">
            <p>
              Overextended released many very popular resources, maintaining them and providing support for many years.
							These resources being open source meant that any person could tailor the appearance and behaviour of them
							to their needs, many people have shared their creations in accordance with the original code license
							and this Website is to share them.
            </p>
            <p>
              Each redesign featured on this platform has been evaluated to make sure that it follows the initial standards
							established in the base resources. Each listing has a link to the user having shared it with details on where
							to find it as well as the features it provides.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Acknowledgements</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 text-muted-foreground">
						<p>
							If you've enjoyed using Overextended resources, please consider showing your appreciation to the original developers.
							Open source development is too frequently abused and is on the decline within the FiveM community with more and more
							people releasing escrowed resources.
						</p>
						
						<Separator />

						<div className="flex flex-row gap-16 justify-center">
							<MemberLink image="https://avatars.githubusercontent.com/u/65407488?v=4" name="thelindat" sponsor="thelindat" />
							<MemberLink image="https://avatars.githubusercontent.com/u/39926192?v=4" name="LukeWasTakenn" sponsor="lukewastaken" />
						</div>
          </CardContent>
        </Card>
      </section>

      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold">Ready to Discover some redesigns ?</h2>
          <p className="text-lg text-muted-foreground">
            Browse our curated collection of redesigned resources.
          </p>
          <Button asChild size="lg">
            <Link href="/resources">
              View All Resources <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
