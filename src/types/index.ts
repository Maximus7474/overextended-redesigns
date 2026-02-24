import { LucideIcon } from "lucide-react";

export interface Redesign {
	id: string;
	name: string;
	screenshot: string;
	// stars: number;
	// downloads: number;
	description: string;
	features: string[];
	requirements?: string[];
	installationGuide?: string[];
	githubUrl: string;
	githubReleaseUrl?: string;
	gallery: string[];
}

export interface Resource {
	id: string;
	name: string;
	icon?: LucideIcon;
	description: string;
	githubUrl: string;
	redesigns: Redesign[];
}
