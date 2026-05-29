import { motion } from "framer-motion";
import { aboutInfo } from "../assets/data";
const About = () => {
  return (
    <motion.div initial= {{ opacity: 0, y: 50}}
                whileInView= {{ opacity: 1, y: 0}}
                transition= {{ duration: 0.6, ease: "easeInOut"}}
                viewport= {{ once: true }}
                id="about"
                className="w-full min-h-screen items-center py-17 bg-gradient-to-r from-[#152f39] via-[#071114] to-[#152f39]">
        <div className="container mx-auto px-6">
            {/* About Header */}
            <h1 className="text-3xl font-bold mb-2 text-center">
                About<span className="text-[#19d6f9]">{" "}Me</span>
            </h1>
            <p className="text-center text-gray-400 mx-auto max-w-2xl mb-13">
                Get to know more about me...
            </p>
            {/* About Content */}
            <div className="flex flex-col md:flex-row items-center gap-1">
                {/* left content */}
                <div className="md:w-1/2 overflow-hidden mt-6">
                    <motion.div 
                    animate={{ rotate: [-12, -4, -12], y: [0, 8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute w-88 h-117 rounded-3x1 bg-gradient-to-br from-cyan-300/40 to-purple-400/40 blur -rotate-2"> 
                    </motion.div>
                    <motion.div className="rounded-2xl relative z-20">
                        <motion.img 
                        initial= {{ opacity: 0, scale: 0.8}}
                        whileInView= {{ opacity: 1, scale: 1}}
                        transition= {{ duration: 0.6, ease: "easeInOut"}}
                        viewport= {{ once: true }}
                        src="/my-portfoilo-img.jpeg" alt="profile" className="w-90 h-auto rounded-2xl object-cover" />
                    </motion.div>
                </div> 
                {/* right content */}
                <div className="md:w-1/2 p-2 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-6 underline underline-offset-6">Career Path</h2>
                    <p className="text-gray-300 mb-6">I have spent the past 10 years working in the field of UI development. 
                        I specialize in designing and implementing user interfaces that are both aesthetically pleasing and highly functional.
                        My journey started with basic HTML, CSS, Bootstrap, SQL, JSON and JavaScript along with UX design principles. 
                        Then I explored more advanced frameworks and tools to enhance my skills and deliver better results. </p>
                    <p className="text-gray-300 mb-6">
                        I bridge the gap between design and development—bringing pixel-perfect mockups to life while ensuring performance, accessibility, and responsiveness across devices.
                    </p>
                    <p className="text-gray-300">
                        When I'm not coding, you'll find me exploring UI trends or new technologies and sketching out fresh concepts for my next project. I believe in continuous learning and improvement to push the boundaries of what's possible in UI development.
                    </p>
                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
                            {
                                aboutInfo.map((items, index) => (
                                    <div key={index} className="bg-[#19d6f9]/10 border border-[#19d6f9]/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-300 cursor-pointer">
                                        <div className="text-4xl mb-4 text-[#19d6f9]" style={{ color: items.color }}>
                                            <items.icon /> 
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">
                                            { items.title }
                                        </h3>
                                        <p className="text-gray-400">
                                            { items.description }
                                        </p>
                                    </div>
                                ))
                            }
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About