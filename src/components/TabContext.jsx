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

    };



    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');
            const scrollTop = window.scrollY;
            //change this based on window size
            const offset = 600;

            if (
                scrollTop >= homeSection.offsetTop - offset &&
                scrollTop < projectsSection.offsetTop - offset
            ) {
                setActiveTab('home');
                updateActiveTab('home');
            } else if (
                scrollTop >= projectsSection.offsetTop - offset &&
                scrollTop < aboutSection.offsetTop - offset
            ) {
                setActiveTab('projects');
                updateActiveTab('projects');
            } else if (
                scrollTop >= aboutSection.offsetTop - offset &&
                scrollTop < contactSection.offsetTop - offset
            ) {
                setActiveTab('about');
                updateActiveTab('about');
            } else if (scrollTop >= contactSection.offsetTop - offset) {
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
