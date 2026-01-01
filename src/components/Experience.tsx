import hacker from "../assets/hacker.svg"
import hacker2 from "../assets/hacker2.svg"
import up from "../assets/up.svg"
import lamp from "../assets/lamp.svg"

export default function Experience() {
    return (
        <div className="bg-[#01041A] flex flex-col justify-center items-center gap-5 xl:gap-7.5 pt-25 ml-auto mr-auto">
            <h2 data-aos="fade-up" className="pb-0 xl:pb-7.5 text-[36px] xl:text-[48px] font-bold leading-none text-center">My <span className="text-[#CBACF9]">work experience</span></h2>
            {/* wrapper */}
            <div data-aos="fade-up" className="flex flex-col gap-5 xl:flex-row xl:gap-10">
                <div className="bg-[#0C0E23] w-[90vw] xl:w-150 h-56 xl:h-47.5 pl-5 flex flex-col xl:flex-row xl:items-center xl:justify-start xl:gap-10  gap-1 justify-center rounded-[10px] xl:rounded-[23px] xl:border-t-5 border-t-7 border border-[#3637497D]">
                       <img className="w-15 pb-3 xl:w-23" src={hacker} alt="" />                 
                       <div className="flex flex-col gap-1">
                            <h3 className="text-[20px] xl:text-[26px] font-bold">Frontend Engineer Intern</h3>
                            <p className="text-[14px] xl:text-[16px] text-[#BEC1DD]">Assisted in the development of a web-based <br /> platform using React.js, enhancing interactivity.</p>
                       </div>
                </div>
                <div className="bg-[#0C0E23] w-[90vw] xl:w-150 h-56 xl:h-47.5 pl-5 flex flex-col xl:flex-row xl:items-center xl:justify-start xl:gap-10  gap-1 justify-center rounded-[10px] xl:rounded-[23px] xl:border-t-5 border-t-7 border border-[#3637497D]">
                       <img className="w-15 pb-3 xl:w-23" src={up} alt="" />                 
                       <div className="flex flex-col gap-1">
                            <h3 className="text-[20px] xl:text-[26px] font-bold">Mobile App Dev - JSM Tech</h3>
                            <p className="text-[14px] xl:text-[16px] text-[#BEC1DD]">Designed and developed mobile app for both <br /> iOS & Android platforms using React Native.</p>
                       </div>
                </div>
            </div>

            {/* wrapper */}
            <div data-aos="fade-up" className="flex flex-col gap-5 xl:flex-row xl:gap-10">
                <div className="bg-[#0C0E23] w-[90vw] xl:w-150 h-56 xl:h-47.5 pl-5 flex flex-col xl:flex-row xl:items-center xl:justify-start xl:gap-10  gap-1 justify-center rounded-[10px] xl:rounded-[23px] xl:border-t-5 border-t-7 border border-[#3637497D]">
                       <img className="w-15 pb-3 xl:w-26 h-24.5" src={lamp} alt="" />                 
                       <div className="flex flex-col gap-1">
                            <h3 className="text-[20px] xl:text-[26px] font-bold">Freelance App Dev Project</h3>
                            <p className="text-[14px] xl:text-[16px] text-[#BEC1DD]">Led the dev of a mobile app for a client, from <br /> initial concept to deployment on app stores.</p>
                       </div>
                </div>
                <div className="bg-[#0C0E23] w-[90vw] xl:w-150 h-56 xl:h-47.5 pl-5 flex flex-col xl:flex-row xl:items-center xl:justify-start xl:gap-10  gap-1 justify-center rounded-[10px] xl:rounded-[23px] xl:border-t-5 border-t-7 border border-[#3637497D]">
                       <img className="w-15 pb-3 xl:w-23" src={hacker2} alt="" />                 
                       <div className="flex flex-col gap-1">
                            <h3 className="text-[20px] xl:text-[26px] font-bold">Lead Frontend Developer</h3>
                            <p className="text-[14px] xl:text-[16px] text-[#BEC1DD]">Developed and maintained user-facing <br /> features using modern frontend technologies.</p>
                       </div>
                </div>
            </div>

        </div>
    )
}