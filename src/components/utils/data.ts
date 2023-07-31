import type { Project, Skill, SkillColorMap } from "./types";

export const projects: Project[] = [
    {
        title: "Food Ordering App",
        technologies: ["Node", "Express", "MongoDB", "EJS"],
        additionalTechnologies: ["Stripe", "NodeMailer", "Multer", "Pdfkit"],
        description: "Node.js-based web application that attempts to simplify company order administration. It offers a dependable and scalable system for handling client orders, inventory, and sales data."
    },
    {
        title: "Slides | Next",
        technologies: ["TypeScript", "Prisma", "SQLServer", "Azure", "Tailwind", "React"],
        description: "A versatile app designed for seamless song presentations. It allows users to effortlessly present songs with ready-made slides and customize presentations for a curated list of songs, enhancing the worship experience."
    },
    {
        title: "Recipe App",
        technologies: ["React Native", "Redux"],
        description: "Discover a diverse collection of recipes from various global cuisines, offering a delightful exploration of flavors and cooking traditions."
    },
    {
        title: "e-KYC Verifier (EVS)",
        technologies: ["OpenCV", "DeepFace", "Flask", "Nextjs", "Azure", "Docker", "Face Recognition"],
        description: "Unlock the power of secure and efficient identity verification. This enables seamless face recognition and authentication processes. Streamline your digital onboarding and identity verification workflows with cutting-edge technology."
    },
    {
        title: "Blogger",
        technologies: ["Node", "TypeScript", "Micro Service", "Docker"],
        description: "Create, manage, and share your blog posts seamlessly with a microservice-based blogger app, offering enhanced scalability and independent functionality for an exceptional blogging experience."
    }
];



export const skills: Skill[] = [
    {
        title: "Frontend",
        skills: ["React", "Nextjs", "Redux", "Tailwind", "Chakra UI", "Material UI", "Bootstrap", "HTML", "CSS", "JavaScript", "TypeScript"]
    },
    {
        title: "Backend",
        skills: ["Node", "Express", "Prisma", "SQLServer", "MongoDB", "PostgreSQL", "Docker", "Azure", "Firebase", "REST API", "GraphQL"]
    },
    {
        title: "Mobile",
        skills: ["React Native", "Expo", "Redux", "Firebase", "Expo", "Android", "iOS"]
    },
    {
        title: "Others",
        skills: ["Git", "GitHub", "GitLab", "Jira", "Confluence", "Bitbucket", "Jest", "Cypress", "Testing Library", "CI/CD", "Docker", "Kubernetes", "Azure", "AWS", "Google Cloud"]
    }
];

export const socials = [
    {
        title: "GitHub",
        url: "https://github.com/EmmanuelAllanMJ"
    },
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/emmanuel-allan/"
    },

];


export const skillColorMap: SkillColorMap = {
    React: "61DAFB",
    Nextjs: "#000000",
    Redux: "#764ABC",
    Tailwind: "#38B2AC",
    "Chakra UI": "#319795",
    "Material UI": "#0081CB",
    Bootstrap: "#7952B3",
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    TypeScript: "#007ACC",
    Node: "#339933",
    Express: "#000000",
    Prisma: "#1B222D",
    SQLServer: "#CC2927",
    MongoDB: "#47A248",
    PostgreSQL: "#336791",
    Docker: "#2496ED",
    Azure: "#0089D6",
    Firebase: "#FFCA28",
    "REST API": "#FF7F50",
    GraphQL: "#E10098",
    "React Native": "#61DAFB",
    Expo: "#000020",
    Android: "#3DDC84",
    iOS: "#000000",
    Git: "#F05032",
    GitHub: "#181717",
    GitLab: "#FCA121",
    Jira: "#0052CC",
    Confluence: "#172B4D",
    Bitbucket: "#0052CC",
    Jest: "#C21325",
    Cypress: "#17202C",
    "Testing Library": "#E33332",
    "CI/CD": "#000000",
    Kubernetes: "#326CE5",
    AWS: "#232F3E",
    "Google Cloud": "#4285F4"
};

