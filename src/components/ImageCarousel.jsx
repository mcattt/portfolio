import React, { useState, useEffect } from "react";

const ImageCarousel = ({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === item.img.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => {
            clearInterval(interval);
        };
    }, [item.img]);

    return (
        <div className="aspect-[338/219]  relative">
            {item.img.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={`absolute transition-opacity duration-1000 shadow-[0_0_6px_6px_rgba(255,255,255,0.05)] ${index === currentImageIndex ? "opacity-100 " : "opacity-0 "}`}
                />
            ))}
        </div>
    );
};

export default ImageCarousel;
