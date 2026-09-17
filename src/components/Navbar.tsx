import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/problems", label: "Problems" },
  { to: "/about", label: "About" },
  { to: "/contributors", label: "Contributors" },
  { to: "/sponsors", label: "Sponsors" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Subtle Atmospheric Blur Layer Above Navbar */}
      <div className="fixed top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050907]/90 via-[#050907]/50 to-transparent backdrop-blur-md z-40 pointer-events-none" />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-4 md:px-8`}
      >
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between h-16 px-5 md:px-8 rounded-2xl transition-all duration-500 ${
          scrolled
            ? "bg-[#09120D]/80 backdrop-blur-xl border border-primary/25 shadow-2xl shadow-black/50"
            : "bg-[#09120D]/40 backdrop-blur-md border border-primary/10"
        }`}
      >

        {/* Logos — visible on ALL screen sizes */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
          <Link to="/" className="flex items-center gap-1.5 sm:gap-2.5 group">
            {/* 1. Existing Infothon 7.0 Logo */}
            <img
              src="/logo.png"
              alt="Infothon 7.0 Logo"
              className="h-7 sm:h-8 md:h-9 w-auto object-contain rounded-lg border border-primary/30 group-hover:border-primary/60 transition-all duration-300 drop-shadow-[0_0_12px_rgba(124,255,79,0.5)]"
            />
            <div className="w-px h-5 sm:h-6 bg-white/15" />
            {/* 2. Existing VVCE & ISE Logos */}
            <img src="/34.png" alt="VVCE Logo" className="h-6 sm:h-7 md:h-8 w-auto opacity-80 rounded object-contain" />
            <div className="w-px h-5 sm:h-6 bg-white/15" />
            <img src="/23.png" alt="ISE Logo" className="h-6 sm:h-7 md:h-8 w-auto opacity-80 rounded object-contain" />
            <div className="w-px h-5 sm:h-6 bg-white/15" />
            {/* 3. New Uploaded ISE Emblem Logo */}
            <img
              src="/ise_logo.jpeg"
              alt="Information Science and Engineering Emblem Logo"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain rounded transition-all duration-300 opacity-90 group-hover:opacity-100"
            />
          </Link>
        </div>


        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} className="relative px-3.5 py-1.5 group">
                <span className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive ? "text-primary font-bold" : "text-foreground/70 group-hover:text-foreground"
                }`}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-primary rounded-full shadow-[0_0_8px_rgba(124,255,79,0.8)]"
                  />
                )}
                {!isActive && (
                  <div className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-primary/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </Link>
            );
          })}
          <a
            href="https://unstop.com/o/aMWPD3T?lb=oDUR4wu8&utm_medium=Share&utm_source=infotise5672&utm_campaign=Online_coding_challenge"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase text-background gradient-primary shadow-[0_0_16px_rgba(124,255,79,0.4)] hover:shadow-[0_0_28px_rgba(124,255,79,0.7)] active:scale-95 transition-all duration-300"
          >
            Register
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto w-10 h-10 rounded-xl glass-card border border-primary/20 flex items-center justify-center text-foreground hover:border-primary/60 transition-all duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={open ? "x" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-7xl bg-[#09120D]/95 backdrop-blur-2xl border border-primary/25 rounded-2xl shadow-2xl p-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 py-2.5 text-xs font-bold tracking-widest uppercase transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_#7CFF4F]" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
              <a
                href="https://unstop.com/o/aMWPD3T?lb=oDUR4wu8&utm_medium=Share&utm_source=infotise5672&utm_campaign=Online_coding_challenge"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 text-center py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-background gradient-primary shadow-[0_0_16px_rgba(124,255,79,0.4)]"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </>
);
};

export default Navbar;
