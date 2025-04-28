import React from "react";
import about from "../../assets/About.jpg"
import { Link } from "react-router-dom";

const About = () => {
    return (
      <div className="section" id= "about">
        <div className="grid md:grid-cols-2 gap-8 place-items-center">
          <div className="border-[3px] border-solid border-Teal rounded-lg">
            <img src={about} alt="" />
          </div>
          <div>
            <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
              We provide the <br />best <span className="text-Teal">online courses</span>
            </div>
            <p className="text-sm leading-7 text-gray mb-4">
              At FunEd, we’re passionate about making quality education accessible 
              to everyone. We provide the best online courses across a wide range of 
              subjects—from design and development to business and science. Our expert 
              instructors, engaging content, and flexible learning paths empower learners 
              of all levels to grow and succeed at their own pace.
            </p>
            <Link className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold hover:text-Teal" to="/CourseList">
              See More
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  