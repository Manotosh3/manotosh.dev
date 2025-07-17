import React from "react";
import profImage from "./Image/pf.jpg"

function About() {
    return (
        <>
        <section id="about" className="py-20 bg-[#4a4a4a]">
            <div className="container mx-auto px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="w-24 h-px bg-gray-400 mx-auto mb-8"></div>
                        <h2 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-wide">ABOUT</h2>
                        <div className="w-24 h-px bg-gray-400 mx-auto mb-12"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-50 leading-relaxed font-light">
                                I'm a full stack developer from India with a strong focus on building clean, maintainable, and scalable digital solutions. 
                                My work blends robust backend engineering with thoughtful front-end design — using stacks like JavaScript (MERN), Python, and DevOps tools
                                I'm especially interested in future-facing technologies like Web3, decentralized identity.</p>
                            <p className="text-lg text-gray-50 leading-relaxed font-light">
                                Whether I'm contributing to open-source & building a new product from scratch, my approach is always focused on usability, performance, and real-world impact.
                                Beyond code, I enjoy exploring new technologies, sharing insights with the dev community, and continuously pushing myself to grow. 
                                I believe in simplicity, continuous learning, and building with purpose — not just to ship features, but to solve meaningful problems.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gray-500">
                                <img 
                                    src={profImage} alt="Manotosh Kumar Phade" className="w-full h-full object-cover transition-all duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About