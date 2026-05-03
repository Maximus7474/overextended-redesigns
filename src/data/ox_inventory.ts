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
			flags: ['beta'],
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
		{
			id: "nolag-clothing-inventory",
			name: "Inventory with Clothing",
			flags: ['unmaintained'],
			screenshot: "/redesigns/ox_inventory/nolag-clothing-inventory/main_screenshot.webp",
			description: "A inventory redesign including clothing slots",
			features: [
				"Clothing",
				"Dark theme",
				"Full Screen",
			],
			requirements: [
				"Default requirements for ox_inventory",
				"Illenium Appearance"
			],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release",
				"If cloning the repository, build the ui using Bun",
				"Install Illenium-Appearance",
				"Replace files in Illenium-Appearance with those in \"INSTALL/illenium-appearance\""
			],
			githubUrl: "https://github.com/NoLag-Development/ox_inventory",
			gallery: [
				"/redesigns/ox_inventory/nolag-clothing-inventory/image_1.webp",
				"/redesigns/ox_inventory/nolag-clothing-inventory/image_2.webp",
			],
		},
		{
			id: "inventory-with-rarity-inventory",
			name: "Inventory with Rarities",
			flags: ['unmaintained', 'gpl-compliant'],
			screenshot: "/redesigns/ox_inventory/inventory-with-rarity-inventory/main_screenshot.webp",
			description: "A inventory redesign with item rarity and fast slots",
			features: [
				"Rarities",
				"Dark theme",
				"Full Screen",
				"Separate Hotbar",
			],
			requirements: [
				"Default requirements for ox_inventory",
			],
			installationGuide: [
				"Clone the repository from GitHub or Download latest release",
				"If cloning the repository, build the ui using Bun",
			],
			githubUrl: "https://github.com/DemiAutomatic/ox_inv_redesign",
			gallery: [
				"/redesigns/ox_inventory/inventory-with-rarity-inventory/image_1.webp",
				"/redesigns/ox_inventory/inventory-with-rarity-inventory/image_2.webp",
			],
		},
		{
			id: "mmbaxd-inventory-redesign",
			name: "Inventory Redesign",
			screenshot: "/redesigns/ox_inventory/mmbaxd-inventory-redesign/main_screenshot.webp",
			description: "A inventory redesign with item rarity and fast slots",
			features: [
				"Custom dark theme",
				"Oswald font",
				"Full Screen",
			],
			requirements: [
				"Default requirements for ox_inventory",
			],
			installationGuide: [
				"Clone the repository from GitHub",
				"Build the ui using npm or pnpm",
			],
			githubUrl: "https://github.com/Mmbaxd/ox_Inventory",
			gallery: [
				"/redesigns/ox_inventory/mmbaxd-inventory-redesign/image_1.webp",
				"/redesigns/ox_inventory/mmbaxd-inventory-redesign/image_2.webp",
			],
		},
	]
} satisfies Resource;
