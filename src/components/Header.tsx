export default function Header() {
    return (
        <header className="w-[90vw] ml-auto mr-auto pt-10 flex justify-center items-center">
            <ul className="w-full md:w-113 md:h-16.5 md:bg-[#0B0D22] flex justify-around items-center text-[#C1C2D3] rounded-[13px] border-2 border-[#1B1E33] h-14 ">
                <li><a className="hover:border-b-2 hover:pb-1 hover:text-white transition-all border-[white] text-[14px] md:text-[16px]"href="#">About</a></li>
                <li><a className="hover:border-b-2 hover:pb-1 hover:text-white transition-all border-[white] text-[14px] md:text-[16px]"href="#">Projects</a></li>
                <li><a className="hover:border-b-2 hover:pb-1 hover:text-white transition-all border-[white] text-[14px] md:text-[16px]"href="#">Testimonials</a></li>
                <li><a className="hover:border-b-2 hover:pb-1 hover:text-white transition-all border-[white] text-[14px] md:text-[16px]"href="#">Contact</a></li>
            </ul>
        </header>
    )
}