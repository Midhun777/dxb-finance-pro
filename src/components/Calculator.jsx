import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const CalculatorComponent = () => {
    const [amount, setAmount] = useState(50000);
    const [tenure, setTenure] = useState(48);
    const [salary, setSalary] = useState(10000);
    const [currentEMI, setCurrentEMI] = useState(2500);

    // Calculation logic - 5.55% reducing rate as requested
    const rate = 5.55 / 12 / 100;
    const emi = (amount * rate * Math.pow(1 + rate, Number(tenure))) / (Math.pow(1 + rate, Number(tenure)) - 1);

    const estimatedSavings = currentEMI - emi;

    return (
        <div className="space-y-8 md:space-y-12">
            {/* Input Section */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Monthly Salary (AED)</label>
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className={`w-full p-4 rounded-xl border ${salary < 5000 && salary > 0 ? 'border-red-400' : 'border-slate-100'} bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-base md:text-lg`}
                    />
                    {salary < 5000 && salary > 0 && (
                        <p className="text-[10px] text-red-500 font-bold">* Minimum salary 5,000 AED required</p>
                    )}
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Loan Amount (AED)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-base md:text-lg"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Current EMI (AED)</label>
                    <input
                        type="number"
                        value={currentEMI}
                        onChange={(e) => setCurrentEMI(Number(e.target.value))}
                        className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-base md:text-lg"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">Tenure (Months)</label>
                    <select
                        value={tenure}
                        onChange={(e) => setTenure(Number(e.target.value))}
                        className="w-full p-4 rounded-xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-base md:text-lg appearance-none cursor-pointer"
                    >
                        <option value={36}>36 Months</option>
                        <option value={48}>48 Months</option>
                    </select>
                </div>
            </div>

            {/* Main Result Display - Premium Gradient Box */}
            <div className={`relative p-1 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[32px] overflow-hidden shadow-2xl transition-opacity duration-300 ${salary < 5000 ? 'opacity-50 grayscale' : 'opacity-100'}`}>
                <div className="bg-white rounded-[30px] p-6 md:p-10 text-center">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4">Estimated Monthly Savings</p>
                    <h3 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
                        AED {salary >= 5000 && estimatedSavings > 0 ? Math.round(estimatedSavings).toLocaleString() : '0'}
                        <span className="text-xl md:text-2xl text-emerald-500 ml-1 italic">*</span>
                    </h3>
                </div>
            </div>

            {/* Detailed Strategy Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="glass p-6 md:p-8 rounded-3xl border-slate-100 text-center">
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase font-black tracking-widest mb-2 md:mb-3">New Monthly EMI</p>
                    <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">AED {Math.round(emi).toLocaleString()}</p>
                </div>
                <div className="glass p-6 md:p-8 rounded-3xl border-slate-100 text-center">
                    <p className="text-[10px] md:text-xs text-slate-400 uppercase font-black tracking-widest mb-2 md:mb-3">Total Tenure Savings</p>
                    <p className="text-3xl md:text-4xl font-black text-emerald-600 tracking-tight">AED {salary >= 5000 && (estimatedSavings * tenure) > 0 ? Math.round(estimatedSavings * tenure).toLocaleString() : '0'}</p>
                </div>
            </div>

            <p className="text-center text-[10px] md:text-xs text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
                *Interest rates subject to bank approval. This calculation is a strategic estimate based on a 5.55% reducing rate. Minimum salary of 5,000 AED applies for most UAE banks.
            </p>

            {/* Direct CTA */}
            <div className="pt-4 flex justify-center">
                <a
                    href={salary >= 5000 ? "https://wa.me/971553536448" : "#"}
                    className={`btn-secondary w-full md:w-auto flex items-center justify-center gap-4 py-4 md:py-5 px-10 md:px-12 text-lg md:text-xl shadow-[0_20px_40px_-10px_rgba(5,150,105,0.3)] transition-all ${salary < 5000 ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                    onClick={(e) => salary < 5000 && e.preventDefault()}
                >
                    <MessageCircle size={24} />
                    Apply via WhatsApp
                </a>
            </div>
        </div>
    );
};

export default CalculatorComponent;
