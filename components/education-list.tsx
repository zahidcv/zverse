"use client"

import { Fragment } from "react"

import { Separator } from "@/components/ui/separator"
import { EDUCATION } from "@/data/education"
import { useLocale } from "@/components/locale-provider"
import { localize } from "@/lib/i18n"

export function EducationList() {
  const { locale } = useLocale()

  return (
    <div className="flex flex-col gap-10">
      {EDUCATION.map((entry, index) => (
        <Fragment key={entry.degree}>
          {index > 0 && <Separator className="w-5" />}
          <article className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-medium text-foreground">{entry.degree}</h3>
              <span className="text-sm whitespace-nowrap text-muted-foreground">
                {entry.date}
              </span>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="text-primary">{entry.institution}</span>
              <span>{entry.location}</span>
            </div>
            {entry.description && (
              <p className="mt-1 text-sm text-muted-foreground text-justify">
                {localize(entry.description, locale)}
              </p>
            )}
          </article>
        </Fragment>
      ))}
    </div>
  )
}
