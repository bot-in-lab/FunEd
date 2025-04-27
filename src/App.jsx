import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar, Home, About, Teacher, Contact, Courses, Footer } from "./view/index";
import Login from "./view/container/Login";

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
    path: "/login",
    element: <LoginLayout />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
