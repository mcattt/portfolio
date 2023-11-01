import React from 'react';

const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-[-1]">
            <div className="absolute top-[50px] inset-0 justify-center inline-flex flex-row">
                <div className="bg-shape-1 bg-gradient-1-start opacity-50 blur-[65px] "></div>
                <div className="bg-shape-2 bg-gradient-1-end opacity-50 blur-[65px]"></div>
                <div className="bg-shape-3 bg-gradient-2-start opacity-50 blur-[65px]"></div>
                <div className="bg-shape-4 bg-gradient-2-end opacity-50 blur-[65px]"></div>
                <div className="bg-shape-5 bg-gradient-1-start opacity-50 blur-[65px]"></div>
                <div className="bg-shape-6 bg-gradient-1-end opacity-50 blur-[65px]"></div>
                <div className="bg-shape-7 bg-gradient-2-start blur-[65px]"></div>
                <div className="bg-shape-8 bg-gradient-2-end  opacity-50 blur-[65px]"></div>
                <div className="bg-shape-9 bg-gradient-1-end opacity-50 blur-[65px]"></div>
                {/* Add more shapes as needed */}
            </div>
        </div>
    );
};

export default Background;
