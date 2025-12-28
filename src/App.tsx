import Header from "./components/Header.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Faq from "./components/Faq.tsx";
import Experience from "./components/Experience.tsx";
import Approach from "./components/Approach.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <div className="bg-[#01041A] w-full  text-white flex flex-col items-center">
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