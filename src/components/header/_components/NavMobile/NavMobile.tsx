import { navLinks } from "../navLinks"

interface MobileMenuProps {
    menuOpen: boolean
    setMenuOpen: (open: boolean) => void
}

function MobileMenu({ menuOpen, setMenuOpen }: MobileMenuProps) {
    return (
        <div className={`md:hidden ${menuOpen ? '' : 'hidden'}`}>
            <div
                className="fixed inset-0 bg-black/40"
                onClick={() => setMenuOpen(false)}
            />
            <aside className="fixed top-0 right-0 h-full w-64 bg-[#212227] shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <span className="text-white text-xl font-semibold">Menu</span>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                        aria-label="Fechar menu"
                        onClick={() => setMenuOpen(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav className="flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="text-white" onClick={() => setMenuOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </aside>
        </div>
    )
}

export { MobileMenu }