import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Landing = () => {
  return (
        <motion.div
                initial= {{ opacity: 0, y: 50}}
                whileInView= {{ opacity: 1, y: 0}}
                transition= {{ duration: 0.6, ease: "easeInOut"}}
                viewport= {{ once: true }}
                id="landing"
                className="items-center w-full min-h-screen flex pt-20 pb-16 md:flex-row flex-col gap-10 bg-gradient-to-r from-[#123340] via-[#0b181d] to-[#123340]"
                >
                <div className="container max-w-6xl mx-auto flex pt-10 md:pt-24 px-2 md:px-8 lg:px-0 md:flex-row flex-col items-center justify-between">
                    {/* Left section */}
                    <div className="md:w-1/2 md:mb-0 mb-10 w-full mx-auto px-4 sm:px-2 lg:px-1 text-center md:text-left">
                        <h3 className="text-[#19d6f9] text-2xl md:text-2xl font-bold mb-4">Shova Sethi</h3>
                        <h1 className="mx-auto sm:mx-0 md:mx-0 lg:mx-0 text-[1.1rem] text-center sm:text-left sm:text-2xl md:text-4xl font-bold mb-2 font-semibold typewriter">
                        I'm a Frontend<span className="text-[#19d6f9]">{" "}Developer</span>
                        </h1>
                        <p className="text-gray-300 text-md md:text-md max-w-xl leading-relaxed">
                        I'm a passionate frontend developer with expertise in React and Angular. I create engaging and user-friendly web applications that bring ideas to life !
                        </p>
                        <div className="flex gap-4 md:justify-start flex-wrap">
                        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-[#19d6f9] hover:text-white transition-colors duration-300 px-4 py-2">
                        <a href="/Shova_Sethi_Resume.pdf" className="" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                        </button>
                        <button className="mt-6 px-6 py-3 border border-[#19d6f9] text-white rounded-full hover:bg-[#19d6f9]/15 hover:text-black transition-colors duration-300 px-4 py-2">
                        <a href="#contact" className="text-white no-underline font-medium">
                            Get in Touch
                        </a>
                        </button>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="md:w-1/2 flex flex-col items-center">
                        <div className="w-58 md:w-58 md:h-auto h-auto">
                        <motion.img src="/my-portfoilo-img.jpeg" alt="profile" className="w-58 h-auto md:h-auto md:w-58 object-cover rounded-3xl object-cover border border-[#19d6f9] shadow-[0_0_40px_#19d6f9] hover:scale-105 transition-all duration-500" />
                        </div>
                        <div className="flex mt-6 gap-9">
                            {/* GitHub */}
                            <a href="https://github.com/" target="_blank" className="text-4xl text-white hover:scale-125 hover:drop-shadow-[0_0_15px_#22c55e] transition-all duration-300">
                             <FaGithub />
                            </a>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                className="text-4xl text-[#0A66C2] hover:scale-125 hover:drop-shadow-[0_0_15px_#22c55e] transition-all duration-300">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
  )
}

export default Landing