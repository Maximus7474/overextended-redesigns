import { Resource } from "@/types";

export default {
	id: "ox_inventory",
	name: "Ox Inventory",
	description: "Most used slot slot-based inventory with metadata.",
	githubUrl: 'https://github.com/CommunityOx/ox_inventory',
	redesigns: [
		{
			id: "maximus7474-inventory-redesign",
			name: "Inventory with Clothing Slots",
			screenshot: "/redesigns/ox_inventory/maximus7474-inventory-redesign/main_screenshot.webp",
			description: "A overhaul of the inventory with modern styling & clothing slots",
			features: [
				"Sleek modern interface design",
				"Dark theme",
				"Clothing Slots with animations",
			],
			requirements: [
				"Default requirements for ox_inventory",
				"Illenium Appearance",
			],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release",
				"If cloning the repository, build the ui using Bun",
				"Download & install illenium appearance on your server",
				"Drag'n drop the illenium-appearance folder within this repository (INSTALLATION/illenium-appearance) in your illenium appearance resource",
			],
			githubUrl: "https://github.com/Maximus7474/ox_inventory_redesign",
			gallery: [
				"/redesigns/ox_inventory/maximus7474-inventory-redesign/image_1.webp",
				"/redesigns/ox_inventory/maximus7474-inventory-redesign/image_2.webp",
			],
		},
		{
			id: "samueldev-inventory-redesign",
			name: "Modern Panel Inventory",
			screenshot: "/redesigns/ox_inventory/samueldev-inventory-redesign/main_screenshot.webp",
			description: "A overhaul of the inventory with modern styling & clothing slots",
			features: [
				"Dark theme",
				"Improved display",
				"3D feeling",
				"Search functionality"
			],
			requirements: [
				"Default requirements for ox_inventory",
			],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release",
				"If cloning the repository, build the ui using Bun"
			],
			githubUrl: "https://github.com/Samuels-Development/ox_inventory",
			gallery: [
				"/redesigns/ox_inventory/samueldev-inventory-redesign/image_1.webp",
				"/redesigns/ox_inventory/samueldev-inventory-redesign/image_2.webp",
			],
		},
		{
			id: "hootrosa-grid-inventory",
			name: "Grid Inventory",
			screenshot: "/redesigns/ox_inventory/hootrosa-grid-inventory/main_screenshot.webp",
			description: "A grid based inventory rework",
			features: [
				"Grid based",
				"Modern design",
				"Item sorting",
				"Search functionality"
			],
			requirements: [
				"Default requirements for ox_inventory",
			],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release",
				"If cloning the repository, build the ui using Bun"
			],
			githubUrl: "https://github.com/HootroSA/ox_inventory-gridstyle",
			gallery: [
				"/redesigns/ox_inventory/hootrosa-grid-inventory/image_1.webp",
				"/redesigns/ox_inventory/hootrosa-grid-inventory/image_2.webp",
				"/redesigns/ox_inventory/hootrosa-grid-inventory/image_3.webp",
			],
		},
	]
} satisfies Resource;
