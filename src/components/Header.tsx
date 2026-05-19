import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import levlLogo from '../assets/levl-logo.png';

const navLinks = [
    { name: "Science", href: "https://www.levlhealth.com/#science" },
    { name: "App", href: "https://www.levlhealth.com/#app" },
    { name: "About", href: "https://www.levlhealth.com/about" },
    { name: "Learn", href: "https://www.levlhealth.com/learn", hiddenOnMobile: true },
    { name: "Research", href: "/" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? "bg-[var(--levl-panel-bg)]/80 backdrop-blur-md border-b border-[var(--levl-border)]" : "bg-transparent py-4"}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
                <a href="https://www.levlhealth.com/" className="flex items-center">
                    <img src={levlLogo} alt="LEVL" className="h-8 w-auto object-contain" />
                </a>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        link.href.startsWith('http') ? 
                        <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">{link.name}</a> :
                        <Link key={link.name} to={link.href} className="text-sm font-medium text-white/70 hover:text-white transition-colors">{link.name}</Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a href="https://www.levlhealth.com/checkout-mock/" className="hidden md:flex bg-white text-black px-4 py-2 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors">
                        Gain Early Access
                    </a>
                    <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 right-0 bg-[var(--levl-bg)] border-b border-[var(--levl-border)] p-4 md:hidden flex flex-col gap-4 shadow-2xl">
                    {navLinks.map((link) => {
                        if (link.hiddenOnMobile) return null;
                        return link.href.startsWith('http') ? 
                            <a key={link.name} href={link.href} className="text-lg font-medium text-white/90 py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a> :
                            <Link key={link.name} to={link.href} className="text-lg font-medium text-white/90 py-2 border-b border-white/5" onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
                    })}
                    <a href="https://www.levlhealth.com/checkout-mock/" onClick={() => setIsMobileMenuOpen(false)} className="bg-white text-black text-center px-4 py-3 rounded-xl font-medium text-lg mt-2">
                        Gain Early Access
                    </a>
                </div>
            )}
        </nav>
    );
}
