import React, { useState, useEffect } from 'react';

const SideNav = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      const scrollTop = window.scrollY;

      if (
        scrollTop >= homeSection.offsetTop &&
        scrollTop < projectsSection.offsetTop
      ) {
        setActiveTab('home');
      } else if (
        scrollTop >= projectsSection.offsetTop &&
        scrollTop < aboutSection.offsetTop
      ) {
        setActiveTab('projects');
      } else if (
        scrollTop >= aboutSection.offsetTop &&
        scrollTop < contactSection.offsetTop
      ) {
        setActiveTab('about');
      } else if (scrollTop >= contactSection.offsetTop) {
        setActiveTab('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
