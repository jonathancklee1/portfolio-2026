import type { Experience, Project, Song } from "../utils/types";

export const EXPERIENCES: Experience[] = [
    {
        title: "Junior Front-end Developer",
        company: "Stockland",
        duration: "Feb 2025 - Present",
        description: [
            "Contributed to developing frontend components for one of Stockland’s Data Science & Insights internal web application.",
            "Developed and maintained an evolving front-end codebase using React, Typescript, Material Ui, Graphql and Storybook.",
        ],
        image: "src/assets/images/stockland-square.jpeg",
    },
    {
        title: "Graduate Website Developer",
        company: "Stockland",
        duration: "Oct 2022 - Feb 2025",
        description: [
            "Contributed to the development of major frontend components for the customer facing website, leading to a 60% increase in website enquiries and 2M new users.",
            "Developed and maintained an evolving front-end codebase using Typescript, VueJs, TailwindCSS, Liquidjs and Storybook.",
        ],
        image: "src/assets/images/stockland-square.jpeg",
    },
    {
        title: "Information Systems Student ",
        company: "UNSW",
        duration: "Jan 2019 - Jun 2022",
        description: [
            "Completed a Bachelor of Information Systems with a Distinction.",
            "Relevant coursework: Software Development, Data Structures & Algorithms, Database Systems, Computer Networks and Security.",
        ],
        image: "src/assets/images/unsw-square.png",
    },
];
export const PAGE_LINKS: string[] = ["about", "projects", "tech", "contact"];

export const SONGS: Song[] = [
    {
        track: "End of Beginning",
        artist: "Djo",
        coverImage: "src/assets/images/end-of-beginning-square.png",
    },
    {
        track: "Snooze",
        artist: "SZA",
        coverImage: "src/assets/images/snooze-square.png",
    },
    {
        track: "Sweater Weather",
        artist: "The Neighbourhood",
        coverImage: "src/assets/images/sweater-weather-square.png",
    },
];

export const PROJECTS: Project[] = [
    {
        name: "Stockland Website",
    },
    {
        name: "Mynance",
    },
    {
        name: "Radial Gradient Generator",
    },
    {
        name: "PocketTrump",
    },
    {
        name: "Watch List",
    },
];
