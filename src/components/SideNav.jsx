import React from 'react';
import { useTabContext } from './TabContext';
import { scroller } from 'react-scroll';

const SideNav = () => {
  const { activeTab, setActiveTab } = useTabContext();

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 1200,
      delay: 50,
      smooth: true,
      offset: -60,
    });
  };

  return (
    <nav className='hidden text-sm cursor-pointer  font-[300] desktop:flex flex-col fixed right-0 top-[50%] text-right mr-3 z-[999999] gap-y-1'>
      <p
        className={`text-white ${activeTab === 'home' ? 'mr-[3px] font-bold' : ''}`}

        onClick={() => scrollToSection('home')}
      >
        00
      </p>
      <p
        className={`text-white ${activeTab === 'projects' ? 'font-bold mr-[3px]' : ''}`}
        onClick={() => scrollToSection('projects')}
      >
        01
      </p>
      <p
        className={`text-white ${activeTab === 'about' ? 'mr-[3px] font-bold' : ''}`}
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
  );
};

export default SideNav;
