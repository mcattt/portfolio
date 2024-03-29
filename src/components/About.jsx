import { useTabContext } from './TabContext';
import shopify from "../assets/images/shopify.svg";
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
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "WooCommerce", icon: "devicon-woocommerce-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "WordPress", icon: "devicon-wordpress-plain colored" },


    ];

    return (
        <article id="about" className='px-4 desktop:px-6 desktop:max-w-[1200px] desktop:mx-auto pb-16 desktop:pb-44'>
            <div id='about-description'>
                <h2 className={`mb-3 text-5xl transition-all duration-1000 font-extradica  desktop:text-6xl  ${hasBeenActive ? 'translate-y-0 opacity-100' : 'translate-x-4 opacity-0'}`}>About Me</h2>
                <section className={` px-1 `}>

                    <div className={`mt-10 duration-1000 transition-all ${hasBeenActive ? 'translate-y-0 opacity-100 delay-200' : 'translate-x-[-1rem] opacity-0'}`}>
                        <div className="mx-auto px-3 text-base desktop:text-lg breakpoint-1080:text-xl breakpoint-1200:text-2xl font-light">
                            <p className='mb-3 breakpoint-1200:mb-5'>
                                Hello! I'm Cat, a Front-End Developer from Vancouver, BC.
                            </p>
                            <p className='mb-3 breakpoint-1200:mb-5'>
                                I am skilled in both back-end and front-end languages, from taking computer science classes at Langara College and being a recent grad from the Front-End Web Developer Program at BCIT. While my primary focus lies in JavaScript, I also possess proficiency in a range of other languages including C++, Java, PHP, and more. </p>
                            <p className='mb-3 breakpoint-1200:mb-5'>
                                As a kid, my dream job was to be a video-game designer so I’ve always wanted to be in tech and be apart of creating cool things! </p>
                            <p className='mb-3 breakpoint-1200:mb-5'>
                                In my free time, I enjoy gaming (which I like to think has helped my ability to work with a team).
                            </p>

                        </div>
                    </div>
                </section>
                <section id="about-skills" className={`transition-all duration-1000 ${hasBeenActive ? 'translate-y-0 opacity-100 delay-500' : 'translate-x-4 opacity-0'}`}>
                    <p className='text-3xl mt-10 mb-10 mx-auto text-center breakpoint-1080:mt-36'>My Tech Stack</p>
                    <div className="grid grid-cols-3 breakpoint-450:grid-cols-4 mx-auto breakpoint-560:flex breakpoint-560:gap-5 px-2 breakpoint-560:justify-center max-w-[650px] flex-wrap  gap-y-1 gap-x-1  content-center items-center  ">
                        {skills.map((skill) => (
                            <div key={skill.name} className=" cursor-default flex flex-col justify-center items-center  gap-1 breakpoint-560:text-lg text-base font-[500] desktop:hover:translate-y-[-2px] duration-150">
                                <i className={`${skill.icon} text-4xl breakpoint-560:text-5xl`} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                        <div className='flex items-center justify-center flex-col desktop:hover:translate-y-[-2px] duration-150 mt-[5px] breakpoint-560:mt-0 '>
                            <img src={shopify} alt="" className='w-9 breakpoint-560:w-12' />
                            <p className=" cursor-default     breakpoint-560:text-lg text-base font-[500] ">Shopify</p>
                        </div>
                    </div>
                </section>

            </div>
        </article >


    );
};


export default About;
