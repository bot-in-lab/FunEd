import React from "react";
import { categories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";

const Courses = () => {
    return (
      <div className="section" id="courses">
        <div className="text-center">
          <div className="sm:text-3xl text-2xl font-bold mb-5">
            Our Top <span className="text-Teal">Categories
              </span>
            </div>
            <p className="text-sm leading-7 text-gray max-w-[700px] mx-auto">
              Explore our most popular course categories tailored to meet today’s 
              in-demand skills. Whether you're diving into Design, mastering Development, 
              growing your Business knowledge, or exploring the wonders of Science, we've 
              got you covered. Each category is packed with expert-led content to help 
              you level up your learning journey.
            </p>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
          {categories.map(category => {
            return <Categories key={category.id} {...category}/>
          })}
        </div>
        <div className="text-xl font-bold mt-32">Most Populer Courses</div>
        <div className="mt-12 overflow-x-hidden w-full relative">
          <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
            {courses.map(course => {
              return <Course key={course.id} {...course} />
            })}
          </div>
        </div>
      </div>
    );
  };
  
  export default Courses;
  