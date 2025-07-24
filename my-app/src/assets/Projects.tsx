import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";

function Projects() {
    const [currentPage, setCurrentPage] = useState(0);
    const projects = [
        {
        title: 'My-travel-blog',
        description: 'Wandering solo, collecting stories, and sharing the world through my eyes.',
        image:"https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?_gl=1*tw5gms*_ga*MzgxNjQ0MjkyLjE3NTMzNDE5NTM.*_ga_8JE65Q40S6*czE3NTMzNDE5NTMkbzEkZzEkdDE3NTMzNDIwMTgkajU5JGwwJGgw",
        tags: ['React', 'Node.js', 'mpx', 'Typescript', 'Next.js'],
        github: '#',
        live: '#'
        },
        {
        title: 'CineGusser', // Secure contract upload, smart search, template generator. Automated email reminders, e signature integration (DocuSign API). Audit trail, clause extraction using NLP. Role-based access, legal calendar, export to PDF/Word, invoice-sidecar.
        description: 'A full stack app',
        image:"https://store-images.microsoft.com/image/apps.34621.9007199266556636.b4551e45-9512-4393-b3d5-b216b82715e8.737bac45-dc54-48bd-854e-c9894fbc66bd?h=1280",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: '3',
        description: 'To-Do Application',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfV39WzaCr66H9DwGafv-l8cuyZWaX3RHqfA&s",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
         },
        {
        title: 'SentimentScope ', 
        description: 'A full stack app',
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1d0Plvcud83tgqf9Y8FBNgdR74ZhX85U_JtG-u76zmHZ2YkRY",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'Course Selling Application',
        description: 'A full stack app', // DevOps-1
        image:"https://cdn.wallpapersafari.com/88/91/NFkuMD.jpg",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        // {
        // title: '6AI-Powered Smart Grocery List & Recipe Planner', // mobile aap  Scan pantry via camera/QR, gets real‑time inventory; suggests recipes based on what you have, your diet, local deals; auto‑generates shopping list.  AI expense splitter  inventory manager 
        // description: 'A full stack app',
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // }
        // {
        // title: '7To-Do Application',
        // description: 'A full stack app', // DevOps-2
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // },
        // {
        // title: '8To-Do Application',
        // description: 'A full stack app', // AI- API
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // },
        // {
        // title: '9To-Do Application',
        // description: 'A full stack app', // API- Trained
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // },
        // {
        // title: '10To-Do Application',
        // description: 'A full stack app', // Web3- 1
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // },
        // {
        // title: '11To-Do Application',
        // description: 'A full stack app', // Web3- 2
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // },
        // {
        // title: '12To-Do Application',
        // description: 'A full stack app', // Start-up= 1
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // },
        // {
        // title: '13To-Do Application',
        // description: 'A full stack app', // Start-up= 2
        // image:"#",
        // tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        // github: '#',
        // live: '#'
        // }
    ];

    const projectsPerPage=6;
    const totalPages = Math.ceil(projects.length / projectsPerPage)
    const currentProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    function nextPage() {
        setCurrentPage((prev) => (prev+1) % totalPages);
    }

    function prevPage() {
        setCurrentPage((prev) => (prev-1+totalPages) % totalPages);
    }
    return (
    <section id="projects" className="py-24 bg-[#3a3a3a]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
            <h2 className="text-4xl font-light text-white mb-4 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-px bg-gray-400 mx-auto"></div>
          </div>
          
          <div className="relative">
            {/* Projects Grid - 3 columns x 2 rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {currentProjects.map((project, index) => (
                <div key={index} className="bg-[#3a3a3a] border border-[#2a2a2a] hover:border-gray-400 transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-white mb-3 tracking-wide">{project.title}</h3>
                    <p className="text-gray-200 mb-4 leading-relaxed font-light text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-gray-300 text-xs font-light tracking-wide border-b border-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-light tracking-wide text-xs"
                      >
                        <Github size={14} />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 font-light tracking-wide text-xs"
                      >
                        <ExternalLink size={14} />
                        <span>LIVE</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={prevPage}
                className="p-3 border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-full"
                disabled={currentPage === 0}
              >
                <ChevronLeft size={20} />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentPage === index ? 'bg-white' : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                className="p-3 border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-all duration-300 rounded-full"
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;