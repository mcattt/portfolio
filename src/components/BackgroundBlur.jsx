import React, { useEffect } from 'react';

const BackgroundBlur = () => {
    useEffect(() => {
        const liElements = document.querySelectorAll('.box ul li');

        liElements.forEach((li, index) => {
            // Generate random left position between 0 and 100vw
            const leftPosition = `${Math.random() * 100}vw`;
            li.style.left = leftPosition;

            // Generate random animation delay between 0s and 8s
            const animationDelay = `${Math.random() * 5}s`;
            li.style.animationDelay = animationDelay;

            // Generate a random number between 1 and 4
            const randomNum = Math.floor(Math.random() * 4) + 1;
            li.classList.add(`bg-radial-gradient-${randomNum}`);

        });
    }, []);

    return (
        <div className='fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]'>
            <div className="box">
                <ul>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-1 `}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-2 `}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-3 `}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-4 `}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-1 `}></li>
                    <li className={`blur-[10px] absolute w-10 h-10  bg-radial-gradient-1 `}></li>
                </ul>
            </div>
        </div>
    );
};

export default BackgroundBlur;
