import { useTabContext } from './TabContext';

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
        <div div id="about" className=' pt-[40px] desktop:mx-[35px]'>

            <h2 className={`mb-3 text-5xl transition-all duration-1000 font-extradica ml-1 ${hasBeenActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>About Me</h2>
            <div className={`transition-all duration-1000 ${hasBeenActive ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}>

                <div className="mt-10 ">
                    <p className="mx-auto text-base font-light max-w-[800px] text-center ">
                        Hello! I'm Cat, a recent grad from the Front-End Web Development Program at BCIT.
                        As a kid, my dream job was to be a video-game designer (though now I'd rather just play them) so I knew I wanted to do something in tech as a career. Before I went to BCIT, I was in the Computer Science program at Langara where I learned some backend languages like C++ and Java. Having this previous knowledge has really helped me with problem solving and logic for the projects I work on.
                        In my free time, I enjoy gaming (which I like to think has helped my ability to work with a team.)
                    </p>
                </div>
                <div className=''>
                    <p className='text-3xl mt-10 mb-10 mx-auto text-center'>Skills and Experience</p>
                    <div className="grid grid-cols-3 breakpoint-450:grid-cols-4 mx-auto breakpoint-560:flex breakpoint-560:gap-5 px-2 breakpoint-560:justify-center max-w-[650px] flex-wrap  gap-y-1 gap-x-1  content-center items-center  ">
                        {skills.map((skill) => (
                            <div key={skill.name} className=" cursor-default flex flex-col justify-center items-center  gap-1 breakpoint-560:text-lg text-base font-[500] hover:translate-y-[-2px]">
                                <i className={` ${skill.icon} text-4xl breakpoint-560:text-5xl`} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div >


    );
};


export default About;
