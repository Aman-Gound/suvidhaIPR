import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Assets/logo.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Patent Services", to: "/patentservices" },
  { label: "Copyright Services", to: "/copyrightservices" },
  { label: "How It Works", to: "/howitworks" },
  { label: "Why Suvidha", to: "/whysuvidha" },
  { label: "FAQs", to: "/faqs" },
  { label: "Track Status", to: "/trackstatus" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/70 bg-[#e8eaf0]/90 px-4 shadow-[0_4px_16px_rgba(0,0,0,0.04)] backdrop-blur-xl sm:px-8 lg:px-12">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between gap-5">
        <Link to="/" className="shrink-0" onClick={closeMenu}>
          <img
            src={logo}
            alt="Suvidha IPR Services"
            className="h-11 w-auto object-contain"
          />
        </Link>

        <ul className="hidden items-center gap-1 text-[13px] font-semibold text-[#585a68] xl:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `nav-link px-3 py-2 ${isActive ? "bg-[#e0e2ff] text-[#6366f1]" : ""}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hidden rounded-xl bg-[#6366f1] px-4 py-2.5 text-xs font-bold text-white shadow-[0_5px_12px_rgba(99,102,241,0.25)] transition hover:bg-[#4f46e5] sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="neo-raised flex h-11 w-11 items-center justify-center rounded-xl text-[#2e3040] transition hover:text-[#6366f1] xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
              <span
                className={`h-0.5 w-full rounded-full bg-current transition duration-200 ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition duration-200 ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-current transition duration-200 ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity,padding] duration-300 xl:hidden ${
          isMenuOpen ? "max-h-[32rem] pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="neo-raised rounded-2xl p-2">
          <ul className="flex flex-col gap-1 text-sm font-semibold text-[#585a68]">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 transition ${isActive ? "bg-[#e0e2ff] text-[#6366f1]" : "hover:bg-[#e0e2ff] hover:text-[#6366f1]"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-1 border-t border-[#d0d2dc]/70 pt-2 sm:hidden">
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className="block rounded-xl bg-[#6366f1] px-4 py-3 text-center text-white transition hover:bg-[#4f46e5]"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
