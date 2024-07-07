//Skill Logos
import html from "../../assets/images/html-1.svg";
import css from "../../assets/images/css-3.svg";
import javascript from "../../assets/images/javascript-1.svg";
import react from "../../assets/images/react-2.svg";
import tailwind from "../../assets/images/tailwindcss.svg";
import bootstrap from "../../assets/images/bootstrap-5-1.svg";
import azure from "../../assets/images/azure-1.svg";
import jira from "../../assets/images/jira-1.svg";
import github from "../../assets/images/github-icon-2.svg";
import nodejs from "../../assets/images/nodejs-icon.svg";
import vscode from "../../assets/images/visual-studio-code-1.svg";
import figma from "../../assets/images/figma-5.svg";

//Project logos
import tenethealth from "../../assets/images/Tenet_Health_logo.png";
import consumersenergy from "../../assets/images/Consumers_Energy_logo.svg.png";

export const aboutCardList = [
  {
    subheading: "What I do?",
    svg: "fa-solid fa-rocket mr-2",
    desc: `UI/UX Magic: - I specialize in turning ideas into visually stunning, user-friendly interfaces. |
        Tech Savvy: - Proficient in HTML, CSS, TailwindCSS, bootstrap, JavaScript, React and cutting-edge frameworks for dynamic web solutions. |
        Problem-Solving Pro: - I thrive on challenges, finding elegant solutions to ensure smooth user experiences.`,
  },
  {
    subheading: "Why Collaborate?",
    svg: "fa-solid fa-ranking-star mr-2",
    desc: `User-Centric Approach: - Prioritizing user needs, I design and develop with a focus on delivering value and satisfaction.|
    Adaptability: - In a fast-paced tech landscape, I stay ahead of the curve, integrating the latest technologies to keep your projects relevant.|
    Reliable Partner: - Whether it's a solo project or a collaborative effort, I'm committed to delivering excellence.`,
  },
  {
    subheading: "Let's create together",
    svg: "fa-solid fa-globe mr-2",
    desc: ` :Ready to turn your digital dreams into reality? Let's collaborate
            and build something extraordinary. |
             Connect with Me and let the coding adventure begin!`,
  },
];

export const skillsImageList = [
  { path: html, name: "HTML5" },
  { path: css, name: "CSS" },
  { path: javascript, name: "JavaScript" },
  { path: react, name: "React JS" },
  { path: tailwind, name: "TailwindCSS" },
  { path: bootstrap, name: "Bootstrap" },
  { path: azure, name: "Azure" },
  { path: jira, name: "Jira" },
  { path: github, name: "Github" },
  { path: nodejs, name: "Node Js" },
  { path: vscode, name: "VS Code" },
  { path: figma, name: "Figma" },
];

export const projectsList = [
  {
    path: tenethealth,
    title: "Front-end Developer",
    subHeading: "As part of the ADS team on Tenethealth project, I",
    rolesNdResposibilities: `Participated in Project Planning and Requirement Analysis. |
            Developed responsive and ADA Compliant web pages using HTML,CSS, TailwindCSS, Vuejs and JavaScript. |
            Ensured cross-browser compatibility and fixed issues as they arise. |
            Conducted thorough testing of the web application. |
            Reviewed and Documented code`,
  },
  {
    path: consumersenergy,
    title: "UI Developer",
    subHeading: " As UI developer on the Consumers Energy project, I",
    rolesNdResposibilities: `Implemented User Interface Design. |
            Created reusable UI components HTML, CSS, React and JavaScript.|
            Implemented and tested accessibility features such as ARIA roles. |
            Conducted usability testing.`,
  },
];
