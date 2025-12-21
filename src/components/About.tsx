import pc from "../assets/pc.svg"
import pink from "../assets/pink.svg"
import yellow from "../assets/yellow.svg"
import world from "../assets/world.svg"
import light from "../assets/light.png"

export default function About() {
    return (
        <div className="pt-16 lg:pt-37.5 flex flex-col gap-20 ml-auto mr-auto">
            {/* First big wrapper */}
            <div className="flex flex-col gap-10 lg:flex-row">
                {/* left-wrapper */}
                <div className="flex flex-col justify-center items-center border rounded-[10px] border-[#363749] relative w-[90vw] md:w-99.5 h-69 lg:w-172 lg:h-135">
                    <img className="rounded-[10px] xl:w-full"src={pc} alt="pc" />
                    <button className="absolute top-45 left-65 lg:top-85 lg:left-125"><img className="lg:w-35 lg:h-15" src={yellow} alt="yellow" /></button>
                    <button className="absolute top-13 left-5 lg:left-10 lg:top-20"><img className="lg:w-37.5 lg:h-15" src={pink} alt="pink" /></button>
                    <h2 className="absolute top-45 lg:top-95 left-5 lg:left-10 text-[20px] lg:text-[32px] font-bold leading-6 lg:leading-9">I prioritize client <br /> collaboration, fostering <br /> open communication </h2>
                </div>
                {/* right-wrapper */}
                <div className="flex flex-col gap-10 xl:gap-7">
                    {/* 1-wrapper */}
                    <div className="border border-[#3637497D] rounded-[10px] relative w-[90vw] md:w-99.5 lg:w-130 lg:h-64 h-49">
                        <img className="w-full absolute top-21 z-10" src={world} alt="world" />
                        <img className="w-full absolute top-0 h-49 lg:h-auto rounded-[10px]" src={light} alt="" />
                        <h2 className="absolute top-5 lg:top-10 left-5 lg:left-10 text-[20px] lg:text-[32px] font-bold leading-6 lg:leading-9">I’m very flexible with time zone communications</h2>
                        <button className="top-20 left-10 lg:top-40 lg:left-10 bg-[#161A31] text-[10px] opacity-70 absolute w-11 h-6 rounded-lg border border-[#6971A266] ">USA</button>
                        <button className="top-40 left-35 lg:top-48 lg:left-55 bg-[#161A31] text-[10px] opacity-70 absolute w-16 h-6 rounded-lg border border-[#6971A266] ">Germany</button>
                        <button className="top-20 left-60 lg:top-35 lg:left-100 bg-[#161A31] text-[10px] opacity-70 absolute w-15 h-6 rounded-lg border border-[#6971A266] ">Russia</button>
                    </div>
                    {/* 2-wrapper */}
                    <div className="overflow-hidden bg-[#01041A] h-49 xl:w-130 lg:h-64 border border-[#3637497D] rounded-[10px] flex justify-center items-center gap-1">
                        {/* text-wrapper */}
                        <div className="flex flex-col justify-center items-center">
                            <p className="text-center text-[10px] xl:text-[14px] text-[#C1C2D3]">I constantly try to improve</p>
                            <h2 className="text-[20px] xl:text-[32px]  font-bold">My tech stack</h2>
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
            <div></div>
        </div>
    )
}