export const techStackIcons = {
    React: "SiReact",
    Nextjs: "TbBrandNextjs",
    Redux: "SiRedux",
    Tailwind: "SiTailwindcss",
    "Chakra UI": "SiChakraui",
    "Material UI": "SiMaterialdesign",
    Bootstrap: "SiBootstrap",
    HTML: "SiHtml5",
    CSS: "SiCss3",
    JavaScript: "SiJavascript",
    TypeScript: "SiTypescript",
    Node: "DiNodejs",
    Express: "SiExpress",
    Prisma: "SiPrisma",
    SQLServer: "SiMicrosoftsqlserver",
    MongoDB: "SiMongodb",
    PostgreSQL: "SiPostgresql",
    Docker: "SiDocker",
    Azure: "SiMicrosoftazure",
    Firebase: "SiFirebase",
    Kubernetes: "SiKubernetes",
    Expo: "SiExpo",
    ReactNative: "TbBrandReactNative",
    Unity: "SiUnity",
    CSharp: "SiCsharp",
    Java: "DiJava",
    Python: "SiPython",
    MySQL: "SiMysql",
    C: "SiC",
    CPlusPlus: "SiCplusplus",
    Go: "SiGo",
    R: "SiR",
    Bash: "SiGnubash",
    Shell: "TbBrandPowershell",
    Git : "SiGit",
    GitHub : "SiGithub",
    ChromeExtension: "DiChrome",
    Django: "SiDjango",
    Figma : "SiFigma",
    Premierepro: "SiAdobepremierepro",

}
import { SiReact, SiRedux, SiTailwindcss, SiChakraui, SiMaterialdesign, SiBootstrap, SiHtml5, SiCss3, SiJavascript, SiTypescript, SiExpress, SiPrisma, SiMicrosoftsqlserver, SiMongodb, SiPostgresql, SiDocker, SiMicrosoftazure, SiFirebase, SiKubernetes, SiExpo, SiUnity, SiCsharp, SiPython, SiMysql, SiC, SiCplusplus, SiGo, SiR, SiGnubash, SiGit, SiGithub, SiDjango, SiFigma, SiAdobepremierepro} from 'react-icons/si';
import { TbBrandNextjs, TbBrandReactNative, TbBrandPowershell } from 'react-icons/tb';
import { DiNodejs, DiJava, DiChrome } from 'react-icons/di';

export function getIconComponent(iconName) {
    switch (iconName) {
        case 'SiReact':
            return SiReact;
        case 'TbBrandNextjs':
            return TbBrandNextjs;
        case 'SiRedux':
            return SiRedux;
        case 'SiTailwindcss':
            return SiTailwindcss;
        case 'SiChakraui':
            return SiChakraui;
        case 'SiMaterialdesign':
            return SiMaterialdesign;
        case 'SiBootstrap':
            return SiBootstrap;
        case 'SiHtml5':
            return SiHtml5;
        case 'SiCss3':
            return SiCss3;
        case 'SiJavascript':
            return SiJavascript;
        case 'SiTypescript':
            return SiTypescript;
        case 'DiNodejs':
            return DiNodejs;
        case 'SiExpress':
            return SiExpress;
        case 'SiPrisma':
            return SiPrisma;
        case 'SiMicrosoftsqlserver':
            return SiMicrosoftsqlserver;
        case 'SiMongodb':
            return SiMongodb;
        case 'SiPostgresql':
            return SiPostgresql;
        case 'SiDocker':
            return SiDocker;
        case 'SiMicrosoftazure':
            return SiMicrosoftazure;
        case 'SiFirebase':
            return SiFirebase;
        case 'SiKubernetes':
            return SiKubernetes;
        case 'SiExpo':
            return SiExpo;
        case 'TbBrandReactNative':
            return TbBrandReactNative;
        case 'SiUnity':
            return SiUnity;
        case 'SiCsharp':
            return SiCsharp;
        case 'DiJava':
            return DiJava;
        case 'SiPython':
            return SiPython;
        case 'SiMysql':
            return SiMysql;
        case 'SiC':
            return SiC;
        case 'SiCplusplus':
            return SiCplusplus;
        case 'SiGo':
            return SiGo;
        case 'SiR':
            return SiR;
        case 'SiGnubash':
            return SiGnubash;
        case 'TbBrandPowershell':
            return TbBrandPowershell;
        case 'SiGit':
            return SiGit;
        case 'SiGithub':
            return SiGithub;
        case 'DiChrome':
            return DiChrome;
        case 'SiDjango':
            return SiDjango;
        case 'SiFigma':
            return SiFigma;
        case 'SiAdobepremierepro':
            return SiAdobepremierepro;
        default:
            return null;
    }
}