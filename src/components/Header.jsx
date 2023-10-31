import email from "../assets/images/email-icon.png";
import github from "../assets/images/github-icon.png";
import linkedin from "../assets/images/linkedin-icon.png";

const Header = () => {


    return (
        <div>
            <header className=" w-full fixed  top-0  z-[9999] ">
                <nav>
                    <ul className=" py-1 px-1 float-right bg-opacity-50 rounded-bl-xl bg-background w-16  desktop:bg-transparent  flex gap-2  ">
                        <li>
                            <img src={email} alt="" />

                        </li>
                        <li>
                            <img src={github} alt="" />

                        </li>
                        <li>
                            <img src={linkedin} alt="" />

                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
};

export default Header;
