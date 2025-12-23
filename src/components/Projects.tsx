import react from "../assets/react1.svg"
import tailwind from "../assets/tailwind.svg"
import ts from "../assets/ts.svg"
import triangle from "../assets/triangle.svg"
import arrow from "../assets/arrow.svg"
import m from "../assets/m.svg"
import temurbek2 from "../assets/temurbek.png"
import start from "../assets/start.png"
import bookmark from "../assets/bookmark.png"
import manage from "../assets/manage.png"


export default function Projects() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 pt-25 ml-auto mr-auto">
            <h2 className="pb-6 xl:pb-7.5 text-[36px] xl:text-[48px] font-bold leading-none text-center">A small selection of  <br className="xl:hidden flex"/><span className="text-[#CBACF9]">recent projects</span></h2>
            {/* Parent-wrapper */}
            <div className="flex flex-col xl:flex-row gap-5">
                {/* child-wrapper */}
                <div className="relative flex flex-col px-4 xl:px-6 gap-2 w-[90vw] h-90.5 md:w-99.5 md:h-90.5 xl:h-150 xl:w-154.5 border-[#3637497D] border rounded-[10px] xl:rounded-[23px]">
                    {/* scale */}
                    <div className="overflow-hidden relative rounded-[10px] xl:rounded-[14px] my-5 xl:my-9 mx-1 w-[80vw] h-45.5 xl:w-138 xl:h-82.5 md:w-89.5 bg-linear-to-r from-[#2D3567] to-[#151A3A] ">
                        <img className="overflow-hidden absolute top-10 left-7 md:left-12 xl:left-11 rotate-5 transition-all hover:scale-120 w-65 xl:w-118.5 xl:h-64 rounded-t-[10px]" src={temurbek2} alt="" />
                    </div>
                    <h3 className="text-[18px] xl:text-[32px] font-bold">Temurbek School Web Platform</h3>
                    <p className="text-[12px] xl:text-[20px] text-[#BEC1DD]">A modern educational platform providing an accessible and user-friendly with clean UI and responsive layouts.</p>
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
                            <a href="https://temurbekk-schooll.vercel.app/" className="text-[12px] xl:text-[20px]  text-[#CBACF9] flex gap-2 hover:underline">Check Live Site<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </div>

                {/* child-wrapper */}
                <div className="relative flex flex-col px-4 xl:px-6 gap-2 w-[90vw] h-90.5 md:w-99.5 md:h-90.5 xl:h-150 xl:w-154.5 border-[#3637497D] border rounded-[10px] xl:rounded-[23px]">
                    {/* scale */}
                    <div className="overflow-hidden relative rounded-[10px] xl:rounded-[14px] my-5 xl:my-9 mx-1 w-[80vw] h-45.5 xl:w-138 xl:h-82.5 md:w-89.5 bg-linear-to-r from-[#2D3567] to-[#151A3A] ">
                        <img className="overflow-hidden absolute top-10 left-7 md:left-12 xl:left-11 rotate-5 transition-all hover:scale-120 w-65 xl:w-118.5 xl:h-64 rounded-t-[10px]" src={start} alt="" />
                    </div>
                    <h3 className="text-[18px] xl:text-[32px] font-bold">Innovate. Grow. Succeed.</h3>
                    <p className="text-[12px] xl:text-[20px] text-[#BEC1DD]">Custom solutions that drive real results. Take the first step toward extraordinary achievements.</p>
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
                            <a href="https://start-up-three-mu.vercel.app/" className="text-[12px] xl:text-[20px]  text-[#CBACF9] flex gap-2 hover:underline">Check Live Site<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </div>

            </div>
            {/* Parent-wrapper */}
            <div className="flex flex-col xl:flex-row gap-5">
                {/* child-wrapper */}
                <div className="relative flex flex-col px-4 xl:px-6 gap-2 w-[90vw] h-90.5 md:w-99.5 md:h-90.5 xl:h-150 xl:w-154.5 border-[#3637497D] border rounded-[10px] xl:rounded-[23px]">
                    {/* scale */}
                    <div className="overflow-hidden relative rounded-[10px] xl:rounded-[14px] my-5 xl:my-9 mx-1 w-[80vw] h-45.5 xl:w-138 xl:h-82.5 md:w-89.5 bg-linear-to-r from-[#2D3567] to-[#151A3A] ">
                        <img className="overflow-hidden absolute top-10 left-7 md:left-12 xl:left-11 rotate-5 transition-all hover:scale-120 w-65 xl:w-118.5 xl:h-64 rounded-t-[10px]" src={manage} alt="" />
                    </div>
                    <h3 className="text-[18px] xl:text-[32px] font-bold">Management platform</h3>
                    <p className="text-[12px] xl:text-[20px] text-[#BEC1DD]">Manage helps teams plan tasks, track progress, and stay focused on what matters most.</p>
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
                            <a href="https://manage-landing-page-master-ozodbek.vercel.app/" className="text-[12px] xl:text-[20px]  text-[#CBACF9] flex gap-2 hover:underline">Check Live Site<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </div>

                {/* child-wrapper */}
                <div className="relative flex flex-col px-4 xl:px-6 gap-2 w-[90vw] h-90.5 md:w-99.5 md:h-90.5 xl:h-150 xl:w-154.5 border-[#3637497D] border rounded-[10px] xl:rounded-[23px]">
                    {/* scale */}
                    <div className="overflow-hidden relative rounded-[10px] xl:rounded-[14px] my-5 xl:my-9 mx-1 w-[80vw] h-45.5 xl:w-138 xl:h-82.5 md:w-89.5 bg-linear-to-r from-[#2D3567] to-[#151A3A] ">
                        <img className="overflow-hidden absolute top-10 left-7 md:left-12 xl:left-11 rotate-5 transition-all hover:scale-120 w-65 xl:w-118.5 xl:h-64 rounded-t-[10px]" src={bookmark} alt="" />
                    </div>
                    <h3 className="text-[18px] xl:text-[32px] font-bold">Bookmark web</h3>
                    <p className="text-[12px] xl:text-[20px] text-[#BEC1DD]">This allows you to bookmark your favourite website which you do not lose your access to enter website fast.</p>
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
                            <a href="https://bookmark-landing-page-ozodbek.vercel.app/" className="text-[12px] xl:text-[20px]  text-[#CBACF9] flex gap-2 hover:underline">Check Live Site<img src={arrow} alt="arrow" /></a>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}