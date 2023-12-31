import { useTabContext } from './TabContext';
const Contact = () => {
    const { activeTab, activeTabHistory } = useTabContext();
    const hasBeenActive = activeTabHistory['about'];
    return (


        <article id="contact" className={`mx-4  pb-36   `} >
            <div className={`duration-1000 transition-all ${hasBeenActive ? 'delay-300 translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                < p className='text-base text-center breakpoint-1080:text-lg breakpoint-1200:text-xl font-light max-w-[600px] mx-auto' > I'm eager to dive into the tech industry, collaborate on exciting projects, and continue learning. Whether you want to discuss opportunities or simply share your thoughts on tech and gaming, lets connect!</p>
                < div className='flex flex-row  justify-evenly mt-12 bg-gray-700 mx-auto py-10 rounded-2xl bg-opacity-30   max-w-lg' >
                    <a href="mailto: cat.cordner@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Compose email to cat.cordner@gmail.com"> <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 24 24" className='gradient-svg-1 cursor-pointer bg-white px-2  rounded-xl' >
                        <defs>
                            <linearGradient id="white1" x1="0" x2="0" y1="62" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="13%" stopColor="rgb(55 65 81)" />
                                <stop offset="100%" stopColor="rgb(55 65 81)" />
                            </linearGradient>
                        </defs>
                        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                    </svg>
                    </a>
                    <a href="https://github.com/mcattt" target="_blank" rel="noopener noreferrer" aria-label="Open a new tab to my Github">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 24 24" className='gradient-svg-2 cursor-pointer bg-white px-2  rounded-xl'>
                            <linearGradient id="white2" x1="0" x2="0" y1="62" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="13%" stopColor="rgb(55 65 81)" />
                                <stop offset="100%" stopColor="rgb(55 65 81)" />
                            </linearGradient>
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/catcordner/" target="_blank" rel="noopener noreferrer" aria-label="Open a new tab to my LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 24 24" className='gradient-svg-3 cursor-pointer bg-white px-3  rounded-xl'>
                            <linearGradient id="white3" x1="0" x2="0" y1="62" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="13%" stopColor="rgb(55 65 81)" />
                                <stop offset="100%" stopColor="rgb(55 65 81)" />
                            </linearGradient>
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                    </a>
                </div >
            </div>
        </article >

    );
};

export default Contact;
