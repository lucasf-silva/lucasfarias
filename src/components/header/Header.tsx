import { useState } from "react";
import { NavDesktop, MobileMenu } from "./_components";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header data-aos="fade-down" className="rounded-lg flex justify-between items-center h-16 px-6 bg-[#212227]">
            <h1 className="text-2xl font-semibold text-white">Lucas Farias</h1>

            <NavDesktop menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </header>
    )
}

export { Header }