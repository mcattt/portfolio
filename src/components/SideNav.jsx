import React, { useState } from 'react';
import { useTabContext } from './TabContext';
import { scroller } from 'react-scroll';

const SideNav = () => {
  const { activeTab, setActiveTab } = useTabContext();

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 1200,
      delay: 50,
      smooth: true,
      offset: 0, // Adjust the offset as needed to ensure the section is properly in view
    });
  };

  return (
    <div className='text-sm cursor-pointer'>
      <nav className='hidden  font-[300] desktop:flex flex-col fixed right-0 top-[50%] text-right mr-2 z-[999999] '>
        <p
          className={`text-white ${activeTab === 'home' ? 'mr-[2px] font-bold' : ''}`}

          onClick={() => scrollToSection('home')}
        >
          00
        </p>
        <p
          className={`text-white ${activeTab === 'projects' ? 'font-bold mr-[2px]' : ''}`}
          onClick={() => scrollToSection('projects')}
        >
          01
        </p>
        <p
          className={`text-white ${activeTab === 'about' ? 'mr-[2px] font-bold' : ''}`}
          onClick={() => scrollToSection('about')}
        >
          02
        </p>
        <p
          className={`text-white ${activeTab === 'contact' ? 'mr-[2px] font-bold' : ''}`}
          onClick={() => scrollToSection('contact')}
        >
          03
        </p>
      </nav>
    </div>
  );
};

export default SideNav;
