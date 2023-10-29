import React from 'react';
import { useTabContext } from './TabContext';
const SideNav = () => {
  const { activeTab, setActiveTab } = useTabContext();

  return (
    <div>
      <nav className=' hidden desktop:flex flex-col fixed right-0 top-[50%] text-right mr-2'>
        <a
          className={`text-white ${activeTab === 'home' ? 'mr-[2px] font-bold' : ''}`}
          href="#home"
        >00</a>
        <a
          className={`text-white ${activeTab === 'projects' ? 'font-bold mr-[2px]' : ''}`}
          href="#projects"
        >01</a>
        <a
          className={`text-white ${activeTab === 'about' ? 'mr-[2px] font-bold' : ''}`}
          href="#about"
        >02</a>
        <a
          className={`text-white ${activeTab === 'contact' ? 'mr-[2px] font-bold' : ''}`}
          href="#contact"
        >03</a>
      </nav>
    </div>
  );
};

export default SideNav;





