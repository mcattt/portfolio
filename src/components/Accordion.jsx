import React, { useState } from 'react';
import downArrow from "../assets/images/arrow-down.png";
const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='whitespace-normal' >
            <div className='flex flex-row items-center justify-between' >
                <div className={` font-medium py-[2px] ${isActive ? ' italic' : ''}`} >{title}</div>
                <div tabIndex='0' onClick={() => setIsActive(!isActive)} className={`ml-2 w-4   transition-all duration-700 ease-in-out   cursor-pointer ${isActive ? ' rotate-180' : ''}`}> <img src={downArrow} alt="" /> </div>
            </div>
            <div className='bg-background' >
                <div className={` mx-5  font-thin transition-all transition-max-h text-[14px] desktop:text-lg ease-in-out ${isActive ? 'max-h-screen opacity-100  duration-700 translate-y-0 py-3' : ' translate-y-2 max-h-0 overflow-hidden opacity-0 duration-300'}`}>
                    {content}</div>
            </div>
        </div >
    );
};

export default Accordion;