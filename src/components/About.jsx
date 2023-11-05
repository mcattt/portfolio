import { useTabContext } from './TabContext';
import gitHub from '../assets/images/github-icon.png';
import linkedin from "../assets/images/linkedin-icon.png";
const About = () => {
    const { activeTab, activeTabHistory } = useTabContext();
    const hasBeenActive = activeTabHistory['about'];
    const skills = [
        { name: "React", icon: "devicon-react-original colored" },
        { name: "jQuery", icon: "devicon-jquery-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Sass", icon: "devicon-sass-original colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "WordPress", icon: "devicon-wordpress-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "WooCommerce", icon: "devicon-woocommerce-plain colored" },
    ];

    return (
        <div className='desktop:mx-[35px]'>
            < div id="about" className="pt-[40px]">
                <h2 className={`mb-3 text-5xl transition-all duration-1000 font-extradica ml-1 ${hasBeenActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>About Me</h2>
                <div className={`transition-all duration-1000 ${hasBeenActive ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}>

                    <div className="mt-10 ">
                        <p className="mx-2 text-base font-light ">
                            Hello! I'm Cat, a recent grad from the Front-End Web Development Program at BCIT.
                            As a kid, my dream job was to be a video-game designer (though now I'd rather just play them) so I knew I wanted to do something in tech as a career. Before I went to BCIT, I was in the Computer Science program at Langara where I learned some backend languages like C++ and Java. Having this previous knowledge has really helped me with problem solving and logic for the projects I work on.
                            In my free time, I enjoy gaming (which I like to think has helped my ability to work with a team.)
                        </p>
                    </div>
                    <div>
                        <p className='text-2xl mt-10 mb-4'>Some of my Skills:</p>
                        <div className="grid grid-cols-2 mx-1 gap-y-1 gap-x-1  content-center items-center ">
                            {skills.map((skill) => (
                                <div key={skill.name} className=" cursor-default flex flex-row items-center pl-1 bg-gray-700 bg-opacity-30 rounded-lg gap-2 text-[14px] font-thin hover:translate-y-[-2px]">
                                    <i className={` ${skill.icon} text-xl`} />
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div >
            <div id="contact">
                <p className='text-sm text-center mt-20 mx-2'>I'm eager to dive into the tech industry, collaborate on exciting projects, and continue learning. Whether you want to discuss opportunities or simply share your thoughts on tech and gaming, lets connect!</p>

                <div className='flex flex-row  justify-evenly mt-12 bg-gray-700 mx-10 py-10 rounded-2xl bg-opacity-30'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24">
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: 'rgb(255, 255, 0)', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: 'rgb(255, 0, 0)', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                        <path fill="url(#grad1)" d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                    <img src={gitHub} alt="" className='w-10' />
                    <img src={linkedin} alt="" className='w-10' />

                </div>
            </div>
        </div >
    );
};


export default About;
