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
			features: ["Modern UI"],
			requirements: [],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release"
			],
			githubUrl: "https://github.com/IamLation/ox_target",
			gallery: [],
		},
		{
			id: "hello5m-target-redesign",
			name: "Target Redesign",
			screenshot: "/redesigns/ox_target/hello5m-target-redesign/main_screenshot.webp",
			description: "A sleek, futuristic redesign of ox_target",
			features: [],
			requirements: [],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release"
			],
			githubUrl: "https://github.com/HELLO5M/ox_target",
			gallery: [],
		},
		{
			id: "reluctantdev-target-redesign",
			name: "Modern Target Redesign",
			screenshot: "/redesigns/ox_target/reluctantdev/main_screenshot.webp",
			description: "A modern touch to ox_target's UI",
			features: [],
			requirements: [],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release"
			],
			githubUrl: "https://github.com/ReluctantDevelopment/ox_target-Redesign",
			gallery: [],
		},
		{
			id: "jaramiyo-target-redesign",
			name: "Cute Rose Reticle",
			screenshot: "/redesigns/ox_target/jaramiyo-target-redesign/main_screenshot.webp",
			description: "The third-eye reticle reimagined as a little rose that blooms on lock-on, with cacao option cards",
			features: [
				"Reticle is a rose that breathes, then blooms bright pink and scales on lock-on",
				"Cacao option cards with rose icon chips, staggered slide-in",
				"Baloo 2 type, cacao + soft-pink palette",
				"Visual only: all ox_target logic untouched",
			],
			requirements: ["ox_lib"],
			installationGuide: [
				"Clone / Download and rename the folder to ox_target, then ensure it",
				"Reskin only: copy the web/ folder over your ox_target's web/ and restart",
			],
			githubUrl: "https://github.com/JaramiyoSM/ox_target-jaramiyo",
			gallery: [
				"/redesigns/ox_target/jaramiyo-target-redesign/image_1.webp",
				"/redesigns/ox_target/jaramiyo-target-redesign/image_2.webp",
				"/redesigns/ox_target/jaramiyo-target-redesign/image_3.webp",
			],
		},
	]
} satisfies Resource;
