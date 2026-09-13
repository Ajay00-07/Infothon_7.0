import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/problems", label: "Problems" },
  { to: "/about", label: "About" },
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-primary/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between h-20 px-5 md:px-14">

        {/* Text logo — visible on ALL screen sizes */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link to="/">
            <div className="flex flex-col leading-tight">
              <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase neon-text">
                Infothon
              </span>
              <span className="text-foreground/40 text-[10px] tracking-[0.3em] uppercase">
                7.0
              </span>
            </div>
          </Link>
          <div className="w-px h-7 bg-white/20" />
          <img src="/34.png" alt="Unstop" className="h-12 w-auto opacity-90 rounded" />
        </div>
        
        {/* Text logo — visible on ALL screen sizes */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-px h-7 bg-white/20" />
          <img src="/23.png" alt="Unstop" className="h-12 w-auto opacity-90 rounded" />
        </div>


        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 ml-auto">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link key={link.to} to={link.to} className="relative px-4 py-2 group">
                <span className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive ? "text-primary" : "text-foreground/60 group-hover:text-foreground"
                }`}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary rounded-full shadow-[0_0_8px_hsl(48_100%_50%/0.8)]"
                  />
                )}
                {!isActive && (
                  <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary/40 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}
              </Link>
            );
          })}
          <Link
            to="/register"
            className="ml-4 px-5 py-2 rounded-full text-xs font-bold tracking-[0.15em] uppercase text-background gradient-primary shadow-[0_0_16px_hsl(48_100%_50%/0.4)] hover:shadow-[0_0_28px_hsl(48_100%_50%/0.7)] transition-all duration-300 hover:scale-105"
          >
            Register
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden ml-auto w-10 h-10 rounded-full glass-card border border-primary/20 flex items-center justify-center text-foreground hover:border-primary/60 transition-all duration-200"
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
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-primary/10"
          >
            <div className="flex flex-col px-8 py-6 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 ${
                      isActive ? "text-primary" : "text-foreground/60"
                    }`}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_hsl(48_100%_50%)]" />
                    )}
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="mt-4 text-center py-3 rounded-full text-sm font-bold tracking-widest uppercase text-background gradient-primary shadow-[0_0_16px_hsl(48_100%_50%/0.4)]"
              >
                Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
