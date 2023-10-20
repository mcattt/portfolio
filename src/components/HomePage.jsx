import React from 'react';
import downArrow from "/assets/images/arrow-down.png";

const HomePage = () => {





    // https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition

    return (
        <div>
            <div className='flex flex-col items-center'>
                <h1
                    className=" text-transparent bg-clip-text  transition-all duration-500 bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                    Cat Cordner
                </h1>
                <h2
                    className="text-transparent bg-clip-text  transition-all duration-500 bg-gradient-to-r from-gradient-1-start via-gradient-1-end to-gradient-2-start bg-size-200 bg-pos-0 hover:bg-pos-100"
                >
                    Front-End Web Developer
                </h2>


                <p>check out my work</p>
                <img src="./images/arrow-down.png" alt="" />

            </div>
        </div>
    );
}

export default HomePage;