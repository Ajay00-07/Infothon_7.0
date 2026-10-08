import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Calendar, FileText, Send, Zap, CheckCircle, Sparkles, Activity } from "lucide-react";

const flowStages = [
  {
    step: "01",
    label: "Registration Closes",
    date: "9th October — 5:00 PM",
    shortDate: "9 OCT",
    time: "5:00 PM",
    desc: "Official Unstop registration closes",
    icon: Calendar,
  },
  {
    step: "02",
    label: "PPT Submission Deadline",
    date: "10th October — 1:00 PM",
    shortDate: "10 OCT",
    time: "1:00 PM",
    desc: "Mandatory official PPT submission",
    icon: FileText,
  },
  {
    step: "03",
    label: "Shortlist Announcement",
    date: "14th October",
    shortDate: "14 OCT",
    time: "",
    desc: "Announcement of shortlisted teams",
    icon: Send,
  },
  {
    step: "04",
    label: "Payment Deadline",
    fullLabel: "Payment Deadline for Shortlisted Teams",
    date: "17th October",
    shortDate: "17 OCT",
    time: "",
    desc: "Payment deadline for shortlisted teams",
    icon: Zap,
  },
  {
    step: "05",
    label: "Offline Hackathon",
    date: "24th October",
    shortDate: "24 OCT",
    time: "",
    desc: "10 hours of building and hacking",
    icon: CheckCircle,
  },
];

const EventFlowSection = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#050907]/90 backdrop-blur-md border-y border-primary/15 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Heading */}
        <SectionHeading
          title="EVENT FLOW"
          subtitle="Official journey and key milestones for Infothon 7.0"
        />

        {/* Status Indicator Badge */}
        <div className="flex justify-center -mt-4 mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(124,255,79,0.2)]"
          >
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2.0,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-2.5 h-2.5 rounded-full bg-[#7CFF4F] shadow-[0_0_10px_#7CFF4F]"
            />
            OFFICIAL TIMELINE SCHEDULE
          </motion.div>
        </div>

        {/* DESKTOP PIPELINE FLOW (Horizontal Grid) */}
        <div className="hidden lg:block relative my-16 px-2">
          {/* Base Connecting Energy Line */}
          <div className="absolute top-1/2 left-[6%] right-[6%] -translate-y-1/2 h-[2px] bg-primary/20 z-0" />

          {/* Animated Drawing Connecting Energy Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-1/2 left-[6%] right-[6%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 origin-left z-0 shadow-[0_0_12px_#7CFF4F]"
          />

          {/* Traveling Energy Pulse Particle */}
          <motion.div
            animate={{
              left: ["6%", "94%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 -ml-2 rounded-full bg-[#7CFF4F] shadow-[0_0_16px_#7CFF4F] z-10 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-white animate-ping opacity-75" />
          </motion.div>

          {/* 5 Pipeline Stage Cards */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {flowStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, duration: 0.5 }}
                  className="flex flex-col items-center group"
                >
                  {/* Glowing Pipeline Node */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="w-13 h-13 rounded-2xl bg-[#050907] border border-primary/50 flex items-center justify-center shadow-[0_0_20px_rgba(124,255,79,0.25)] mb-6 relative group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(124,255,79,0.5)] transition-all duration-300"
                  >
                    <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/40 border border-primary/60" />
                  </motion.div>

                  {/* Stage Glassmorphism Card */}
                  <div className="w-full bg-[#050907]/85 backdrop-blur-md border border-primary/25 rounded-2xl p-4 text-center shadow-[0_0_20px_rgba(124,255,79,0.08)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(124,255,79,0.18)] transition-all duration-300 flex flex-col justify-between min-h-[160px]">
                    <div>
                      <div className="font-mono text-[10px] font-bold text-primary/80 tracking-widest uppercase mb-1">
                        STAGE {stage.step}
                      </div>
                      <h4 className="font-display text-xs md:text-sm font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                        {stage.fullLabel || stage.label}
                      </h4>
                    </div>

                    <div className="pt-2 border-t border-primary/15">
                      <div className="font-mono text-xs font-extrabold text-primary tracking-wider">
                        {stage.date}
                      </div>
                      <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2 leading-tight">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* TABLET / MOBILE PIPELINE FLOW (Vertical / Stacked) */}
        <div className="lg:hidden relative my-12 max-w-lg mx-auto pl-6">
          {/* Base Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-primary/20 z-0" />

          {/* Animated Vertical Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-primary/30 via-primary to-primary/30 origin-top z-0 shadow-[0_0_10px_#7CFF4F]"
          />

          {/* Traveling Vertical Energy Pulse */}
          <motion.div
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-6 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#7CFF4F] shadow-[0_0_14px_#7CFF4F] z-10 pointer-events-none"
          />

          {/* Vertical Pipeline Items */}
          <div className="space-y-6 relative z-10">
            {flowStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 pl-4"
                >
                  {/* Node Dot */}
                  <div className="w-10 h-10 rounded-xl bg-[#050907] border border-primary/50 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(124,255,79,0.3)]">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  {/* Glassmorphism Card */}
                  <div className="flex-1 bg-[#050907]/85 backdrop-blur-md border border-primary/25 rounded-xl p-4 shadow-[0_0_15px_rgba(124,255,79,0.08)]">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-[10px] font-bold text-primary/80 tracking-wider">
                        STAGE {stage.step}
                      </span>
                      <span className="font-mono text-xs font-bold text-primary tracking-wider">
                        {stage.date}
                      </span>
                    </div>
                    <h4 className="font-display text-sm font-bold text-foreground">
                      {stage.fullLabel || stage.label}
                    </h4>
                    <p className="text-muted-foreground text-xs leading-relaxed mt-1">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Reassurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-2xl mx-auto text-center p-6 rounded-2xl bg-primary/5 border border-primary/20 backdrop-blur-sm"
        >
          <div className="flex items-center justify-center gap-2 mb-2 text-primary font-mono text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Infothon 7.0 Milestone Flow</span>
          </div>
          <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-body">
            Please ensure registration and PPT submissions are completed prior to the respective deadlines.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EventFlowSection;
