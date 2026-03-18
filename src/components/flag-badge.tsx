import { RedesignFlag } from "@/types";
import { Badge } from "./ui/badge";

export function FlagBadge({ flag }: { flag: RedesignFlag}) {
	switch (flag) {
    case 'unmaintained':
      return (
				<Badge
					variant="outline"
					className="capitalize font-medium shadow-sm bg-yellow-500/10 text-yellow-600 border-yellow-500/20 hover:bg-yellow-500/20"
				>
					Unmaintained
				</Badge>
			);
    case 'gpl-compliant':
      return (
				<Badge
					variant="outline"
					className="capitalize font-medium shadow-sm bg-blue-500/10 text-blue-600 border-blue-500/20 hover:bg-blue-500/20"
				>
					GPLv3 Fork
				</Badge>
			);
    case 'unsupported':
      return (
				<Badge
					variant="outline"
					className="capitalize font-medium shadow-sm bg-red-500/10 text-red-600 border-red-500/20 hover:bg-red-500/20"
				>
					No Support
				</Badge>
			);
    default:
      return null;
  }
}
