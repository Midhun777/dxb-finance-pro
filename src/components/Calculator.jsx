import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const CalculatorComponent = () => {
    const [debt, setDebt] = useState(50000);
    const [currentEMI, setCurrentEMI] = useState(2500);
    const [salary, setSalary] = useState(10000);

    // Calculation logic
    const tenor = 48;
    const annualRate = 5.5;
    const monthlyRate = annualRate / 12 / 100;

    const calculatedEMI = Math.round(
        (debt * monthlyRate * Math.pow(1 + monthlyRate, tenor)) /
        (Math.pow(1 + monthlyRate, tenor) - 1)
    );

    const estimatedSavings = currentEMI - calculatedEMI;

    return (
        <div className="space-y-12">
            {/* Input Section */}
            <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Total Debt (AED)</label>
                    <input
                        type="number"
                        value={debt}
                        onChange={(e) => setDebt(Number(e.target.value))}
                        className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-lg"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Monthly EMI (AED)</label>
                    <input
                        type="number"
                        value={currentEMI}
                        onChange={(e) => setCurrentEMI(Number(e.target.value))}
                        className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-lg"
                    />
                </div>
                <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Salary (AED)</label>
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full p-4 rounded-2xl border border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-lg"
                    />
                </div>
            </div>

            {/* Main Result Display - Premium Gradient Box */}
            <div className="relative p-1 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[32px] overflow-hidden shadow-2xl">
                <div className="bg-white rounded-[30px] p-10 text-center">
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-4">Estimated Monthly Savings</p>
                    <h3 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">
                        AED {estimatedSavings > 0 ? estimatedSavings.toLocaleString() : '0'}
                        <span className="text-2xl text-emerald-500 ml-1 italic">*</span>
                    </h3>
                </div>
            </div>

            {/* Detailed Strategy Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="glass p-8 rounded-3xl border-slate-100 text-center">
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-3">Target Monthly EMI</p>
                    <p className="text-4xl font-black text-slate-900 tracking-tight">AED {calculatedEMI.toLocaleString()}</p>
                </div>
                <div className="glass p-8 rounded-3xl border-slate-100 text-center">
                    <p className="text-xs text-slate-400 uppercase font-black tracking-widest mb-3">Total Term Savings</p>
                    <p className="text-4xl font-black text-emerald-600 tracking-tight">AED {(estimatedSavings * tenor > 0 ? estimatedSavings * tenor : 0).toLocaleString()}</p>
                </div>
            </div>

            <p className="text-center text-xs text-slate-400 font-medium max-w-md mx-auto leading-relaxed">
                *Interest rates subject to bank approval. This calculation is a strategic estimate based on a 5.5% reducing rate.
            </p>

            {/* Direct CTA */}
            <div className="pt-4 flex justify-center">
                <a
                    href="https://wa.me/971553536448"
                    className="btn-secondary w-full md:w-auto flex items-center justify-center gap-4 py-5 px-12 text-xl shadow-[0_20px_40px_-10px_rgba(5,150,105,0.3)]"
                >
                    <MessageCircle size={24} />
                    Secure This Strategy
                </a>
            </div>
        </div>
    );
};

export default CalculatorComponent;
