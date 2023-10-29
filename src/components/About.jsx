import { useTabContext } from './TabContext';
const About = () => {
    const { activeTab, activeTabHistory } = useTabContext();
    const hasBeenActive = activeTabHistory['about'];
    const skills = [
        { name: "React", icon: "devicon-react-original" },
        { name: "jQuery", icon: "devicon-jquery-plain" },
        { name: "JavaScript", icon: "devicon-javascript-plain" },
        { name: "HTML5", icon: "devicon-html5-plain" },
        { name: "Tailwind", icon: "devicon-tailwindcss-plain" },
        { name: "CSS3", icon: "devicon-css3-plain" },
        { name: "Sass", icon: "devicon-sass-original" },
        { name: "PHP", icon: "devicon-php-plain" },
        { name: "WordPress", icon: "devicon-wordpress-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Java", icon: "devicon-java-plain" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
        { name: "WooCommerce", icon: "devicon-woocommerce-plain" },
    ];

    return (
        <div id="about" className={`min-h-screen transition-all duration-1000 ml-1 mb-[200px]  ${hasBeenActive ? 'opacity-100' : 'opacity-0'}`}>
            <h2 className=" mb-3 text-5xl font-extradica">About Me</h2>
            <div className='px-3'>
                <div className="">
                    <p className="text-lg mt-10">
                        Hello! I'm Cat, a recent grad from the Front-End Web Development Program at BCIT.
                        As a kid, my dream job was to be a video-game designer (though now I'd rather just play them) so I knew I wanted to do something in tech as a career.
                        In my free time, I really like to game (which I like to think has helped my ability to work with a team).
                    </p>
                </div>
                <div>
                    <p className='text-3xl mt-10'>Skills</p>
                    <div className="grid grid-cols-2   gap-x-[3rem] border ">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex flex-row items-center gap-3 text-base">
                                <i className={` ${skill.icon} text-base`} />
                                <p>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About;
