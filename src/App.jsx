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
                Lower Your EMI. <br />
                <span className="text-brand-secondary">Reduce Your Debt.</span> <br />
                Rule Your Future.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                UAE’s leading Personal Finance Expert specializing in <span className="text-slate-900 font-semibold">Loan Buyouts</span>,
                <span className="text-slate-900 font-semibold"> Debt Consolidation</span>, and
                <span className="text-slate-900 font-semibold"> Interest Rate Optimization</span>.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => scrollToSection('calculator')}
                  className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2"
                >
                  <Calculator size={20} />
                  Consolidate My Debt Now
                </button>
                <a
                  href="https://wa.me/971553536448"
                  className="btn-secondary w-full sm:w-auto border border-emerald-600 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Free WhatsApp Consultation
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

      {/* Loan Buyout Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-slate-50 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Debt Consolidation Loan UAE</h2>
              <p className="text-slate-600">Calculate your potential savings in seconds.</p>
            </div>
            <CalculatorComponent />
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert Debt Relief Strategies</h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Why pay more on your loans? Our UAE banking specialists help you secure the
              <span className="text-emerald-400 font-semibold"> Lowest Interest Rates</span> and
              <span className="text-emerald-400 font-semibold"> Best Payment Terms</span> through strategic bank buyouts.
            </p>
            <a
              href="https://wa.me/971553536448"
              className="inline-flex items-center gap-2 bg-brand-secondary hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg"
            >
              <MessageCircle size={20} />
              Talk to a Specialist Now
            </a>
          </div>
        </div>
      </section>


      {/* Trust & SEO Content placeholder */}
      <section className="py-20 bg-slate-50">
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
