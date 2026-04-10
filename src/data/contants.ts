import type {
    Experience,
    Project,
    Song,
    TECHNOLOGY_CATEGORY,
} from "../utils/types";

// Images
import stocklandSquare from "../assets/images/stockland-square.jpeg";
import unswSquare from "../assets/images/unsw-square.png";
import endOfBeginningSquare from "../assets/images/end-of-beginning-square.png";
import snoozeSquare from "../assets/images/snooze-square.png";
import sweatersWeatherSquare from "../assets/images/sweater-weather-square.png";
import stocklandHomepage from "../assets/images/stockland-homepage.png";
import mynance from "../assets/images/mynance.png";
import radialGradientGenerator from "../assets/images/radial-gradient-generator.png";
import pocketTrump from "../assets/images/pocket-trump.png";
import darkModeBlog from "../assets/images/dark-mode-blog.png";
import watchList from "../assets/images/watch-list.png";

// Icons
import html5Icon from "../assets/icons/html5.svg";
import css3Icon from "../assets/icons/css3.svg";
import javascriptIcon from "../assets/icons/javascript.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import reactjsIcon from "../assets/icons/reactjs.svg";
import vueIcon from "../assets/icons/vue.svg";
import zustandIcon from "../assets/icons/zustand.svg";
import piniaIcon from "../assets/icons/pinia.svg";
import graphqlIcon from "../assets/icons/graphql.svg";
import reactQueryIcon from "../assets/icons/react-query.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import materialuiIcon from "../assets/icons/materialui.svg";
import storybookIcon from "../assets/icons/storybook.svg";
import githubIcon from "../assets/icons/github.svg";
import optimizelyIcon from "../assets/icons/optimizely.svg";

export const EXPERIENCES: Experience[] = [
    {
        title: "Junior Front-end Developer",
        company: "Stockland",
        duration: "Feb 2025 - Present",
        description: [
            "Contributed to developing frontend components for one of Stockland’s Data Science & Insights internal web application.",
            "Developed and maintained an evolving front-end codebase using React, Typescript, Material Ui, Graphql and Storybook.",
        ],
        image: stocklandSquare,
    },
    {
        title: "Graduate Website Developer",
        company: "Stockland",
        duration: "Oct 2022 - Feb 2025",
        description: [
            "Contributed to the development of major frontend components for the customer facing website, leading to a 60% increase in website enquiries and 2M new users.",
            "Developed and maintained an evolving front-end codebase using Typescript, VueJs, TailwindCSS, Liquidjs and Storybook.",
        ],
        image: stocklandSquare,
    },
    {
        title: "Information Systems Student ",
        company: "UNSW",
        duration: "Jan 2019 - Jun 2022",
        description: [
            "Completed a Bachelor of Information Systems with a Distinction.",
            "Relevant coursework: Software Development, Data Structures & Algorithms, Database Systems, Computer Networks and Security.",
        ],
        image: unswSquare,
    },
];
export const PAGE_LINKS: string[] = ["about", "projects", "tech", "contact"];

export const SONGS: Song[] = [
    {
        track: "End of Beginning",
        artist: "Djo",
        coverImage: endOfBeginningSquare,
    },
    {
        track: "Snooze",
        artist: "SZA",
        coverImage: snoozeSquare,
    },
    {
        track: "Sweater Weather",
        artist: "The Neighbourhood",
        coverImage: sweatersWeatherSquare,
    },
];

export const PROJECTS: Project[] = [
    {
        name: "Stockland Website",
        description:
            "A customer facing website for Stockland’s residential business, built using Liquidjs, TailwindCSS,Typescript and Vue. Collaborated with a team of developers to build several main frontend components, including the navigation bar, hero sections and article pages",
        image: stocklandHomepage,
        liveLink: "https://www.stockland.com.au",
    },
    {
        name: "Mynance",
        description:
            "A personal finance management web app built using React, Typescript and Material UI. Implemented features such as personal finance visualisation, budget setting and investment tracking with integrated third-party APIs.",
        image: mynance,
        ghLink: "https://github.com/jonathancklee1/mynance",
        liveLink: "https://jonathancklee1.github.io/mynance/",
    },
    {
        name: "Radial Gradient Generator",
        description:
            "A web app that generates radial gradients, built using React, DaisyUi, TailwindCSS and Zustand. Users can customize the gradient by adjusting parameters such as colors, size and position, and can easily copy the generated CSS code for use in their own projects.",
        image: radialGradientGenerator,
        ghLink: "https://github.com/jonathancklee1/radial-gradient-generator",
        liveLink: "https://jonathancklee1.github.io/radial-gradient-generator/",
    },
    {
        name: "PocketTrump",
        description:
            "A web game based on the popular card game Top Trumps with the theme of Pokemon. Built using React, Tailwind, HeadlessUI, GSAP and Zustand. Implemented game logic, animations and state management to simulate a real card game.",
        image: pocketTrump,
        ghLink: "https://github.com/jonathancklee1/pocket-trump",
        liveLink: "https://jonathancklee1.github.io/pocket-trump/",
    },
    {
        name: "Dark Mode Blog",
        description:
            "A small 'dark-mode' blog website built using React, TailwindCSS and GSAP. One of my first projects that I built to learn GSAP animations. Implemented scroll-triggered animations and a dark mode toggle to enhance user experience.",
        image: darkModeBlog,
        ghLink: "https://github.com/jonathancklee1/dark-mode-website",
        liveLink: "https://www.darkmodeinfo.dev/",
    },
    {
        name: "New Watch List",
        description: "Work in progress!",
        image: watchList,
    },
];

export const TECH_STACK: TECHNOLOGY_CATEGORY[] = [
    {
        items: [
            {
                name: "HTML5",
                icon: html5Icon,
            },
            {
                name: "CSS3",
                icon: css3Icon,
            },
            {
                name: "Javascript",
                icon: javascriptIcon,
            },
            {
                name: "Typescript",
                icon: typescriptIcon,
            },
        ],
        category: "Languages",
    },
    {
        items: [
            {
                name: "ReactJS",
                icon: reactjsIcon,
            },
            {
                name: "Vue",
                icon: vueIcon,
            },
        ],
        category: "Frameworks",
    },
    {
        items: [
            {
                name: "Zustand",
                icon: zustandIcon,
            },
            {
                name: "VuePinia",
                icon: piniaIcon,
            },
            {
                name: "Graphql",
                icon: graphqlIcon,
            },
            {
                name: "React Query",
                icon: reactQueryIcon,
            },
        ],
        category: "State & Data",
    },
    {
        items: [
            {
                name: "TailwindCSS",
                icon: tailwindIcon,
            },
            {
                name: "MaterialUI",
                icon: materialuiIcon,
            },
            {
                name: "StoryBook",
                icon: storybookIcon,
            },
        ],
        category: "UI & Styling",
    },
    {
        items: [
            {
                name: "Github",
                icon: githubIcon,
            },
            {
                name: "Optimizely",
                icon: optimizelyIcon,
            },
        ],
        category: "Other",
    },
];
