import { ArrowUpRight } from "lucide-react"

import { PROJECTS } from "@/data/projects"

export function ProjectList() {
  return (
    <div className="flex flex-col gap-10">
      {PROJECTS.map((project) => (
        <article key={project.title} className="flex flex-col gap-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="font-medium text-foreground">{project.title}</h3>
            <span className="text-sm whitespace-nowrap text-muted-foreground">
              {project.date}
            </span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-sm text-muted-foreground">
            <span className="text-primary">{project.technologies.join(", ")}</span>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 hover:text-foreground hover:underline underline-offset-4"
              >
                {project.hrefLabel ?? project.href}
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>
          {project.description && (
            <p className="mt-1 text-sm text-muted-foreground text-justify">{project.description}</p>
          )}
        </article>
      ))}
    </div>
  )
}
