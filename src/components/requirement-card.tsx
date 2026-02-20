import { Info, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function RequirementCard({ Icon = Info, title, description }: { Icon?: LucideIcon, title: string; description: string }) {
	return (
		<Card className="bg-secondary/30">
			<CardHeader>
				<CardTitle className="flex justify-start items-center">
					<Icon className="mr-4" />
					<h3 className="text-xl">{title}</h3>
				</CardTitle>
			</CardHeader>
			
			<CardContent>
				<p className="text-sm text-muted-foreground leading-relaxed">
					{description}
				</p>
			</CardContent>
		</Card>
	);
}
