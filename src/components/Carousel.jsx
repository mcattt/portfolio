import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import imgDataBase01 from "../assets/images/database-1.png";
import imgDataBase02 from "../assets/images/database-2.png";
import imgGame01 from "../assets/images/game-1.png";

const items = [
    {
        description: "01",
        img: imgDataBase01,

    },
    {
        description: "02",
        img: imgDataBase02,

    },
    {
        description: "03",
        img: imgGame01,

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
        <div className="w-[700px] flex flex-col justify-center overflow-hidden">
            <div className=" whitespace-nowrap transition shadow animate-custom-translate" >
                {items.map((item, index) => {
                    return <CarouselItem key={index} item={item} />;
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