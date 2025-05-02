import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Home, About, Teacher, Contact, Courses, Footer } from "./view/index";
import Login from "./view/container/Login";
import CourseList from "./view/container/CourseList";
import TeacherList from "./view/container/TeacherList";
import Signup from "./view/container/SignUp";
import DashboardHome from "./view/container/StudentDashboard/DashboardHome";

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

const SignupLayout = () => (
  <div className="font-poppins bg-Solitude pt-20">
    <Navbar />
    <Signup />
    <Footer />
  </div>
);

const DashboardHomeLayout = () => (
  <div className="font-poppins bg-Solitude pt-20">
    <DashboardHome />
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
  {
    path: "/signup",
    element: <SignupLayout />,
  },
  {
    path: "/DashboardHome",
    element: <DashboardHomeLayout />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
