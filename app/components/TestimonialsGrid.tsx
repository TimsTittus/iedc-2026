"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect, memo, useMemo } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const testimonials = [
    {
        quote: "IEDC and SJCET Bootcamp gave me the direction and clarity I needed as a young innovator. Their constant support helped me turn uncertainty into confidence and ideas into action.",
        name: "Jacob Philip, Founder",
        role: "2021–2025 AI & DS batch | Manolo Ventures Pvt. Ltd.",
    },
    {
        quote: "The IEDC and SJCET Bootcamp played a major role in shaping my journey, giving me the guidance and confidence I needed. Their support and ecosystem pushed me to think bigger and take bold steps forward.",
        name: "Jose K. James, Founder",
        role: "2020–2024 CSE batch | Covolution Pvt. Ltd.",
    },
    {
        quote: "What truly shaped my journey was the mentorship and opportunities I received from IEDC and the Bootcamp. They created an environment where I felt encouraged to experiment, learn and grow.",
        name: "Martin Varghese, Founder",
        role: "2019–2023 CSE batch | Oronium Innovations Pvt. Ltd."
    },
    {
        quote: "IEDC and SJCET Bootcamp were instrumental in helping me understand my potential. Their ecosystem pushed me beyond my comfort zone and gave me the courage to pursue my vision.",
        name: "Anto Patrex, Founder",
        role: "2015 - 2019 EEE batch| CosmicBrain AI"
    },
    {
        quote: "The support system at IEDC and SJCET Bootcamp made all the difference. With their guidance, I discovered new possibilities and gained the confidence to take meaningful steps forward.",
        name: "Tinsu Mathew, Founder",
        role: "2013 - 2017 ECE batch | EL SOL Power Solutions Pvt. Ltd"
    },
    {
        quote: "My journey was deeply shaped by the exposure, mentorship and community I found at IEDC and the Bootcamp. They helped me think bigger and believe in what we were capable of building.",
        name: "Thomson Tom, Founder",
        role: "2014 - 2018 ME batch | Infusory Future Tech Labs Pvt. Ltd"
    },
];

const TestimonialsGrid = memo(function TestimonialsGrid() {
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const visibleItems = useMemo(() => showAll
        ? testimonials
        : testimonials.slice(0, isMobile ? 3 : 6), [showAll, isMobile]);

    return (
        <section className="py-20 md:py-32 max-w-6xl mx-auto px-6">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <span className="inline-block bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                    Alumni Success
                </span>
                <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main mb-4">
                    Student & Alumni Testimonials
                </h2>
                <p className="text-text-muted text-sm max-w-2xl mx-auto">
                    Real stories from SJCET Bootcampers who are building the future.
                </p>
            </motion.div>

            {/* Testimonial avatars carousel */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center gap-3 mb-12 overflow-x-auto no-scrollbar pb-2"
            >
                {testimonials.map((person, i) => {
                    const shortRole = person.role.includes('|')
                        ? person.role.split('|')[1].trim()
                        : person.role.split(',')[0].trim();

                    return (
                        <div key={i} className="flex items-center gap-2 bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl border border-border rounded-full px-3 py-1.5 shrink-0">
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-[10px] text-primary font-bold">
                                {person.name.charAt(0)}
                            </div>
                            <div>
                                <p className="text-[11px] font-medium text-text-main">{person.name.split(',')[0].trim()}</p>
                                <p className="text-[9px] text-text-muted">{shortRole}</p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Masonry grid */}
            <div className={`grid grid-cols-1 ${testimonials.length > 1 ? 'md:grid-cols-2 lg:grid-cols-3' : 'max-w-2xl mx-auto'} gap-4`}>
                {visibleItems.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="break-inside-avoid bg-white/40 backdrop-blur-xl border border-white/20 transition-all duration-300 hover:bg-white/50 hover:shadow-xl rounded-2xl p-8 border border-border/50"
                    >
                        <p className="text-text-main text-lg leading-relaxed mb-8 italic">"{t.quote}"</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center text-primary font-bold">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-base font-bold text-text-main">{t.name}</p>
                                    <p className="text-xs text-text-muted">{t.role}</p>
                                </div>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center border border-white/20">
                                <span className="text-primary text-xs font-bold">"</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View all reviews button */}
            {!showAll && testimonials.length > visibleItems.length && (
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center mt-12"
                >
                    <motion.button
                        onClick={() => setShowAll(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#1D1D1F] text-white rounded-full px-8 py-3.5 text-sm font-semibold hover:bg-[#333] transition-colors"
                    >
                        View all Reviews
                    </motion.button>
                </motion.div>
            )}
        </section>
    );
});

export default TestimonialsGrid;
