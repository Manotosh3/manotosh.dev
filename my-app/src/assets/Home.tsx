import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#4a4a4a]">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="w-24 h-px bg-gray-400 mx-auto mb-12"></div>
            <h1 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight">
              Manotosh Kumar Phade
            </h1>
            <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-8 tracking-widest">
                FULL STACK DEV | DEVOPS | WEB3 ENTHUSIAST
            </h2>
            <div className="w-24 h-px bg-gray-400 mx-auto mb-16"></div>
          </div>
          
          <p className="text-lg text-gray-200 mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            I'm a full stack developer from India working with JavaScript (MERN), Python, and Web3 technologies. I write clean, maintainable code and ship production-ready features that solve real-world problems — whether for startups, open-source communities, or personal projects.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <button className="border border-white text-white px-10 py-3 font-light tracking-widest text-sm hover:bg-white hover:text-[#6b6b6b] transition-all duration-300">
              DOWNLOAD CV
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8">
            <a href="https://github.com/Manotosh3" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/manotosh-kumar-phade-321b6226b/" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="mailto:manotoshphade3@gmail.com" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Mail size={20} />
            </a>
            <a href="https://x.com/manotosh_phade" className="text-gray-300 hover:text-white transition-colors duration-200">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;