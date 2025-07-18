import { ExternalLink, Github, ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState } from "react";

function Projects() {
    const [currentPage, setCurrentPage] = useState(0);
    const projects = [
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
        {
        title: 'To-Do Application',
        description: 'A full stack app',
        image:"#",
        tags: ['React', 'Node.js', 'MongoDB', 'Typescript'],
        github: '#',
        live: '#'
        },
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