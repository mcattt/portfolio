import React, { useState } from 'react';
import downArrow from "../assets/images/arrow-down.png";
const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div >
            <div className='flex flex-row items-center justify-between ' >
                <div className=''>{title}</div>
                <div onClick={() => setIsActive(!isActive)} className={`ml-2 w-3 transition-all duration-700 ease-in-out ${isActive ? ' rotate-180' : ''}`}> <img src={downArrow} alt="" /> </div>
            </div>
            <div className={`overflow-hidden transition-max-h ease-in-out ${isActive ? 'max-h-screen   duration-700 ' : 'max-h-0  duration-300'}`}>
                {content}</div>
        </div >
    );
};

export default Accordion;