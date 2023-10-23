import imgDataBase01 from "../assets/images/database-1.png";
import imgDataBase02 from "../assets/images/database-2.png";
import imgGame01 from "../assets/images/game-1.png";
import imgGame02 from "../assets/images/game-2.png";
import Accordion from "./Accordion";
const Projects = () => {
    // https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
    const DBAccordionData = [
        {
            title: 'The Process',
            content: 'data1'
        },
        {
            title: 'What I Learned',
            content: 'data2'
        },
    ];

    const GameAccordionData = [
        {
            title: 'The Process',
            content: 'data3'
        },
        {
            title: 'What I Learned',
            content: 'data4'
        },
    ];


    return (
        <div id="projects" className="">
            <h2 className="ml-2 mb-3 text-xl">Projects</h2>
            <section className="mx-3">
                <h3>Movie Database</h3>
                <p className="italic mb-3">react // tailwind // vite</p>
                <div className="overflow-x-auto flex">
                    <img className="object-cover w-92" src={imgDataBase01} alt="" />
                    <img src={imgDataBase02} alt="" />
                </div>
                <p className="mt-2">A database created using React and the TMDB API</p>
                <div className="flex justify-evenly mb-6 mt-3">
                    <button className="border px-1 "><a href="">Live Site</a></button>
                    <button className="border px-1"><a href="">GitHub repo</a></button>
                </div>
                <div className="">
                    <div className="border-[0.5px] rounded-t-md px-1">
                        <Accordion title="The Process" content={DBAccordionData[0].content} />
                    </div>
                    <div className="border-[0.5px] rounded-b-md border-t-0 px-1 mb-10">
                        <Accordion title="What I Learned" content={DBAccordionData[1].content} />
                    </div>
                </div>
            </section>

            <section className="mx-3">
                <h3>JavaScript Game</h3>
                <p className="italic mb-3">javascript // css // html</p>
                <div className="overflow-x-auto flex">
                    <img className="object-cover w-92" src={imgGame01} alt="" />
                    <img src={imgGame02} alt="" />
                </div>
                <p className="mt-2">A Pokemon name guessing game done completely using JavaScript</p>
                <div className="flex justify-evenly mb-6 mt-3">
                    <button className="border px-1 "><a href="">Live Site</a></button>
                    <button className="border px-1"><a href="">GitHub repo</a></button>
                </div>
                <div className="">
                    <div className="border-[0.5px] rounded-t-md px-1">
                        <Accordion title="The Process" content={GameAccordionData[0].content} />
                    </div>
                    <div className="border-[0.5px] rounded-b-md border-t-0 px-1  mb-10">
                        <Accordion title="What I Learned" content={GameAccordionData[1].content} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
