import pc from "../assets/pc.svg"
import pink from "../assets/pink.svg"
import yellow from "../assets/yellow.svg"
import world from "../assets/world.svg"
import light from "../assets/light.png"
import background from "../assets/Background.png"
import message from "../assets/input.png"
import blur from "../assets/phoneblur.svg"
import copy from "../assets/copy.svg"
import math from "../assets/math.svg"

export default function About() {
    return (
        <div className="pt-16 lg:pt-37.5 flex flex-col gap-5 ml-auto mr-auto">
            {/* First big wrapper */}
            <div className="flex flex-col gap-5 lg:flex-row">
                {/* left-wrapper */}
                <div className="flex flex-col justify-center items-center border rounded-[10px] xl:rounded-[23px] border-[#363749] relative w-[90vw] md:w-98 h-76.5 lg:w-172 lg:h-135">
                    <img className="rounded-[10px] xl:rounded-[23px] xl:w-full h-full w-full"src={pc} alt="pc" />
                    <button className="absolute top-45 left-65 lg:top-85 lg:left-125"><img className="lg:w-35 lg:h-15" src={yellow} alt="yellow" /></button>
                    <button className="absolute top-13 left-5 lg:left-10 lg:top-20"><img className="lg:w-37.5 lg:h-15" src={pink} alt="pink" /></button>
                    <h2 className="absolute top-45 lg:top-95 left-5 lg:left-10 text-[20px] lg:text-[32px] font-bold leading-6 lg:leading-9">I prioritize client <br /> collaboration, fostering <br /> open communication </h2>
                </div>
                {/* right-wrapper */}
                <div className="flex flex-col gap-5 xl:gap-7">
                    {/* 1-wrapper */}
                    <div className="border border-[#3637497D] rounded-[10px] xl:rounded-[23px] relative w-[90vw] md:w-99.5 lg:w-130 lg:h-64 h-49">
                        <img className="w-full absolute top-21 z-10" src={world} alt="world" />
                        <img className="w-full absolute top-0 h-49 lg:h-auto rounded-[10px] xl:rounded-[23px]" src={light} alt="" />
                        <h2 className="absolute top-5 lg:top-10 left-5 lg:left-10 text-[20px] lg:text-[32px] font-bold leading-6 lg:leading-9">I’m very flexible with time zone communications</h2>
                        <button className="z-10 top-20 left-10 lg:top-40 lg:left-10 bg-[#161A31] text-[10px] opacity-70 absolute w-11 h-6 rounded-lg border border-[#6971A266] cursor-pointer"><a href="#">USA</a></button>
                        <button className="z-10 top-40 left-35 lg:top-48 lg:left-55 bg-[#161A31] text-[10px] opacity-70 absolute w-16 h-6 rounded-lg border border-[#6971A266] cursor-pointer"><a href="#">Germany</a></button>
                        <button className="z-10 top-20 left-60 lg:top-35 lg:left-100 bg-[#161A31] text-[10px] opacity-70 absolute w-15 h-6 rounded-lg border border-[#6971A266] cursor-pointer"><a href="#">Russia</a></button>
                    </div>
                    {/* 2-wrapper */}
                    <div className="w-[90vw] md:w-99 relative overflow-hidden bg-[#01041A] h-49 xl:w-130 lg:h-64 border border-[#3637497D] rounded-[10px] xl:rounded-[23px] flex justify-end items-center gap-1">
                        {/* text-wrapper */}
                        <div className="flex flex-col justify-center items-center absolute left-3">
                            <p className="text-center text-[10px] xl:text-[14px] text-[#C1C2D3]">I constantly try to improve</p>
                            <h2 className="text-[18px] xl:text-[32px]  font-bold">My tech stack</h2>
                        </div>
                        {/* scroll-wrapper */}
                        <div className="flex gap-2 text-[10px]">
                            <div className="h-48 overflow-y-scroll flex flex-col gap-2 bg-[#01041A] rounded-lg mt-10"
                            style={{ scrollbarWidth: "none" }}
                            >
                            <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">ReactJs</button>
                            <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Typescript</button>
                            <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Express</button>
                            <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Python</button>
                            <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Flask</button>
                            </div>

                            <div className="h-48 overflow-y-scroll flex flex-col gap-2 bg-[#01041A] rounded-lg mt-6"
                            style={{ scrollbarWidth: "none" }}
                            >
                                <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">SQL</button>
                                <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Javascript</button>
                                <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Tailwind</button>
                                <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Github</button>
                                <button className="w-27 py-4 bg-[#10132E] text-white rounded-[5px] xl:w-35 xl:py-7 xl:text-[13px]">Git bash</button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            {/* Second big wrapper */}
            <div className="flex flex-col gap-5 lg:flex-row">
                {/* left-wrapper */}
                <div className="flex flex-col gap-5 xl:gap-7">
                    <div className="h-35.5 relative border-[#3637497D] border rounded-[10px] xl:rounded-[23px] xl:w-88 xl:h-45 md:w-99.5">
                        <h2 className="absolute top-10 left-5 text-[18px] xl:text-[24px] font-bold leading-none">Tech enthusiast with a <br className="hidden xl:inline"/> passion <br className="xl:hidden"/> for development.</h2>
                        <img className="absolute " src={background} alt="background" />
                        <img className="absolute top-15.5 right-0 xl:top-25 rounded-br-[15px] xl:rounded-br-3xl" src={message} alt="message" />
                    </div>
                    <div className="h-35.5 relative border-[#3637497D] flex flex-col gap-2 justify-center items-center border rounded-[10px] xl:rounded-[23px] xl:w-88 xl:h-45 ">
                        <h2 className="leading-6 top-8 left-4 text-[18px] xl:text-[24px] font-bold text-center">Do you want to start <br className="hidden xl:inline"/> a  <br className="xl:hidden"/> project together?.</h2>
                        <img className="absolute top-0 left-0 rounded-[10px] xl:rounded-[23px] xl:h-full" src={blur} alt="background" />
                        <button className="rounded-[7px] text-[12px] gap-1 z-20 bg-[#080B21] border border-[#3637497D]  w-44 h-9.5 flex justify-center items-center"><img src={copy} alt="" />Copy my email address</button>
                    </div> 
                </div>
                {/* right-wrapper */}
                <div className="xl:w-215 xl:h-97.5 md:w-99.5 relative flex justify-between items-center border border-[#3637497D] h-44 w-[90vw] rounded-[10px] xl:rounded-[23px]">
                    {/* text-wrapper */}
                    <div className="ml-5">
                        <p className="text-[10px] xl:text-[16px] text-[#E4ECFF] absolute top-15 xl:top-40 ">THE INSIDE SCOOP</p>
                        <h2 className="text-[20px] xl:text-[32px] font-bold absolute xl:top-50 leading-none">Currently building a <br /> JS Animation library</h2>
                    </div>
                    
                    <img className="xl:w-146.5 xl:h-96" src={math} alt="math photo" />
                </div>
            </div>
        </div>
    )
}