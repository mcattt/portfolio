import imgDataBase01 from "../assets/images/database-1.png";
import imgDataBase02 from "../assets/images/database-2.png";
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

    return (
        <div id="projects" className="mb-[200px]">
            <h2 className="ml-2 mb-3 text-xl">Projects</h2>
            <section className="mx-3">
                <h3>Movie Database</h3>
                <p className="italic mb-3">react // tailwind // vite</p>
                <div className="overflow-x-auto flex">
                    <img className="object-cover w-92" src={imgDataBase01} alt="" />
                    <img src={imgDataBase02} alt="" />
                </div>
                <p>A database created using React and the TMDB API</p>
                <div className="flex justify-evenly">
                    <button className="border"><a href="">Live Site</a></button>
                    <button className="border"><a href="">GitHub repo</a></button>
                </div>
                <div className="">
                    <div className="border px-1">
                        <Accordion title="The Process" content={DBAccordionData[0].content} />
                    </div>
                    <div className="border border-t-0 px-1">
                        <Accordion title="What I Learned" content={DBAccordionData[1].content} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
