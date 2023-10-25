import React from "react";
import Accordion from "./Accordion";
export const CarouselItem = ({ item }) => {
    return <div className="inline-flex flex-col justify-center bg-gray-500">
        <div className=" lg:grid lg:grid-cols-2">
            <div >
                <div><h2>{item.title}</h2></div>
                <div>{item.tools}</div>
            </div>
            <div className="">
                <img src={item.img} alt="" className="w-full h-auto" />
                <div className="flex justify-evenly my-4  text-[8px]">
                    <button className="border" >
                        <a href={item.liveSiteButton}>Live Site</a>
                    </button>
                    <button className="border" >{<a href={item.gitHubButton}>Github Repo</a>}</button>
                </div>
            </div>
            <div>


                <div className=" break-normal"><p>{item.description}</p></div>

            </div>
        </div>
        <div className="border-[0.5px] rounded-t-md px-1">
            <Accordion title="Highlights" content={item.highlights} />
        </div>
        <div className="border-[0.5px] rounded-b-md border-t-0 px-1 mb-10">
            <Accordion title="What I learned" content={item.learned} />
        </div>
    </div>
}