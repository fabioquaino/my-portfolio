import { NavLink, useLocation  } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
    const navItems = [
        { path: "/", label: "Home" },
        { path: "/resume", label: "Resume" },
        { path: "/portfolio", label: "Portfolio" }
    ];
    const location = useLocation();
    return(
        <>
            {navItems.map((item, index) => (
                <NavLink key={index} to={item.path} 
                className={`py-2 px-4 mx-5 my-2 font-semibold text-md text-orange-500 rounded-lg transition-colors border-2 border-transparent
                hover:bg-gray-700 hover:border-orange-500 
                ${location.pathname === item.path ? "bg-gray-700" : ""}`}
                    >{item.label}
                </NavLink>
            ))}
        </>
    )
}


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className="flex justify-end">
                <div className="md:flex hidden w-full justify-between">
                    <NavLinks/>
                </div>
                <div className="md:hidden text-white hover:bg-slate-600 rounded-md p-1 flex justify-center items-center transition-colors">
                    <button onClick={toggleNavbar}>
                        {isOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </nav>
            
            {isOpen && (
                <div className="flex flex-col items-center basis-full">
                    <hr className="h-0.1 bg-slate-600 w-full mt-5 mb-3 opacity-20"/>
                    <NavLinks/>
                </div>
            )}
      </>
    );
  };
  
export default Navbar;