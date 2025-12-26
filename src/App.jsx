import React, { useState, useEffect } from 'react';
import { MessageCircle, Calculator, TrendingUp, ShieldCheck, ArrowRight, ExternalLink, Linkedin } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';
import CalculatorComponent from './components/Calculator';
import Navbar from './components/Navbar';
import LeadPathForm from './components/LeadPathForm';




const App = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-brand-secondary selection:text-white">
      <Navbar scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block py-2 px-4 mb-8 text-xs font-bold tracking-[0.2em] uppercase text-brand-secondary bg-emerald-500/10 rounded-full border border-emerald-500/20"
              >
                Personal Finance Expert UAE
              </motion.span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 mb-8 leading-[0.9]">
                Master Your Finances. <br />
                <span className="brand-gradient-text">Secure Your Future.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Expert guidance on <span className="text-slate-900">Personal Loans</span>,
                <span className="text-slate-900"> Credit Cards</span>, and
                <span className="text-slate-900"> Loan Buyouts</span>. Strategy-driven financial growth in the UAE.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  onClick={() => scrollToSection('select-path')}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3 group"
                >
                  <Calculator size={22} className="group-hover:rotate-12 transition-transform" />
                  Check Loan Eligibility
                </button>
                <a
                  href="https://wa.me/971553536448"
                  className="btn-secondary w-full sm:w-auto flex items-center justify-center gap-3 group"
                >
                  <MessageCircle size={22} className="group-hover:scale-110 transition-transform" />
                  Chat with Abin
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Ambient Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.4, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-emerald-100/30 rounded-full blur-[160px]"
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-slate-200/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* About Me Section - Refined Glass Look */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto glass rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden"
          >
            {/* Inner background glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

            <div className="flex-1 space-y-8 relative z-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                  Meet Abin Mathew: <br />
                  <span className="text-brand-secondary">Strategic Financial Partner</span>
                </h2>
                <div className="w-20 h-1.5 bg-brand-secondary rounded-full" />
              </div>

              <div className="space-y-6">
                <p className="text-2xl text-slate-800 font-bold leading-relaxed italic border-l-4 border-emerald-500 pl-6">
                  "In the fast-paced UAE, you need more than just a loan—you need a strategy."
                </p>
                <p className="text-slate-600 leading-relaxed text-xl font-medium">
                  As an active investor in <span className="text-slate-900 font-bold">Global Stocks & Crypto</span>, I analyze your financial health with the same precision I use in <span className="text-slate-900 font-bold">Options & Futures</span> trading.
                </p>
              </div>

              <div className="pt-8 flex flex-wrap items-center gap-10">
                <a
                  href="https://wa.me/971553536448"
                  className="group flex items-center gap-3 text-brand-secondary font-black text-lg hover:gap-5 transition-all"
                >
                  Work with Abin Mathew <ArrowRight size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/abin-mathew-928451392"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-blue-600 font-black text-lg hover:gap-5 transition-all"
                >
                  Connect on LinkedIn <Linkedin size={24} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-2/5 relative">
              <div className="aspect-[4/5] bg-slate-900 rounded-[32px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 group">
                <img
                  src="/abin-professional-lean.png"
                  alt="Abin Mathew"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative tags */}
              <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-2xl shadow-xl z-20 animate-bounce-slow">
                <p className="text-brand-secondary font-black text-sm uppercase tracking-widest">Expert Advisor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Select Your Path Section */}
      <div id="select-path" className="py-16">
        <div className="container mx-auto px-4 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Choose Your Strategic Path</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Select the service that fits your current financial objective.</p>
        </div>
        <LeadPathForm />
      </div>

      {/* Services Section - Bento Grid Upgrade */}
      <section id="services" className="py-32 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-[200px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">Strategic Debt Solutions</h2>
            <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-12 gap-6 auto-rows-[250px] md:auto-rows-[300px]">
            {/* Personal Loans */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-4 glass-dark p-10 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:bg-emerald-500 group-hover:text-brand-primary transition-all">01</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Personal Loans</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed group-hover:text-slate-200 transition-colors">
                Tailored financing with UAE's most competitive rates. Immediate approvals for your goals.
              </p>
            </motion.div>

            {/* Loan Buyouts - Principal Item */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-8 glass-dark p-10 flex flex-col justify-between border-emerald-500/40 relative overflow-hidden group"
            >
              <div className="absolute -top-4 right-10 bg-emerald-500 text-brand-primary px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest z-20 shadow-xl">Recommended</div>
              <div className="space-y-6 relative z-10">
                <div className="w-14 h-14 bg-emerald-500 text-brand-primary rounded-2xl flex items-center justify-center font-black text-2xl">02</div>
                <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Loan Buyouts</h3>
                <p className="text-slate-300 text-xl leading-relaxed max-w-xl group-hover:text-white transition-colors">
                  Stop overpaying on interest. Consolidate your existing debt into a single, lower-cost monthly payment and regain control of your cash flow.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -mb-32 -mr-32 group-hover:bg-emerald-500/10 transition-all" />
            </motion.div>

            {/* Credit Card Optimization */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-7 glass-dark p-10 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center font-black text-2xl group-hover:bg-emerald-500 group-hover:text-brand-primary transition-all">03</div>
                <h3 className="text-2xl font-black uppercase tracking-tighter">Credit Optimization</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed max-w-md group-hover:text-slate-200 transition-colors">
                Don’t just spend—earn. Select and manage cards with top-tier cashback, miles, and rewards tailored to your lifestyle.
              </p>
            </motion.div>

            {/* CTA Bento Box */}
            <motion.div
              whileHover={{ y: -10 }}
              className="md:col-span-5 bg-emerald-500 p-10 flex flex-col justify-center items-center text-brand-primary rounded-3xl group cursor-pointer"
              onClick={() => window.open('https://wa.me/971553536448', '_blank')}
            >
              <MessageCircle size={64} className="mb-6 group-hover:scale-125 transition-transform duration-500" />
              <h3 className="text-3xl font-black text-center mb-4">Start Now</h3>
              <p className="text-brand-primary font-bold text-center">Talk to a Specialist Now</p>
              <ArrowRight size={24} className="mt-6 animate-pulse-subtle" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Section - Premium Shadow Box */}
      <section id="calculator" className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-slate-50 -z-10" />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto premium-card !bg-white md:p-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black mb-6">Check Your Savings Potential</h2>
              <p className="text-xl text-slate-600 font-medium">Enter your details for an instant debt optimization strategy.</p>
            </div>
            <CalculatorComponent />
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/971553536448"
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-6 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.4)] animate-pulse-subtle"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={40} fill="white" />
      </motion.a>

      {/* Footer - Premium Dark Refinement */}
      <footer className="bg-slate-900 border-t border-white/5 py-24 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-black tracking-tighter brand-gradient-text !from-emerald-400 !to-white mb-4 italic">ABIN MATHEW</h2>
            <p className="text-emerald-500 font-bold tracking-[0.3em] uppercase text-sm">UAE Personal Finance Expert</p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://wa.me/971553536448"
              className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-emerald-500 hover:text-brand-primary transition-all group"
              aria-label="WhatsApp"
            >
              <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/abin-mathew-928451392"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="space-y-4 text-slate-500 font-medium">
            <p className="text-brand-secondary font-black text-2xl">055 353 6448</p>
            <p>© {new Date().getFullYear()} Strategic Finance UAE. All rights reserved.</p>
            <p className="text-[10px] uppercase tracking-widest opacity-50 max-w-md mx-auto leading-loose pt-8">
              Disclaimer: Financial outcomes depend on individual bank assessments. Calculations are estimates and do not constitute a legal binding offer.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
