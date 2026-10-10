import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { CheckCircle2, ArrowLeft, Heart, Bell } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-background pt-28 pb-12 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col items-center justify-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 w-full text-center space-y-7 bg-[#211D14]/90 border border-[#8F7136]/50 relative overflow-hidden shadow-[0_8px_32px_rgba(214,168,79,0.08)] rounded-2xl backdrop-blur-xl"
        >
          {/* Subtle Ambient Light Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#D6A84F]/8 blur-3xl pointer-events-none rounded-full" />

          {/* Tasteful Closed-Registration Indicator / Icon */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-[#D6A84F]/10 border border-[#8F7136]/50 flex items-center justify-center shadow-[0_0_20px_rgba(214,168,79,0.15)] text-[#D6A84F]">
              <Bell className="w-8 h-8 text-[#D6A84F]" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D6A84F]/10 border border-[#8F7136]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D6A84F]" />
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#D6A84F] uppercase">
                STATUS: CLOSED
              </span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#E7C779] tracking-wider uppercase mb-2">
              REGISTRATION CLOSED
            </h1>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#8F7136] to-transparent mx-auto rounded-full" />
          </div>

          {/* Main message & Supporting message */}
          <div className="space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-[#E5E1D8]">
              Thank you for your incredible interest in Infothon 7.0!
            </h2>
            <p className="text-[#E5E1D8]/85 text-sm md:text-base leading-relaxed">
              Registrations for Infothon 7.0 are now officially closed. We sincerely appreciate the enthusiasm, encouragement, and support shown by all participants.
            </p>
          </div>

          {/* Polite points in a subtle card */}
          <div className="bg-[#18140D]/80 border border-[#8F7136]/30 rounded-xl p-5 text-left space-y-3.5 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#D6A84F] flex-shrink-0 mt-0.5" />
              <p className="text-[#E5E1D8] text-xs md:text-sm leading-relaxed">
                Thank you to everyone who registered and showed interest in being part of Infothon 7.0.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-[#D6A84F] flex-shrink-0 mt-0.5" />
              <p className="text-[#E5E1D8] text-xs md:text-sm leading-relaxed">
                We are grateful to our participants, faculty, sponsors, and supporters for helping make this initiative possible.
              </p>
            </div>
          </div>

          {/* Closing message */}
          <p className="text-[#D6A84F] font-mono text-xs md:text-sm tracking-wide">
            We look forward to sharing updates and welcoming you to future editions of Infothon.
          </p>

          {/* Back to Home Button */}
          <div className="pt-2 flex justify-center">
            <Button
              size="lg"
              asChild
              className="h-12 px-8 rounded-xl bg-[#211D14] backdrop-blur-md border border-[#8F7136]/60 text-[#E7C779] font-display font-bold text-xs md:text-sm tracking-wider uppercase hover:border-[#D6A84F] hover:bg-[#2b2518] hover:text-[#D6A84F] hover:shadow-[0_0_20px_rgba(214,168,79,0.2)] transition-all duration-300 gap-2"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 text-[#D6A84F]" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;