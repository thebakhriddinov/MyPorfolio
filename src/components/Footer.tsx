import arrow from "../assets/Arrow.png"
import insta from "../assets/insta.svg"
import x from "../assets/x.svg"
import github from "../assets/github.svg"
import whatsap from "../assets/whatsap.svg"
import linkedn from "../assets/linkedn.svg"

export default function Footer() {
    return (
        <div id="contact" className="bg-[#01041A] pb-10 xl:pt-51.75 flex flex-col justify-center items-center gap-5 xl:gap-7.5 pt-37 ml-auto mr-auto">
            <div className="flex flex-col justify-center items-center gap-5">
                <h2 data-aos="fade-up" className="pb-5 xl:pb-7.5 text-[36px] xl:text-[48px] font-bold leading-none text-center">Ready to take <span className="text-[#CBACF9]">your</span> <br className="xl:hidden"/> digital <br className="hidden xl:flex"/> presence to the next level?</h2>
                <p data-aos="fade-up" className="text-center text-[#C1C2D3] ">Reach out to me today and let's discuss how I can <br className="xl:hidden"/> help you achieve your goals.</p>
                <a data-aos="fade-up" href="https://t.me/thebakhriddinov" target="_blank" className="cursor-pointer xl:w-59.75 xl:h-16.5 xl:rounded-[14px] h-14.75 w-[90vw] bg-linear-to-r border border-[#2E3354] hover:border-[#CBACF9] duration-300 rounded-md from-[#161A31] to-[#06091F] flex justify-center items-center gap-3">Contact Me <img src={arrow} alt="" /></a>
            </div>

            <div className="pt-22.5 xl:flex xl:gap-180 xl:items-center">
                <div className="xl:h-10 xl:flex xl:justify-center xl:items-center">
                    <p className="text-center font-light italic">Copyright ©2024 Bakhriddinov Mustafo</p>
                </div>
                {/* app-wrapper */}
                <div className="flex gap-7.5 mt-5 xl:mt-0 xl:gap-3">
                    <a className="hover:scale-120 transition-all shadow-[inset_0_0px_6px_white] w-10 h-10 rounded-lg flex items-center justify-center" href="https://www.instagram.com/thebakhriddinov/" target="_blank"><img src={insta} alt="insta" /></a>
                    <a className="hover:scale-120 transition-all shadow-[inset_0_0px_6px_white] w-10 h-10 rounded-lg flex items-center justify-center" href="#"><img src={x} alt="x" /></a>
                    <a className="hover:scale-120 transition-all shadow-[inset_0_0px_6px_white] w-10 h-10 rounded-lg flex items-center justify-center" href="https://github.com/thebakhriddinov" target="_blank"><img src={github} alt="github" /></a>
                    <a className="hover:scale-120 transition-all shadow-[inset_0_0px_6px_white] w-10 h-10 rounded-lg flex items-center justify-center" href="https://wa.me/998701263239" target="_blank"><img src={whatsap} alt="whatsap" /></a>
                    <a className="hover:scale-120 transition-all shadow-[inset_0_0px_6px_white] w-10 h-10 rounded-lg flex items-center justify-center" href="https://www.linkedin.com/in/thebakhriddinov/" target="_blank"><img src={linkedn} alt="linkedn" /></a>
                </div>
            </div>
        </div>
    )
}