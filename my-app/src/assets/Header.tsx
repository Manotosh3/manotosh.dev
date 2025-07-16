import { useState, useEffect } from 'react'

function Header() { 
    const [, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    function scrollToSection(sectionId: string) {
        const element = document.getElementById(sectionId)
        if(element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        setIsMenuOpen(false);
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-[#4a4a4a]/95 backdrop-blur-sm border-b border-[#3a3a3a]' : 'bg-transparent'}`}
        >  
            <div className='container mx-auto px-6 py-6'>
                <nav className='flex items-center justify-between'>
                    <div className='text-xl font-light text-white tracking-wider'>
                        manotosh.dev
                    </div>
                    <div className='hidden md:flex items-center space-x-10'>
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className='text-gray-300 hover:text-white transition-colors duration-200 font-light tracking-wide text-sm'
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;