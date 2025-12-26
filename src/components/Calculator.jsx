import React, { useState, useEffect } from 'react';

const CalculatorComponent = () => {
    const [debt, setDebt] = useState(50000);
    const [currentEMI, setCurrentEMI] = useState(2500);
    const [salary, setSalary] = useState(10000);
    const [isLocked, setIsLocked] = useState(true);

    // Lead form state
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Calculation logic
    const tenor = 48;
    const annualRate = 5.5;
    const monthlyRate = annualRate / 12 / 100;

    const calculatedEMI = Math.round(
        (debt * monthlyRate * Math.pow(1 + monthlyRate, tenor)) /
        (Math.pow(1 + monthlyRate, tenor) - 1)
    );

    const estimatedSavings = currentEMI - calculatedEMI;

    const handleUnlock = async (e) => {
        e.preventDefault();
        if (!name || !phone) return alert('Please enter your name and phone number');

        setIsSubmitting(true);

        try {
            // Updated to use a real Formspree endpoint (User should replace with their own ID)
            const response = await fetch('https://formspree.io/f/mnnqqlbv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    phone,
                    debt,
                    currentEMI,
                    salary,
                    calculatedEMI,
                    estimatedSavings,
                    _subject: `New Lead from ${name} - Loan Assist`
                }),
            });

            if (response.ok) {
                setIsSubmitted(true);
                setIsLocked(false);
            } else {
                alert('Submission failed. Please try again or contact Abin directly.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please check your connection.');
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <div className="space-y-8">
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

            <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-inner text-center">
                <p className="text-slate-500 mb-1">Estimated Monthly Savings</p>
                <h3 className="text-4xl font-bold text-emerald-600">
                    AED {estimatedSavings > 0 ? estimatedSavings.toLocaleString() : '0'}*
                </h3>
            </div>

            {isLocked && !isSubmitted ? (
                <div className="relative">
                    <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-100 relative overflow-hidden shadow-sm">
                        <div className="absolute inset-0 bg-white/70 backdrop-blur-md z-10 flex flex-col items-center justify-center p-6 text-center">
                            <h4 className="text-xl md:text-2xl font-bold mb-3">Unlock Full Plan</h4>
                            <p className="text-slate-600 mb-6 text-sm md:text-base max-w-[280px] md:max-w-md">Join 500+ UAE residents who optimized their debt this month.</p>

                            <form onSubmit={handleUnlock} className="w-full max-w-sm space-y-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white shadow-sm"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="UAE Phone (05x xxxxxxx)"
                                    required
                                    value={phone}
                                    onInput={(e) => setPhone(e.target.value)}
                                    className="w-full p-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white shadow-sm"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 active:scale-95"
                                >
                                    {isSubmitting ? 'Processing...' : 'See My Full Savings'}
                                </button>
                            </form>
                        </div>

                        {/* Blurry mock content */}
                        <div className="blur-sm opacity-20 pointer-events-none space-y-4 py-4">
                            <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                            <div className="h-6 bg-slate-200 rounded w-1/2"></div>
                            <div className="h-24 bg-slate-200 rounded w-full"></div>
                            <div className="h-6 bg-slate-200 rounded w-2/3"></div>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <h4 className="text-xl font-bold text-emerald-900 mb-4">Your Consolidation Strategy</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">New EMI</p>
                            <p className="text-2xl font-bold text-brand-primary">AED {calculatedEMI.toLocaleString()}</p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow-sm">
                            <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Total Savings</p>
                            <p className="text-2xl font-bold text-emerald-600">AED {(estimatedSavings * tenor).toLocaleString()}</p>
                        </div>
                    </div>
                    <p className="text-center text-xs text-emerald-700 mt-6">
                        *Calculated at 5.5% reducing rate over 48 months. Our advisor will call you shortly.
                    </p>
                </div>
            )}
        </div>
    );
};

export default CalculatorComponent;
