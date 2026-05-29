import { motion } from "framer-motion"
import { projectsInfo } from "../assets/data";
import ProjectCard from "./ProjectCard";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
const Project = () => {
  const [showAll, setShowAll] = useState(false);
  return (
    <motion.div initial= {{ opacity: 0, y: 50}}
                whileInView= {{ opacity: 1, y: 0}}
                transition= {{ duration: 0.6, ease: "easeInOut"}}
                viewport= {{ once: true }}
                id="projects"
                className="w-full min-h-screen items-center py-17 bg-gradient-to-r from-[#152f39] via-[#071114] to-[#152f39]">
                    <div className="container mx-auto px-3">
                        <h1 className="text-3xl font-bold mb-2 text-center">
                            My
                            <span className="text-[#19d6f9]">{" "}Projects</span>
                        </h1>
                        <p className="text-center text-gray-400 mx-auto max-w-2xl mb-13">
                            A showcase of my recent work and contributions to the world of UI development.
                        </p>
                    </div>
                    {/* Project Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto max-w-7xl">
                        {
                            projectsInfo.slice(0, showAll ? projectsInfo.length : 6)
                            .map((projects) => (
                                <ProjectCard key={projects.id}  {...projects}/>
                            ))
                        }
                    </div>
                    <div className="text-center mt-10">
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            setShowAll(!showAll);
                        }} className="inline-flex items-center gap-2 text-[#19d6f9] font-medium hover:underline">
                            <span>{showAll ? "View Less Projects" : "View More Projects"}</span>
                            <FaArrowRight />
                        </a>
                    </div>
                
    </motion.div>
  )
}

export default Project