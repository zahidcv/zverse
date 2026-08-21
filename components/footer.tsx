import { SOCIAL_ICONS } from "@/components/social-icons"
import { SOCIAL_LINKS } from "@/data/social-links"
import { NAME } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-primary/[0.125]">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-8 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {NAME}
        </p>

        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map(({ href, icon, label }) => {
            const Icon = SOCIAL_ICONS[icon]

            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                title={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
