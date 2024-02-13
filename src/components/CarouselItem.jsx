import React from "react";
import { useMediaQuery } from "@react-hook/media-query";



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

const renderLiveSiteButton = (item) => {
    if (item.liveSiteButton === "coming soon") {
        return (
            <p className="border focus:border-gradient-1-end  focus:border-4 px-4 py-1 rounded-sm group leading-none cursor-not-allowed" disabled>
                Live Site <br /><span className="text-xs ">(coming soon)</span>
            </p>
        );
    } else {
        return (
            <button
                onClick={() => window.open(item.liveSiteButton, "_blank", "noopener noreferrer")}
                className="border focus:border-gradient-1-end focus:border-4 px-4 rounded-sm outline outline-[1px] outline-white/50 outline-offset-0 shadow-[0_0_-20px_-20px_rgba(255,255,255,0)] transition-all duration-[600ms] hover:shadow-custom hover:rounded-none hover:outline-offset-[5px] hover:outline-white/0"
                aria-label={`Visit live site for ${item.title}`}
                role="link"
            >
                Live Site
            </button>
        );
    }
};

const renderGitHubButton = (item) => {
    if (item.gitHubButton === "coming soon") {
        return (
            <p className="border focus:border-gradient-1-end focus:border-4 px-4 py-1 rounded-sm group leading-none cursor-not-allowed" disabled>
                GitHub <br /><span className="text-xs ">(coming soon)</span>
            </p>
        );
    } else {
        return (
            <button
                onClick={() => window.open(item.gitHubButton, "_blank", "noopener noreferrer")}
                className="border px-4 focus:border-gradient-1-end focus:border-4 rounded-sm outline outline-[1px] outline-white/50 outline-offset-0 shadow-[0_0_-20px_-20px_rgba(255,255,255,0)] transition-all duration-[600ms] hover:shadow-custom hover:rounded-none hover:outline-offset-[5px] hover:outline-white/0"
                aria-label={`Visit github for ${item.title}`}
                role="link">
                GitHub
            </button>

        );
    }
};




export const CarouselItem = ({ item }) => {
    // const isDesktop = useMediaQuery("(min-width:900px)");

    const formattedTools = formatTools(item.tools);

    return <section className="inline-flex flex-col justify-center w-[100%] z-[-9999] px-3 ">

        <section className=" desktop:grid desktop:grid-cols-2 ">
            <div className="mb-1 whitespace-normal desktop:col-start-2 desktop:ml-6  mx-auto">
                <h2 className=" font-light   text-2xl desktop:text-4xl">{item.title}</h2>

            </div>
            <div className=" desktop:col-start-1 desktop:row-start-1 desktop:row-span-2 max-w-[1000px] shadow-[0_0_6px_6px_rgba(255,255,255,0.05)] ">
                <img src={item.img} />

            </div>
            <div className=" whitespace-normal my-4  mx-auto">
                <p className="font-light text-base desktop:text-xl breakpoint-1200:text-2xl">{item.description}</p>
                <div className="flex justify-evenly mx-10 mt-2 italic text-base desktop:text-lg  text-center ">{formattedTools}</div>
            </div>
            <div className="flex justify-evenly my-6 text-[16px] desktop:mb-0 desktop:mt-12 desktop:text-lg ">

                {renderLiveSiteButton(item)}
                {renderGitHubButton(item)}
            </div>
        </section>


    </section >
}