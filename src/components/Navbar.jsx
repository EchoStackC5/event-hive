import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when window is resized to desktop size
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 bg-white z-50">
         
            <div className="flex justify-between items-center px-4 sm:px-8 py-4">
                <h1 className="font-bold text-heading text-lg sm:text-xl">
                    <span>Event</span>
                    <span className="text-primary"> Hive</span>
                </h1>

              
                <div className="hidden md:flex justify-center gap-4">
                    <button className="text-primary hover:text-primary/80 transition-colors">
                        <a href="/login">Login</a>
                    </button>
                    <button className="bg-primary hover:bg-primary/90 transition-colors rounded-md py-2 px-4 text-white">
                        <a href="/register">Signup</a>
                    </button>
                </div>

                {/* Mobile menu button */}
                <button 
                    className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen 
                    ? 'max-h-48 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-4 pb-4 space-y-3 bg-white border-t border-gray-100">
                    <button className="block w-full text-left text-primary hover:text-primary/80 transition-colors py-2">
                        <a href="/login" className="block">Login</a>
                    </button>
                    <button className="block w-full bg-primary hover:bg-primary/90 transition-colors rounded-md py-2 px-4 text-white">
                        <a href="/register" className="block text-center">Signup</a>
                    </button>
                </div>
            </div>
        </nav>
    );
}