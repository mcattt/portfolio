import React, { useState } from 'react';
import downArrow from "../assets/images/arrow-down.png";
import upArrow from "../assets/images/arrow-up.png";
const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div >
            <div className='flex flex-row items-center justify-between ' onClick={() => setIsActive(!isActive)}>
                <div className=''>{title}</div>
                <div className="ml-2 w-2">{isActive ? <img src={upArrow} alt="" /> : <img src={downArrow} alt="" />}</div>
            </div>
            {isActive && <div className="">{content}</div>}
        </div >
    );
};

export default Accordion;