import React from 'react';
import downArrow from "../assets/images/arrow-down.png";
import { scroller } from 'react-scroll';
import { useMediaQuery } from "@react-hook/media-query";
const HomePage = ({ }) => {



    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 0, // Adjust the offset as needed to ensure the section is properly in view
        });
    };

    // https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition

    return (
        <div id="home" className='min-h-screen h-auto flex justify-center items-center mx-4'>
            <div className='flex flex-col  '>
                <h1
                    className=" text-[6rem]  breakpoint-660:text-[7rem] breakpoint-1200:text-[9rem] leading-tight 
                    cursor-default font-extradica desktop:animate-gradient flex items-start
                    animate-text

                    text-transparent bg-clip-text  transition-all duration-500 bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start bg-size-200 desktop:bg-pos-0 desktop:hover:bg-pos-100"
                >

                    Cat Cordner
                </h1>
                <h2
                    className="
                    text-[1.8rem] breakpoint-660:text-[2.4rem] breakpoint-1200:text-[3rem] text-center italic
                    cursor-default font-extradica animate-text desktop:animate-gradient
                    text-transparent bg-clip-text  transition-all duration-500 text-white bg-size-200 bg-pos-0 desktop:hover:bg-pos-100"
                >
                    Front-End Web
                    Developer
                </h2>

                <div className='flex items-center flex-col mt-14 '>
                    <p className='mb-16 text-2xl breakpoint-1200:text-3xl breakpoint-1200:font-light  ' >see my projects</p>
                    <img id="arrow-ani" onClick={() => scrollToSection('projects')} src={downArrow} alt="black arrow pointing down" className='cursor-pointer w-10 animate-bounce ' />
                </div>
            </div>
        </div >
    );
}

export default HomePage;