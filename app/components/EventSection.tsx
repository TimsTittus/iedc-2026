"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, memo, useRef } from "react";
import Link from "next/link";
import { sortedEvents } from "../events/data";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const homeEvents = sortedEvents.slice(0, 6);

const EventSection = memo(function EventSection() {
    const [tappedCard, setTappedCard] = useState<string | null>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === "left" ? scrollLeft - clientWidth / 2 : scrollLeft + clientWidth / 2;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const handleClickOutside = () => setTappedCard(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <section id="events" className="pt-16 md:pt-24 pb-16 md:pb-24 overflow-x-clip">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
                    <motion.h2
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-[56px] font-bold tracking-tight leading-none"
                    >
                        <span className="text-[#FF7A00]">BOOTCAMP</span>
                        <br />
                        <span className="text-text-main">EVENTS</span>
                    </motion.h2>

                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col items-start md:items-end gap-2"
                    >
                        {/* Avatar stack */}
                        <div className="flex items-center">
                            <div className="flex -space-x-2">
                                {[0, 1, 2, 3].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 border-2 border-white" />
                                ))}
                                <div className="w-8 h-8 rounded-full bg-[#1D1D1F] border-2 border-white flex items-center justify-center text-white text-[9px] font-medium">
                                    +58
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={14} fill="#FF7A00" color="#FF7A00" />
                            ))}
                        </div>
                        <p className="text-text-muted text-sm font-medium">Empowering Student Innovators</p>
                    </motion.div>
                </div>
            </div>

            {/* Scrollable cards */}
            <div className="relative">
                <motion.div
                    ref={scrollRef}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex gap-6 overflow-x-auto no-scrollbar pb-8 cursor-grab active:cursor-grabbing px-6 xl:px-[calc((100vw-80rem)/2+1.5rem)]"
                >
                    {homeEvents.map((event, i) => {
                        const cardId = `home-event-${i}`;
                        const isActive = tappedCard === cardId;

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setTappedCard(isActive ? null : cardId);
                                }}
                                className="flex-shrink-0 w-[280px] md:w-[320px] group relative aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 cursor-pointer"
                            >
                                {/* Orange gradient on hover/tap */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-[#FF7A00]/40 via-transparent to-transparent transition-opacity duration-500 z-10 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                        }`}
                                />

                                <div className="absolute inset-0 z-0 will-change-transform">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover transition-all duration-700"
                                        sizes="(max-width: 768px) 280px, 320px"
                                        loading="lazy"
                                    />

                                    {/* Default bottom info */}
                                    <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 pt-16 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 z-20 ${isActive ? 'opacity-0' : 'group-hover:opacity-0'
                                        }`}>
                                        <h3 className="text-base md:text-xl font-bold text-white line-clamp-2 leading-tight">{event.title}</h3>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <Calendar size={11} className="text-[#FF7A00]" />
                                            <span className="text-[#FF7A00] text-[11px] md:text-xs font-semibold">{event.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Orange overlay on hover/tap */}
                                <div
                                    className={`absolute inset-0 z-30 bg-[#FF7A00] p-4 md:p-6 flex flex-col justify-between overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'translate-y-0' : 'translate-y-full group-hover:translate-y-0'
                                        }`}
                                >
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-black leading-tight">{event.title}</h3>
                                        <div className="flex items-center gap-4 mt-1 mb-3 md:mb-4">
                                            <span className="text-black/60 font-bold text-[10px] md:text-xs uppercase tracking-widest">{event.date}</span>
                                            <span className={`text-[10px] md:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${event.status === 'OPEN'
                                                ? 'bg-green-600 text-white'
                                                : 'bg-black/15 text-black/60'
                                                }`}>
                                                {event.status}
                                            </span>
                                        </div>
                                        {/* Grid pattern decoration */}
                                        <div
                                            className="absolute top-0 right-0 w-24 h-24 bg-white/10 [mask-image:linear-gradient(to_bottom_left,black,transparent)] pointer-events-none"
                                            style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
                                        />
                                        <p className="text-black/80 text-xs md:text-sm leading-relaxed font-medium line-clamp-4 md:line-clamp-5">
                                            {event.description}
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between mt-auto pt-2">
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={12} className="text-black/50" />
                                            <span className="text-black/50 text-[10px] font-bold uppercase tracking-wider">{event.status}</span>
                                        </div>
                                        <Link
                                            href="/events"
                                            onClick={(e) => e.stopPropagation()}
                                            className="bg-black text-white h-8 md:h-9 px-3 md:px-4 rounded-full flex items-center gap-1.5 text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                                        >
                                            Details <ArrowRight size={10} />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Navigation Arrows */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-end gap-3 mt-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm bg-white"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-600" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm bg-white"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>

            {/* View All Events Button */}
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center mt-12"
                >
                    <Link
                        href="/events"
                        className="group flex items-center gap-3 px-8 py-4 bg-[#1D1D1F] text-white rounded-full font-bold hover:bg-[#FF7A00] hover:text-black transition-all duration-300 shadow-lg shadow-black/10"
                    >
                        View All Events
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
});

export default EventSection;
