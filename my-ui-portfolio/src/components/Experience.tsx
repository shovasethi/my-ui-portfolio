import { motion } from "framer-motion";
const Experience = () => {
  return (
    <motion.div initial= {{ opacity: 0, y: 50}}
                whileInView= {{ opacity: 1, y: 0}}
                transition= {{ duration: 0.6, ease: "easeInOut"}}
                viewport= {{ once: true }}
                id="experience"
                className="w-full min-h-screen items-center py-17 bg-gradient-to-r from-[#152f39] via-[#071114] to-[#152f39]">
                <div className="max-w-5xl mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center mb-16">
                        Work <span className="text-[#19d6f9]">Experience</span>
                        </h2>
                    <div className="flex flex-col gap-10">    
                        <div className="relative flex gap-10">
                            {/* Left vertical line */}
                            <div className="relative hidden md:flex justify-center">
                                <div className="w-[1px] bg-[#19d6f9]/70 h-full"></div>
                                <span className="absolute top-6 w-6 h-6 rounded-full bg-[#19d6f9] shadow-[0_0_25px_#19d6f9]"></span>
                            </div>
                            {/* Card */}
                            <div className="bg-[#082f38] border border-[#19d6f9]/50 rounded-3xl p-6 w-full hover:-translate-y-2 transition duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold">Senior Frontend Developer</h3>
                                    <p className="text-[#19d6f9] text-lg mt-2">
                                    Trigyn Technologies
                                    </p>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-[#19d6f9]/20 text-[#19d6f9] text-sm">
                                    Oct 2021 - May 2026
                                </span>
                                </div>
                                <p className="text-gray-300 mt-3">
                                Designed and delivered scalable frontend architectures while mentoring teams and contributing to high-impact enterprise solutions.
                                </p>
                            </div>
                            
                        </div>
                         <div className="relative flex gap-10">
                            {/* Left vertical line */}
                            <div className="relative hidden md:flex justify-center">
                                <div className="w-[1px] bg-[#19d6f9]/70 h-full"></div>
                                <span className="absolute top-6 w-6 h-6 rounded-full bg-[#19d6f9] shadow-[0_0_25px_#19d6f9]"></span>
                            </div>
                            {/* Card */}
                            <div className="bg-[#082f38] border border-[#19d6f9]/50 rounded-3xl p-6 w-full hover:-translate-y-2 transition duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold">UI/UX Developer</h3>
                                    <p className="text-[#19d6f9] text-lg mt-2">
                                   IIHT (Indian Institute of Handloom Technology)
                                    </p>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-[#19d6f9]/20 text-[#19d6f9] text-sm">
                                    Oct 2020 - Oct 2021
                                </span>
                                </div>
                                <p className="text-gray-300 mt-3">
                                Improved application usability through thoughtful design implementation, user research insights, and responsive design strategies.
                                </p>
                            </div>
                            
                        </div>
                         <div className="relative flex gap-10">
                            {/* Left vertical line */}
                            <div className="relative hidden md:flex justify-center">
                                <div className="w-[1px] bg-[#19d6f9]/70 h-full"></div>
                                <span className="absolute top-6 w-6 h-6 rounded-full bg-[#19d6f9] shadow-[0_0_25px_#19d6f9]"></span>
                            </div>
                            {/* Card */}
                            <div className="bg-[#082f38] border border-[#19d6f9]/50 rounded-3xl p-6 w-full hover:-translate-y-2 transition duration-300">
                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold">UI Developer</h3>
                                    <p className="text-[#19d6f9] text-lg mt-2">
                                    Brandstudio Lifestyle
                                    </p>
                                </div>
                                <span className="px-4 py-2 rounded-full bg-[#19d6f9]/20 text-[#19d6f9] text-sm">
                                    March 2016 - Oct 2020
                                </span>
                                </div>
                                <p className="text-gray-300 mt-3">
                              Started my frontend journey by developing responsive web pages, implementing UI designs, and ensuring cross-browser compatibility for web applications.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
    </motion.div>
  )
}

export default Experience