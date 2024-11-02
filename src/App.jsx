import "./App.css";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { motion } from "framer-motion";
function App() {
  return (
    <>
      <section className="h-[100vh] bg-green ">
        <Home />
      </section>
      <section className="bg-green border-t-2 border-white h-[100vh]">
        <About/>
      </section>
      <section className="bg-green border-t-4 border-white h-[100vh]">
        <Skills />
      </section>
      <section className="bg-green border-t-4 border-white h-[100vh]">
        <Portfolio/>
      </section>
      <section className="bg-green border-t-4 border-white h-[100vh]">
        <Contact/>
      </section>
    </>
  );
}

export default App;
