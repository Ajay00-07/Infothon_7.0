import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Bot, RefreshCw } from "lucide-react";

const Problems = () => {
  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center max-w-3xl text-center">
        <SectionHeading
          title="PROBLEM STATEMENTS"
          subtitle="Choose a challenge and build a groundbreaking solution"
        />

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="glass-card-hover p-8 md:p-12 max-w-xl w-full text-center space-y-6 border-primary/30 my-6 relative overflow-hidden"
        >
          {/* Cyber Scanning Line Overlay */}
          <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

          {/* Rotating Cyber Radar Icon */}
          <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40"
            />
            <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/40 flex items-center justify-center shadow-[0_0_20px_rgba(124,255,79,0.3)]">
              <Bot className="w-7 h-7 text-primary" />
            </div>
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-bold uppercase tracking-widest">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Updating Soon
            </span>
            <h3 className="font-display text-2xl font-bold text-foreground tracking-wide pt-2">
              Problem Statements
            </h3>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
            The problem statements for Infothon 7.0 are currently being updated. Stay tuned for the official release.
          </p>

          <div className="pt-4">
            <Button variant="hero" size="lg" asChild className="rounded-xl px-8 shadow-[0_0_24px_rgba(124,255,79,0.4)]">
              <Link to="/">BACK TO HOME</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Problems;
