export type EducationEntry = {
  degree: string
  institution: string
  location: string
  date: string
  description?: string
  homepageUrl?: string
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: "M.Sc. in XYZ (Incoming Student)",
    institution: "Technische Universität Dortmund",
    location: "Dortmund, Germany",
    date: "Winter Semester 2026/27",
    homepageUrl: "https://www.tu-dortmund.de/en/",
  },
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution:
      "Hajee Mohammad Danesh Science and Technology University (HSTU)",
    location: "Dinajpur, Bangladesh",
    date: "Jan 2018 - Dec 2021",
    description: "Result published in 29 November 2023",
    homepageUrl: "https://www.hstu.ac.bd/",
  },
  {
    degree: "Higher Secondary School Certificate (HSC)",
    institution:
      "Trust College",
    location: "Dhaka, Bangladesh",
    date: "Jun 2015 - July 2017",
  },
]
