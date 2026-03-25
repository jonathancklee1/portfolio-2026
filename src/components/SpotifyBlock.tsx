import Vinyl from "../assets/icons/vinyl.svg?react";

function SpotifyBlock() {
    return (
        <>
            <div
                className="animate-spin p-2"
                style={{ animationDuration: "3s" }}
            >
                <Vinyl height={"2.1875rem"} width={"2.1875rem"} />
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-lg font-bold lg:text-xl">
                    Last tunes listened to
                </p>
                <div className="flex items-center gap-6">
                    <div className="size-16 shrink-0 bg-amber-500"></div>
                    <div className="w-full">
                        <p className="font-bold">midnight love</p>
                        <p>girl in red</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SpotifyBlock;
