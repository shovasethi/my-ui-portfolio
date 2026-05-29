import type { ProjectType } from "../assets/data";

const ProjectCard = ({image, title, description, tech, caseStudy}: ProjectType) => {
  return (
    <div className="bg-[#19d6f9]/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
        <img src={image} alt={title} className="w-full h-57 object-top hover:scale-110 transition duration-500" />
        <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {tech.map((item, index) =>
                <span key={index} className="rounded-full text-sm px-3 py-1 bg-[#32565d]">
                    {item}
                </span>
                 )
                }
            </div>
            <div className="flex gap-6">
                <button className="flex-1 mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-[#19d6f9] hover:text-white transition-colors duration-300">
                    <a href={caseStudy}>Case Study</a>
                </button>
                <button className="flex-1 fonyt-medium opacity-70 cursor-not-allowed border border-[#19d6f9] text-white rounded-full hover:bg-[#19d6f9]/15 hover:text-black transition-colors duration-300 mt-6 px-6 py-3">
                     Protected
                </button>
            </div>
        </div> 
    </div>
  );
};

export default ProjectCard