export interface Project {
    title: string;
    technologies: string[];
    additionalTechnologies?: string[];
    description: string;
    links: {
        github?: string;
        website?: string;
    };
}

export interface Skill {
    title: string;
    skills: string[];
}

export interface SkillColorMap {
    [skill: string]: string;
}

export interface Socials {
    title: string;
    url: string;
}
