import React, { createContext, useContext, useState, useEffect } from 'react';

const TabContext = createContext();

export const useTabContext = () => {
    return useContext(TabContext);
};

export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState(() => {
        const storedTab = sessionStorage.getItem('activeTab');
        return storedTab || 'home';
    });

    const [activeTabHistory, setActiveTabHistory] = useState(() => {
        const storedHistory = sessionStorage.getItem('activeTabHistory');
        return storedHistory ? JSON.parse(storedHistory) : {};
    });

    const initializeHasBeenActive = (tab) => {
        return activeTabHistory[tab] || false;
    };

    const updateActiveTab = (newTab) => {
        setActiveTab((prevTab) => {
            setActiveTabHistory((prevHistory) => ({
                ...prevHistory,
                [prevTab]: true,
                [newTab]: true,
            }));
            return newTab;
        });
    };

    const [contactOffset, setContactOffset] = useState(600);

    // Initialize hasBeenActive based on activeTabHistory
    const hasBeenActive = initializeHasBeenActive(activeTab);

    const handleScroll = () => {
        const homeSection = document.getElementById('home');
        const aboutSection = document.getElementById('about');
        const projectsSection = document.getElementById('projects');
        const contactSection = document.getElementById('contact');
        const scrollTop = window.scrollY;
        const offset = 600;
        if (document.documentElement.clientHeight >= 1032) {
            setContactOffset(1000);
        } else {
            setContactOffset(600);
        }

        if (
            scrollTop >= homeSection.offsetTop - offset &&
            scrollTop < projectsSection.offsetTop - offset
        ) {
            updateActiveTab('home');
        } else if (
            scrollTop >= projectsSection.offsetTop - offset &&
            scrollTop < aboutSection.offsetTop - offset
        ) {
            updateActiveTab('projects');
        } else if (
            scrollTop >= aboutSection.offsetTop - offset &&
            scrollTop < contactSection.offsetTop - contactOffset
        ) {
            updateActiveTab('about');
        } else if (scrollTop >= contactSection.offsetTop - contactOffset) {
            updateActiveTab('contact');
        }
    };

    useEffect(() => {
        const handleScrollAndStorage = () => {
            handleScroll();
            sessionStorage.setItem('activeTab', activeTab);
            sessionStorage.setItem('activeTabHistory', JSON.stringify(activeTabHistory));
        };

        window.addEventListener('scroll', handleScrollAndStorage);
        handleScrollAndStorage();

        return () => {
            window.removeEventListener('scroll', handleScrollAndStorage);
        };
    }, [activeTab, activeTabHistory]);

    return (
        <TabContext.Provider value={{ activeTab, activeTabHistory, updateActiveTab, hasBeenActive }}>
            {children}
        </TabContext.Provider>
    );
};
