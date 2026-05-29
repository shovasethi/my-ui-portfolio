import { motion } from "framer-motion";
import { skillsInfo } from "../assets/data";
const Skills = () => {
  return (
    <motion.div initial= {{ opacity: 0, y: 50}}
                whileInView= {{ opacity: 1, y: 0}}
                transition= {{ duration: 0.6, ease: "easeInOut"}}
                viewport= {{ once: true }}
                id="skills"
                className="w-full min-h-screen items-center py-17 bg-gradient-to-r from-[#152f39] via-[#071114] to-[#152f39]">
                    <div className="container mx-auto px-3">
                         <h1 className="text-3xl font-bold mb-2 text-center">
                            My
                            <span className="text-[#19d6f9]">{" "}Skills</span>
                        </h1>
                        <p className="text-center text-gray-400 mx-auto max-w-2xl mb-13">
                            Technologies and tools I use to build modern web experiences !
                        </p>
                         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7 mx-auto max-w-7xl">
                            {
                                skillsInfo.map((skill, index) => (
                                    <div key={index} className="bg-[#19d6f9]/10 border border-[#19d6f9]/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer">
                                        <div className="flex items-center mb-4">
                                            <skill.icon className="h-10 w-10 text-[#19d6f9] mr-2" />
                                            <h3 className="text-lg font-semibold">
                                                { skill.name}
                                            </h3>
                                        </div>
                                        <p className="text-gray-400">
                                            { skill.description }
                                        </p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {skill.tags.map((tech) => (
                                                <span key={tech} className="rounded-full text-sm px-3 py-1 bg-[#32565d]">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            }

                         </div>
                    </div>

    </motion.div>
  )
}

export default Skills