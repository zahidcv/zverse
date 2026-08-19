export type ExperienceEntry = {
  title: string
  organization: string
  location: string
  date: string
  description?: string
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    title: "Software Engineer",
    organization: "Robi Axiata PLC",
    location: "Tejgaon, Dhaka, Bangladesh",
    date: "Jun 2026 - Present",
    description: "Developing enterprise applications mostly for Robi Axiata PLC with technologies like Laravel, Next.js, Nest.js, Docker, Kubernetes.",
  },
  {
    title: "Assistant Software Engineer",
    organization: "RedDot Digital Limited (Subsidiary of Robi Axiata PLC)",
    location: "Gulshan 1, Dhaka, Bangladesh",
    date: "Dec 2024 - May 2026",
    description: "Developed enterprise applications mostly for Robi Axiata PLC with technologies like Laravel, Next.js, Nest.js, Docker, Kubernetes.",
  },
  {
    title: "Intern Software Engineer",
    organization: "RedDot Digital Limited",
    location: "Gulshan 1, Dhaka, Bangladesh",
    date: "Jul 2024 - Oct 2024",
  },
  {
    title: "Research Assistant",
    organization: "Department of Computer Science, HSTU",
    location: "Dinajpur, Bangladesh",
    date: "Jun 2022 - Apr 2023",
    description: "R&D project titled 'An Efficient Masked Face Recognition System', funded by the Ministry of Science & Technology, Bangladesh. Supervised by Md. Abu Marjan, Assistant Professor, HSTU. Collected primary masked face data and built a CNN-based masked face recognition system.",
  },
]
