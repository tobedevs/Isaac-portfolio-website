import React from "react";
import { FaPalette, FaReact, FaCode } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Isaac Adigwe",
  title: "Front-End Developer",
  social: {
    github: "https://github.com/tobedevs",
    twitter: "https://x.com/buildwithisaac",
    email: "tobeadigwe3000@gmail.com",
  },
  about: {
    title: "My Background",
    description:
      "Hi, I'm Tobechukwu — a self-taught frontend developer passionate about creating clean, responsive, and user-friendly web experiences with HTML, CSS, JavaScript, Tailwind CSS, and React.I kicked off my coding journey last year, starting from the fundamentals of HTML, CSS, and JavaScript on my own. When I connected with my coach, things accelerated fast — I leveled up in modern JavaScript, mastered Tailwind for rapid styling, and dove deep into React to build dynamic, component-based apps.I'm currently studying at Nnamdi Azikiwe University in Awka, Anambra, but I spend holidays back home with my family in Lagos. Balancing school and code keeps me sharp and adaptable.When I'm not debugging or building, you'll find me immersed in video games — it's where I recharge and sometimes even draw inspiration for interactive UI ideas.I've completed several projects, ranging from static sites to interactive React apps, and I'm excited to keep shipping more. Open to entry-level opportunities, freelance gigs, collaborations, or remote work — especially anything involving modern frontend stacks.Let's connect and build something cool! ",
  },
  skills: [
    {
      skillName: "Frontend",
      skillIcon: <FaCode className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Design/UX",
      skillIcon: <FaPalette className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "ReactJS",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
  ],
  projects: [
    {
      title: "My portfolio website",
      description: "👨‍🎨 My portfolio built with React and Tailwind.",
      tags: [
        "website",
        "portfolio",
        "reactjs",
        "tailwindcss"
      ],
      link: "https://github.com/tobedevs/my-portfolio-website"
    },
    {
      title: "Fade Master",
      description: "Fade Master is a responsive barbershop website showcasing grooming services with a clean, modern user interface.",
      tags: [
        "HTML",
        "CSS",
        "Responsive Design",
        "Small Business Website",
      ],
      link: "https://github.com/tobedevs/Fade-Master"
    },
    {
      title: "Spendwise - Budget Tracker",
      description: "A simple, responsive personal finance app built from scratch. Users can log income, create spending plans, track remaining budget, and switch between light/dark themes. Data persists locally using browser storage — no backend required.",
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "localStorage"
      ],
      link: "https://github.com/tobedevs/Spendwise"
    }
  ]
};
export default data;
