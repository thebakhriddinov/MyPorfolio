import { smoothScrollTo } from '../useSmoothScrool';

export default function Header() {
    return (
        <header className="bg-[#01041A] w-[90vw] ml-auto mr-auto pt-10 lg:pt-15 flex justify-center items-center">
            <ul className="w-full md:w-113 md:h-16.5 lg:font-medium md:bg-[#0B0D22] flex justify-around items-center text-[#C1C2D3] rounded-[13px] border-2 border-[#1B1E33] h-14 ">
                <button 
                className='cursor-pointer border-transparent border-b-2 hover:border-b-2 duration-200 hover:text-white hover:border-[white] text-[14px] md:text-[16px]' 
                onClick={() => smoothScrollTo("about", 900)}>About</button>
                <button 
                className='cursor-pointer border-transparent border-b-2 hover:border-b-2 duration-200 hover:text-white hover:border-[white] text-[14px] md:text-[16px]' 
                onClick={() => smoothScrollTo("projects", 900)}>Projects</button>
                <button 
                className='cursor-pointer border-transparent border-b-2 hover:border-b-2 duration-200 hover:text-white hover:border-[white] text-[14px] md:text-[16px]' 
                onClick={() => smoothScrollTo("testimonials", 900)}>Testimonials</button>
                <button 
                className='cursor-pointer border-transparent border-b-2 hover:border-b-2 duration-200 hover:text-white hover:border-[white] text-[14px] md:text-[16px]' 
                onClick={() => smoothScrollTo("contact", 900)}>Contact</button>

            </ul>
        </header>
    )
}