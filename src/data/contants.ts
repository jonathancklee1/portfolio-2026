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
import pokemonBinder from "../assets/images/pokemon-binder.png";
import restaurantRecommender from "../assets/images/restaurant-recommender.png";
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
import nextjsIcon from "../assets/icons/nextjs.svg";
import shopifyIcon from "../assets/icons/shopify.svg";
import styledComponentsIcon from "../assets/icons/styled-components.svg";
import daisyuiIcon from "../assets/icons/daisyui.svg";
import gsapIcon from "../assets/icons/gsap.svg";
import figmaIcon from "../assets/icons/figma.svg";
import reactRouterIcon from "../assets/icons/react-router.svg";
import playwrightIcon from "../assets/icons/playwright.svg";
import claudeIcon from "../assets/icons/claude.svg";

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
        name: "MyWatchList",
        description:
            "A media tracking and discovery web application that allows users to explore trending movies, TV shows, and anime. Built using React and Typescript, the platform queries data from TheMovieDatabase (TMDB) and MyAnimeList (MAL), while featuring a user-friendly dashboard to seamlessly organize and manage your watchlists.",
        image: watchList,
        ghLink: "https://github.com/jonathancklee1/watch-list",
        liveLink: "https://my-media-watch-list.netlify.app/",
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
        name: "Pokemon Binder",
        description:
            "A web app that replicates having a digital binder for your pokemon cards. Built using Next.js, Typescript, Tailwind CSS with DaisyUI and Zustand. Features include viewing sets and card from the TCGdex API, CRUD actions with cards in binders and customisation options like colour and size for your binders.",
        image: pokemonBinder,
        ghLink: "https://github.com/jonathancklee1/pokemon-binder",
        liveLink: "https://pokemon-binder-sigma.vercel.app/",
    },
    {
        name: "Restaurant Recommender",
        description:
            "A restaurant database app with a 'pick where to eat' feature to help make a randomised choice on a restaurant to eat at. Built using React, Typescript, CSS modules Leaflet with OpenStreetMap tiles, and Nominatim for address search, the website supports standard CRUD operations on restaurant data, filtering, restaurant randomiser and a map feature to locate the restaurant.",
        image: restaurantRecommender,
        ghLink: "https://github.com/jonathancklee1/restaurant-recommender",
        liveLink: "https://restaurant-recommender-app-beryl.vercel.app/",
    },
];

export const TECH_STACK: TECHNOLOGY_CATEGORY[] = [
    {
        items: [
            { name: "React", icon: reactjsIcon },
            { name: "TypeScript", icon: typescriptIcon },
            { name: "Next.js", icon: nextjsIcon },
            { name: "Vue", icon: vueIcon },
            { name: "HTML5", icon: html5Icon },
            { name: "CSS3", icon: css3Icon },
            { name: "JavaScript (ES6+)", icon: javascriptIcon },
            { name: "Shopify Liquid", icon: shopifyIcon },
        ],
        category: "Languages and Frameworks",
    },
    {
        items: [
            { name: "Tailwind CSS", icon: tailwindIcon },
            { name: "Material UI", icon: materialuiIcon },
            { name: "Styled Components", icon: styledComponentsIcon },
            { name: "DaisyUI", icon: daisyuiIcon },
            { name: "GSAP", icon: gsapIcon },
            { name: "Storybook", icon: storybookIcon },
            { name: "Figma", icon: figmaIcon },
        ],
        category: "Styling & UI Systems",
    },
    {
        items: [
            { name: "GraphQL", icon: graphqlIcon },
            { name: "React Router", icon: reactRouterIcon },
            { name: "Zustand", icon: zustandIcon },
            { name: "Playwright", icon: playwrightIcon },
            { name: "Optimizely CMS", icon: optimizelyIcon },
            { name: "Claude Code", icon: claudeIcon },
            { name: "Pinia", icon: piniaIcon },
            { name: "React Query", icon: reactQueryIcon },
            { name: "Github", icon: githubIcon },
        ],
        category: "Tools and Libraries",
    },
];
