import { ToastContainer } from "react-toastify";
import AboutMe from "./sections/AboutMe";
import ContactMe from "./sections/ContactMe";
import Home from "./sections/Home";
import Projects from "./sections/Projects";

// Contains of 4 parts: Home, AboutMe, Projects, ContactMe
function App() {
  return (
    <>
      {/* <h1 className="text-3xl">Hello nice to meet u</h1> */}
      <ToastContainer />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
