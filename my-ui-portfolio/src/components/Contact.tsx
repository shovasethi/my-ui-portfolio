import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log("Form submitted");
};
const Contact = () => {
  return (
    <motion.div initial= {{ opacity: 0, y: 50}}
                whileInView= {{ opacity: 1, y: 0}}
                transition= {{ duration: 0.6, ease: "easeInOut"}}
                viewport= {{ once: true }}
                id="contact"
                className="w-full min-h-screen items-center py-17 bg-gradient-to-r from-[#152f39] via-[#071114] to-[#152f39]">
                    <div className="container mx-auto px-3">
                        <h1 className="text-3xl font-bold mb-2 text-center">
                            Get in <span className="text-[#19d6f9]">{" "}Touch</span>
                        </h1>
                        <p className="text-center text-gray-400 mx-auto max-w-2xl mb-13">
                             Have a project or opportunity? Let's connect.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-7 mx-auto max-w-5xl">
                            <div className="bg-[#07343d] border border-[#19d6f9]/40 rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                                <div className="space-y-5">
                                    <a href="mailto:shova12sethi@outlook.com" className="flex items-center gap-4">
                                        <FaEnvelope className="text-[#f57064] text-xl" />
                                        <span>shova12sethi@outlook.com</span>
                                    </a>

                                    <a href="tel:+917892885900" className="flex items-center gap-4">
                                        <FaPhoneAlt className="text-[#22C55E] text-xl" />
                                        <span>+91 7892885900</span>
                                    </a>

                                    <a href="https://linkedin.com/" target="_blank" className="flex items-center gap-4">
                                        <FaLinkedin className="text-[#0A66C2] text-xl" />
                                        <span>LinkedIn</span>
                                    </a>

                                    <a href="https://github.com/" target="_blank" className="flex items-center gap-4">
                                        <FaGithub className="text-white text-xl" />
                                        <span>GitHub</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <form className="space-y-6" onSubmit={handelSubmit}>
                                    <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border border-[#19d6f9]/40 rounded-xl px-4 py-3 outline-none"
                                    />

                                    <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full bg-transparent border border-[#19d6f9]/40 rounded-xl px-4 py-3 outline-none"
                                    />

                                    <textarea
                                    placeholder="Your Message"
                                    rows={5}
                                    className="w-full bg-transparent border border-[#19d6f9]/40 rounded-xl px-4 py-3 outline-none resize-none"
                                    />

                                    <button
                                    type="submit"
                                    className="w-full py-3 rounded-xl bg-[#19d6f9] text-black font-semibold hover:bg-white transition"
                                    >
                                    Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
    </motion.div>
  )
}

export default Contact