import { GithubIcon } from "@/components/custom-icons";
import { RequirementCard } from "@/components/requirement-card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";

const techRequirements = [
	{ 
		Icon: GithubIcon as LucideIcon, 
		title: "Open Source", 
		description: "Your work must be hosted on a public GitHub repository with the GPL-V3 license." 
	},
	{ 
		Icon: FileBraces, 
		title: "Clean Code", 
		description: "Scripts should be optimized and free of obfuscation to ensure community trust." 
	},
	{ 
		Icon: BookOpenCheck, 
		title: "Documentation", 
		description: "Include a clear README with installation steps and dependency lists." 
	},
	{ 
		Icon: CloudDownload, 
		title: "Up to Date", 
		description: "Your redesign needs to be up to date with the latest CommunityOx or Overextended reference." 
	}
];

const contribRules = [
	["Single Redesign:", "Each pull request must contain exactly one submission to ensure a focused review."],
	["Local Verification:", "You must verify the project compiles successfully (npm run build) before submitting."],
	["Licensing Compliance:", "Submissions must adhere to the original work's license (GPLv3). We do not accept obfuscated or 'locked' code."],
	["Mandatory Attribution:", "You must clearly credit the original author. Submissions claiming 100% original ownership of derivative works will be rejected."],
	["Public Hosting:", "All resources must be hosted on a public GitHub repository to allow for community auditing and transparency."],
	["Author Opt-Out:", "We honor takedown requests from verified original authors who do not wish to have their work showcased here."],
];

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
							{techRequirements.map((req, index) => (
								<RequirementCard
									key={index}
									Icon={req.Icon}
									title={req.title}
									description={req.description}
								/>
							))}
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
									{contribRules.map(([title, description], i) => (
											<li key={i} className="flex gap-3 text-sm leading-relaxed items-center">
												<CheckCircle2 className="size-6 text-primary shrink-0" />
												<span className="text-muted-foreground">
													<strong className="text-foreground block mb-0.5">{title}</strong>
													{description}
												</span>
											</li>
										)
									)}
								</ul>
							</CardContent>
						</Card>

						<div className="flex items-start gap-3 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm text-blue-600 dark:text-blue-400">
							<ShieldCheck className="size-5 shrink-0 mt-0.5" />
							<div className="space-y-1">
								<p className="font-semibold">Author Protection Policy</p>
								<p className="text-xs leading-relaxed opacity-90">
									By submitting, you acknowledge that the original author retains the right to request 
									removal. If a resource is shared for GPLv3 compliance without author involvement, 
									it will be tagged as <strong>GPLv3 Fork</strong> and <strong>No Support</strong>.
								</p>
							</div>
						</div>
					</section>

					<Separator className="my-4" />

					<section className="space-y-6">
						<div className="flex items-center gap-2">
							<ShieldCheck className="size-6 text-primary" />
							<h2 className="text-2xl font-bold">Status Definitions</h2>
						</div>
						<p className="text-muted-foreground">
							We use flags to help users understand the current state of a redesign.
						</p>
						
						<div className="grid sm:grid-cols-3 gap-4">
							<div className="p-4 rounded-lg border bg-card">
								<Badge variant="outline" className="mb-2 bg-yellow-500/10 text-yellow-600 border-yellow-500/20">
									Unmaintained
								</Badge>
								<p className="text-xs text-muted-foreground">
									Applied to resources that haven&apos;t been updated to match the latest CommunityOx reference 
        					or still rely on outdated Overextended core releases.
								</p>
							</div>
							
							<div className="p-4 rounded-lg border bg-card shadow-sm">
								<Badge variant="outline" className="mb-2 bg-blue-500/10 text-blue-600 border-blue-500/20">
									GPLv3 Fork
								</Badge>
								<p className="text-xs leading-relaxed text-muted-foreground">
									Indicates the resource was released to preserve the open-source nature of the original 
									work in compliance with GPLv3 terms, ensuring code availability for the community.
								</p>
							</div>

							<div className="p-4 rounded-lg border bg-card">
								<Badge variant="outline" className="mb-2 bg-red-500/10 text-red-600 border-red-500/20">
									No Support
								</Badge>
								<p className="text-xs text-muted-foreground">
									Signals that the author is not providing active troubleshooting, installation help, 
        					or regular maintenance for this specific release.
								</p>
							</div>
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
							<Button size="lg" className="group rounded-full px-8 h-12 text-lg" asChild>
								<a href="https://github.com/Maximus7474/overextended-redesigns/fork" target="_blank">
									Fork the Repository <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
								</a>
							</Button>
						</CardContent>
					</Card>

				</div>
			</div>
		</div>
	);
}
