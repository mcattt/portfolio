import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import imgDataBase01 from "../assets/images/database-1.png";
import imgDataBase02 from "../assets/images/database-2.png";
import imgGame01 from "../assets/images/game-1.png";

const items = [
    {
        title: "Movie Database",
        tools: "react // tailwind // vite",
        description: "A database created using React and the TMDB API",
        //maybe do carousel for this as well?
        img: imgDataBase01,
        liveSiteButton: "google.ca",
        gitHubButton: "google.ca",
        highlights: "-thing 1 - thing 2",
        learned: "lorem ipsum",

    },
    {
        title: "The Pokemon Name Game",
        tools: "javascript // css // html",
        description: "Pokemon word guessing game",
        //maybe do carousel for this as well?
        img: imgDataBase02,
        liveSiteButton: "https://www.google.ca",
        gitHubButton: "google.ca",
        highlights: "-thing 1 - thing 2",
        learned: "lorem ipsum",

    },
    {
        title: "Coming Soon",
        tools: " ~ // ~ // ",
        description: "",
        //maybe do carousel for this as well?
        img: imgGame01,
        liveSiteButton: "google.ca",
        gitHubButton: "google.ca",
        highlights: "-thing 1 - thing 2",
        learned: "lorem ipsum",

    }
]

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        setActiveIndex(newIndex);
    }
    return (
        <div className="w-[100%] flex flex-col justify-center overflow-hidden">
            <div className=" whitespace-nowrap transition shadow transform duration-300"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} />;
                })}

            </div>
            <div className="flex justify-evenly">
                <button onClick={() =>
                    updateIndex(activeIndex - 1)
                } className="bg-none border-none cursor-pointer mt-[20px]">
                    <span>arrow_left</span>
                </button>
                <div className="flex justify-around items-center mt-[20px]">
                    {items.map((item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    updateIndex(index);
                                }}
                                className={`border-none cursor-pointer m-[5px] bg-none ${index === activeIndex ? 'text-green-200' : 'text-red-200'
                                    }`}
                            >
                                <span>radio_button_checked</span>
                            </button>
                        );
                    })}
                </div>



            </div>
            <button onClick={() =>
                updateIndex(activeIndex + 1)
            } className="bg-none border-none cursor-pointer mt-[20px]">
                <span>arrow_right</span>
            </button>
        </div >

    );
};
export default Carousel;