import email from "../assets/images/email-icon.png";
import github from "../assets/images/github-icon.png";
import linkedin from "../assets/images/linkedin-icon.png";

const Header = () => {


    return (
        <div>
            <header className=" w-full fixed  top-0  z-[9999] ">
                <nav>
                    <ul className="py-1 desktop:py-2 px-1 float-right bg-opacity-50 rounded-bl-xl bg-background w-36 desktop:bg-transparent flex gap-3 mr-2" role="menubar">
                        <li role="menuitem">
                            <a href="mailto:cat.cordner@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Compose email to cat.cordner@gmail.com" tabindex="0">
                                <div className="bg-black rounded-full">
                                    <img src={email} alt="email icon" />
                                </div>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="https://github.com/mcattt" target="_blank" rel="noopener noreferrer" aria-label="Open a new tab to my Github" tabindex="0">
                                <div className="bg-black rounded-full">
                                    <img src={github} alt="github icon" />
                                </div>
                            </a>
                        </li>
                        <li role="menuitem">
                            <a href="https://www.linkedin.com/in/catcordner/" target="_blank" rel="noopener noreferrer" aria-label="Open a new tab to my LinkedIn" tabindex="0">
                                <div className="bg-black rounded-full">
                                    <img src={linkedin} alt="linkedin icon" />
                                </div>
                            </a>
                        </li>
                    </ul>

                </nav>
            </header>
        </div>
    );
};

export default Header;
