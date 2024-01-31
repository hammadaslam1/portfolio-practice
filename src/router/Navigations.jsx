import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "./Routes";
import Home from "../screens/Home";
import About from "../screens/About";
import Projects from "../screens/Projects";
import Contact from "../screens/Contact";
import Navbar from "../components/navbar/Navbar";
import Skills from "../screens/Skills";

const Navigations = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={PROJECTS} element={<Projects />} />
        <Route path={SKILLS} element={<Skills />} />
        <Route path={CONTACT} element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigations;
