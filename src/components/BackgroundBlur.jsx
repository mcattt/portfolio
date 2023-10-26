const BackgroundBlur = () => {
    return (
        <div className="">
            <div className="absolute top-0 left-[60%] w-[20%]  h-44 bg-opacity-70 bg-gradient-2-end z-[-1000] rotate-[130deg] blur-[45px]"></div>
            <div className=" absolute top-0 left-[68%] w-[10%] h-36 bg-opacity-70 bg-gradient-2-start z-[-1000] rotate-[130deg] blur-[30px]"></div>

            <div className="absolute top-[200%] left-[10%] w-[16%]  h-48 bg-opacity-70 bg-gradient-2-end z-[-1000] rotate-[65deg] blur-[45px]"></div>
            <div className=" absolute top-[200%] left-[18%] w-[14%] h-32 bg-opacity-70 bg-gradient-2-start z-[-1000] rotate-[65deg] blur-[40px]"></div>
        </div>
    );
};

export default BackgroundBlur;