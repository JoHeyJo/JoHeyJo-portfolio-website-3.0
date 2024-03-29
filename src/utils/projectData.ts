import buglyImg from '../../public/images/buglyImg.png';
import sharebbImg from '../../public/images/sharebbImg.png';
import mySiteImg from '../../public/images/mySite.png';
import { Project } from './types';


export const bugly: Project = {
  name: "Bugly",
  image: buglyImg,
  cardHeader: "Blog Application",
  cardSummary: "React app, catalogs projects and corresponding bugs. Retro minimalist design aesthetic with modern dynamic functionality. Currently active, tracking progress on live projects",
  tech: ["React", "TypeScript", "Python", "Flask", "SQLAlchemy", "Bootstrap"],
  allTech: "React | TS | Python | Flask | SQLAlchemy | Bootstrap",
  description: "Browse projects and their corresponding bugs.",
  heading: "Blog application",
  specs: [
    "Catalogs and organizes projects and all its corresponding posts (aka bugs).",
    "Admin actions are protected in the client-side & additional server-side validation with JSON Web Tokens.",
    "Relational database built with Flask, SQLAlchemy, and SQL."
  ],
  links: {
    github: "https://github.com/JoHeyJo/bugly",
    demo: "https://bugly-olive.vercel.app/"
  }
}

export const shareBB: Project = {
  name: "Share BnB",
  image: sharebbImg,
  cardHeader: "React Router Application",
  cardSummary: "Showcases a wide range of features implemented by React's functional component system providing an engaging user experience. Integrated with AWS(S3) enabling user photo uploads.",
  tech: ["React", "JavaScript", "Python", "Flask ", "SQLAlchemy"],
  allTech: "React | JavaScript | Python | Flask | SQLAlchemy",
  description: "Create user, browse or add listings!",
  heading: "AirBnB clone",
  specs: [
    "Features user signup, authorization, and authentication.",
    "User actions and routes are protected with JSON Web Tokens & encrypted passwords.",
    "Relational database built with Flask and SQLAlchemy."
  ],
  links: {
    github: "https://github.com/JoHeyJo/shareBB",
    demo: "https://sharebb-fe.vercel.app/"
  }
}

export const portfolioSite: Project = {
  name: "Share BnB",
  image: mySiteImg,
  cardHeader: "Portfolio Website",
  cardSummary: "Server-side Rendering Single-page Application featuring a fully responsive design and a collection of diverse projects",
  tech: ["React", "TypeScript", "Next.js", "Bootstrap"],
  allTech: "React | TypeScript | Next.js | Bootstrap",
  description: "Displays collection of diverse projects",
  heading: "Portfolio website",
  specs: [
    "Fully responsive with a polished minimalist design that focuses on functionality.",
    "Integrated with Emailjs. Allows email submissions directly from website.",
    "Interactive and dynamic content.",
  ],
  links: {
    github: "https://github.com/JoHeyJo/website-2.0",
    demo: "https://www.joannesfigueroa.com/"
  }
}
