import arrow from "../assets/Arrow.png"

export default function Hero() {
    return (
        <div className="flex flex-col justify-center items-center pt-16">
            <p className="text-[12px] text-[#E4ECFF] md:text-14px lg:text-[16px] pb-5 xl:pb-5.5 font-normal">Dynamic Web Magic with Next.js</p>
            <h1 className="pb-6 xl:pb-7.5 text-[48px] xl:text[72px] font-bold leading-none text-center">Transforming Concepts into <br className="hidden lg:block"/> Seamless <span className="text-[#CBACF9]">User Experiences</span></h1>
            <p className="text-[16px] xl:text-[24px] xl:7.5 w-full text-center pb-5 xl:pb-[7.5] ">Hi! I’m <span className="hidden xl:inline">Bakhriddinov</span> Ozodbek, <br className="lg:hidden"/> a Next.js Developer based in Uzbekistan</p>
            <button 
            className="w-[90vw] lg:w-52 h-14 flex justify-center items-center gap-2 border-2 border-[#1B1E33] rounded-md lg:rounded-[14px]"
            style={{
                background: "linear-gradient(to right, #272A3C, #0F132A)",
            }}            >
                See my work<img className="w-3.3 h-3" src={arrow} alt="" />
            </button>
        </div>
    )
}