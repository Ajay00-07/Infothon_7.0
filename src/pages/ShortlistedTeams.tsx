import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { Clock, ArrowLeft, Trophy } from "lucide-react";

const ShortlistedTeams = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-12 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 w-full text-center space-y-7 border border-primary/30 relative overflow-hidden shadow-[0_0_40px_rgba(124,255,79,0.08)] rounded-2xl"
        >
          {/* Subtle Ambient Light Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-primary/10 blur-3xl pointer-events-none rounded-full" />

          {/* Tasteful Icon & Status Badge */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/40 flex items-center justify-center shadow-[0_0_24px_rgba(124,255,79,0.25)] text-primary">
              <Trophy className="w-8 h-8 text-primary" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
              <Clock className="w-3.5 h-3.5 text-primary" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-primary uppercase">
                ANNOUNCEMENT PENDING
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-foreground tracking-wider uppercase mb-2">
              SHORTLISTED TEAMS
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          </div>

          {/* Main message & Supporting message */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-semibold text-foreground/95">
              The shortlisted teams will be announced soon.
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
              We appreciate your enthusiasm and participation in Infothon 7.0. Please stay tuned for updates.
            </p>
          </div>

          {/* Additional Appreciation Box */}
          <div className="bg-[#050907]/70 border border-primary/20 rounded-xl p-4 md:p-5 text-center backdrop-blur-sm shadow-[0_0_15px_rgba(124,255,79,0.04)]">
            <p className="text-primary font-mono text-xs md:text-sm font-semibold tracking-wide">
              Thank you for being part of Infothon 7.0!
            </p>
          </div>

          {/* Back to Home Button */}
          <div className="pt-2 flex justify-center">
            <Button
              size="lg"
              asChild
              className="h-12 px-8 rounded-xl bg-[#050907]/80 backdrop-blur-md border border-primary/40 text-primary font-display font-bold text-xs md:text-sm tracking-wider uppercase hover:border-primary hover:bg-[#050907] hover:shadow-[0_0_24px_rgba(124,255,79,0.35)] transition-all duration-300 gap-2"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                <span>BACK TO HOME</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default ShortlistedTeams;
