"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ExternalLink, Clock, ArrowRight, X, MapPin } from "lucide-react";
import Image from "next/image";
import FloatingNavbar from "../components/FloatingNavbar";
import Footer from "../components/Footer";
import { sortedEvents, EventData } from "./data";

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);
    const [tappedCard, setTappedCard] = useState<string | null>(null);

    useEffect(() => {
        const handleClickOutside = () => setTappedCard(null);
        window.addEventListener("click", handleClickOutside);
        return () => window.removeEventListener("click", handleClickOutside);
    }, []);

    // Lock scroll when drawer is open
    useEffect(() => {
        if (selectedEvent) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [selectedEvent]);



    return (
        <main className="relative min-h-screen text-black overflow-hidden bg-[#FFFAF8]">
            {/* Background blobs */}
            <div className="fixed inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#FF7A00]/15 rounded-full blur-[80px]" />
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden text-black/[0.015]">
                    <h2 className="text-[30vw] font-black leading-none tracking-tighter select-none uppercase">
                        EVENTS
                    </h2>
                </div>
                <div className="absolute top-0 right-0 w-[50%] h-[30%] bg-[#FF7A00]/10 rounded-full blur-[60px] -rotate-12" />
                <div className="absolute bottom-[5%] left-[5%] w-[40%] h-[40%] bg-[#FF7A00]/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-black/[0.02] rounded-full blur-[80px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-[#FF7A00]/5 rounded-full blur-[60px]" />
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />
            </div>

            <div className="relative z-10 bg-white/30 backdrop-blur-md min-h-screen">
                <FloatingNavbar />

                {/* Hero Section */}
                <section className="pt-40 md:pt-48 pb-16 md:pb-20 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto relative z-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <span className="inline-block bg-white/50 backdrop-blur-xl border border-white/30 text-text-muted text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
                                <Calendar size={12} className="inline mr-2 -mt-0.5" />
                                Event Archive
                            </span>
                            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 text-black">
                                ALL <span className="text-[#FF7A00]">EVENTS</span>
                            </h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-500 text-lg max-w-xl mx-auto italic font-medium"
                            >
                                &quot;Every event is a step towards innovation.&quot;
                            </motion.p>
                        </motion.div>


                    </div>
                </section>

                {/* Divider */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#FF7A00]/30 to-transparent" />
                </div>

                {/* Timeline Header */}
                <section className="pt-16 md:pt-20 pb-8 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Event Timeline</h2>
                            <p className="text-gray-500 mt-1">Sorted by most recent first</p>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-widest">
                            <Clock size={14} />
                            Latest → Oldest
                        </div>
                    </div>
                </section>

                {/* Events Grid */}
                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Desktop Grid */}
                        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
                            {sortedEvents.map((event, i) => (
                                <EventCard
                                    key={i}
                                    event={event}
                                    index={i}
                                    isTapped={tappedCard === `event-${i}`}
                                    onTap={() => {
                                        setTappedCard(tappedCard === `event-${i}` ? null : `event-${i}`);
                                    }}
                                    onSelect={setSelectedEvent}
                                />
                            ))}
                        </div>

                        {/* Mobile List */}
                        <div className="md:hidden space-y-6">
                            {sortedEvents.map((event, i) => (
                                <MobileEventCard
                                    key={i}
                                    event={event}
                                    index={i}
                                    onSelect={setSelectedEvent}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            {/* Event Detail Drawer */}
            <AnimatePresence>
                {selectedEvent && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 w-full md:w-[480px] bg-[#111] z-[101] shadow-2xl overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedEvent(null)}
                                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-white z-10"
                            >
                                <X size={20} />
                            </button>

                            {/* Drawer Content */}
                            <div className="relative">
                                {/* Event Image */}
                                <div className="relative aspect-[4/3] w-full">
                                    <Image
                                        src={selectedEvent.image}
                                        alt={selectedEvent.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 480px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/40 to-transparent" />

                                    {/* Status Badge on Image */}
                                    <div className="absolute top-6 left-6">
                                        <span className={`text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-full ${selectedEvent.status === "OPEN"
                                            ? "bg-green-500 text-white"
                                            : "bg-white/20 text-white/80 backdrop-blur-sm"
                                            }`}>
                                            {selectedEvent.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10 text-white -mt-12 relative z-10">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 mb-3">
                                        <Calendar size={14} className="text-[#FF7A00]" />
                                        <span className="text-[#FF7A00] text-sm font-bold">{selectedEvent.date}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">{selectedEvent.title}</h2>

                                    {/* Description */}
                                    <div className="mb-8">
                                        <h4 className="text-xs font-bold text-white/30 uppercase tracking-widest mb-3">About This Event</h4>
                                        <p className="text-gray-400 leading-relaxed text-[15px]">
                                            {selectedEvent.description}
                                        </p>
                                    </div>

                                    {/* Event Details */}
                                    <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                                                <Calendar size={16} className="text-[#FF7A00]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Date</p>
                                                <p className="text-sm font-medium text-white/80">{selectedEvent.date}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                                                <MapPin size={16} className="text-[#FF7A00]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Venue</p>
                                                <p className="text-sm font-medium text-white/80">SJCET Campus, Palai</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center">
                                                <Clock size={16} className="text-[#FF7A00]" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">Status</p>
                                                <p className={`text-sm font-bold ${selectedEvent.status === "OPEN" ? "text-green-400" : "text-white/50"}`}>
                                                    {selectedEvent.status === "OPEN" ? "Registration Open" : "Event Completed"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex gap-3">
                                        {selectedEvent.registrationLink && selectedEvent.status === "OPEN" ? (
                                            <a
                                                href={selectedEvent.registrationLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex-1 bg-[#FF7A00] text-black h-14 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-[#FF8C1A] transition-colors"
                                            >
                                                <ExternalLink size={18} />
                                                Register Now
                                            </a>
                                        ) : (
                                            <div className="flex-1 bg-white/5 text-white/40 h-14 rounded-2xl flex items-center justify-center gap-2 font-bold border border-white/10 cursor-not-allowed">
                                                <Clock size={18} />
                                                Registration Closed
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </main>
    );
}

/* ─── Desktop Event Card (Hover/Tap Reveal) ──────────────────── */
function EventCard({
    event,
    index,
    isTapped,
    onTap,
    onSelect,
}: {
    event: EventData;
    index: number;
    isTapped: boolean;
    onTap: () => void;
    onSelect: (e: EventData) => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06, duration: 0.5 }}
            onClick={(e) => {
                e.stopPropagation();
                onTap();
            }}
            className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 cursor-pointer text-white"
        >
            {/* Orange gradient on hover/tap */}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-[#FF7A00]/40 via-transparent to-transparent transition-opacity duration-500 z-10 ${isTapped ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
            />

            <div className="absolute inset-0 z-0 will-change-transform">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-all duration-700"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                />

                {/* Default bottom overlay */}
                <div
                    className={`absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-300 z-20 ${isTapped ? "opacity-0" : "group-hover:opacity-0"
                        }`}
                >
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <Calendar size={12} className="text-[#FF7A00]" />
                        <span className="text-[#FF7A00] font-medium text-sm">{event.date}</span>
                    </div>
                </div>
            </div>

            {/* Status badge (always visible) */}
            <div className="absolute top-5 right-5 z-20">
                <span
                    className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-sm ${event.status === "OPEN"
                        ? "bg-green-500/90 text-white"
                        : "bg-black/40 text-white/60"
                        }`}
                >
                    {event.status}
                </span>
            </div>

            {/* Orange hover/tap overlay */}
            <div
                className={`absolute inset-0 z-30 bg-[#FF7A00] p-8 flex flex-col justify-between overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isTapped ? "translate-y-0" : "translate-y-full group-hover:translate-y-0"
                    }`}
            >
                <div>
                    <h3 className="text-2xl font-bold text-black">{event.title}</h3>
                    <div className="flex items-center gap-3 mt-1 mb-6">
                        <span className="text-black/60 font-bold text-xs uppercase tracking-widest">{event.date}</span>
                        <span
                            className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${event.status === "OPEN"
                                ? "bg-green-600 text-white"
                                : "bg-black/15 text-black/60"
                                }`}
                        >
                            {event.status}
                        </span>
                    </div>
                    <div
                        className="absolute top-0 right-0 w-32 h-32 bg-white/10 [mask-image:linear-gradient(to_bottom_left,black,transparent)] pointer-events-none"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)",
                            backgroundSize: "16px 16px",
                        }}
                    />
                    <p className="text-black/80 text-sm leading-relaxed font-medium line-clamp-5">
                        {event.description}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    {event.registrationLink && event.status === "OPEN" ? (
                        <a
                            href={event.registrationLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/10 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={16} className="text-black" />
                        </a>
                    ) : (
                        <div className="w-10 h-10" />
                    )}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect(event);
                        }}
                        className="bg-black text-white h-10 px-4 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                        View Details <ArrowRight size={12} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── Mobile Event Card (Tap to Expand) ──────────────────── */
function MobileEventCard({
    event,
    index,
    onSelect,
}: {
    event: EventData;
    index: number;
    onSelect: (e: EventData) => void;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            onClick={() => onSelect(event)}
            className="flex gap-4 bg-white/60 backdrop-blur-sm border border-white/30 rounded-2xl p-3 cursor-pointer hover:shadow-lg hover:shadow-[#FF7A00]/5 transition-all duration-300 active:scale-[0.98]"
        >
            {/* Thumbnail */}
            <div className="relative w-24 h-28 flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-1.5 left-1.5">
                    <span
                        className={`text-[8px] font-black uppercase px-1.5 py-0.5 rounded-full ${event.status === "OPEN"
                            ? "bg-green-500 text-white"
                            : "bg-black/40 text-white/70 backdrop-blur-sm"
                            }`}
                    >
                        {event.status}
                    </span>
                </div>
            </div>

            {/* Info */}
            <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                <div>
                    <h3 className="text-sm font-bold text-black line-clamp-2 leading-tight">{event.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5">
                        <Calendar size={11} className="text-[#FF7A00] flex-shrink-0" />
                        <span className="text-[#FF7A00] text-[11px] font-semibold">{event.date}</span>
                    </div>
                </div>
                <p className="text-gray-500 text-[11px] leading-snug line-clamp-2 mt-1.5">{event.description}</p>
                <div className="flex items-center justify-between mt-2">
                    <span className="text-[9px] uppercase tracking-widest font-black text-gray-400">Tap for details</span>
                    <ArrowRight size={12} className="text-[#FF7A00]" />
                </div>
            </div>
        </motion.div>
    );
}
