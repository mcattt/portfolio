import { scroller } from 'react-scroll';

const Footer = () => {



    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -60,
        });
    };


    return (
        <footer className="  w-full fixed desktop:static bottom-0">
            <nav className="desktop:hidden">
                <ul className="flex justify-evenly py-3 text-lg bg-background">
                    <li onClick={() => scrollToSection('home')} className=' cursor-pointer'>home </li>
                    <li onClick={() => scrollToSection('projects')} className=' cursor-pointer'>projects</li>
                    <li onClick={() => scrollToSection('about')} className=' cursor-pointer'>about</li>
                    <li onClick={() => scrollToSection('contact')} className=' cursor-pointer'>contact</li>
                </ul>
            </nav >
        </footer >
    );
};

export default Footer;
