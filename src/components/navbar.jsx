import React from "react";
import { useState } from "react";

function Navbar() {
    const [activeLink, setActiveLink] = useState(null);
    
    const navLinks = [
        { label: "ABOUT", id: "about" },
        { label: "CERTIFICATION", id: "certification" },
        { label: "PROJECTS", id: "project" },
        { label: "AskYOGESH", id: "askyogesh" },
        { label: "CONTACT", id: "contact" }
    ];

    return(
        <nav className="flex justify-between items-center px-10 py-3 bg-slate-800 border-b border-slate-600 sticky top-0 z-50">
            <div className="text-3xl font-bold text-yellow-400">
                YOGESH 
                <span className="text-blue-500">.</span>
            </div>
            <div className="flex gap-20">
                {navLinks.map((link) => (
                    <button 
                        key={link.id} 
                        onClick={() => setActiveLink(link.id)}
                        className={`text-sm font-semibold transition-colors duration-300 ${
                            activeLink === link.id 
                                ? "text-yellow-500" 
                                : "text-slate-300 hover:text-yellow-500 hover:underline hover:scale-110 transition duration-300"
                        }`}
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;