import React, { useEffect } from 'react';

const BackgroundBlur = () => {
    // useEffect(() => {
    //     const liElements = document.querySelectorAll('.box ul li');

    //     liElements.forEach((li) => {
    //         // Generate random left position between 0 and 100vw
    //         const leftPosition = `${Math.random() * 100}vw`;
    //         li.style.left = leftPosition;

    //         // Generate random animation delay between 0s and 10s
    //         const animationDelay = `${Math.random() * 10}s`;
    //         li.style.animationDelay = animationDelay;



    //     });
    // }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]'>
            <div className="box">
                <ul>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-1 bottom-[-40px]`}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-2 bottom-[-40px]`}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-3 bottom-[-40px]`}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-4 bottom-[-40px]`}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-1 bottom-[-40px]`}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-2 bottom-[-40px]`}></li>
                </ul>
            </div>
        </div>
    );
};

export default BackgroundBlur;
