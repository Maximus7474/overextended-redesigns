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
		{
			id: "reluctant-redesign",
			name: "Inspired Lib Redesign",
			screenshot: "/redesigns/ox_lib/reluctant-redesign/main_screenshot.webp",
			description: "A modern lib visual redesign",
			features: [],
			requirements: [],
			installationGuide: [
				"Clone the repository from GitHub",
				"Build the web app or extract the build from web/build.zip"
			],
			githubUrl: "https://github.com/ReluctantDevelopment/ox_lib-redesign",
			gallery: [
				"/redesigns/ox_lib/reluctant-redesign/image_1.webp",
				"/redesigns/ox_lib/reluctant-redesign/image_2.webp",
				"/redesigns/ox_lib/reluctant-redesign/image_3.webp",
				"/redesigns/ox_lib/reluctant-redesign/image_4.webp",
			],
		},
		{
			id: "subj3ct-redesign",
			name: "Glassomorphism Lib Redesign",
			screenshot: "/redesigns/ox_lib/subj3ct-redesign/main_screenshot.webp",
			description: "A light theme take on ox lib redesign with glassopmorphism",
			features: [
				"ligth/dark theme",
				"glassomorphism"
			],
			requirements: [
				"Package manager (bun, npm, pnpm)"
			],
			installationGuide: [
				"Clone / Download the repository from GitHub",
				"Build the user interface in the web folder"
			],
			githubUrl: "https://github.com/Subj3ct/ox_lib_redesign",
			gallery: [
				"/redesigns/ox_lib/subj3ct-redesign/image_1.webp",
				"/redesigns/ox_lib/subj3ct-redesign/image_2.webp",
				"/redesigns/ox_lib/subj3ct-redesign/image_3.webp",
				"/redesigns/ox_lib/subj3ct-redesign/image_4.webp",
				"/redesigns/ox_lib/subj3ct-redesign/image_5.webp",
			],
		},
	]
} satisfies Resource;
