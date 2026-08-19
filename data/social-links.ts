export type SocialLink = {
  href: string
  icon: "mail" | "scholar" | "twitter" | "github" | "linkedin"
  label: string
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "mailto:zahidulislam.cs@gmail.com",
    icon: "mail",
    label: "zahidulislam.cs@gmail.com",
  },
  {
    href: "https://scholar.google.com/citations?user=MjHrEBQAAAAJ&hl=en",
    icon: "scholar",
    label: "Google Scholar",
  },
  {
    href: "https://twitter.com/zahidcv",
    icon: "twitter",
    label: "@zahidcv",
  },
  {
    href: "https://github.com/zahidcv",
    icon: "github",
    label: "github.com/zahidcv",
  },
  {
    href: "https://www.linkedin.com/in/zahidcv",
    icon: "linkedin",
    label: "linkedin.com/in/zahidcv",
  },
]
