import React from 'react';
import { useStudent } from '../../../controller/StudentController';
import CourseCard from '../../components/CourseCard';

const DashboardHome = () => {
  const { student } = useStudent();
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Welcome back, {student.name}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {student.enrolledCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default DashboardHome;