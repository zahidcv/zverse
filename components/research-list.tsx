import { ArrowUpRight } from "lucide-react"

import { RESEARCH, SELF_AUTHOR, type ResearchEntry } from "@/data/research"

function ResearchEntryItem({ entry }: { entry: ResearchEntry }) {
  return (
    <article className="flex flex-col gap-1.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-medium text-foreground">
          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 hover:text-primary hover:underline underline-offset-4"
            >
              {entry.title}
              <ArrowUpRight className="size-3.5" />
            </a>
          ) : (
            entry.title
          )}
        </h3>
        {entry.date && (
          <span className="text-sm whitespace-nowrap text-muted-foreground">
            {entry.date}
          </span>
        )}
      </div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="text-primary">
          {entry.authors.map((author, index) => (
            <span key={author + index}>
              {index > 0 && ", "}
              {author === SELF_AUTHOR ? <strong>{author}</strong> : author}
            </span>
          ))}
        </span>
        {entry.venue && <span>{entry.venue}</span>}
      </div>
      {entry.publication && (
        <p className="mt-1 text-sm text-muted-foreground text-justify">{entry.publication}</p>
      )}
    </article>
  )
}

export function ResearchList() {
  return (
    <div className="flex flex-col gap-10">
      {RESEARCH.map((entry) => (
        <ResearchEntryItem key={entry.title} entry={entry} />
      ))}
    </div>
  )
}
