import { StaticImageData } from "next/image"

export type Project = {
  name: string;
  image: StaticImageData;
  tech: string;
  cardHeader: string;
  cardSummary: string;
  description: string;
  heading: string;
  specs: string[];
  links: {
    github: string,
    demo: string,
  }
}
