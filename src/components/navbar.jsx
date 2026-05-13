import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    
    const navLinks = [
        { label: "ABOUT", id: "about" },
        { label: "CERTIFICATION", id: "certification" },
        { label: "PROJECTS", id: "project" },
        { label: "AskYOGESH", id: "askyogesh" },
        { label: "CONTACT", id: "contact" }
    ];

    return(
        <nav className="flex justify-between items-center px-10 py-3 bg-slate-800 border-b border-slate-600 sticky top-0 z-50">
            <Link className="text-3xl font-bold text-yellow-400" to="/hero">
                YOGESH 
                <span className="text-blue-500">.</span>
            </Link>
            <div className="flex gap-20">
                {navLinks.map((link) => (
                    <Link 
                        key={link.id} 
                        to={"/"+link.id}
                        className={`text-sm font-semibold transition-colors duration-300 ${
                            location.pathname === "/" + link.id
                                ? "text-yellow-500" 
                                : "text-slate-300 hover:text-yellow-500 hover:underline hover:scale-110 transition duration-300"
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;