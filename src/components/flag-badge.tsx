import { RedesignFlag } from "@/types";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface FlagConfig {
  label: string;
  description: string;
  className: string;
}

const FLAG_MAP: Record<RedesignFlag, FlagConfig> = {
  unmaintained: {
    label: "Unmaintained",
    description: "This resource is no longer receiving updates or bug fixes. Use with caution.",
    className: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 hover:bg-yellow-500/20",
  },
  "gpl-compliant": {
    label: "GPLv3 Fork",
    description: "Shared under GPLv3 requirements. This version exists to ensure the code remains open-source as per the original license.",
    className: "bg-blue-500/10 text-blue-500 border-blue-500/20 hover:bg-blue-500/20",
  },
  unsupported: {
    label: "No Support",
    description: "The author of this redesign (and the original resource author) will not provide technical assistance for this version.",
    className: "bg-red-500/10 text-red-400 border-red-500/20 hover:bg-red-500/20",
  },
};

export function FlagBadge({ flag }: { flag: RedesignFlag }) {
  const data = FLAG_MAP[flag];

  if (!data) return null;

  return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Badge
					variant="outline"
					className={`cursor-help capitalize font-medium shadow-sm ${data.className}`}
				>
					{data.label}
				</Badge>
			</TooltipTrigger>
			<TooltipContent 
				side="top" 
				className="max-w-[280px] p-3"
			>
				<div>
					<div className="flex flex-row items-center gap-2 pb-2 border-b border-border">
						<Info className="size-3.5 shrink-0" color="black" />
						<p className="text-sm tracking-wider font-bold">
							Resource Status
						</p>
					</div>
					<p className="text-md leading-relaxed">
						{data.description}
					</p>
				</div>
			</TooltipContent>
		</Tooltip>
  );
}
