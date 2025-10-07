import { navLinks } from "../navLinks";

interface NavDesktopProps {
    menuOpen: boolean;
    setMenuOpen: (menuOpen: boolean) => void;
}

function NavDesktop({ menuOpen, setMenuOpen }: NavDesktopProps) {
    return (
        <>
            <nav className="hidden md:flex space-x-4">
                {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="text-white">
                        {link.label}
                    </a>
                ))}
            </nav>
            <button
                type="button"
                className="md:hidden  cursor-pointer inline-flex items-center justify-center p-2 rounded text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                aria-label="Abrir menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(true)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                </svg>
            </button>
        </>
    )
}

export { NavDesktop }