import { scroller } from 'react-scroll';

const Footer = () => {



    const scrollToSection = (sectionId) => {
        scroller.scrollTo(sectionId, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: 0,
        });
    };


    return (
        <footer className="  w-full fixed desktop:static bottom-0">
            <nav className="desktop:hidden">
                <ul className="flex justify-around py-3 bg-background">
                    <li onClick={() => scrollToSection('home')}>home</li>
                    <li onClick={() => scrollToSection('projects')}>projects</li>
                    <li onClick={() => scrollToSection('about')}>about</li>
                    <li onClick={() => scrollToSection('contact')}>contact</li>
                </ul>
            </nav >
        </footer >
    );
};

export default Footer;
