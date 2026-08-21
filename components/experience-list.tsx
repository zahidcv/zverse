import { EXPERIENCE } from "@/data/experience"

export function ExperienceList() {
  return (
    <div className="flex flex-col gap-10">
      {EXPERIENCE.map((entry) => (
        <article key={entry.title + entry.date} className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium text-foreground">{entry.title}</h3>
            <span className="text-sm whitespace-nowrap text-muted-foreground">
              {entry.date}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="text-primary">{entry.organization}</span>
            <span>{entry.location}</span>
          </div>
          {entry.description && (
            <p className="mt-1 text-sm text-muted-foreground text-justify">{entry.description}</p>
          )}
        </article>
      ))}
    </div>
  )
}
