import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

const Navbar = () => {
    const [ open, setOpen ] = useState(false);
  return (
     <nav className="fixed z-[1000] left-1/2 -translate-x-1/2 w-full bg-white/10 backdrop-blur-lg border border-white/20 px-7 md:px-12 lg:px-20 py-1 shadow-xl ">
        <div className="container mx-auto flex items-center justify-between">
            <div className="relative inline-block">
                        <h1 className="
                            text-3xl
                            font-black
                            tracking-[6px]
                            text-[#19d6f9]
                            drop-shadow-[0_0_15px_#19d6f9]
                            hover:scale-105
                            transition-all
                            duration-300
                            mb-3
                            cursor-pointer">
                              &lt;SH/&gt;
                        </h1>
                   
                    <div className="w-3 h-3 rounded-full bg-[#19d6f9] shadow-[0_0_15px_#19d6f9] mt-1 animate-pulse absolute bottom-0 right-10"></div>
            </div>
            <div className="hidden md:flex space-x-8 flex gap-3 font-medium relative">
                    <a href="#home" className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Home
                    </a>
                    <a href="#about" className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    About
                    </a>
                     <a href="#skills" className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Skills
                    </a>
                    <a href="#projects" className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Projects
                    </a>
                    <a href="#experience" className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Experience
                    </a>
                    <a href="#contact" className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Contact
                    </a>
            </div>
            {/* For Mobile View */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                { open ? <FaXmark/> : <FaBars/> }
            </div>
        </div>
          {/* MobileMenus */}
        {
            open && (
                <div className="md:hidden top-10 h-screen transition-all duration-500 z-50 flex flex-col gap-4 text-center font-medium rounded-2xl p-6 shadow-lg relative">
                    <a href="#home" onClick={() => setOpen(!open)} className="inline-block relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#a3f742] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                     Home
                    </a>
                    <a href="#about" onClick={() => setOpen(!open)} className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    About
                    </a>
                    <a href="#skills" onClick={() => setOpen(!open)} className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Skills
                    </a>
                    <a href="#projects" onClick={() => setOpen(!open)} className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Projects
                    </a>
                    <a href="#experience" onClick={() => setOpen(!open)} className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Experience
                    </a>
                    <a href="#contact" onClick={() => setOpen(!open)} className="relative cursor-pointer after:absolute after:left-1/2 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#19d6f9] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0">
                    Contact
                    </a>
                </div> 
            )
        }
    </nav>
   
  )
}

export default Navbar