import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/tickets2.png";

export function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-gradient-to-r from-[#0a0f1f] via-[#0e1730] to-[#0a0f1f] border-b border-cyan-500 shadow-[0_0_10px_#00ffff]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">

        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-10 drop-shadow-[0_0_8px_#00ffff]" alt="Logo" />
          <span className="text-2xl font-extrabold text-cyan-400 tracking-wide drop-shadow-[0_0_6px_#00ffff]">
            Me la Rifo
          </span>
        </Link>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-cyan-400 rounded-lg md:hidden hover:bg-cyan-800/20 focus:ring-2 focus:ring-cyan-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 text-lg font-semibold text-white">
            {[
              { path: "/", label: "Inicio" },
              { path: "/productos", label: "Productos" },
              { path: "/compras", label: "Compras" },
              { path: "/login", label: "Acceder" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`block py-2 px-4 rounded-md transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-cyan-400 bg-cyan-900/40 shadow-[0_0_10px_#00ffff]"
                      : "hover:text-cyan-300 hover:bg-cyan-800/30"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
