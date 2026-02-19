import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

interface Props {
  title?: string;
  message?: string;
  backLink?: string;
}

export function NotFoundDisplay({ 
  title = "Page Not Found", 
  message = "The content you are looking for doesn't exist.",
  backLink = "/"
}: Props) {
  return (
    <div className="flex h-[70vh] flex-col items-center justify-center text-center px-4">
      <div className="size-20 rounded-full bg-muted flex items-center justify-center mb-6">
        <FileQuestion className="size-10 text-muted-foreground" />
      </div>
      
			<h1 className="text-4xl font-bold tracking-tight mb-2">{title}</h1>
      <p className="text-muted-foreground mb-8 max-w-md">{message}</p>
      
			<Button asChild>
        <Link href={backLink}>Return to Gallery</Link>
      </Button>
    </div>
  );
}
