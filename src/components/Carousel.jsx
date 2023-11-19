import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

import imgDataBase01 from "../assets/images/database-1.png";
import imgDataBase02 from "../assets/images/database-2.png";
import imgGame01 from "../assets/images/game-1.png";
import imgGame02 from "../assets/images/game-2.png";
import imgcrustAndCrumb from "../assets/images/crust-and-crumb-placeholder.png";
const items = [
    {
        title: "Movie Database",
        tools: ["react", "tailwind", "vite"],
        description: "MovieClip is a website created by myself and two classmates. It's a dynamic movie database built using React and the TMDB API, focusing on user-friendly features and responsive design.",
        img: [imgDataBase01, imgDataBase02],
        liveSiteButton: "https://catcordner.ca/movieclip/",
        gitHubButton: "https://github.com/mcattt/Movie-DB",
        details: (
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
        highlights: (
            <div className="ml-4 ">
                <ul className="list-disc">
                    <li className="mb-2">Learning Tailwind (we wanted to take the extra initiative since it wasn't taught in the program)</li>
                    <li className="mb-2">Creating the live site to be a 1:1 of the mockup felt super rewarding and reinforced my passion of Web Development! </li>
                </ul>
            </div>
        ),

    },
    {
        title: "Crust & Crumb - WIP",
        tools: ["wordpress", "woocommerce", "sass"],
        description: "An E-Commerce website for local bakery Crust & Crumb done with a team of four, made using WordPress with WooCommerce integration.",
        img: [imgcrustAndCrumb],
        liveSiteButton: "coming soon",
        gitHubButton: "coming soon",
        details: (
            <div className="mt-1">
                <div>
                    <strong>Advanced Custom Fields (ACF) Integration:</strong>
                    <p className="ml-2 mb-2">
                        Used ACF for flexible content management, enabling easy addition and dynamic control of product details, enhancing the user interface.
                    </p>
                </div>
                <div>
                    <strong>E-Commerce Integration:</strong>
                    <p className="ml-2 mb-2">
                        Integrated WooCommerce seamlessly for a secure and user-friendly online ordering experience, configuring product pages, cart functionality, and checkout processes.
                    </p>
                </div>
                <div>
                    <strong>Collaborative GitHub Workflow:</strong>
                    <p className="ml-2 mb-2">
                        Implemented GitHub within our team, using version control for efficient code management, issue tracking, and seamless team collaboration.
                    </p>
                </div>
                <div>
                    <strong>More to come..</strong>
                </div>
            </div>
        ),
        highlights: (
            <div className="ml-4 ">
                <ul className="list-disc">
                    <li className="mb-2">
                        During this process and my team and I made sure to finish everything way before the deadlines we gave ourselves. Finishing early showed we're committed to quality work and meeting deadlines, and taught me that careful planning makes a big difference in the development process.
                    </li>
                    <li className="mb-2">
                        This project gave me a much better understanding of Wordpress and how to best integrate WooCommerce for a seamless and professional website.
                    </li>
                    <li className="mb-2">
                        More to come..
                    </li>
                </ul>
            </div>
        ),

    },
    {
        title: "The Pokemon Name Game",
        tools: ["javascript", " css3", "html5"],
        description: "A simple Pokemon name guessing game, where you pick the generation and try to guess which Pokemon it could be.",
        img: [imgGame01, imgGame02],
        liveSiteButton: "https://catcordner.ca/game/",
        gitHubButton: "https://github.com/mcattt/guess-that-pokemon-name",
        details: (
            <div className="mt-1">
                <div>
                    <strong>Generation Selection and Difficulty:</strong>
                    <p className="ml-2 mb-2">Enables players to choose which generation of Pokemon to guess from, randomly picking one based off the difficulty which determines the length of the name you need to guess.
                    </p>
                </div>
                <div>
                    <strong>Dynamic Points Calculation:</strong>
                    <p className="ml-2 mb-2">
                        Points gained/lost change based on difficulty level chosen and using hints will randomly show one letter, but will not award any points.
                    </p>
                </div>

            </div>
        ),
        highlights: (
            <div className="ml-4 ">
                <ul className="list-disc">
                    <li className="mb-2">Although it's not completely polished, it was super cool making a functional game and having everything work as expected (since this was my first big project made with JavaScript)</li>
                    <li className="mb-2">Problem-solving the bugs helped me gain a better understanding of JavaScript as well as think of every possible edge case for future projects.</li>
                </ul>
            </div>
        ),

    },
]

const isActive = (num, activeIndex) => {
    if (num === activeIndex) {
        return <span className="text-white">{num + 1}</span>;
    } else {
        return <span className="text-black">{num + 1}</span>;
    }
};

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        const touchEnd = e.touches[0].clientX;
        const touchDiff = touchEnd - touchStart;

        if (touchDiff > 50) {
            // Swipe right
            updateIndex(activeIndex - 1);
            setTouchStart(touchEnd); // Update touchStart to prevent continuous updates
        } else if (touchDiff < -50) {
            // Swipe left
            updateIndex(activeIndex + 1);
            setTouchStart(touchEnd); // Update touchStart to prevent continuous updates
        }
    };

    const updateIndex = (newIndex) => {
        const lastIndex = items.length - 1;

        if (newIndex < 0) {
            newIndex = lastIndex;
        } else if (newIndex > lastIndex) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    return (
        <div
            className="flex flex-col justify-center overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div className="mb-4 desktop:mb-16 flex">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`breakpoint-560:mb-0 flex w-2 h-2 text-[8px] transition-width justify-center items-center rounded-full border-none cursor-pointer m-[2px] bg-none ${index === activeIndex
                            ? "bg-gradient-1-start w-[80px] h-[25px]"
                            : "bg-gray-400 w-[25px] h-[25px]"
                            }`}
                    >
                        {isActive(index, activeIndex)}
                    </button>
                ))}
            </div>
            <div
                className="whitespace-nowrap transition transform duration-500 mt-3"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {items.map((item, index) => (
                    <CarouselItem key={index} item={item} />
                ))}
            </div>
            <div className="mb-16 flex justify-center">
                {items.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`breakpoint-560:mb-0 flex w-2 h-2 text-[8px]  self-center rounded-full border-none cursor-pointer m-[2px] bg-none ${index === activeIndex
                            ? "bg-gradient-1-start w-[18px] h-[18px]"
                            : "bg-gray-400 w-[15px] h-[15px]"
                            }`}
                    >

                    </button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;