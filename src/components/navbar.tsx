import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./theme-toggle";

const NAV_LINKS: { href: `/${string}`; label: string; }[] = [
	{ href: '/', label: 'Home' },
	{ href: '/resources', label: 'Resources' },
	{ href: '/contribute', label: 'Contribute' },
]

export default function Navbar() {
	return (
		<header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
					<Image src='/oxpug.webp' alt='logo' width="64" height="64" className="h-10 w-10" />
					<span className="font-semibold text-lg">Overextended Redesigns</span>
				</Link>
				<nav className="flex items-center gap-6">
					{NAV_LINKS.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className="text-sm hover:text-primary transition-colors"
						>
							{label}
						</Link>
					))}
					<ModeToggle />
				</nav>
			</div>
		</header>
	)
}
