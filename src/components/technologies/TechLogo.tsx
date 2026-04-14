function TechLogo({ svgPath }: { svgPath: string }) {
    return (
        <div className="h-full w-full">
            <img
                src={svgPath}
                alt="Technology logo"
                className="h-full w-full"
            />
        </div>
    );
}

export default TechLogo;
