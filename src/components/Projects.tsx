import project from "../assets/project.svg"
import react from "../assets/react1.svg"
import tailwind from "../assets/tailwind.svg"
import ts from "../assets/ts.svg"
import triangle from "../assets/triangle.svg"
import arrow from "../assets/arrow.svg"
import m from "../assets/m.svg"

export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center pt-25 ml-auto mr-auto">
            <h2 className="pb-6 xl:pb-7.5 text-[36px] xl:text[72px] font-bold leading-none text-center">A small selection of  <br className="hidden lg:block"/><span className="text-[#CBACF9]">recent projects</span></h2>
            {/* Parent-wrapper */}
            <div>
                {/* child-wrapper */}
                <div className="flex flex-col px-4 xl:px-6 gap-2 w-[90vw] xl:h-150 xl:w-154.5 h-95 border-[#3637497D] border rounded-[10px] xl:rounded-[23px]">
                    <img className="py-5 pt-9" src={project} alt="" />
                    <h3 className="text-[18px] xl:text-[32px] font-bold">3D Solar System Planets to Explore</h3>
                    <p className="text-[12px] xl:text-[20px] text-[#BEC1DD]">Explore the wonders of our solar system with this <br /> captivating 3D simulation of the planets using Three.js.</p>
                    <div className="relative">
                        {/* img-wrapper */}
                        <div className="relative">
                            <img className="absolute left-0 xl:w-12 xl:h-12" src={react} alt="react" />
                            <img className="absolute left-7.5 xl:left-10 xl:w-12 xl:h-12" src={tailwind} alt="tailwind" />
                            <img className="absolute left-15 xl:left-20 xl:w-12 xl:h-12" src={ts} alt="ts" />
                            <img className="absolute left-22.5 xl:left-30 xl:w-12 xl:h-12" src={triangle} alt="triangle" />
                            <img className="absolute left-30 xl:left-39.5 xl:w-12 xl:h-12" src={m} alt="m" />
                        </div>
                        {/* text-wrapper */}
                        <div className="absolute right-0 top-2">
                            <a href="#" className="text-[12px] xl:text-[20px]  text-[#CBACF9] flex gap-2 hover:underline">Check Live Site<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}