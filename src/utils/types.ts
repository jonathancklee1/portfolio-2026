export type Experience = {
    title: string;
    company: Company;
    duration: string;
    description: string[];
    image: string;
};

type Company = "Stockland" | "UNSW";

export type Song = {
    track: string;
    artist: string;
    coverImage: string;
};

export type Project = {
    name: string;
    description: string;
    image: string;
    ghLink?: string;
    liveLink?: string;
};

export interface TechRow {
    title: string;
    technologies: TECHNOLOGY[];
    pillColour: string;
}
export type CATEGORY =
    | "Languages"
    | "Frameworks"
    | "State & Data"
    | "UI & Styling"
    | "Other";

export type TECHNOLOGY = {
    name: string;
    icon: string;
};
export type TECHNOLOGY_CATEGORY = {
    items: TECHNOLOGY[];
    category: CATEGORY;
};
