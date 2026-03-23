import { Resource } from "@/types";
import { Eye } from "lucide-react";

export default {
	id: "ox_target",
	name: "Ox target",
	icon: Eye,
	description: "A Standalone \"third-eye\" targeting resource.",
	githubUrl: 'https://github.com/CommunityOx/ox_target',
	redesigns: [
		{
			id: "iamlation-target-redesign",
			name: "Modern UI target",
			screenshot: "/redesigns/ox_target/iamlation-target-redesign/main_screenshot.webp",
			description: "A modern UI feel to ox_target",
			features: [ "Modern UI" ],
			requirements: [],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release"
			],
			githubUrl: "https://github.com/IamLation/ox_target",
			gallery: [],
		},
	]
} satisfies Resource;
