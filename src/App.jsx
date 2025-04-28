import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Home, About, Teacher, Contact, Courses, Footer } from "./view/index";
import Login from "./view/container/Login";
import CourseList from "./view/container/CourseList";
import TeacherList from "./view/container/TeacherList";

const MainLayout = () => (
  <div className="font-poppins bg-Solitude pt-20">
    <Navbar />
    <Home />
    <About />
    <Courses />
    <Teacher />
    <Contact />
    <Footer />
  </div>
);

const CourseListLayout = () => (
  <div className="font-poppins bg-Solitude pt-20">
    <Navbar />
    <CourseList />
    <Footer />
  </div>
);

const TeacherListLayout = () => (
  <div className="font-poppins bg-Solitude pt-20">
    <Navbar />
    <TeacherList />
    <Footer />
  </div>
);

const LoginLayout = () => (
  <div className="font-poppins bg-Solitude pt-20">
    <Navbar />
    <Login />
    <Footer />
  </div>
);


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
  },
  {
    path: "/courseList",
    element: <CourseListLayout />,
  },
  {
    path: "/teacherList",
    element: <TeacherListLayout />,
  },
  {
    path: "/login",
    element: <LoginLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
