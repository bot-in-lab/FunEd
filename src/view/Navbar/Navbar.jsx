import React, { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [active,setActive] = useState(null);
    useEffect(() => {
      const scrollActive = () => {
        setActive(window.scrollY > 20);
      };
      window.addEventListener("scroll", scrollActive);
      return () => window.removeEventListener("scroll", scrollActive);
    }, [active]);
  return (
    <div className={`${active ? "shadow-lg bg-Solitude" : ""} fixed w-full top-0 left-0 z-20`}>
      <div>
        <div className={`${active ? "py-2 transition-all duration-300" : "py-4"} container mx-auto flex items-center justify-between px-2`}>
          <div className="flex items-center gap-4">
            <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggle(true)}/>
            <Link to="/" className="text-xl text-Teal tracking-wide font-bold">
              FunEd
            </Link>
          </div>
          <div className="sm:flex items-center hidden">
          <li className="font-bold hover:text-Teal list-none cursor-pointer mr-8">
              <Link to="/CourseList">
                Courses
              </Link>
            </li>
            <li className="font-bold hover:text-Teal list-none cursor-pointer mr-8">
              <Link to="/TeacherList">
                Teacher
              </Link>
            </li>
            <li className="font-bold hover:text-Teal list-none cursor-pointer mr-8">
              <Link to="/DashboardHome">
                Teacher
              </Link>
            </li>
          </div>
          <Link to="/Login" className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray hover:text-Teal">
            Login
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
