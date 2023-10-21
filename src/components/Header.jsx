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
            <header className=" w-full fixed desktop:static top-0 pb-10">
                <nav>
                    <ul className="bg-black py-3 flex  justify-end pr-6">
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
