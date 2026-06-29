import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { navigationLinks } from "../../data/navigation";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50  bg-white/90 dark:bg-slate-950/90 backdrop-blur-md dark:border-slate-800 transition-colors">
      {" "}
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-3">
          <img
            src="/favicon.png"
            alt="Fares Logo"
            className="w-16 h-16 rounded-xl object-cover"
          />

          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            Fares
            <span className="text-blue-600 dark:text-cyan-400">.</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-cyan-400 font-semibold"
                  : "text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Controls */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-slate-950 dark:border-slate-800">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 dark:text-cyan-400 font-semibold"
                    : "text-gray-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
