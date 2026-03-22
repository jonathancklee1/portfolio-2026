export type Experience = {
    title: string;
    company: Company;
    duration: string;
    description: string[];
    image: string;
};

type Company = "Stockland" | "UNSW";
