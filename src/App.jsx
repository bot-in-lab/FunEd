import {Navbar, Home, About, Teacher, Contact, Courses,
Footer} from "./components/index"

function App() {

  return (
      <div className="font-poppins bg-Solitude pt-20">
        <Navbar/>
        <Home/>
        <About/>
        <Courses/>
        <Teacher/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
