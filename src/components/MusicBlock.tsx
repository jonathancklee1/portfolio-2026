import { SONGS } from "../data/contants";
import Vinyl from "../assets/icons/vinyl.svg?react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

import "@splidejs/react-splide/css";
export default function MusicBlock() {
    return (
        <div className="music-block glassmorphism flex w-full max-w-150 items-center gap-2 rounded-2xl p-4 lg:px-6">
            <div className="flex w-25 min-w-0 flex-1 flex-col gap-2">
                <div className="flex items-center gap-2">
                    <div
                        className="shrink-0 animate-spin p-2"
                        style={{ animationDuration: "3s" }}
                    >
                        <Vinyl height={"2.1875rem"} width={"2.1875rem"} />
                    </div>
                    <p className="text-md w-fit font-bold lg:text-lg">
                        Top 3 songs I listen to when coding
                    </p>
                </div>

                <div className="flex flex-nowrap gap-4 overflow-hidden">
                    <Splide
                        extensions={{ AutoScroll }} // Add the extension here
                        options={{
                            type: "loop",
                            autoWidth: true, // Better for variable sized cards
                            gap: "1rem",
                            arrows: false,
                            pagination: false,
                            autoScroll: {
                                speed: 0.25,
                                pauseOnHover: true,
                            },
                        }}
                    >
                        {SONGS.map((song) => (
                            <SplideSlide key={song.track}>
                                <div className="glassmorphism flex w-[240px] items-center gap-2 p-3">
                                    <img
                                        className="aspect-square size-16 shrink-0 rounded-xl"
                                        src={song.coverImage}
                                        alt={song.track}
                                    />
                                    <div className="min-w-0">
                                        <p className="text-md truncate font-bold">
                                            {song.track}
                                        </p>
                                        <p className="truncate text-sm opacity-70">
                                            {song.artist}
                                        </p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </div>
    );
}
