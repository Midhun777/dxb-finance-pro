import React, { useState } from 'react';
import { Wallet, Banknote, CreditCard, ArrowLeft, ArrowRight, MessageCircle, Phone } from 'lucide-react';
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
        <section id="select-path" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        {!path ? (
                            <motion.div
                                key="selector"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="grid md:grid-cols-3 gap-8"
                            >
                                {paths.map((p) => (
                                    <button
                                        key={p.id}
                                        onClick={() => setPath(p.id)}
                                        className="group"
                                    >
                                        <div className={`p-6 md:p-8 rounded-[2rem] border-2 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center gap-4 ${path === p.id
                                            ? 'border-emerald-500 bg-emerald-50/50 shadow-xl scale-[1.02]'
                                            : 'border-slate-100 bg-white hover:border-emerald-200 hover:shadow-lg hover:-translate-y-1'}`}>

                                            <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center transition-colors duration-500 ${path === p.id ? 'bg-emerald-500 text-white' : 'bg-slate-50 text-emerald-500 group-hover:bg-emerald-50'}`}>
                                                {/* Assuming p.icon is a React component that accepts a size prop */}
                                                {React.cloneElement(p.icon, { size: path === p.id ? 28 : 24 })}
                                            </div>

                                            <div className="space-y-1.5">
                                                <h3 className={`text-lg md:text-xl font-black uppercase tracking-tight ${path === p.id ? 'text-slate-900' : 'text-slate-700'}`}>{p.title}</h3>
                                                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed px-2">{p.tagline}</p>
                                            </div>
                                            <div className="mt-8 flex items-center gap-2 text-brand-secondary font-black text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                                                Select Path <ArrowRight size={16} />
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                className="glass rounded-[48px] p-8 md:p-16 relative overflow-hidden"
                            >
                                {/* Decorative elements */}
                                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl -mr-24 -mt-24" />

                                <button
                                    onClick={() => setPath(null)}
                                    className="absolute top-8 left-8 text-slate-400 hover:text-brand-primary flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors z-10"
                                >
                                    <ArrowLeft size={14} /> Back
                                </button>

                                <div className="text-center mb-10 md:mb-12 relative z-10">
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tighter uppercase italic">
                                        {path === 'personal' ? 'Personal Loan Application' : path === 'buyout' ? 'Loan Buyout Strategy' : 'Credit Card Matchmaker'}
                                    </h3>
                                    <p className="text-brand-secondary font-black tracking-[0.2em] uppercase text-[10px]">Direct Support: 055 353 6448</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-10 max-w-2xl mx-auto relative z-10">
                                    {path === 'personal' && (
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-3">
                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Monthly Salary (AED)</label>
                                                <select name="salaryRange" required onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-sm">
                                                    <option value="">Select Range</option>
                                                    <option value="<5000">Less than AED 5,000</option>
                                                    <option value="5000-10000">AED 5,000 - 10,000</option>
                                                    <option value="10000+">AED 10,000+</option>
                                                </select>
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Employer Name</label>
                                                <input type="text" name="employer" placeholder="Company Name" required onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-sm" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Required Amount (AED)</label>
                                                <input type="number" name="loanAmount" placeholder="e.g. 100,000" required onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-sm" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Other Liabilities</label>
                                                <input type="text" name="liabilities" placeholder="e.g. Card EMIs" required onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold text-sm" />
                                            </div>
                                        </div>
                                    )}

                                    {path === 'buyout' && (
                                        <div className="grid md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Total Outstanding (AED)</label>
                                                <input type="number" name="totalDebt" placeholder="Total Debt Amount" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Current Monthly EMI (AED)</label>
                                                <input type="number" name="currentEMI" placeholder="Your Monthly Payment" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Lending Bank</label>
                                                <input type="text" name="bank" placeholder="e.g. FAB, ADCB" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Salary Transfer Account?</label>
                                                <select name="salaryTransfer" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold">
                                                    <option value="">Select Option</option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {path === 'card' && (
                                        <div className="space-y-10">
                                            <div className="space-y-4">
                                                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Primary Card Benefit</label>
                                                <select name="primaryInterest" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold">
                                                    <option value="">Choose Benefit</option>
                                                    <option value="Cashback">Cashback & Savings</option>
                                                    <option value="Travel">Travel & Air Miles</option>
                                                    <option value="Lounge">Lounge Access & Luxury</option>
                                                </select>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-10">
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Monthly Salary (AED)</label>
                                                    <input type="number" name="salary" placeholder="e.g. 15,000" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold" />
                                                </div>
                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Estimated Monthly Spend</label>
                                                    <input type="number" name="monthlySpend" placeholder="e.g. 5,000" required onChange={handleInputChange} className="w-full p-5 rounded-2xl border border-slate-100 bg-white/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-bold" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="pt-6">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="btn-secondary w-full !py-4 md:!py-5 !text-lg md:!text-xl shadow-[0_20px_40px_-10px_rgba(5,150,105,0.3)]"
                                        >
                                            {isSubmitting ? 'SECURELY SENDING...' : (
                                                <span className="flex items-center justify-center gap-3">
                                                    SUBMIT & CONNECT <MessageCircle size={24} />
                                                </span>
                                            )}
                                        </button>
                                        <p className="text-center text-[9px] text-slate-400 mt-6 uppercase tracking-[0.3em] font-black opacity-60 italic">End-to-End Encrypted Consultation Request</p>
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
