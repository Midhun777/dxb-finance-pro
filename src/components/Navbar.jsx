import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calculator, ShieldCheck } from 'lucide-react';

const Navbar = ({ scrollToSection }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About Abin Mathew', id: 'about' },

        { name: 'EMI Calculator', id: 'calculator' },
        { name: 'Services', id: 'services' },
    ];


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
                        <ShieldCheck className="text-emerald-400" size={24} />
                    </div>
                    <div>
                        <span className="text-xl font-bold text-slate-900 block leading-tight">Abin Mathew</span>

                        <span className="text-[10px] text-brand-secondary font-bold uppercase tracking-wider block leading-tight">Finance Expert</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-sm font-semibold text-slate-600 hover:text-brand-primary transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                    <a
                        href="https://wa.me/971553536448"
                        className="btn-primary flex items-center gap-2 py-2 px-6 text-sm"
                    >
                        <Phone size={16} />
                        Consult Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-2xl animate-in slide-in-from-top-4 duration-300">
                    <div className="p-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => {
                                    scrollToSection(link.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-left py-2 font-semibold text-slate-700 hover:text-brand-secondary transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}
                        <a
                            href="https://wa.me/971553536448"
                            className="btn-secondary w-full flex items-center justify-center gap-2"
                        >
                            <Phone size={20} />
                            Free Consultation
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
