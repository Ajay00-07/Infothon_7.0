import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Trophy } from "lucide-react";

const stagger = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Results = () => (
  <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
    <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center max-w-4xl">
      <SectionHeading
        title="SHORTLISTED TEAMS"
        subtitle="The shortlisted teams for Infothon 7.0 will be announced soon. Stay tuned for the official announcement."
      />

      <motion.div
        {...stagger}
        className="glass-card p-8 md:p-12 max-w-lg w-full text-center space-y-6 border-primary/30"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto neon-glow-sm">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-display text-2xl font-bold text-primary neon-text tracking-wider">COMING SOON</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The shortlisted teams for Infothon 7.0 will be announced soon. Stay tuned for the official announcement.
        </p>
        <div className="pt-4">
          <Button variant="hero" size="lg" asChild className="rounded-xl px-8 shadow-[0_0_20px_rgba(124,255,79,0.4)]">
            <Link to="/">BACK TO HOME</Link>
          </Button>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default Results;