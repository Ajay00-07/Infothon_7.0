import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Users, Heart } from "lucide-react";

const contributorEditions = [
  {
    edition: "Infothon 1.0",
    members: ["Sumukh M G", "C Sai Kartheek", "Ullas U", "H A Vishwadatta"],
  },
  {
    edition: "Infothon 2.0",
    members: ["Pranava thejaswi N M", "Shashanka R", "S Karthik"],
  },
  {
    edition: "Infothon 3.0",
    members: ["Pranava Thejaswi N M", "Aniruddha Sharma S"],
  },
  {
    edition: "Infothon 4.0",
    members: ["Aishwarya Deepak Prajwal GS", "Amit D Jain", "Priyadarshani Sarja"],
  },
  {
    edition: "Infothon 5.0",
    members: ["Amit D Jain", "Syed Nawaz", "Sanjana R", "Priyadarshani Sarja"],
  },
  {
    edition: "Infothon 6.0",
    members: ["Sanjana R", "Priyadarshani Sarja", "Akash Valmiki"],
  },
];

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Contributors = () => {
  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-12 flex-1 max-w-4xl">
        <SectionHeading
          title="CONTRIBUTORS"
          subtitle="Honoring the coordinators and contributors from previous editions of Infothon"
        />

        {/* Appreciation for Previous Seniors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 md:p-10 mb-12 border-primary/30 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary flex-shrink-0">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-mono text-xs text-primary font-bold uppercase tracking-[0.2em]">Honoring Tradition</span>
              <h3 className="font-display text-lg font-bold text-foreground">THE PEOPLE BEHIND THE LEGACY</h3>
            </div>
          </div>

          <p className="text-foreground/90 text-sm md:text-base leading-relaxed">
            Every edition of Infothon has been shaped by seniors who took the initiative to dream bigger, organize better, and create opportunities for the students who followed. Their dedication, leadership, creativity, and countless hours of effort helped transform Infothon from an event into a growing tradition.
          </p>

          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
            The contributors from previous editions laid the groundwork that continues to inspire us today. Their ideas, experiences, and commitment have given every new team a stronger platform to build upon.
          </p>

          <div className="pt-2 border-t border-primary/15">
            <p className="text-primary font-display font-semibold text-xs md:text-sm">
              We carry their work forward — and build the next chapter together.
            </p>
          </div>
        </motion.div>

        <div className="space-y-6">
          {contributorEditions.map((item, idx) => (
            <motion.div
              key={item.edition}
              {...stagger}
              transition={{ delay: idx * 0.1 }}
              className="glass-card-hover p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 neon-glow-sm">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground tracking-wide">{item.edition}</h3>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Previous Edition Coordinators</p>
                </div>
              </div>

              <div className="w-full h-px bg-primary/15 mb-5" />

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {item.members.map((name, mIdx) => (
                  <div
                    key={mIdx}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#7CFF4F]" />
                    <span className="font-body text-sm font-semibold text-foreground/90">{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contributors;
