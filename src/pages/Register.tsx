import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center">
        <SectionHeading
          title="REGISTRATION UPDATING SOON"
          subtitle="Registration details for Infothon 7.0 will be announced soon. Stay tuned for updates."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 max-w-lg w-full text-center space-y-6 border-primary/30"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto neon-glow-sm">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground tracking-wide">Stay Tuned!</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Registration details for Infothon 7.0 will be announced soon. Stay tuned for updates.
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
};

export default Register;