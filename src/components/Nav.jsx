import React from 'react';
import { scroller } from 'react-scroll';

const SideNav = () => {




  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: 0,
    });
  };

  return (
    <div>

      <nav className='hidden desktop:block '>
        <ul>
          <li onClick={() => scrollToSection('home')}>00</li>
          <li onClick={() => scrollToSection('projects')}>01</li>
          <li onClick={() => scrollToSection('about')}>02</li>
          <li onClick={() => scrollToSection('contact')}>03</li>

        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
