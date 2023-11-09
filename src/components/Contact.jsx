import gitHub from '../assets/images/github-icon.png';
import linkedin from "../assets/images/linkedin-icon.png";

const About = () => {
    return (


        <div id="contact" className='mx-4 pb-32 pt-48
        ' >
            <p className='text-base text-center   max-w-[600px] mx-auto'>I'm eager to dive into the tech industry, collaborate on exciting projects, and continue learning. Whether you want to discuss opportunities or simply share your thoughts on tech and gaming, lets connect!</p>


            <div className='flex flex-row  justify-evenly mt-12 bg-gray-700 mx-auto py-10 rounded-2xl bg-opacity-30   max-w-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" className='transition-fill duration-700  hover:fill-[url(#grad1)]'>
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{ stopColor: 'rgb(255, 255, 0)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'rgb(255, 0, 0)', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" /></svg>
                <img src={linkedin} alt="" className='w-10' />

            </div>
        </div>

    );
};

export default About;
