import React from 'react';
import { useTabContext } from './TabContext';
import Carousel from './Carousel';
const Projects = () => {
    const { activeTab, activeTabHistory } = useTabContext();

    const hasBeenActive = activeTabHistory['projects'];


    return (
        <div
            id="projects"
            className={`min-h-screen h-auto px-4 desktop:px-9 max-w-[1500px] desktop:mx-auto   `}
        >
            <h2 className={`text-5xl desktop:text-5xl transition-all  duration-1000 font-extradica ${hasBeenActive ? 'opacity-100 translate-y-0' : 'translate-y-4 opacity-0'}`}>Projects</h2>
            <div className={`py-auto transition-all mt-6  duration-1000 ${hasBeenActive ? 'opacity-100 translate-y-0 delay-200' : 'translate-y-4 opacity-0'}`}>
                <Carousel />
            </div>
        </div>
    );
};

export default Projects;
