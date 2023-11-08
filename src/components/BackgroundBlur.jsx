import React from 'react';

const BackgroundBlur = () => {
    const colors = ['bg-radial-gradient-1', 'bg-radial-gradient-2', 'bg-radial-gradient-3', 'bg-radial-gradient-4'];

    return (
        <div className='fixed h-full overflow-hidden top-0 left-0 z-[-1]'>
            <div className='bubbles relative flex'>
                {[...Array(150)].map((_, index) => (
                    <span
                        style={{ '--i': Math.floor(Math.random() * 20) + 1 }}
                        className={`${colors[index % colors.length]} mx-1 relative w-8 h-8 blur-md`}
                        key={index}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BackgroundBlur;
