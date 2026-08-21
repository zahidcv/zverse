export type ResearchEntry = {
  authors: string[]
  title: string
  venue?: string
  date?: string
  publication?: string
  href?: string
}

export const SELF_AUTHOR = "MZ Islam"

export const RESEARCH: ResearchEntry[] = [
  {
    authors: ["MA Marjan", "M Hasan", SELF_AUTHOR, "MP Uddin", "MI Afjal"],
    title: "Masked Face Recognition System using Extended VGG-19",
    venue: "IEEE",
    date: "Dec 2022",
    publication:
      "2022 4th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
    href: "https://ieeexplore.ieee.org/document/10114484",
  },
  {
    authors: ["SM Haque", SELF_AUTHOR, "TS Ety", "MA Hamja", "K Fatema", "M Hasan"],
    title:
      "Interpretable Blending Ensemble Learning Models for Cardiovascular Disease Prediction",
    venue: "IEEE",
    date: "Dec 2024",
    publication:
      "2024 International Conference on Recent Progresses in Science, Engineering and Technology (ICRPSET)",
    href: "https://ieeexplore.ieee.org/abstract/document/10955903",
  },
  {
    authors: ["MF Rabbi", "MN Sultan", "M Hasan", SELF_AUTHOR],
    title: "Tribal Dress Identification using Convolutional Neural Network",
    venue: "JIHMSP",
    date: "2022",
    publication: "Journal of Information Hiding and Multimedia Signal Processing",
    href: "https://www.jihmsp.org/2023/vol14/N3/02.JIHMSP-230501.pdf",
  },
  {
    authors: [SELF_AUTHOR, "MS Ferdous", "P Sarker", "P Bhowmik", "MA Marjan", "MP Uddin"],
    title:
      "Speckle Noise Removal from Retinal OCT Images via GAN and Multiple Weighted Loss Functions",
    publication: "Undergrad thesis",
  },
]
