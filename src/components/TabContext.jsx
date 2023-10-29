import React, { createContext, useContext, useState } from 'react';

const TabContext = createContext();

export const useTabContext = () => {
    return useContext(TabContext);
};

export const TabProvider = ({ children }) => {
    const [activeTab, setActiveTab] = useState('home');

    const updateActiveTab = (newTab) => {
        setActiveTab(newTab);
    };

    return (
        <TabContext.Provider value={{ activeTab, updateActiveTab }}>
            {children}
        </TabContext.Provider>
    );
};
