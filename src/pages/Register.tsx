import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-16 flex-1 flex flex-col items-center justify-center">
        <SectionHeading
          title="OFFICIAL REGISTRATION"
          subtitle="Register now for Infothon 7.0 on Unstop and join the ultimate 10-hour coding marathon."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-12 max-w-lg w-full text-center space-y-6 border-primary/30"
        >
          <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/40 flex items-center justify-center mx-auto neon-glow-sm">
            <ExternalLink className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-display text-xl font-bold text-foreground tracking-wide">Register on Unstop</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Official registrations for Infothon 7.0 are now live on Unstop. Click the button below to register your team.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild className="rounded-xl px-8 shadow-[0_0_20px_rgba(124,255,79,0.4)]">
              <a
                href="https://unstop.com/o/aMWPD3T?lb=oDUR4wu8&utm_medium=Share&utm_source=infotise5672&utm_campaign=Online_coding_challenge"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER ON UNSTOP
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-xl px-6 border-primary/30">
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