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
            className={`min-h-screen transition-all duration-1000 ${hasBeenActive ? 'opacity-100' : 'opacity-0'}`}
        >
            <h2 className="ml-1 mb-8 text-2xl font-extradica">Projects</h2>
            <Carousel />
        </div>
    );
};

export default Projects;
