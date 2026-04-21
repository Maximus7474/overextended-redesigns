import { Resource } from "@/types";
import { Toolbox } from "lucide-react";

export default {
	id: "ox_lib",
	name: "Ox lib",
	icon: Toolbox,
	description: "A FiveM resource and script library for Lua and JS.",
	githubUrl: 'https://github.com/CommunityOx/ox_lib',
	redesigns: [
		{
					id: "rome-lib-redesign",
					name: "Lib Redesign",
					screenshot: "/redesigns/ox_lib/rome-lib-redesign/main_screenshot.webp",
					description: "A modern lib visual redesign",
					flags: ['gpl-compliant', 'unsupported', 'unmaintained'],
					features: [],
					requirements: [],
					installationGuide: [
						"Clone the repository from GitHub or Download latest release",
						"If cloning the repository, build the ui using Bun"
					],
					githubUrl: "https://github.com/Scorpion7162/ox_lib_rome_reskin",
					gallery: [
						"/redesigns/ox_lib/rome-lib-redesign/image_1.webp",
						"/redesigns/ox_lib/rome-lib-redesign/image_2.webp",
					],
				},
	]
} satisfies Resource;
