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

    const [contactOffset, setContactOffset] = useState(600);




    console.log(document.documentElement.clientHeight)

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');
            const scrollTop = window.scrollY;
            //change this based on window size
            const offset = 600;


            console.log(contactOffset)
            if (document.documentElement.clientHeight >= 1032) {
                setContactOffset(1000);
                console.log(activeTab)
            } else {
                setContactOffset(600);
            }


            if (
                scrollTop >= homeSection.offsetTop - offset &&
                scrollTop < projectsSection.offsetTop - offset
            ) {
                setActiveTab('home');
                updateActiveTab('home');
                console.log(activeTab)
            } else if (
                scrollTop >= projectsSection.offsetTop - offset &&
                scrollTop < aboutSection.offsetTop - offset
            ) {
                setActiveTab('projects');
                updateActiveTab('projects');
                console.log(activeTab)
            } else if (
                scrollTop >= aboutSection.offsetTop - offset &&
                scrollTop < contactSection.offsetTop - contactOffset
            ) {
                setActiveTab('about');
                updateActiveTab('about');
                console.log(activeTab)
            } else if (scrollTop >= contactSection.offsetTop - contactOffset) {
                setActiveTab('contact');
                updateActiveTab('contact');
                console.log(activeTab)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeTab, contactOffset]);

    return (
        <TabContext.Provider value={{ activeTab, activeTabHistory, updateActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};
