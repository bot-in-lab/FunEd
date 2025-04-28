import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import logo5 from "./assets/logo5.png";
import logo6 from "./assets/logo6.png";

export const categories = [
    {
        id: 1,
        icon: <FiPenTool/>,
        category: "Design",
    },
    {
        id: 2,
        icon: <FaLaptopCode/>,
        category: "Development",
    },
    {
        id: 3,
        icon: <BsBarChartLine/>,
        category: "Business",
    },
    {
        id: 4,
        icon: <MdOutlineScience/>,
        category: "Science",
    },
];

export const courses = [
    {
        id: 1,
        image: courses1,
        category: "Web Design",
        title: "The Complete Web Design Course",
        rating: 4.9,
        participants: 500,
        price: 100,
    },
    {
        id: 2,
        image: courses2,
        category: "Web Development",
        title: "FullStack Web Development Course",
        rating: 4.8,
        participants: 700,
        price: 120,
    },
    {
        id: 3,
        image: courses3,
        category: "Web Development",
        title: "Python Beginner to Advanced Course",
        rating: 4.9,
        participants: 99,
        price: 99,
    },
    {
        id: 4,
        image: courses4,
        category: "Web Design",
        title: "UI/UX Design Crazy Course With XXXX",
        rating: 5.00,
        participants: 900,
        price: 150,
    },
    {
        id: 5,
        image: courses5,
        category: "AI Development",
        title: "AI Development With Python (complete beginner course)",
        rating: 5.00,
        participants: 1200,
        price: 200,
    },
    {
        id: 6,
        image: courses6,
        category: "Web Design",
        title: "xxxxxxxxxxxxxx",
        rating: 1.2,
        participants: 212,
        price: 12,
    },
    {
        id: 7,
        image: courses7,
        category: "Business",
        title: "fffffffffff",
        rating: 12,
        participants: 2121,
        price: 12122,
    },
    {
        id: 8,
        image: courses8,
        category: "Science",
        title: "fdhhfakfh",
        rating: 2424,
        participants: 2232,
        price: 323,
    },
];

export const logos = [logo1, logo2, logo3, logo4,
logo5, logo6];

export const accordions = [
    {
        id: 1,
        title: "What is FunEd?",
        answer: "FunEd is a dynamic online learning platform designed to make education engaging, accessible, and fun for everyone. Whether you're a beginner or a professional, FunEd offers a wide range of high-quality courses taught by industry experts. With an intuitive interface and interactive content, we aim to revolutionize the way people learn online.",
    },
    {
        id: 2,
        title: "What can I learn from FunEd?",
        answer: "You can learn a wide variety of skills including programming, design, marketing, personal development, and more from industry experts.",
    },
    {
        id: 3,
        title: "Can I teach on FunEd?",
        answer: "Yes! FunEd allows passionate educators and professionals to share their knowledge with a global audience.",
    },
    {
        id: 4,
        title: "What is included in my FunEd membership?",
        answer: "Your membership gives you access to all courses, downloadable resources, community forums, and exclusive instructor content.",
    },
];

