import React from "react";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';

function Footer() {
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const projects =[
        {name: 'Project-1', url: '#'},
        {name: 'Project-2', url: '#'},                
        {name: 'Project-3', url: '#'},
        {name: 'Project-4', url: '#'},
        {name: 'Project-5', url: '#'}
    ];

    const siteMap =[
        {name: 'Homepage', id: 'home'},
        {name: 'About', id: 'about'},
        {name: 'Projects', id: 'projects'},
        {name: 'Skills', id: 'skills'}
    ];
    
    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior:'smooth'})
        }
    };

    return (
        <footer className="bg-[#1a1a1a] py-16 border-t border-gray-400">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="text-2xl font-light text-white tracking-widest">
                            manotosh.dev
                        </div>
                        <p className="text-gray-200 font-light leading-relaxed max-w-sm">
                            Building modern digital solutions with clean code, DevOps efficiency, and Web3 experimentation — from India to the world.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://github.com/Manotosh3" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/manotosh-kumar-phade-321b6226b/" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://x.com/manotosh_phade" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <Twitter size={20} />
                            </a>
                            <a href="mailto:manotoshphade3@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
                                <Mail size={20} />
                            </a>
                        </div>
                        <button onClick={scrollToTop} className="inline-flex items-center space-x-2 border border-gray-500 text-gray-300 px-6 py-2 font-light tracking-wide text-sm hover:border-white hover:text-white transition-all duration-300">
                            <ArrowUp size={16} />
                            <span>BACK TO TOP</span>
                        </button>
                    </div>

                    <div>
                        <h3 className="text-white font-light tracking-wide text-sm mb-6">SITE MAP</h3>
                        <div className="space-y-4">
                            {siteMap.map((link) => (
                                <button key={link.name} onClick={() => scrollToSection(link.id)} className="block text-gray-300 hover:text-white transition-colors duration-200 font-light text-sm">
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-white font-light tracking-wide text-sm mb-6">PROJECTS</h3>
                        <div className="space-y-4">
                            {projects.map((projects) => (
                                <a key={projects.name} href="project.url" target="_blank" rel="noopener noreferrer"
                                className="block text-gray-300 hover:text-white transition-colors duration-200 font-light text-sm">
                                    {projects.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-5 border-t border-gray-400">
                    <div className="text-center text-gray-400 text-sm font-light">
                        <p>Copyright © 2025, manotosh.dev. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer