import React from 'react';
import { useTabContext } from './TabContext';
import Carousel from './Carousel';
const Projects = () => {
    const { activeTab, activeTabHistory } = useTabContext();

    // Check if the "projects" tab is in the activeTabHistory
    const hasBeenActive = activeTabHistory['projects'];


    return (
        <div
            id="projects"
            className={`min-h-screen h-auto mx-6 max-w-[1200px] desktop:mx-auto  desktop:pt-[40px] `}
        >
            <h2 className={`text-5xl desktop:text-6xl transition-all  duration-1000 font-extradica ${hasBeenActive ? 'opacity-100 translate-y-0' : 'translate-y-4 opacity-0'}`}>Projects</h2>
            <div className={`transition-all mt-12 mx-1 duration-1000 ${hasBeenActive ? 'opacity-100 translate-y-0 delay-200' : 'translate-y-4 opacity-0'}`}>
                <Carousel />
            </div>
        </div>
    );
};

export default Projects;
