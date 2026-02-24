import { GithubIcon } from "@/components/custom-icons";
import { RequirementCard } from "@/components/requirement-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
	CheckCircle2,
	Image as ImageIcon,
	ShieldCheck,
	Code2,
	ArrowRight,
	type LucideIcon,
	FileBraces,
	BookOpenCheck,
	CloudDownload,
	Book,
	AlertCircle,
} from "lucide-react";

export default function SubmitPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<div className="max-w-4xl mx-auto">

				{/* Header Section */}
				<div className="text-center mb-16 space-y-4">
					<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
						Submit Your Work
					</h1>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Showcase your redesign to the community.
					</p>
				</div>

				<div className="grid gap-8">

					<section className="space-y-6">
						<div className="flex items-center gap-2">
							<Code2 className="size-6 text-primary" />
							<h2 className="text-2xl font-bold">Technical Requirements</h2>
						</div>
						<div className="grid sm:grid-cols-2 gap-4">
							<RequirementCard
								Icon={GithubIcon as LucideIcon}
								title="Open Source"
								description="Your work must be hosted on a public GitHub repository with the GPL-V3 license."
							/>
							<RequirementCard
								Icon={FileBraces}
								title="Clean Code"
								description="Scripts should be optimized and free of obfuscation to ensure community trust."
							/>
							<RequirementCard
								Icon={BookOpenCheck}
								title="Documentation"
								description="Include a clear README with installation steps and dependency lists."
							/>
							<RequirementCard
								Icon={CloudDownload}
								title="Up to Date"
								description="Your redesign needs to be up to date with the current version of the resource."
							/>
						</div>
					</section>

					<Separator className="my-4" />

					<section className="space-y-6">
						<div className="flex items-center gap-2">
							<Book className="size-6 text-primary" />
							<h2 className="text-2xl font-bold">Contribution Rules</h2>
						</div>

						<Card className="border-primary/10 bg-primary/5">
							<CardContent>
								<ul className="space-y-4">
									{[
										["Single Redesign:", "Each pull request must contain exactly one submission to ensure a focused review."],
										["Local Verification:", "You must verify the project compiles successfully (npm run build) before submitting."],
										["Verified Ownership:", "You must be the original author or provide explicit, verifiable permission to list the work."],
										["Complete Metadata:", "PR descriptions must include all required fields: GitHub URL, Author, and Preview Image."],
										["Continued Maintenance:", "Redesigns must be kept up to date with the latest upstream changes to remain listed."],
									].map(([title, description], i) => {

										return (
											<li key={i} className="flex gap-3 text-sm leading-relaxed items-center">
												<CheckCircle2 className="size-6 text-primary shrink-0" />
												<span className="text-muted-foreground">
													<strong className="text-foreground block mb-0.5">{title}</strong>
													{description}
												</span>
											</li>
										)
									})}
								</ul>
							</CardContent>
						</Card>

						<div className="flex items-start gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/5 p-4 text-sm text-yellow-600 dark:text-yellow-500">
							<AlertCircle className="size-5 shrink-0" />
							<p>
								Submissions that do not follow these conditions will not be considered and the pull request will be closed.
							</p>
						</div>
					</section>

					<Separator className="my-4" />

					<section className="space-y-6">
						<div className="flex items-center gap-2">
							<ImageIcon className="size-6 text-primary" />
							<h2 className="text-2xl font-bold">Media</h2>
						</div>
						<Card>
							<CardContent>
								<ul className="space-y-4">
									<li className="flex gap-3">
										<CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
										<span><strong>Showcase:</strong> A 16:9 main showcase image is required for the gallery header.</span>
									</li>
									<li className="flex gap-3">
										<CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
										<span><strong>High-Quality Screenshots:</strong> Provide at least 3 high-resolution previews under <code>.webp</code> format.</span>
									</li>
									<li className="flex gap-3">
										<CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
										<span><strong>Branding:</strong> No intrusive watermarks or advertising on the screenshots.</span>
									</li>
								</ul>
							</CardContent>
						</Card>
					</section>

					<Card className="bg-primary/5 border-2 border-dashed border-primary/20 mt-8">
						<CardHeader className="text-center">
							<ShieldCheck className="size-12 text-primary mx-auto mb-4" />
							<CardTitle className="text-3xl">Ready to Submit?</CardTitle>
							<CardDescription className="text-base">
								Submissions are handled via GitHub Pull Requests to maintain transparency and track updates.
							</CardDescription>
						</CardHeader>
						<CardContent className="flex justify-center pb-8">
							<Button size="lg" className="rounded-full px-8 h-12 text-lg" asChild>
								<a href="https://github.com/Maximus7474/overextended-redesigns/fork" target="_blank">
									Fork the Repository <ArrowRight className="ml-2 size-5" />
								</a>
							</Button>
						</CardContent>
					</Card>

				</div>
			</div>
		</div>
	);
}
