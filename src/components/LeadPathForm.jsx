import React, { useState } from 'react';
import { Wallet, Banknote, CreditCard, ArrowLeft, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LeadPathForm = () => {
    const [path, setPath] = useState(null); // 'personal', 'buyout', 'card'
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({});

    const paths = [
        {
            id: 'personal',
            title: 'Personal Loan',
            tagline: 'Get the liquidity you need with competitive rates.',
            icon: <Wallet className="text-emerald-500" size={32} />,
            color: 'bg-emerald-50'
        },
        {
            id: 'buyout',
            title: 'Loan Buyout',
            tagline: 'Reduce your monthly EMI and settle your debts faster.',
            icon: <Banknote className="text-blue-500" size={32} />,
            color: 'bg-blue-50'
        },
        {
            id: 'card',
            title: 'Credit Cards',
            tagline: 'Unlock premium rewards, cashback, and lifestyle benefits.',
            icon: <CreditCard className="text-purple-500" size={32} />,
            color: 'bg-purple-50'
        }
    ];

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Attempt to send to Formspree (Primary email backup)
            // Note: If you have a valid Formspree ID, replace 'mnnqqlbv' below.
            const response = await fetch('https://formspree.io/f/mnnqqlbv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    category: path,
                    ...formData,
                    _subject: `New ${path.toUpperCase()} Lead - DXB Finance Pro`
                }),
            });

            // We proceed to WhatsApp regardless of Formspree status to ensure the lead is never lost
            const messageHeader = `Hi Abin Mathew, I just filled out the form on DXB Finance Pro.\n\n`;

            const categoryName = path === 'buyout' ? 'Loan Buyout' : path === 'personal' ? 'Personal Loan' : 'Credit Card';
            let messageBody = `*Interest:* ${categoryName}\n`;

            if (path === 'personal') {
                messageBody += `*Salary Range:* ${formData.salaryRange || '---'}\n`;
                messageBody += `*Employer:* ${formData.employer || '---'}\n`;
                messageBody += `*Loan Amount:* AED ${formData.loanAmount || '---'}\n`;
                messageBody += `*Liabilities:* ${formData.liabilities || '---'}\n`;
            } else if (path === 'buyout') {
                messageBody += `*Total Outstanding:* AED ${formData.totalDebt || '---'}\n`;
                messageBody += `*Monthly EMI:* AED ${formData.currentEMI || '---'}\n`;
                messageBody += `*Current Bank:* ${formData.bank || '---'}\n`;
                messageBody += `*Salary Transfer:* ${formData.salaryTransfer || '---'}\n`;
            } else if (path === 'card') {
                messageBody += `*Primary Interest:* ${formData.primaryInterest || '---'}\n`;
                messageBody += `*Monthly Salary:* AED ${formData.salary || '---'}\n`;
                messageBody += `*Monthly Spend:* AED ${formData.monthlySpend || '---'}\n`;
            }

            messageBody += `\nLet's discuss this!`;

            const waUrl = `https://wa.me/971553536448?text=${encodeURIComponent(messageHeader + messageBody)}`;
            window.location.href = waUrl;

        } catch (error) {
            console.error('Submission Error:', error);
            // Fallback: If everything fails, still try to open WhatsApp with basic info
            window.location.href = `https://wa.me/971553536448?text=${encodeURIComponent("Hi Abin Mathew, I'm interested in your services. Let's talk!")}`;

        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <section id="select-path" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Select Your Financial Goal</h2>
                        <p className="text-slate-600 text-lg">Pick a path to receive a custom strategy tailored to your needs.</p>
                    </div>

                    <AnimatePresence mode="wait">
                        {!path ? (
                            <motion.div
                                key="selector"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="grid md:grid-cols-3 gap-6"
                            >
                                {paths.map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => setPath(p.id)}
                                        className="group p-8 rounded-3xl border-2 border-slate-100 hover:border-brand-secondary transition-all text-left bg-white shadow-sm hover:shadow-xl hover:-translate-y-2"
                                    >
                                        <div className={`w-16 h-16 ${p.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                            {p.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{p.tagline}</p>
                                    </button>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="bg-slate-50 rounded-[40px] p-8 md:p-12 border border-slate-100 shadow-2xl relative"
                            >
                                <button
                                    onClick={() => setPath(null)}
                                    className="absolute top-8 left-8 text-slate-400 hover:text-brand-primary flex items-center gap-2 text-sm font-bold transition-colors"
                                >
                                    <ArrowLeft size={16} /> Back
                                </button>

                                <div className="text-center mb-10 pt-4">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                        {path === 'personal' ? 'Personal Loan Application' : path === 'buyout' ? 'Loan Buyout Strategy' : 'Credit Card Matchmaker'}
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 text-brand-secondary font-bold text-sm">
                                        <Phone size={14} /> 055 353 6448
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
                                    {path === 'personal' && (
                                        <>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Monthly Salary</label>
                                                    <select name="salaryRange" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white">
                                                        <option value="">Select Range</option>
                                                        <option value="<5000">Less than AED 5,000</option>
                                                        <option value="5000-10000">AED 5,000 - 10,000</option>
                                                        <option value="10000+">AED 10,000+</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Employer Name</label>
                                                    <input type="text" name="employer" placeholder="Company Name" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Loan Amount (AED)</label>
                                                    <input type="number" name="loanAmount" placeholder="e.g. 100,000" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Current Liabilities</label>
                                                    <input type="text" name="liabilities" placeholder="e.g. None or Card EMI" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {path === 'buyout' && (
                                        <>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Total Outstanding (AED)</label>
                                                    <input type="number" name="totalDebt" placeholder="Total Debt Amount" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Monthly EMI (AED)</label>
                                                    <input type="number" name="currentEMI" placeholder="Your Monthly Payment" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Current Bank</label>
                                                    <input type="text" name="bank" placeholder="e.g. FAB, ADCB" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Salary Transfer?</label>
                                                    <select name="salaryTransfer" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white">
                                                        <option value="">Select Option</option>
                                                        <option value="Yes">Yes</option>
                                                        <option value="No">No</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    {path === 'card' && (
                                        <>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Primary Interest</label>
                                                <select name="primaryInterest" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white">
                                                    <option value="">Choose Benefit</option>
                                                    <option value="Cashback">Cashback & Savings</option>
                                                    <option value="Travel">Travel & Air Miles</option>
                                                    <option value="Lounge">Lounge Access & Luxury</option>
                                                </select>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Monthly Salary (AED)</label>
                                                    <input type="number" name="salary" placeholder="e.g. 15,000" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400">Avg. Monthly Spend (AED)</label>
                                                    <input type="number" name="monthlySpend" placeholder="e.g. 5,000" required onChange={handleInputChange} className="w-full p-4 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-brand-secondary outline-none bg-white" />
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_-15px_rgba(15,23,42,0.4)] hover:-translate-y-1 active:scale-95 disabled:opacity-50"
                                        >
                                            {isSubmitting ? 'Sending Data...' : (
                                                <>
                                                    Submit & Chat on WhatsApp <MessageCircle size={22} fill="white" />
                                                </>
                                            )}
                                        </button>
                                        <p className="text-center text-[10px] text-slate-400 mt-4 uppercase tracking-widest font-bold">Secure Submission • Real-time Pre-qualification</p>
                                    </div>
                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default LeadPathForm;
