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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Input Section */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Total Debt (AED)</label>
                    <input
                        type="number"
                        value={debt}
                        onChange={(e) => setDebt(Number(e.target.value))}
                        className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Monthly EMI (AED)</label>
                    <input
                        type="number"
                        value={currentEMI}
                        onChange={(e) => setCurrentEMI(Number(e.target.value))}
                        className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none transition-all"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Salary (AED)</label>
                    <input
                        type="number"
                        value={salary}
                        onChange={(e) => setSalary(Number(e.target.value))}
                        className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none transition-all"
                    />
                </div>
            </div>

            {/* Main Result Display */}
            <div className="text-center p-6 bg-white rounded-2xl border border-emerald-100 shadow-inner">
                <p className="text-slate-500 mb-1">Estimated Monthly Savings</p>
                <h3 className="text-5xl font-bold text-emerald-600">
                    AED {estimatedSavings > 0 ? estimatedSavings.toLocaleString() : '0'}*
                </h3>
            </div>

            {/* Detailed Strategy Breakdown */}
            <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                <h4 className="text-xl font-bold text-emerald-900 mb-6 text-center">Your Consolidation Strategy</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-50">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">New Monthly EMI</p>
                        <p className="text-3xl font-bold text-brand-primary">AED {calculatedEMI.toLocaleString()}</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-50">
                        <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-2">Total Term Savings</p>
                        <p className="text-3xl font-bold text-emerald-600">AED {(estimatedSavings * tenor > 0 ? estimatedSavings * tenor : 0).toLocaleString()}</p>
                    </div>
                </div>

                <p className="text-center text-xs text-emerald-700 mt-6 max-w-md mx-auto">
                    *Calculated at 5.5% reducing rate over 48 months. Final terms depend on bank approval and credit score.
                </p>

                {/* Direct CTA */}
                <div className="mt-10 flex justify-center">
                    <a
                        href="https://wa.me/971553536448"
                        className="btn-primary w-full md:w-auto flex items-center justify-center gap-3 py-4 px-10 text-lg shadow-[0_10px_20px_-5px_rgba(5,150,105,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(5,150,105,0.5)] transition-all"
                    >
                        <MessageCircle size={24} />
                        Get This Deal Now
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CalculatorComponent;
