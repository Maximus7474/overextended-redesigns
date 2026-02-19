import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./theme-toggle";

export default function Navbar() {
	return (
		<header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
					<Image src='/oxpug.webp' alt='logo' width="64" height="64" className="h-10 w-10" />
					<span className="font-semibold text-lg">Overextended Redesigns</span>
				</Link>
				<nav className="flex items-center gap-6">
					<Link href="/" className="text-sm hover:text-primary transition-colors">
						Home
					</Link>
					<Link href="/resources" className="text-sm hover:text-primary transition-colors">
						Resources
					</Link>
					<ModeToggle />
				</nav>
			</div>
		</header>
	)
}
