import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Faq from "./components/Faq.tsx";
import Experience from "./components/Experience.tsx";
import Approach from "./components/Approach.tsx";
import Footer from "./components/Footer.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      always: true,
      easing: "zoom-in",
    });
  }, []);

  return (
    <div className="bg-[#01041A] w-full text-white flex flex-col items-center">
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Faq/>
      <Experience/>
      <Approach/>
      <Footer/>
    </div>
  )
}