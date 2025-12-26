import React, { useState, useEffect } from 'react';
import { MessageCircle, Calculator, TrendingUp, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CalculatorComponent from './components/Calculator';
import Navbar from './components/Navbar';



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
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 mb-6 text-sm font-semibold tracking-wide text-brand-secondary bg-emerald-50 rounded-full">
                Personal Finance Expert UAE
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6">
                Master Your Finances. <br />
                <span className="text-brand-secondary">Secure Your Future in the UAE.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Expert guidance on <span className="text-slate-900 font-semibold">Personal Loans</span>,
                <span className="text-slate-900 font-semibold"> Credit Cards</span>, and
                <span className="text-slate-900 font-semibold"> Loan Buyouts</span>. Whether you’re looking to consolidate debt or maximize your liquidity, we provide the strategy you need to thrive in the UAE market.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => scrollToSection('calculator')}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Calculator size={20} />
                  Check My Loan Eligibility
                </button>
                <a
                  href="https://wa.me/971553536448"
                  className="btn-secondary w-full sm:w-auto border border-emerald-600 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat with an Expert on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>


        {/* Background Decorations */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[120px]"></div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-slate-50 border-y border-slate-100">

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Meet Abin: Your Strategic Financial Partner</h2>
              <p className="text-lg text-slate-600 leading-relaxed italic">
                "In the fast-paced financial landscape of the UAE, you need more than just a loan—you need a strategy."
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                As an entrepreneur and active investor in the <span className="text-slate-900 font-semibold">Global Stock Markets and Cryptocurrency</span>, I understand how money moves.
                I don't just process applications; I analyze your financial health.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                My goal is to help you navigate <span className="text-slate-900 font-semibold">Personal Loans and Credit Cards</span> with the same precision I use in <span className="text-slate-900 font-semibold">Options and Futures</span> trading. Whether it’s a strategic Loan Buyout to reduce your interest or securing the right credit facility to grow your wealth, I am here to ensure you rule your personal finances.
              </p>
              <div className="pt-4">
                <a
                  href="https://wa.me/971553536448"
                  className="inline-flex items-center gap-2 text-brand-secondary font-bold hover:gap-3 transition-all"
                >
                  Work with Abin <ArrowRight size={20} />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="aspect-square bg-white rounded-3xl shadow-xl p-4 border border-slate-100 relative">
                <div className="absolute inset-4 overflow-hidden rounded-2xl">
                  <img src="/og-image.png" alt="Abin" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Buyout Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-100 ring-1 ring-slate-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Check Your Savings Potential</h2>
              <p className="text-slate-600">Enter your details for an instant debt optimization strategy.</p>
            </div>
            <CalculatorComponent />
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Strategic Debt Solutions</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-xl">01</div>
              <h3 className="text-xl font-bold uppercase tracking-wide">Personal Loans</h3>
              <p className="text-slate-300 leading-relaxed">
                Tailored financing solutions with the most competitive rates in the UAE. Fast approvals to meet your immediate needs.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-emerald-500/30 scale-105 shadow-2xl space-y-4 relative z-10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-brand-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">Recommended</div>
              <div className="w-12 h-12 bg-emerald-500 text-brand-primary rounded-xl flex items-center justify-center font-bold text-xl">02</div>
              <h3 className="text-xl font-bold uppercase tracking-wide">Loan Buyouts</h3>
              <p className="text-slate-200 leading-relaxed">
                Stop overpaying on interest. We specialize in consolidating your existing debt into a single, manageable, lower-cost monthly payment.
              </p>
            </div>

            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center font-bold text-xl">03</div>
              <h3 className="text-xl font-bold uppercase tracking-wide">Credit Card Optimization</h3>
              <p className="text-slate-300 leading-relaxed">
                Don’t just spend—earn. We help you select and manage credit cards that offer the best cashback, miles, and rewards for your lifestyle.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/971553536448"
              className="inline-flex items-center gap-3 bg-white text-brand-primary hover:bg-emerald-50 px-10 py-5 rounded-2xl font-black transition-all shadow-xl hover:-translate-y-1"
            >
              <MessageCircle size={24} />
              Talk to a Specialist Now
            </a>
          </div>
        </div>
      </section>



      {/* Trust & SEO Content / How it works */}
      <section id="how-it-works" className="py-20 bg-slate-50">

        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <ShieldCheck className="text-brand-secondary" size={48} />
              <h2 className="text-2xl font-bold">Credit Card Debt Relief Dubai</h2>
              <p className="text-slate-600 leading-relaxed">
                Finding the <span className="font-semibold text-slate-800">best interest rate loan Dubai</span> has to offer can be overwhelming.
                Whether you need a <span className="font-semibold text-slate-800">personal loan for UAE residents 5000 salary</span>
                or an <span className="font-semibold text-slate-800">instant cash loan UAE</span>, we provide expert guidance to secure the best terms.
              </p>
            </div>
            <div className="space-y-6">
              <TrendingUp className="text-brand-secondary" size={48} />
              <h2 className="text-2xl font-bold">Loan Buyout in UAE Banks</h2>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to <span className="font-semibold text-slate-800">reduce monthly EMI Dubai</span> residents pay.
                With a specialized <span className="font-semibold text-slate-800">loan buyout in UAE banks</span> strategy,
                we help you regain control of your finances and grow your wealth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971553536448"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-pulse-subtle"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} fill="white" />
      </a>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-800 font-bold text-xl mb-2">Abin</p>
          <p className="text-brand-secondary font-medium mb-4">055 353 6448</p>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} UAE Personal Finance Expert. All rights reserved.
          </p>
          <p className="text-slate-400 text-[10px] mt-4 max-w-xs mx-auto">
            Results are estimates. Final loan terms depend on bank approval.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
