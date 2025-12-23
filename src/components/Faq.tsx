import michael from "../assets/michael.svg"
import blur3 from "../assets/blur3.png"
import logo1 from "../assets/logo1.svg"
import logo2 from "../assets/logo2.svg"
import logo3 from "../assets/logo3.svg"
import logo4 from "../assets/logo4.svg"
import logo5 from "../assets/logo5.svg"

export default function Faq() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 pt-25 ml-auto mr-auto">
            <h2 className="pb-0 xl:pb-7.5 text-[36px] xl:text-[48px] font-bold leading-none text-center">Kind words from <br className="xl:hidden flex"/><span className="text-[#CBACF9]">satisfied clients</span></h2>
            {/* Horizontal scroll */}

            <div className="flex gap-2 text-[10px]">
                <div
                    className="h-75.5 w-[90vw] overflow-x-auto flex gap-2 xl:gap-12 rounded-lg mt-10"
                    style={{ scrollbarWidth: "none" }}
                >
                    {/* card */}
                    <div className="relative shrink-0 w-[90vw] xl:w-227.5 h-75.5 text-white rounded-[5px] xl:rounded-[23px] flex flex-col gap-3 xl:gap-8 pl-5 xl:pl-12 justify-center border-[#3637497D] border">
                        <p className="text-[#CBCF9] text-[14px] xl:text-[20px] leading-6.5 font-light z-10">
                        Collaborating with Mustafo was an absolute<br className="xl:hidden"/>
                        pleasure. His professionalism, promptness, <br className="hidden xl:block"/> and<br  className="xl:hidden"/>
                        dedication to delivering exceptional results were <br className="xl:hidden"/>
                        evident throughout our project. <br className="hidden xl:block"/> Mustafo's <br className="xl:hidden"/>
                        enthusiasm for every facet of development truly<br className="xl:hidden"/>
                        stands out.If you're seeking to <br className="hidden xl:block"/> elevate your<br className="xl:hidden"/>
                        website and elevate your brand,  is the <br className="xl:hidden"/>
                        ideal partner.
                        </p>
                        <img className="absolute top-38 md:top-0 md:h-75" src={blur3} alt="blur" />

                        <div className="flex items-center gap-2">
                            {/* left */}
                            <div>
                                <img src={michael} alt="michael" />
                            </div>
                            {/* right */}
                            <div>
                                <h4 className="text-[16px] xl:text-[18px] font-semibold">Michael Johnson</h4>
                                <p className="text-[12px] xl:text-[14px] text-[#C1C2D3] font-light">Director of AlphaStream Technologies</p>
                            </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="relative shrink-0 w-[90vw] xl:w-227.5 h-75.5 text-white rounded-[5px] xl:rounded-[23px] flex flex-col gap-3 xl:gap-8 pl-5 xl:pl-12 justify-center border-[#3637497D] border">
                        <p className="text-[#CBCF9] text-[14px] xl:text-[20px] leading-6.5 font-light z-10">
                        Collaborating with Mustafo was an absolute<br className="xl:hidden"/>
                        pleasure. His professionalism, promptness, <br className="hidden xl:block"/> and<br  className="xl:hidden"/>
                        dedication to delivering exceptional results were <br className="xl:hidden"/>
                        evident throughout our project. <br className="hidden xl:block"/> Mustafo's <br className="xl:hidden"/>
                        enthusiasm for every facet of development truly<br className="xl:hidden"/>
                        stands out.If you're seeking to <br className="hidden xl:block"/> elevate your<br className="xl:hidden"/>
                        website and elevate your brand,  is the <br className="xl:hidden"/>
                        ideal partner.
                        </p>
                        <img className="absolute top-38 md:top-0 md:h-75" src={blur3} alt="" />

                        <div className="flex items-center gap-2">
                            {/* left */}
                            <div>
                                <img src={michael} alt="michael" />
                            </div>
                            {/* right */}
                            <div>
                                <h4 className="text-[16px] xl:text-[18px] font-semibold">Michael Johnson</h4>
                                <p className="text-[12px] xl:text-[14px] text-[#C1C2D3] font-light">Director of AlphaStream Technologies</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative shrink-0 w-[90vw] xl:w-227.5 h-75.5 text-white rounded-[5px] xl:rounded-[23px] flex flex-col gap-3 xl:gap-8 pl-5 xl:pl-12 justify-center border-[#3637497D] border">
                        <p className="text-[#CBCF9] text-[14px] xl:text-[20px] leading-6.5 font-light z-10">
                        Collaborating with Mustafo was an absolute<br className="xl:hidden"/>
                        pleasure. His professionalism, promptness, <br className="hidden xl:block"/> and<br  className="xl:hidden"/>
                        dedication to delivering exceptional results were <br className="xl:hidden"/>
                        evident throughout our project. <br className="hidden xl:block"/> Mustafo's <br className="xl:hidden"/>
                        enthusiasm for every facet of development truly<br className="xl:hidden"/>
                        stands out.If you're seeking to <br className="hidden xl:block"/> elevate your<br className="xl:hidden"/>
                        website and elevate your brand,  is the <br className="xl:hidden"/>
                        ideal partner.
                        </p>
                        <img className="absolute top-38 md:top-0 md:h-75" src={blur3} alt="" />

                        <div className="flex items-center gap-2">
                            {/* left */}
                            <div>
                                <img src={michael} alt="michael" />
                            </div>
                            {/* right */}
                            <div>
                                <h4 className="text-[16px] xl:text-[18px] font-semibold">Michael Johnson</h4>
                                <p className="text-[12px] xl:text-[14px] text-[#C1C2D3] font-light">Director of AlphaStream Technologies</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* logo-wrapper */}
            <div className="mt-8 xl:mt-18 flex flex-wrap justify-center gap-2 xl:gap-10 w-100 xl:w-[90vw]">
                <img className="xl:w-49 xl:h-9.5" src={logo1} alt="logo" />
                <img className="xl:w-49 xl:h-9.5" src={logo2} alt="logo" /> <br className="xl:hidden"/>
                <img className="xl:w-49 xl:h-9.5" src={logo3} alt="logo" />
                <img className="xl:w-49 xl:h-9.5" src={logo4} alt="logo" />
                <img className="xl:w-49 xl:h-9.5" src={logo5} alt="logo" />
            </div>

        </div>
    )
}