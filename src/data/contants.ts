import type {
    Experience,
    Project,
    Song,
    TECHNOLOGY_CATEGORY,
} from "../utils/types";

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
        description:
            "A customer facing website for Stockland’s residential business, built using VueJs, TailwindCSS and Liquidjs.",
        image: "https://images.pexels.com/photos/36840852/pexels-photo-36840852.jpeg",
        liveLink: "https://www.stockland.com.au/residential",
    },
    {
        name: "Mynance",
        description:
            "A personal finance management app built using React, Typescript and Material UI.",
        image: "https://images.pexels.com/photos/36840852/pexels-photo-36840852.jpeg",
        ghLink: "https://github.com/connorjamesm/mynance",
        liveLink: "https://mynance.netlify.app/",
    },
    {
        name: "Radial Gradient Generator",
        description:
            "A web app that generates radial gradients, built using React and TailwindCSS.",
        image: "https://images.pexels.com/photos/36840852/pexels-photo-36840852.jpeg",
        ghLink: "https://github.com/connorjamesm/radial-gradient-generator",
    },
    {
        name: "PocketTrump",
        description:
            "A mobile app for managing and tracking political news and updates.",
        image: "https://images.pexels.com/photos/36840852/pexels-photo-36840852.jpeg",
        ghLink: "https://github.com/connorjamesm/pockettrump",
    },
    {
        name: "Watch List",
        description:
            "A web app for tracking and managing movies and TV shows to watch, built using React and TailwindCSS.",
        image: "https://images.pexels.com/photos/36840852/pexels-photo-36840852.jpeg",
        ghLink: "https://github.com/connorjamesm/watch-list",
    },
    {
        name: "Dark Mode Blog",
        description:
            "A blog website with dark mode feature, built using React and TailwindCSS.",
        image: "https://images.pexels.com/photos/36840852/pexels-photo-36840852.jpeg",
        ghLink: "https://github.com/connorjamesm/dark-mode-blog",
    },
];

export const TECH_STACK: TECHNOLOGY_CATEGORY[] = [
    {
        items: [
            {
                name: "HTML5",
                icon: "src/assets/icons/html5.svg",
            },
            {
                name: "CSS3",
                icon: "src/assets/icons/css3.svg",
            },
            {
                name: "Javascript",
                icon: "src/assets/icons/javascript.svg",
            },
            {
                name: "Typescript",
                icon: "src/assets/icons/typescript.svg",
            },
        ],
        category: "Languages",
    },
    {
        items: [
            {
                name: "ReactJS",
                icon: "src/assets/icons/reactjs.svg",
            },
            {
                name: "Vue",
                icon: "src/assets/icons/vue.svg",
            },
        ],
        category: "Frameworks",
    },
    {
        items: [
            {
                name: "Zustand",
                icon: "src/assets/icons/zustand.svg",
            },
            {
                name: "VuePinia",
                icon: "src/assets/icons/pinia.svg",
            },
            {
                name: "Graphql",
                icon: "src/assets/icons/graphql.svg",
            },
            {
                name: "React Query",
                icon: "src/assets/icons/react-query.svg",
            },
        ],
        category: "State & Data",
    },
    {
        items: [
            {
                name: "TailwindCSS",
                icon: "src/assets/icons/tailwind.svg",
            },
            {
                name: "MaterialUI",
                icon: "src/assets/icons/materialui.svg",
            },
            {
                name: "StoryBook",
                icon: "src/assets/icons/storybook.svg",
            },
        ],
        category: "UI & Styling",
    },
    {
        items: [
            {
                name: "Github",
                icon: "src/assets/icons/github.svg",
            },
            {
                name: "Optimizely",
                icon: "src/assets/icons/optimizely.svg",
            },
        ],
        category: "Other",
    },
];
