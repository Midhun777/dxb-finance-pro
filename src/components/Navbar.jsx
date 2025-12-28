import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calculator, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
        { name: 'About', id: 'about' },
        { name: 'Calculator', id: 'calculator' },
        { name: 'Services', id: 'services' },
    ];


    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-8 h-8 bg-slate-900 rounded-[10px] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                        <ShieldCheck className="text-emerald-400" size={20} />
                    </div>
                    <div>
                        <span className="text-lg font-black text-slate-900 block leading-none italic tracking-tighter">ABIN MATHEW</span>
                        <span className="text-[7px] text-brand-secondary font-black uppercase tracking-[0.25em] block mt-0.5">Strategic Finance</span>
                    </div>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            className="text-[11px] font-bold uppercase tracking-widest text-slate-500 hover:text-brand-secondary transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-secondary transition-all group-hover:w-full" />
                        </button>
                    ))}
                    <a
                        href="https://wa.me/971553536448"
                        className="btn-primary !py-1.5 !px-4 !text-[9px] !rounded-md flex items-center gap-1"
                    >
                        <Phone size={10} />
                        Consult Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-slate-900 p-2 glass rounded-xl z-[110]"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[101] md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="md:hidden fixed top-24 left-4 right-4 z-[102] glass-dark rounded-[32px] overflow-hidden shadow-2xl p-8 flex flex-col gap-8"
                        >
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <button
                                        key={link.id}
                                        onClick={() => {
                                            scrollToSection(link.id);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="text-left font-black text-white text-2xl tracking-tight hover:text-emerald-400 transition-colors"
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </div>
                            <a
                                href="https://wa.me/971553536448"
                                className="btn-secondary w-full flex items-center justify-center gap-3 py-5 text-lg"
                            >
                                <Phone size={24} />
                                Free Consultation
                            </a>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
