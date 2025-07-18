import React from "react";

function Skills() {
    const skillCategory =[
        {
            title: 'Language:',
            skills: ['TypeScript, JavaScript, Python']
        },
        {
            title: 'Backend:',
            skills: ['Node.js, Express.js, REST APIs, FastAPI']
        },
        {
            title: 'Frontend:',
            skills: ['React.js, HTML, CSS, Tailwind CSS, Bootstrap, Vite, Material-UI']
        },
        {
            title: 'DevOps:',
            skills: ['Docker, AWS (EC2, S3, CloudFront), CI/CD, GitHub Action, Vercel']
        },
        {
            title: 'Database & Cache:',
            skills: ['PostgreSQL, MongoDB, Redis, MySQL, Prisma ORM']
        },
        {
            title: 'Tools & Security:',
            skills: ['Git, JWT, OAuth 2.0, Postman']
        }
    ];

    return (
    <section id="skills" className="py-16 bg-[#2a2a2a]">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">Technical Skills</h2>
          </div>
          
          {/* Skills Cards Grid - 2 rows, 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategory.map((category) => (
              <div
                key={category.title}
                className="bg-[#3a3a3a] border border-gray-600 rounded-lg p-6 hover:border-gray-400 transition-all duration-300"
              >
                <h3 className="text-green-600 font-semibold text-lg mb-4">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {category.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;