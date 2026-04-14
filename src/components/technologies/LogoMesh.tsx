function TechLogo({ svgPath }: { svgPath: string }) {
    return (
        <>
            <style>{`
                @keyframes rotateY {
                    from { transform: rotateY(0deg); }
                    to { transform: rotateY(360deg); }
                }
                .rotate-y:hover {
                    animation: rotateY 10s linear infinite;
                }
            `}</style>
            <img
                src={svgPath}
                alt="Technology logo"
                className="rotate-y h-full w-full"
            />
        </>
    );
}

export default TechLogo;
