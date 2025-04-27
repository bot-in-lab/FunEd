import React, { useState } from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ moved state here

  const handleToggle = (id) => {
    setActiveIndex(prev => (prev === id ? null : id));
  };

  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-item-center gap-8">
        {/* Become an Instructor sections */}
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-4">
            Become <span className="text-Teal">An Instructor</span> <br /> of Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-4">
            Share your knowledge with the world! Join FunEd as an instructor and inspire learners across the globe.
            Whether you're an expert in design, development, business, or science—our platform gives you the tools and
            audience to make an impact. Start teaching today and grow your influence with us!
          </p>
          <button className="px-4 py-3 font-bold text-white bg-Teal rounded-lg text-sm">Become An Instructor</button>
        </div>
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-4">
            Become <span className="text-Teal">An Instructor</span> <br /> of Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-4">
            Share your knowledge with the world! Join FunEd as an instructor and inspire learners across the globe.
            Whether you're an expert in design, development, business, or science—our platform gives you the tools and
            audience to make an impact. Start teaching today and grow your influence with us!
          </p>
          <button className="px-4 py-3 font-bold text-white bg-Teal rounded-lg text-sm">Get Started</button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>

      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>

      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => (
          <Accordion
            key={accordion.id}
            {...accordion}
            isOpen={accordion.id === activeIndex}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Teacher;
