import Image from "next/image"

import headshot from "@/assets/headshot-1.png"
import { SocialLinks } from "@/components/social-links"
import { EducationList } from "@/components/education-list"
import { ExperienceList } from "@/components/experience-list"

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-14 py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-16 flex items-center gap-4">
          <span className="text-sm font-medium tracking-[0.25em] text-primary uppercase">
            {title}
          </span>
          <div className="h-px flex-1 bg-primary/[0.125]" />
        </div>
        <div className="text-muted-foreground">{children}</div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="top"
        className="scroll-mt-14 mx-auto grid max-w-5xl items-center gap-10 px-4 py-24 md:grid-cols-[1.2fr_1fr] md:py-32"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-light tracking-tight sm:text-5xl">
            Md Zahidul Islam
          </h1>
          <p className="text-lg text-primary uppercase">Software Engineer</p>
          <p className="max-w-xl text-muted-foreground text-justify">
            I’m Zahid, a Software Engineer currently developing software in the telecom industry, with a passion for building reliable, scalable, and meaningful digital solutions.
            I enjoy exploring modern technologies, solving complex problems, and continuously improving my craft, while developing a growing interest in Data Science and its applications to real-world problems.
          </p>

          <SocialLinks />
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="relative aspect-square w-full max-w-xs">
            <div className="absolute -inset-6 -z-10 rounded-full bg-primary/10 blur-2xl" />
            <div className="relative size-full overflow-hidden rounded-full bg-muted ring-4 ring-primary/15 ring-offset-4 ring-offset-background">
              <Image
                src={headshot}
                alt="Md Zahidul Islam"
                fill
                priority
                sizes="(min-width: 768px) 320px, 60vw"
                className="object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </section>

      <Section id="education" title="Education">
        <EducationList />
      </Section>

      <Section id="experience" title="Work Experience">
        <ExperienceList />
      </Section>

      <Section id="projects" title="Projects">
        Add your projects here.
      </Section>

      <Section id="research" title="Research">
        Add your research here.
      </Section>
    </main>
  )
}
