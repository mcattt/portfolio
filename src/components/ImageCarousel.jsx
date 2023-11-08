import React, { useState, useEffect } from "react";

const ImageCarousel = ({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === item.img.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change the interval duration (in milliseconds) as needed

        return () => {
            clearInterval(interval);
        };
    }, [item.img]);

    return (
        <div className="relative">
            {item.img.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`transition-opacity duration-1000 shadow-[0_0_5px_5px_rgba(255,255,255,0.05)] ${index === currentImageIndex ? "opacity-100 visible" : "opacity-0 hidden"}`}
                />
            ))}
        </div>
    );
};

export default ImageCarousel;
