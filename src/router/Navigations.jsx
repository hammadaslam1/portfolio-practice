import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ABOUT, CONTACT, HOME, PROJECTS, SKILLS } from "./Routes";
import Home from "../screens/Home";
import About from "../screens/About";
import Projects from "../screens/Projects";
import Contact from "../screens/Contact";
import Navbar from "../components/navbar/Navbar";
import Skills from "../screens/Skills";
import Footer from "../components/footer/Footer";
import "../styles/global.css";
import ChatappAdmin from "../components/assets/svg/ChatappAdmin";

const Navigations = () => {
  return (
    <div className="navigations">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={HOME} element={<Home />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={PROJECTS} element={<Projects />} />
          <Route path={SKILLS} element={<Skills />} />
          <Route path={CONTACT} element={<Contact />} />
          {/* <Route path={'sample'} element={<ChatappAdmin />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigations;
