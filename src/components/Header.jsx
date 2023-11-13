import email from "../assets/images/email-icon.png";
import github from "../assets/images/github-icon.png";
import linkedin from "../assets/images/linkedin-icon.png";

const Header = () => {


    return (
        <div>
            <header className=" w-full fixed  top-0  z-[9999] ">
                <nav>
                    <ul className=" py-1 px-1 float-right bg-opacity-50 rounded-bl-xl bg-background  w-36  desktop:bg-transparent  flex gap-3  mr-2">
                        <a href="mailto: mcordner@my.bcit.ca">
                            <li className="bg-black rounded-full">
                                <img src={email} alt="email icon" />
                            </li>
                        </a>
                        <a href="https://github.com/mcattt">
                            <li className="bg-black rounded-full">
                                <img src={github} alt="github icon" />

                            </li>
                        </a>
                        <a href="https://www.linkedin.com/in/catcordner/">
                            <li className="bg-black rounded-full">
                                <img src={linkedin} alt="linkedin icon" />

                            </li>
                        </a>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
