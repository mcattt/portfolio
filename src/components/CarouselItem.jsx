import React from "react";
import Accordion from "./Accordion";
export const CarouselItem = ({ item }) => {
    return <div className="inline-flex items-center  flex-col justify-center h-[490px] w-[100%]  bg-gray-500">
        <div><h2>{item.title}</h2></div>
        <div>{item.tools}</div>
        <div className="w-[250px] mx-[20px]">
            <img src={item.img} alt="" />
        </div>
        <div className="  text-[1.15rem] mx-[40px] py-[20px] whitespace-normal "><p>{item.description}</p></div>
        <div>
            <button>
                <a href={item.liveSiteButton}>Live Site</a>
            </button>
            <button>{<a href={item.gitHubButton}>Github Repo</a>}</button>
        </div>

        <div className="border-[0.5px] rounded-t-md px-1">
            <Accordion title="Highlights" content={item.highlights} />
        </div>
        <div className="border-[0.5px] rounded-b-md border-t-0 px-1 mb-10">
            <Accordion title="What I learned" content={item.learned} />
        </div>
    </div>
}