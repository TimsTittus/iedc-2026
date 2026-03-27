"use client";

import { motion } from "framer-motion";
import { memo } from "react";
import { Instagram, Linkedin, Facebook, Youtube } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const quickLinks = [
    { label: "About IEDC", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Execom", href: "/execom" },
    { label: "Startups", href: "/events" },
];

const pages = [
    { label: "About", href: "#" },
    { label: "Waitlist", href: "#" },
    { label: "Changelog", href: "#" },
    { label: "Error 404", href: "#" },
];

const support = [
    { label: "Contact", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
];

const socialLinks = {
    instagram: "https://www.instagram.com/sjcetbootcamp/",
    linkedin: "https://www.linkedin.com/company/startup-bootcamp-sjcet/posts/?feedView=all",
    facebook: "https://www.facebook.com/sjcetbootcamp/",
    youtube: "https://www.youtube.com/@sjcetstartupbootcamp-iedc5356",
};


const Footer = memo(function Footer() {
    return (
        <footer className="border-t border-border bg-white text-text-main">
            <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
                <div className="md:hidden space-y-10">
                    <div className="rounded-xl overflow-hidden border border-border shadow-md h-[200px] relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339742505!2d76.7260948!3d9.7268467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph's%20College%20of%20Engineering%20and%20Technology%2C%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1710162000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            title="St. Joseph's College of Engineering and Technology, Palai"
                            className="transition-all duration-500"
                        ></iframe>
                    </div>

                    {/* Logo after Map */}
                    <div className="flex justify-start">
                        <Image
                            src="/bootcamp.png"
                            alt="SJCET Bootcamp"
                            width={400}
                            height={120}
                            className="h-auto w-full max-w-[280px] mix-blend-multiply"
                        />
                    </div>

                    {/* Follow Us */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">FOLLOW US</h4>
                        <div className="flex items-center gap-4 text-text-muted">
                            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            </a>
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                                <Instagram size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            </a>
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <Facebook size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            </a>
                            <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
                                <Youtube size={22} className="hover:text-text-main transition-colors cursor-pointer" />
                            </a>
                        </div>
                    </div>



                    {/* More Links */}
                    <div className="space-y-6">
                        <div className="inline-block border-b-2 border-orange-500 pb-1">
                            <h4 className="text-sm font-bold uppercase tracking-wider text-text-main">MORE LINKS</h4>
                        </div>

                        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                            <a href="/" className="text-[13px] font-medium text-text-muted uppercase">Home</a>
                            <a href="/execom" className="text-[13px] font-medium text-text-muted uppercase">Execom</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase">History</a>
                            <a href="/#features" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Why IEDC</a>
                            <a href="/#events" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Events</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Location</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Summit 2022</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">SJCET Palai</a>
                            <a href="#" className="text-[13px] font-medium text-text-muted uppercase leading-tight">Webdev</a>
                        </div>
                    </div>
                </div>

                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10"
                >
                    {/* Brand column */}
                    <div className="lg:col-span-2">

                        <div className="space-y-6">
                            <div className="space-y-3">
                                <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-text-muted">Reach Us</h4>
                                <div className="rounded-xl overflow-hidden border border-border shadow-md h-[240px] relative group">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.462339742505!2d76.7260948!3d9.7268467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07cc024cb7c83f%3A0xc8944aaebb3ba492!2sSt.%20Joseph's%20College%20of%20Engineering%20and%20Technology%2C%20Palai%20(Autonomous)!5e0!3m2!1sen!2sin!4v1710162000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen={true}
                                        title="St. Joseph's College of Engineering and Technology, Palai"
                                        className="transition-all duration-500"
                                    ></iframe>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Image
                                    src="/bootcamp.png"
                                    alt="SJCET Bootcamp"
                                    width={400}
                                    height={120}
                                    className="h-auto w-full max-w-[360px] mix-blend-multiply"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-main mb-4">Quick links</h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-text-muted hover:text-text-main transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pages */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-main mb-4">Pages</h4>
                        <ul className="space-y-2.5">
                            {pages.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-text-muted hover:text-text-main transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-sm font-semibold text-text-main mb-4">Support</h4>
                        <ul className="space-y-2.5">
                            {support.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-text-muted hover:text-text-main transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-16 pt-6 border-t border-border gap-4"
                >
                    <p className="text-text-muted text-sm text-center md:text-left">
                        Designed by <a href="https://" target="_blank" rel="noopener noreferrer" className="text-text-main hover:underline font-medium">Tech Team</a>.
                    </p>
                    <div className="hidden md:flex items-center gap-3">
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Instagram size={16} />
                        </a>
                        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Linkedin size={16} />
                        </a>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Facebook size={16} />
                        </a>
                        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-card-bg rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors text-text-muted hover:text-text-main">
                            <Youtube size={16} />
                        </a>
                    </div>

                </motion.div>
            </div>
        </footer>
    );
});

export default Footer;
