import { DiscordIcon, GithubIcon } from "./custom-icons"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="border-t bg-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">
              Requirements for Submission
            </h4>
            <ul className="text-sm text-muted-foreground list-disc space-y-2">
              <li className="flex items-start gap-2">
                • Must be fully Open Source
              </li>
              <li className="flex items-start gap-2">
                • Required GitHub repository listing
              </li>
              <li className="flex items-start gap-2">
                • Must comply with o
              </li>
            </ul>
          </div>

          <div className="space-y-4 md:text-right">
            <h4 className="font-medium text-foreground text-sm uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex md:justify-end gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Maximus7474/overextended-redesigns" target="_blank" rel="noreferrer">
                  <GithubIcon className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://discord.gg/kXE9d5Arj4" target="_blank" rel="noreferrer">
                  <DiscordIcon size={32} />
                  <span className="sr-only">Discord</span>
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground italic">
              Designed & Developed by Maximus7474
            </p>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col justify-center items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Maximus7474. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
