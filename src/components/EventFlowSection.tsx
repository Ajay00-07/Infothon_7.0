import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  UserCheck,
  Sparkles,
  Coffee,
  Target,
  Utensils,
  Award,
  Clock,
  AlertTriangle,
} from "lucide-react";

interface EventFlowItem {
  step: string;
  title: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const eventFlowData: EventFlowItem[] = [
  {
    step: "01",
    title: "REGISTRATION",
    time: "7:30 AM – 8:30 AM",
    icon: UserCheck,
    tag: "REPORTING",
  },
  {
    step: "02",
    title: "INAUGURATION",
    time: "9:30 AM – 10:00 AM",
    icon: Sparkles,
    tag: "CEREMONY",
  },
  {
    step: "03",
    title: "SNACKS BREAK",
    time: "10:45 AM – 11:00 AM",
    icon: Coffee,
    tag: "REFRESHMENT",
  },
  {
    step: "04",
    title: "FIRST CHECKPOINT",
    time: "11:30 AM",
    icon: Target,
    tag: "EVALUATION 1",
  },
  {
    step: "05",
    title: "LUNCH BREAK",
    time: "1:30 PM – 2:00 PM",
    icon: Utensils,
    tag: "MEAL BREAK",
  },
  {
    step: "06",
    title: "TEA BREAK",
    time: "4:45 PM – 5:15 PM",
    icon: Coffee,
    tag: "REFRESHMENT",
  },
  {
    step: "07",
    title: "FINAL EVALUATION",
    time: "6:30 PM",
    icon: Award,
    tag: "FINAL JURY",
  },
];

const EventFlowSection = () => {
  return (
    <section className="relative z-10 py-24 px-4 bg-[#050907]/90 backdrop-blur-md border-y border-primary/15 overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-primary/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Heading */}
        <SectionHeading
          title="EVENT FLOW"
          subtitle="Official schedule and milestone timeline for hackathon day."
        />

        {/* Status Indicator Badge */}
        <div className="flex justify-center -mt-4 mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-mono text-xs md:text-sm font-semibold uppercase tracking-[0.25em] shadow-[0_0_25px_rgba(124,255,79,0.2)]"
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
            OFFICIAL SCHEDULE
          </motion.div>
        </div>

        {/* DESKTOP PIPELINE FLOW (Horizontal) */}
        <div className="hidden lg:block relative my-16 px-2">
          {/* Base Connecting Energy Line */}
          <div className="absolute top-6 left-[7.14%] right-[7.14%] -translate-y-1/2 h-[2px] bg-primary/20 z-0" />

          {/* Animated Drawing Connecting Energy Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-6 left-[7.14%] right-[7.14%] -translate-y-1/2 h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 origin-left z-0 shadow-[0_0_12px_#7CFF4F]"
          />

          {/* Traveling Energy Pulse Particle */}
          <motion.div
            animate={{
              left: ["7.14%", "92.86%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-6 -translate-y-1/2 w-3.5 h-3.5 -ml-[7px] rounded-full bg-[#7CFF4F] shadow-[0_0_16px_#7CFF4F] z-10 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-white animate-ping opacity-75" />
          </motion.div>

          {/* 7 Pipeline Stage Cards */}
          <div className="grid grid-cols-7 gap-2.5 xl:gap-3.5 relative z-10">
            {eventFlowData.map((event, i) => (
              <motion.div
                key={event.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                className="flex flex-col items-center group"
              >
                {/* Glowing Pipeline Node */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 rounded-2xl bg-[#050907] border border-primary/50 flex items-center justify-center shadow-[0_0_20px_rgba(124,255,79,0.25)] mb-5 relative group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(124,255,79,0.5)] transition-all duration-300 z-10"
                >
                  <event.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary/40 border border-primary/60" />
                </motion.div>

                {/* Stage Glassmorphism Card */}
                <div className="w-full bg-[#050907]/85 backdrop-blur-md border border-primary/25 rounded-2xl p-3 xl:p-4 text-center shadow-[0_0_20px_rgba(124,255,79,0.08)] group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(124,255,79,0.18)] transition-all duration-300 flex flex-col justify-between min-h-[148px]">
                  <div>
                    <div className="font-mono text-[10px] xl:text-[11px] font-bold text-primary/80 tracking-widest uppercase mb-1">
                      STAGE {event.step}
                    </div>
                    <h4 className="font-display text-xs xl:text-sm font-bold text-foreground tracking-wide leading-snug my-1 group-hover:text-primary transition-colors">
                      {event.title}
                    </h4>
                  </div>

                  <div className="mt-3 pt-2 border-t border-primary/10">
                    <div className="inline-flex items-center justify-center gap-1 px-2 py-1 rounded-lg bg-primary/10 border border-primary/25 text-primary font-mono text-[10px] xl:text-xs font-semibold shadow-[0_0_8px_rgba(124,255,79,0.15)] w-full">
                      <Clock className="w-3 h-3 flex-shrink-0 text-primary/80" />
                      <span className="leading-tight text-center">{event.time}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE & TABLET PIPELINE FLOW (Vertical) */}
        <div className="lg:hidden relative my-12 max-w-xl mx-auto px-4 sm:px-6">
          {/* Base Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-[38px] sm:left-[48px] -translate-x-1/2 w-[2px] bg-primary/20 z-0" />

          {/* Animated Vertical Connecting Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute top-6 bottom-6 left-[38px] sm:left-[48px] -translate-x-1/2 w-[2px] bg-gradient-to-b from-primary/30 via-primary to-primary/30 origin-top z-0 shadow-[0_0_10px_#7CFF4F]"
          />

          {/* Traveling Vertical Energy Pulse */}
          <motion.div
            animate={{
              top: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4.0,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[38px] sm:left-[48px] -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#7CFF4F] shadow-[0_0_14px_#7CFF4F] z-10 pointer-events-none"
          >
            <div className="w-full h-full rounded-full bg-white animate-ping opacity-75" />
          </motion.div>

          {/* Vertical Pipeline Items */}
          <div className="space-y-6 sm:space-y-7 relative z-10">
            {eventFlowData.map((event, i) => (
              <motion.div
                key={event.step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 sm:gap-5 group"
              >
                {/* Node Dot */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#050907] border border-primary/50 flex items-center justify-center flex-shrink-0 relative z-10 shadow-[0_0_15px_rgba(124,255,79,0.25)] group-hover:border-primary group-hover:shadow-[0_0_25px_rgba(124,255,79,0.45)] transition-all duration-300">
                  <event.icon className="w-5 h-5 text-primary" />
                </div>

                {/* Glassmorphism Card */}
                <div className="flex-1 bg-[#050907]/85 backdrop-blur-md border border-primary/25 rounded-xl p-4 sm:p-5 shadow-[0_0_15px_rgba(124,255,79,0.08)] group-hover:border-primary/50 group-hover:shadow-[0_0_25px_rgba(124,255,79,0.16)] transition-all duration-300">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-xs font-bold text-primary/80 tracking-wider">
                      STAGE {event.step}
                    </span>
                    <span className="font-mono text-[9px] text-muted-foreground/80 tracking-widest uppercase px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {event.tag}
                    </span>
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-foreground tracking-wide mt-1.5 group-hover:text-primary transition-colors">
                    {event.title}
                  </h4>
                  <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/25 text-primary font-mono text-xs sm:text-sm font-semibold shadow-[0_0_10px_rgba(124,255,79,0.15)]">
                    <Clock className="w-3.5 h-3.5 text-primary/80 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Accommodation Notice */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-10 md:mt-14 flex justify-center px-4"
        >
          <div className="inline-flex items-start sm:items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl bg-amber-500/[0.06] border border-amber-500/25 backdrop-blur-sm max-w-2xl text-left sm:text-center">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm text-muted-foreground/85 font-body leading-relaxed">
              <span className="font-semibold text-amber-400/95 tracking-wide">ACCOMMODATION NOTICE:</span>{" "}
              Please note: Accommodation will not be provided by the organizers. Participants are kindly requested to make their own accommodation arrangements, if required.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventFlowSection;
