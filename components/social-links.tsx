import { SOCIAL_ICONS } from "@/components/social-icons"
import { SOCIAL_LINKS } from "@/data/social-links"

export function SocialLinks() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {SOCIAL_LINKS.map(({ href, icon, label }) => {
        const Icon = SOCIAL_ICONS[icon]

        return (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            className="inline-flex min-w-0 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Icon className="size-3.5 shrink-0" />
            <span className="truncate">{label}</span>
          </a>
        )
      })}
    </div>
  )
}
