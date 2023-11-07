import React from 'react';
import { useTabContext } from './TabContext';
import Carousel from './Carousel';
const Projects = () => {
    const { activeTab, activeTabHistory } = useTabContext();

    // Check if the "projects" tab is in the activeTabHistory
    const hasBeenActive = activeTabHistory['projects'];

    console.log('activeTab:', activeTab);
    console.log('hasBeenActive:', hasBeenActive);

    return (
        <div
            id="projects"
            className={`min-h-screen h-auto mx-2`}
        >
            <h2 className={` mb-4 text-5xl transition-all  duration-1000 font-extradica ${hasBeenActive ? 'opacity-100 translate-y-0' : 'translate-y-4 opacity-0'}`}>Projects</h2>
            <div className={`transition-all mx-2 duration-1000 ${hasBeenActive ? 'opacity-100 translate-y-0 delay-200' : 'translate-y-4 opacity-0'}`}>
                <Carousel />
            </div>
        </div>
    );
};

export default Projects;
