const About = () => {
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
        { name: "WooCommerce", icon: "devicon-woocommerce-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "Java", icon: "devicon-java-plain" },
        { name: "C++", icon: "devicon-cplusplus-plain" },
    ];

    return (
        <div id="about" className="mb-[200px]">
            <h2 className="ml-2 mb-3 text-5xl font-extradica">About Me</h2>
            <div className="px-2">
                <p className="text-lg px-3 mt-10">
                    Hello! I'm Cat, a recent grad from the Front-End Web Development Program at BCIT.
                    As a kid, my dream job was to be a video-game designer (though now I'd rather just play them) so I knew I wanted to do something in tech as a career.
                    In my free time, I really like to game (which I like to think has helped my ability to work with a team).
                </p>
            </div>
            <div>
                <p>Skills</p>
                <div className="grid grid-cols-3 ">
                    {skills.map((skill) => (
                        <div key={skill.name} className="flex flex-row items-center gap-3 text-base">
                            <i className={` ${skill.icon} text-2xl`} />
                            <p>{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default About;
