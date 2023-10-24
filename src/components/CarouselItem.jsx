import React from "react";

export const CarouselItem = ({ item }) => {
    return <div className="inline-flex items-center justify-center h-[490px] bg-white">
        <div className="w-[250px] mx-[20px]">
            <img src={item.img} alt="" />
        </div>
        <div className="  text-[1.15rem] mx-[40px] py-[20px] whitespace-normal "><p>{item.description}</p></div>
    </div>
}