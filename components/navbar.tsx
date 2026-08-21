"use client"

import { useEffect, useState } from "react"
import { MenuIcon } from "lucide-react"

import headshot from "@/assets/headshot-1.webp"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LanguageSelect } from "@/components/language-select"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const SHORT_NAME = "Zahid"

const NAV_ITEMS = [
  { label: "Home", href: "#top" },
  { label: "Education", href: "#education" },
  { label: "Work Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState<string>("")

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.href.slice(1))
    ).filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        }
      },
      // Treats a section as active once it clears the sticky header and
      // before the next section covers more than the bottom 60% of the view.
      { rootMargin: "-56px 0px -60% 0px", threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-semibold">
          <Avatar size="sm">
            <AvatarImage
              src={headshot.src}
              alt={SHORT_NAME}
              className="object-[50%_20%]"
            />
            <AvatarFallback>{SHORT_NAME.charAt(0)}</AvatarFallback>
          </Avatar>
          {SHORT_NAME}
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "true" : undefined}
              className={cn(
                "transition-colors hover:text-foreground",
                activeHref === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSelect />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{SHORT_NAME}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {NAV_ITEMS.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<a href={item.href} />}
                    aria-current={activeHref === item.href ? "true" : undefined}
                    className={cn(
                      "rounded-md px-2 py-2 text-sm font-medium hover:bg-muted",
                      activeHref === item.href
                        ? "bg-accent text-accent-foreground"
                        : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <Separator />
              <div className="px-4 pb-4">
                <LanguageSelect />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
