import { FaPaintBrush, FaReact, FaLayerGroup, FaTools } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { TbServerCog, TbBrandTailwind } from "react-icons/tb";
import { MdRebaseEdit } from "react-icons/md";
import { VscAzureDevops } from "react-icons/vsc";


export const aboutInfo = [
    {
        icon: HiLightBulb  ,
        title: "Innovative",
        description: "Building futuristic and interactive web experiences with modern frontend technologies.",
        color: "#fdef2c" 
    },
    {
        icon: FaCode,
        title: "Clean Code",
        description: "Writing scalable, maintainable, and efficient code for responsive web applications.",
        color: "#d12dfa"
    },
    {
        icon: FaPaintBrush,
        title: "Design Oriented",
        description: "Focused on creating visually appealing, modern, and user-friendly interface designs.",
        color: "#eb1111",
    },
];
export const skillsInfo = [
    {
        icon: FaReact,
        name: "Frontend Development",
        description: "Building responsive and interactive user interfaces using React and Angular.",
        color: "#19d6f9",
        tags: ["React", "Angular", "JavaScript", "TypeScript", "HTML"]
    },
    {
        icon: TbServerCog ,
        name: "Basic Backend Development",
        description: "Developing scalable backend systems, APIs, and database-driven applications.",
        color: "#fdef2c",
        tags: ["Node.js", "JSON", "SQL", "Python"]
    },
    {
        icon: TbBrandTailwind ,
        name: "Styling & Frameworks",
        description: "Crafting visually stunning and responsive designs using Tailwind CSS and Bootstrap.",
        color: "#d12dfa",
        tags: ["Tailwind CSS", "Bootstrap", "SCSS"]
    },
    {
        icon: FaLayerGroup ,
        name: "Libraries",
        description: "Utilizing a wide range of libraries to enhance functionality and user experience.",
        color: "#eb1111",
        tags: ["Framer Motion", "jQuery", "ION", "Angular Material", "PrimeNG"]
    },
    {
        icon: FaTools,
        name: "Tools & Technologies",
        description: "Using a variety of tools and technologies to streamline development and improve efficiency.",
        color: "#1621f1",
        tags: ["Atom", "VS Code", "Eclipse", "Dreamweaver"]
    },
    {
        icon: MdRebaseEdit,
        name: "AI-powered code editor",
        description: "Leveraging AI-powered code editors to enhance productivity and code quality.",
        color: "#22c55e",
        tags: ["Cursor", "GitHub Copilot"]
    },
    {
        icon: VscAzureDevops,
        name: "Project Management",
        description: "Managing development workflows, task tracking, and team collaboration using Jira and modern DevOps practices.",
        color: "#fc70d7",
        tags: ["Jira", "Azure DevOps", "GitHub Projects"]
    },

];
export interface ProjectType {
  id?: number;
  image: string;
  title: string;
  description: string;
  tech: string[];
  caseStudy?: string;
}
export const projectsInfo: ProjectType[] = [
    {
        id: 1,
        image: "/UWin-self-registration.png",
        title: "CoWin / UWin Self Registration",
        description: "Supported large-scale vaccination system across India user-friendly self-registration portal for UWin.",
        tech: ["Angular", "Bootstrap", "JavaScript", " Angular Material"],
        caseStudy: ""
        
    },
    {
        id: 2,
        image: "/ihip-landing.png",
        title: "Integrated Health Information Platform (IHIP)",
        description: "A comprehensive health information platform that integrates various healthcare data sources to provide a unified view of patient information.",
        tech: ["Angular CLI", "Bootstrap", "JavaScript", "PrimeNG", "jQuery"],
        caseStudy: "/IHIPREADME.pdf",
        
    },
    {
        id: 3,
        image: "/wipo.png",
        title: "WIPO",
        description: "WIPO aims to establish a standardized global database of intellectual property records, including digitization of old paper records.",
        tech: ["Drupal", "React", "Node.js", "ION", "JavaScript"],
        caseStudy: "/WIPO.pdf",
    },
    {
        id: 4,
        image: "/sanmetadata.png",
        title: "SANMetadata",
        description: "A technology-driven company focused on data management, digital solutions & enterprise application services.",
        tech: ["React", "Ant Design", "Node.js", "JavaScript"],
        caseStudy: "/SNAREADME.pdf",
    },
    {
        id: 5,
        image: "/dmfas7.png",
        title: "DMFAS 7",
        description: "A modern web application for managing and visualizing data in the DMFAS 7 system.",
        tech: ["React", "SCSS", "jQuery", "JavaScript"],
        caseStudy: "",  
    },
    {
        id: 6,
        image: "/techacademy.png",
        title: "Tech Academy",
        description: "A technology-focused learning & development platform provides training, mentorship, programming, and modern web technologies. ",
        tech: ["Angular", "Bootstrap", "JavaScript", "Angular Material"],
        caseStudy: "",
    },
    {
        id: 7,
        image: "/virtutor.png",
        title: "Virtutor",
        description: "A online learning platform that provides interactive and engaging educational content for students and professionals.",
        tech: ["Angular", "PrimeNG", "Node.js", "Typescript", "Bootstrap"],
        caseStudy: "",
    },
    {
        id: 8,
        image: "/ketch.png",
        title: "KETCH",
        description: "Is a online shopping app that offers a wide range of stylish outfits, including men's and women's apparel.",
        tech: ["React", "Typescript", "CSS", "jQuery", "IONIC"],
        caseStudy: "",
    },
    {
        id: 9,
        image: "/stilemky.jpg",
        title: "Stilemonkey",
        description: "Internal e-commerce platform focused on product data collection, management, and business operations.",
        tech: ["Angular", "HTML", "CSS", "Javascript", "JSON"],
        caseStudy: "",
    },
    {
        id: 10,
        image: "/brandstudio.png",
        title: "Brand Studio",
        description: "Brand Studiolifestyle is one of India's fastest-growing fashion retail company.",
        tech: ["Bootstrap", "CSS", "jQuery", "JavaScript"],
        caseStudy: "",
    },
    {
        id: 11,
        image: "/ishareameal.png",
        title: "Share A Meal",
        description: "A food sharing platform that connects individuals & communities to share excess food, reduce food waste, and promote sustainability.",
        tech: ["HTML", "CSS", "Javascript", "JSON"],
        caseStudy: "",
    },
];
