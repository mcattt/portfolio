import React from "react";
import Accordion from "./Accordion";
import ModalImage from "react-modal-image";


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

    return <div className="inline-flex flex-col justify-center w-[100%] z-[-9999] px-3">

        <div className=" lg:grid lg:grid-cols-2">
            <div className="mb-5 whitespace-normal">
                <div className=" text-base"><h2>{item.title}</h2></div>
                <div className="italic text-[8px]">{formattedTools}</div>
            </div>
            <div>

                <img src={item.img} alt="" className=" mx-auto" />


                <div className="flex justify-evenly my-4 text-[8px]">

                    <button className="border px-1" >
                        <a href={item.liveSiteButton}>Live Site</a>
                    </button>
                    <button className="border px-1" >{<a href={item.gitHubButton}>Github Repo</a>}</button>

                </div>


            </div>
            <div className=" whitespace-normal mb-4">
                <div className=" text-center "><p className="">{item.description}</p></div>
            </div>

        </div>
        <div className=" mx-auto  lg:w-2/5 pb-6">
            <div className=" 
    bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start pt-[1px] px-[1px] w-36    transition-all duration-500        ">
                <div className="text-sm bg-background  px-1 mt-[-1px] mx-[-1px] mb-[1px]">
                    <Accordion title="Highlights" content={item.highlights} />
                </div>
            </div>
            <div className=" 
    bg-gradient-to-r from-gradient-2-start via-gradient-1-end to-gradient-2-end p-[1px] w-36 ">
                <div className="text-sm bg-background px-1 mx-[-1px] pt-[1px]">
                    <Accordion title="What I learned" content={item.learned} />
                </div>
            </div>

        </div>

    </div >
}