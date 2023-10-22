import { scroller } from 'react-scroll';

const Header = () => {

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
            <header className=" w-full fixed  top-0 ">
                <nav>
                    <ul className="bg-background bg-opacity-80 desktop:bg-transparent py-3 flex  justify-end pr-6 z-999999">
                        <li onClick={() => scrollToSection('contact')}>
                            contact
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
