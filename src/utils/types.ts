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
};
