import React from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy border-t border-slate-800 pt-16 pb-8 relative z-10 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="text-2xl font-display font-bold text-white mb-4">
                            DinkarSoft
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Building the brain of your business. Innovating with passion across the globe.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-3 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-brand-teal-light transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-brand-teal-light transition-colors">Solutions</a></li>
                            <li><a href="#" className="hover:text-brand-teal-light transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-brand-teal-light transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Global Presence</h4>
                        <div className="space-y-4 text-sm text-slate-400">
                            <div className="flex gap-3 items-start">
                                <MapPin className="text-brand-teal mt-1 shrink-0" size={16} />
                                <div>
                                    <strong className="text-white block mb-1">USA Branch</strong>
                                    123 Tech Avenue, Silicon Valley,<br />CA 94000
                                </div>
                            </div>
                            <div className="flex gap-3 items-start">
                                <MapPin className="text-brand-teal mt-1 shrink-0" size={16} />
                                <div>
                                    <strong className="text-white block mb-1">India Branch</strong>
                                    Tech Park, Bangalore,<br />Karnataka 560000
                                </div>
                            </div>
                            <div className="flex gap-3 items-center mt-6">
                                <Mail className="text-brand-teal shrink-0" size={16} />
                                <a href="mailto:contact@dinkarsoft.com" className="hover:text-white transition-colors">contact@dinkarsoft.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} DinkarSoft. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
