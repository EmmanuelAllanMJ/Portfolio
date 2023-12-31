import type { Project, Skill, SkillColorMap, Socials } from "./types";


export const projects: Project[] = [
    {
        title: "Postit",
        technologies: ["React", "Nextjs", "NextAuth", "ShaadCN", "TypeScript", "Prisma", "MySQL", "Redis", "TailwindCSS", "React Query", "React Form Hook"],
        additionalTechnologies: ["Azure", "Azure Cache for Redis", "Azure MySQL", "Azure Blob Storage", "Azure App Service"],
        description: "A platform for sharing and discovering posts. It allows users to create and manage posts, and also allows users to like and comment on posts.",
        links: {
            website: "https://post-it-kappa.vercel.app/",
        }
    },
    {
        title: "Experiment Box",
        technologies: ["Node", "Express", "MongoDB", "React", "Nextjs", "TypeScript", "TailwindCSS", "React Query", "React Form Hook", "JWT"],
        additionalTechnologies: ["Azure CosmosDB", "Azure App Service"],
        description: "A platform for conducting experiments and surveys. It allows users to create and manage experiments and surveys, and also allows users to participate in experiments and surveys.",
        links: {
            website: "https://experiment-box.vercel.app/",
        }
    },
    {
        title: "Market Place",
        technologies: ["Django", "Django Admin", "PostgreSQL"],
        additionalTechnologies: ["Render PostgreSQL", "Azure App Service"],
        description: "A platform for buying and selling products. It allows users to create and manage products, and also allows users to buy and sell products.",
        links: {
            website: "https://puddle.azurewebsites.net/",
            github: "https://github.com/EmmanuelAllanMJ/Marketplace"
        }
    },
    {
        title: "Food Ordering App",
        technologies: ["Node", "Express", "MongoDB", "EJS"],
        additionalTechnologies: ["Stripe", "NodeMailer", "Multer", "Pdfkit"],
        description: "Node.js-based web application that attempts to simplify company order administration. It offers a dependable and scalable system for handling client orders, inventory, and sales data.",
        links: {
            github: "https://github.com/EmmanuelAllanMJ/Order-Node"
        }
    },
    {
        title: "Slides | Next",
        technologies: ["TypeScript", "Prisma", "SQLServer", "Azure", "Tailwind", "React"],
        description: "A versatile app designed for seamless song presentations. It allows users to effortlessly present songs with ready-made slides and customize presentations for a curated list of songs, enhancing the worship experience.",
        links: {
            website: "https://hymn-slides.vercel.app"
        }
    },
    {
        title: "Recipe App",
        technologies: ["React Native", "Redux"],
        description: "Discover a diverse collection of recipes from various global cuisines, offering a delightful exploration of flavors and cooking traditions.",
        links: {
            github: "https://github.com/EmmanuelAllanMJ/MealApp_ReactNative"
        }
    },
    {
        title: "e-KYC Verifier (EVS)",
        technologies: ["OpenCV", "DeepFace", "Flask", "Nextjs", "Azure", "Docker", "Face Recognition"],
        additionalTechnologies: ["Azure Face API", "Azure App Service"],
        description: "Unlock the power of secure and efficient identity verification. This enables seamless face recognition and authentication processes. Streamline your digital onboarding and identity verification workflows with cutting-edge technology.",
        links: {
            github: "https://github.com/EmmanuelAllanMJ/EVS",
            website: "https://agreeable-pond-0dc971810.2.azurestaticapps.net/"
        }
    },
    {
        title: "Blogger",
        technologies: ["Node", "TypeScript", "Micro Service", "Docker", "Kubernetes"],
        description: "Create, manage, and share your blog posts seamlessly with a microservice-based blogger app, offering enhanced scalability and independent functionality for an exceptional blogging experience.",
        links: {
        }
    },
    {
        title: "OmniFood",
        technologies: ["HTML", "CSS", "JavaScript"],
        description: "A responsive website for a fictional food delivery service. It allows users to order food from a variety of restaurants.",
        links: {
            github: "https://github.com/EmmanuelAllanMJ/Omnifood-",
            website: "https://omnifood-allan.netlify.app/"
        }
    },
    {
        title: "Encrypt web page chrome extension",
        technologies: ["JavaScript", "Chrome Extension", "JQuery"],
        description: "Encrypt web page chrome extension is a chrome extension that allows users to encrypt and decrypt web pages.",
        links: {
            github: "https://github.com/lugvitc/visual-encryptor"
        }
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


export const socials: Socials[] = [
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
    React: "React",
    Nextjs: "Nextdotjs",
    Redux: "Redux",
    Tailwind: "Tailwindcss",
    "Chakra UI": "Chakraui",
    "Material UI": "Materialdegn",
    Bootstrap: "Bootstrap",
    HTML: "Html5",
    CSS: "Css3",
    JavaScript: "Javascript",
    TypeScript: "Typescript",
    Node: "Nodedotjs",
    Express: "Express",
    Prisma: "Prisma",
    SQLServer: "Microsoftsqlserver",
    MongoDB: "Mongodb",
    PostgreSQL: "Postgresql",
    Docker: "Docker",
    Azure: "Microsoftazure",
    Firebase: "Firebase",
    Kubernetes: "Kubernetes",
    Expo: "Expo",
    ReactNative: "React",
    Unity: "Unity",
    CSharp: "Csharp",
    Java: "Openjdk",
    Python: "Python",
    MySQL: "Mysql",
    C: "C",
    CPlusPlus: "Cplusplus",
    Go: "Go",
    R: "R",
    Bash: "Gnubash",
    Shell: "Powershell",
    Git: "Git",
    GitHub: "Github",
    ChromeExtenion: "Googlechrome",
    Django: "Django",
    Figma: "Figma",
    Premierepro: "Adobepremierepro",
    Redis: "Redis",
    GraphQL: "Graphql",

}
import {
    Openjdk, Redis, Powershell, Nextdotjs, Googlechrome, Nodedotjs, React, Redux, Tailwindcss, Chakraui, Materialdesign, Bootstrap, Html5, Css3, Javascript, Typescript, Express, Prisma, Microsoftsqlserver, Mongodb, Postgresql, Docker, Microsoftazure, Firebase, Kubernetes, Expo, Unity, Csharp, Python, Mysql, C, Cplusplus, Go, R, Gnubash, Git, Github, Django, Figma, Adobepremierepro, Linkedin, Graphql
} from 'simple-icons-astro';


export function getIconComponent(iconName: string) {
    switch (iconName) {
        case 'React':
            return React;
        case 'Nextdotjs':
            return Nextdotjs;
        case 'Redux':
            return Redux;
        case 'Tailwindcss':
            return Tailwindcss;
        case 'Chakraui':
            return Chakraui;
        case 'Materialdegn':
            return Materialdesign;
        case 'Bootstrap':
            return Bootstrap;
        case 'Html5':
            return Html5;
        case 'Css3':
            return Css3;
        case 'Javascript':
            return Javascript;
        case 'Typescript':
            return Typescript;
        case 'Nodedotjs':
            return Nodedotjs;
        case 'Express':
            return Express;
        case 'Prisma':
            return Prisma;
        case 'Microsoftsqlserver':
            return Microsoftsqlserver;
        case 'Mongodb':
            return Mongodb;
        case 'Postgresql':
            return Postgresql;
        case 'Docker':
            return Docker;
        case 'Microsoftazure':
            return Microsoftazure;
        case 'Firebase':
            return Firebase;
        case 'Kubernetes':
            return Kubernetes;
        case 'Expo':
            return Expo;
        case 'TbBrandReactNative':
            return React;
        case 'Unity':
            return Unity;
        case 'Csharp':
            return Csharp;
        case 'Openjdk':
            return Openjdk;
        case 'Python':
            return Python;
        case 'Mysql':
            return Mysql;
        case 'C':
            return C;
        case 'Cplusplus':
            return Cplusplus;
        case 'Go':
            return Go;
        case 'R':
            return R;
        case 'Gnubash':
            return Gnubash;
        case 'Powershell':
            return Powershell;
        case 'Git':
            return Git;
        case 'Github':
            return Github;
        case 'Googlechrome':
            return Googlechrome;
        case 'Django':
            return Django;
        case 'Figma':
            return Figma;
        case 'Adobepremierepro':
            return Adobepremierepro;
        case 'Linkedin':
            return Linkedin;
        case 'Redis':
            return Redis;
        case 'Graphql':
            return Graphql;
        default:
            return null;
    }
}