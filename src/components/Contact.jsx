import gitHub from '../assets/images/github-icon.png';
import linkedin from "../assets/images/linkedin-icon.png";

const About = () => {
    return (


        <div id="contact" >
            <p className='text-sm text-center mt-20  max-w-[600px] mx-auto'>I'm eager to dive into the tech industry, collaborate on exciting projects, and continue learning. Whether you want to discuss opportunities or simply share your thoughts on tech and gaming, lets connect!</p>

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

    );
};

export default About;
