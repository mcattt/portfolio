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

    const [contactOffset, setContactOffset] = useState(700);

    // Initialize hasBeenActive based on activeTabHistory
    const hasBeenActive = initializeHasBeenActive(activeTab);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const aboutSection = document.getElementById('about');
            const projectsSection = document.getElementById('projects');
            const contactSection = document.getElementById('contact');
            const scrollTop = window.scrollY;
            const offset = 700;
            const calculateContactOffset = () => {
                if (document.documentElement.clientHeight >= 1032) {
                    setContactOffset(1000);
                }
            };

            calculateContactOffset(); // Call the function to set the initial contact offset
            const isInViewport = (element, offset = 0) => {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top >= -offset &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            };

            if (isInViewport(homeSection)) {
                updateActiveTab('home');
            } else if (isInViewport(projectsSection, 700)) {
                updateActiveTab('projects');
            } else if (isInViewport(aboutSection, offset) &&
                scrollTop < contactSection.offsetTop - contactOffset) {
                updateActiveTab('about');
            } else if (scrollTop >= contactSection.offsetTop - contactOffset) {
                updateActiveTab('contact');
            }
        };


        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeTab, contactOffset]);


    useEffect(() => {
        const newActiveTabHistory = JSON.stringify(activeTabHistory);
        if (sessionStorage.getItem('activeTabHistory') !== newActiveTabHistory) {
            sessionStorage.setItem('activeTab', activeTab);
        }
    }, [activeTab, activeTabHistory]);

    return (
        <TabContext.Provider value={{ activeTab, activeTabHistory, updateActiveTab, hasBeenActive }}>
            {children}
        </TabContext.Provider>
    );
};
