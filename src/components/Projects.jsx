
import Carousel from "./Carousel";
const Projects = ({ activeTab }) => {
    return (
        <div
            id="projects"
            className={`min-h-screen transition-all duration-1000 ${activeTab === 'projects' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            <h2 className="ml-1 mb-10 text-5xl font-extradica">Projects</h2>
            <Carousel />
        </div>
    );
};

export default Projects;
