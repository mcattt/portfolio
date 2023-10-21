import React from 'react';
import downArrow from "../assets/images/arrow-down.png";
import { scroller } from 'react-scroll';
import { useMediaQuery } from "@react-hook/media-query";
const HomePage = () => {



    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 0, // Adjust the offset as needed to ensure the section is properly in view
        });
    };
    const isDesktop = useMediaQuery("(max-width: 900px)");




    // https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition

    return (
        <div id="home">
            <div className='flex flex-col mt-28 '>
                <h1
                    className=" text-[3.4rem]  leading-tight ml-2
                    cursor-default font-extradica animate-gradient
                    
                    text-transparent bg-clip-text  transition-all duration-500 bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start bg-size-200 bg-pos-0 hover:bg-pos-100"
                >

                    Cat {isDesktop ? <br /> : <></>} Cordner
                </h1>
                <h2
                    className="
                    text-[1rem] text-center italic
                    cursor-default font-extradica 
                    text-transparent bg-clip-text  transition-all duration-500 bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                    Front-End Web
                    Developer
                </h2>

                <div className='flex items-center flex-col  mt-20'>
                    <p className='mb-6 text-xs' >check out my work</p>
                    <img id="arrow-ani" onClick={() => scrollToSection('projects')} src={downArrow} alt="black arrow pointing down" className=' w-4 animate-bounce' />
                </div>
            </div>
        </div >
    );
}

export default HomePage;