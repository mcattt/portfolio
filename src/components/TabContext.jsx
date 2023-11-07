import React, { createContext, useContext, useState, useEffect } from 'react';

const TabContext = createContext();

export const useTabContext = () => {
    return useContext(TabContext);
};

export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');
    const [activeTabHistory, setActiveTabHistory] = useState({});

    const updateActiveTab = (newTab) => {
        setActiveTab(newTab);
        setActiveTabHistory((prevHistory) => ({
            ...prevHistory,
            [newTab]: true,
        }));
        console.log('active tabs:', activeTabHistory);
    };



    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');
            const scrollTop = window.scrollY;
            const offset = 1000; // Adjust this value as needed

            if (
                scrollTop >= homeSection.offsetTop - offset &&
                scrollTop < projectsSection.offsetTop - offset
            ) {
                console.log('Setting activeTab to "home"');
                setActiveTab('home');
                updateActiveTab('home');
            } else if (
                scrollTop >= projectsSection.offsetTop - offset &&
                scrollTop < aboutSection.offsetTop - offset
            ) {
                console.log('Setting activeTab to "projects"');
                setActiveTab('projects');
                updateActiveTab('projects');
            } else if (
                scrollTop >= aboutSection.offsetTop - offset &&
                scrollTop < contactSection.offsetTop - offset
            ) {
                console.log('Setting activeTab to "about"');
                setActiveTab('about');
                updateActiveTab('about');
            } else if (scrollTop >= contactSection.offsetTop - offset) {
                console.log('Setting activeTab to "contact"');
                setActiveTab('contact');
                updateActiveTab('contact');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <TabContext.Provider value={{ activeTab, activeTabHistory, updateActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};
