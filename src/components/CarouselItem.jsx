import React from "react";
import Accordion from "./Accordion";
import ImageCarousel from "./ImageCarousel";

const formatTools = (tools) => {
    const formattedTools = [];
    tools.forEach((tool, index) => {
        if (index > 0) {
            formattedTools.push(
                <span key={`separator-${index}`}> // </span>
            );
        }
        formattedTools.push(
            <span
                key={`tool-${index}`}
                className=" px-[2px] cursor-default animate-gradient text-transparent bg-clip-text transition-all duration-500 bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start bg-size-200 bg-pos-0 hover:bg-pos-100"
            >
                {tool}
            </span>
        );
    });
    return formattedTools;
};




export const CarouselItem = ({ item }) => {

    const formattedTools = formatTools(item.tools);

    return <div className="inline-flex flex-col justify-center w-[100%] z-[-9999] px-3 ">

        <div className=" desktop:grid desktop:grid-cols-2 ">
            <div className="mb-5 whitespace-normal desktop:col-start-2 desktop:ml-6  mx-auto">
                <div className=" font-light   text-3xl desktop:text-4xl"><h2>{item.title}</h2></div>
                <div className="italic text-base desktop:text-lg">{formattedTools}</div>
            </div>
            <div className=" desktop:col-start-1 desktop:row-start-1 desktop:row-span-2 max-w-[1000px]  ">

                <ImageCarousel item={item} />



                <div className="flex justify-evenly my-6 text-[16px] desktop:mb-0 desktop:mt-12 desktop:text-lg ">

                    <button className=" border px-4 rounded-sm outline outline-[1px] outline-white/50 outline-offset-0 shadow-[0_0_-20px_-20px_rgba(255,255,255,0)] transition-all duration-[600ms] hover:shadow-custom hover:rounded-none hover:outline-offset-[5px] hover:outline-white/0" >
                        <a href={item.liveSiteButton} target="_blank">Live Site</a>
                    </button>
                    <button className=" border px-4 rounded-sm outline outline-[1px] outline-white/50 outline-offset-0 shadow-[0_0_-20px_-20px_rgba(255,255,255,0)] transition-all duration-[600ms] hover:shadow-custom hover:rounded-none hover:outline-offset-[5px] hover:outline-white/0" >

                        {<a href={item.gitHubButton} target="_blank" >Github</a>}</button>

                </div>


            </div>
            <div className=" whitespace-normal mb-4 desktop:row-span-2 desktop:col-start-2 desktop:ml-6 desktop:mb-0 desktop:mt-10 mx-auto">
                <div className=""><p className="font-light text-base desktop:text-xl">{item.description}</p></div>
            </div>

        </div>
        <div className="  mx-auto  pb-10 ">
            <div className="  max-w-[450px] desktop:max-w-[800px] 
    bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start pt-[1px] px-[1px]     transition-all duration-500        ">
                <div className="text-xl desktop:text-3xl bg-background   pl-2 pr-4 mt-[-1px] mx-[-1px] mb-[1px]">
                    <Accordion title="Details" content={item.details} />
                </div>
            </div>
            <div className=" max-w-[450px] desktop:max-w-[800px] 
    bg-gradient-to-r from-gradient-2-start via-gradient-1-end to-gradient-2-end p-[1px]  ">
                <div className="text-xl desktop:text-3xl bg-background pl-2 pr-4  px-1 mx-[-1px]">
                    <Accordion title="Highlights" content={item.highlights} />
                </div>
            </div>

        </div>

    </div >
}