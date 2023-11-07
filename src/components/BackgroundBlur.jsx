import React from 'react';

const BackgroundBlur = () => {
    const colors = ['bg-radial-gradient-1', 'bg-radial-gradient-2', 'bg-radial-gradient-3', 'bg-radial-gradient-4'];

    return (
        <div className='container-bubbles'>
            <div className='bubbles'>
                {[...Array(150)].map((_, index) => (
                    <span
                        style={{ '--i': Math.floor(Math.random() * 20) + 1 }}
                        className={colors[index % colors.length]}
                        key={index}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default BackgroundBlur;
