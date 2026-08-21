export type ProjectEntry = {
  title: string
  technologies: string[]
  date: string
  description?: string
  href?: string
  hrefLabel?: string
}

export const PROJECTS: ProjectEntry[] = [
  {
    title: "Robi Control360",
    technologies: ["Python", "FastAPI", "Next.js", "Postgresql", "Docker", "Kubernetes"],
    date: "1 Jul 2026 – Current",
    description: "Leading the development of a centralized compliance observation platform for monitoring policy violations, unauthorized access, deprecated technologies, and managing asset and issue tracking of thousands of servers and applications of Robi.",
    href: "https://control360.robi.com.bd",
    hrefLabel: "control360.robi.com.bd",
  },
  {
    title: "Robi HR Management Portal",
    technologies: ["Laravel", "Angular"],
    date: "April 2025 - Present",
    description:
      "Implementing employee personal file archiving with versioning integrated with Robi Document Management system.",
    href: "https://partnerportal.robi.com.bd",
    hrefLabel: "hr4u.robi.com.bd",
  },
  {
    title: "Robi Partner Management Portal",
    technologies: ["Laravel", "MySQL"],
    date: "Feb 2025 - Mar 2025",
    description:
      "Developing a partner-proposal management module for VAS, OTT, and Loyalty partners which goes through multiple approval stages, including more than 5 individual core SCM Robi workflows like Sourcing, Procurement, Business Case, and Contract. Also connected to SAP.",
    href: "https://partnerportal.robi.com.bd",
    hrefLabel: "partnerportal.robi.com.bd",
  },
  {
    title: "BAT Edventure",
    technologies: ["Next.js", "Nest.js", "PostgreSQL", "Docker"],
    date: "Dec 2025 - Jan 2026",
    description: "Implemented RBAC, SSO, and Password Policy.",
    href: "https://bat-elearning.reddotdigitalltd.com",
    hrefLabel: "bat-elearning-stage",
  },
  {
    title: "SecureBoard",
    technologies: [
      "Laravel",
      "Alpine.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
    ],
    date: "Aug 2025 - Nov 2025",
    description:
      "A SaaS application to manage company board meetings. Multi-tenant architecture, single application, isolated DB and filesystem.",
    href: "https://secureboard.robi.com.bd",
    hrefLabel: "secureboard.robi.com.bd",
  },
  {
    title: "Robi Workflow Management System",
    technologies: [
      "Laravel",
      "Vue.js",
      "MySQL",
      "Horizon",
      "Echo Server",
      "Redis",
      "Docker",
      "Kubernetes",
      "GitLab CI/CD",
    ],
    date: "Dec 2024 - Jul 2025",
    description:
      "Workflow automation platform for Robi, Bangladesh's 2nd largest telco, built by heavily customizing the ProcessMaker framework with bespoke features to meet complex user requirements and business rules.",
    href: "https://workflow-bpa.robi.com.bd",
    hrefLabel: "workflow-bpa.robi.com.bd",
  },
  {
    title: "Save Researchers",
    technologies: ["JavaScript"],
    date: "2023",
    description:
      "A Chrome extension that modifies the Google Scholar page to save the researcher's profile and export the necessary data as a CSV file.",
    href: "https://github.com/zahidcv/Save-researchers",
    hrefLabel: "GitHub",
  },
]
