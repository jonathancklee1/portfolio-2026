function Button({
    text,
    variant,
    link,
    icon,
}: {
    text: string;
    variant: "primary" | "secondary";
    link?: string;
    icon?: React.ReactNode;
}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex cursor-pointer items-center justify-center gap-2 rounded-3xl px-4 py-2 font-bold transition-all duration-300 ${
                variant === "primary"
                    ? "bg-secondary text-background hover:text-secondary border-secondary border hover:bg-transparent"
                    : "border-secondary text-secondary hover:bg-secondary hover:text-background border bg-transparent"
            }`}
        >
            {text}
            {icon && (
                <span
                    className={`[&>svg]:transition-all [&>svg]:duration-300 ${variant === "primary" ? "group-hover:[&>svg]:fill-secondary" : "group-hover:[&>svg]:fill-background"}`}
                >
                    {icon}
                </span>
            )}
        </a>
    );
}

export default Button;
