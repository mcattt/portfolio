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
        { name: "WordPress", icon: "devicon-wordpress-plain colored" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "WooCommerce", icon: "devicon-woocommerce-plain colored" },
    ];

    return (
        <div id="about" className={`min-h-screen   pt-[43px]`}>
            <h2 className={`mb-3 text-5xl transition-all duration-1000 font-extradica ml-1 ${hasBeenActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>About Me</h2>
            <div className={`transition-all duration-1000 ${hasBeenActive ? 'translate-y-0 opacity-100 delay-200' : 'translate-y-4 opacity-0'}`}>

                <div className="mt-10 ">
                    <p className="mx-2 text-base ">
                        Hello! I'm Cat, a recent grad from the Front-End Web Development Program at BCIT.
                        As a kid, my dream job was to be a video-game designer (though now I'd rather just play them) so I knew I wanted to do something in tech as a career. Before I went to BCIT, I was in the Computer Science program at Langara where I learned some backend languages like C++ and Java. Having this previous knowledge has really helped me with problem solving and logic for the projects I work on.
                        In my free time, I enjoy gaming (which I like to think has helped my ability to work with a team.)
                    </p>
                </div>
                <div>
                    <p className='text-3xl mt-10 mb-4'>Skills</p>
                    <div className="grid grid-cols-2  gap-y-[5px] gap-x-[3rem]  content-center items-center">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-row items-center  gap-2 text-lg">
                                <i className={` ${skill.icon} text-base`} />
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
