import plus from "../assets/plus.svg"

export default function Approach() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 xl:gap-7.5 pt-25 ml-auto mr-auto">
            <h2 className="pb-5 xl:pb-7.5 text-[36px] xl:text-[48px] font-bold leading-none text-center">My <span className="text-[#CBACF9]">approach</span></h2>
            {/* wrapper */}
            <div className="flex flex-col gap-10.5 xl:flex-row">
                <div className="xl:w-97 xl:h-155 bg-linear-to-b from-[#04071D] to-[#0C0E23] relative w-[90vw] h-125 flex justify-center items-center rounded-[10px] border border-[#3637497D]">
                    <img className="absolute -top-4 -left-3" src={plus} alt="plus" />
                    <img className="absolute -top-4 -right-3" src={plus} alt="plus" />
                    <img className="absolute -bottom-4 -left-3" src={plus} alt="plus" />
                    <img className="absolute -bottom-4 -right-3" src={plus} alt="plus" />
                    <button className="xl:w-40 xl:h-18 xl:text-[30px] cursor-pointer bg-gradie text-[25px] text-[#CBACF9] font-bold border rounded-[10px] border-[#3637497D] w-34.25 h-16.25">Phase 1</button>
                </div>
                <div className="xl:w-97 xl:h-155 bg-linear-to-b from-[#04071D] to-[#0C0E23] relative w-[90vw] h-125 flex flex-col gap-5 justify-center items-center rounded-[10px] border border-[#3637497D]">
                    <img className="absolute -top-4 -left-3" src={plus} alt="plus" />
                    <img className="absolute -top-4 -right-3" src={plus} alt="plus" />
                    <img className="absolute -bottom-4 -left-3" src={plus} alt="plus" />
                    <img className="absolute -bottom-4 -right-3" src={plus} alt="plus" />
                    <button className="xl:w-25 xl:h-10.75 cursor-pointer bg-gradie text-[#CBACF9] font-bold border rounded-[10px] border-[#3637497D] w-34.25 h-16.25">Phase 2</button>
                    <h3 className="text-center text-[30px] font-bold leading-none">Development & <br /> Progress Update</h3>
                    <p className="text-center text-[#E4ECFF]">Once we agree on the plan, I cue my lofi <br /> playlist and dive into coding. From initial <br /> sketches to polished code, I keep you <br /> updated every step of the way.</p>
                </div>
                <div className="xl:w-97 xl:h-155 bg-linear-to-b from-[#04071D] to-[#0C0E23] relative w-[90vw] h-125 flex justify-center items-center rounded-[10px] border border-[#3637497D]">
                    <img className="absolute -top-4 -left-3" src={plus} alt="plus" />
                    <img className="absolute -top-4 -right-3" src={plus} alt="plus" />
                    <img className="absolute -bottom-4 -left-3" src={plus} alt="plus" />
                    <img className="absolute -bottom-4 -right-3" src={plus} alt="plus" />
                    <button className="xl:w-40 xl:h-18 xl:text-[30px] cursor-pointer bg-gradie text-[25px] text-[#CBACF9] font-bold border rounded-[10px] border-[#3637497D] w-34.25 h-16.25">Phase 3</button>
                </div>

            </div>
        </div>
    )
}