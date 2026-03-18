//code that checks if the user is on a mobile device
export const isMobile = () => {
    if (typeof window === "undefined") return false;
    return window.innerWidth <= 1024;
};
