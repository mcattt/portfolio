import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

import imgDataBase01 from "../assets/images/database-1.png";
import imgDataBase02 from "../assets/images/database-2.png";
import imgGame01 from "../assets/images/game-1.png";
import imgGame02 from "../assets/images/game-2.png";
const items = [
    {
        title: "Movie Database",
        tools: ["react", "tailwind", "vite"],
        description: "MovieClip is a website created by myself and two classmates. It's a dynamic movie database built using React and the TMDB API, focusing on user-friendly features and responsive design.",
        //maybe do carousel for this as well?
        img: [imgDataBase01, imgDataBase02],
        liveSiteButton: "google.ca",
        gitHubButton: "google.ca",
        highlights: (
            <div className="mt-1">
                <div>
                    <strong>Search and Filter:</strong>
                    <p className="ml-2 mb-2">Users can easily search and filter movies by various criteria. Search wasn't required, but we wanted to add the functionality to make it more interactive.
                    </p>
                </div>
                <div>
                    <strong>Detailed Movie Pages:</strong>
                    <p className="ml-2 mb-2">
                        Clicking on a movie reveals comprehensive details, including cast, crew, plot summary, release date, and user ratings. Trailers are integrated when available.
                    </p>
                </div>
                <div>
                    <strong>Saving Favourite Movies:</strong>
                    <p className="ml-2 mb-2">
                        Favouriting a movie will store the data in Local Storage, making all your favourites available next time you visit the webpage.
                    </p>
                </div>
            </div>
        ),
        learned: (
            <div className="ml-4 ">
                <ul className="list-disc">
                    <li className="mb-2">Learning Tailwind (we wanted to take the extra initiative since it wasn't taught in the program)</li>
                    <li className="mb-2">Having a team with similar workflows and motivations made this a super fun project to do
                    </li>
                    <li className="mb-2">Being able to utilize GitHub and really learn how to use it within a team setting</li>
                    <li className="mb-2">Creating the live site to be a 1:1 of the mockup felt super rewarding and reinforced my passion of Web Development! </li>
                </ul>
            </div>
        ),

    },
    {
        title: "The Pokemon Name Game",
        tools: ["javascript", " css", "html"],
        description: "Pokemon word guessing game",
        //maybe do carousel for this as well?
        img: [imgGame01, imgGame02],
        liveSiteButton: "https://www.google.ca",
        gitHubButton: "google.ca",
        highlights: "-thing 1 - thing 2",
        learned: "lorem ipsum",

    },
    {
        title: "Coming Soon",
        tools: [],
        description: "",
        //maybe do carousel for this as well?
        img: [imgGame01],
        liveSiteButton: "google.ca",
        gitHubButton: "google.ca",
        highlights: "-thing 1 - thing 2",
        learned: "lorem ipsum",

    }
]

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    function isActive(num) {
        if (num === activeIndex) {
            return (
                <span className="  text-white">{num + 1}</span>
            );
        } else {
            return (
                <span className=" text-black">{num + 1}</span>
            );
        }
    }



    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1;
        }
        setActiveIndex(newIndex);
    }
    return (
        <div className=" flex flex-col justify-center overflow-hidden ">
            <div className=" whitespace-nowrap transition  transform duration-500 mt-3"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} />;
                })}

            </div>
            <div className="flex justify-evenly">

                <div className="flex justify-around items-center">
                    {items.map((item, index) => {
                        return (
                            <button
                                onClick={() => {
                                    updateIndex(index);
                                }}
                                className={`mb-36 breakpoint-560:mb-0 flex w-2 h-2 text-[8px] transition-width justify-center items-center rounded-full border-none cursor-pointer m-[2px] bg-none ${index === activeIndex ? 'bg-gradient-1-start w-[80px] h-[25px] ' : 'bg-gray-400 w-[25px] h-[25px]'
                                    }`}
                            >

                                {isActive(index)}</button>
                        );
                    })}
                </div>



            </div>

        </div >

    );
};
export default Carousel;