import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/HeroScene";
import SectionHeading from "@/components/SectionHeading";
import EventFlowSection from "@/components/EventFlowSection";
import Footer from "@/components/Footer";
import { Clock, Users, Trophy, Zap, Lightbulb, Handshake, Calendar, CheckCircle, Send, Star, Compass } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const editions = [
  { label: "1.0", title: "Infothon 1.0" },
  { label: "2.0", title: "Infothon 2.0" },
  { label: "3.0", title: "Infothon 3.0" },
  { label: "4.0", title: "Infothon 4.0" },
  { label: "5.0", title: "Infothon 5.0" },
  { label: "6.0", title: "Infothon 6.0" },
  { label: "7.0", title: "Infothon 7.0", active: true },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroScene />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-cyber-grid opacity-30 pointer-events-none" />
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-mono text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-[0_0_15px_rgba(124,255,79,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#7CFF4F]" />
            Dept. of ISE Presents
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <img
              src="/logo.png"
              alt="INFOTHON 7.0"
              className="h-28 md:h-36 lg:h-44 w-auto object-contain rounded-2xl md:rounded-3xl border border-primary/25 drop-shadow-[0_0_35px_rgba(124,255,79,0.5)]"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-display text-sm md:text-lg tracking-[0.25em] uppercase text-muted-foreground mb-8"
          >
            Innovate <span className="text-primary">•</span> Build <span className="text-primary">•</span> Disrupt
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            <Button variant="hero" size="lg" asChild className="rounded-xl px-8 shadow-[0_0_24px_rgba(124,255,79,0.4)] hover:shadow-[0_0_36px_rgba(124,255,79,0.7)] transition-all duration-300">
              <Link to="/register">Register Now</Link>
            </Button>
            <Button variant="neon" size="lg" asChild className="rounded-xl px-6 border-primary/40 hover:border-primary">
              <Link to="/problems">View Problem Statements</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="rounded-xl px-6 border-primary/20 hover:border-primary/50 text-foreground/80 hover:text-foreground">
              <Link to="/results">🏆 Shortlisted Teams</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Event Overview / Statistics */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Event Overview"
            subtitle="A 10 hour hackathon bringing the brightest minds together to solve real-world challenges."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Clock,  title: "10 Hours",    desc: "Non-stop innovation and coding marathon" },
              { icon: Users,  title: "Open to All", desc: "Students and enthusiasts welcome" },
              { icon: Trophy, title: "₹40,000",     desc: "Prize pool with exciting goodies and swag" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="glass-card-hover p-8 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-2 tracking-wide">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Event Timeline */}
      <section className="relative z-10 py-24 px-4 bg-[#09120D]/60 backdrop-blur-md border-y border-primary/10">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading title="EVENT TIMELINE" subtitle="Key milestones for Infothon 7.0" />

          {/* Desktop Horizontal Line Timeline */}
          <div className="relative mt-12 mb-8 hidden md:block">
            {/* Animated Connecting Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute top-6 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/30 via-primary to-primary/30 origin-left z-0"
            />

            <div className="grid grid-cols-4 gap-4 relative z-10">
              {[
                { icon: Calendar,    date: "11 OCT", title: "Registration & PPT Deadline",            desc: "Sign up and submit your solution approach" },
                { icon: Send,        date: "14 OCT", title: "Shortlist Announcement",                desc: "Announcement of shortlisted teams" },
                { icon: Zap,         date: "18 OCT", title: "Payment Deadline for Shortlisted Teams", desc: "Confirm participation and payment" },
                { icon: CheckCircle, date: "24 OCT", title: "Offline Hackathon",                     desc: "10 hours of building and hacking" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 + 0.3 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#09120D] border border-primary/50 flex items-center justify-center shadow-[0_0_15px_rgba(124,255,79,0.3)] mb-4 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase mb-1">{item.date}</span>
                  <h4 className="font-display text-sm font-bold text-foreground mb-2 leading-snug">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed max-w-[200px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Timeline */}
          <div className="md:hidden space-y-6 max-w-md mx-auto">
            {[
              { icon: Calendar,    date: "11th October", title: "Registration & PPT Deadline",            desc: "Sign up and submit your solution approach" },
              { icon: Send,        date: "14th October", title: "Shortlist Announcement",                desc: "Announcement of shortlisted teams" },
              { icon: Zap,         date: "18th October", title: "Payment Deadline for Shortlisted Teams", desc: "Confirm participation and payment" },
              { icon: CheckCircle, date: "24th October", title: "Offline Hackathon",                     desc: "10 hours of building and hacking" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#09120D] border border-primary/40 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <span className="text-primary font-mono text-xs font-semibold uppercase">{item.date}</span>
                  <h4 className="font-display text-sm font-bold text-foreground mt-0.5">{item.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW EVENT FLOW SECTION */}
      <EventFlowSection />

      {/* OUR LEGACY SECTION */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="OUR LEGACY"
            subtitle="BUILT BY MANY. REMEMBERED BY ALL."
          />

          <motion.div
            {...fadeUp}
            className="glass-card-hover p-8 md:p-12 border-primary/30 relative overflow-hidden space-y-6"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#7CFF4F]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary/80 font-semibold">Flagship ISE Tradition</span>
            </div>

            <p className="text-foreground/90 text-base md:text-lg leading-relaxed font-body">
              Infothon has grown through the vision, dedication, and countless hours contributed by students, coordinators, organizers, mentors, and innovators across every edition. What began as an idea has evolved into a platform where curiosity becomes collaboration, ideas become projects, and students come together to build something meaningful.
            </p>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
              Every edition has left behind more than just projects and memories. It has created experiences, friendships, leadership opportunities, and a culture of innovation that continues to inspire the next generation of builders.
            </p>

            <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 mt-6">
              <p className="text-primary font-display font-semibold text-sm md:text-base leading-snug">
                Infothon 7.0 carries that legacy forward — with new ideas, new challenges, and a new generation ready to build what comes next.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY ANIMATED TIMELINE */}
      <section className="relative z-10 py-24 px-4 bg-[#09120D]/60 backdrop-blur-md border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading
            title="OUR JOURNEY"
            subtitle="SEVEN EDITIONS. COUNTLESS IDEAS."
          />

          <div className="relative mt-16 mb-8 px-4">
            {/* Horizontal Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute top-6 left-6 right-6 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary origin-left z-0 hidden sm:block"
            />

            {/* Edition Nodes */}
            <div className="grid grid-cols-2 sm:grid-cols-7 gap-4 relative z-10">
              {editions.map((ed, i) => (
                <motion.div
                  key={ed.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3 }}
                  className="flex flex-col items-center text-center group relative"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-xs tracking-wider transition-all duration-300 ${
                      ed.active
                        ? "bg-primary text-background shadow-[0_0_25px_rgba(124,255,79,0.7)] border-2 border-primary scale-110"
                        : "bg-[#09120D] text-foreground/80 border border-primary/30 group-hover:border-primary/60 group-hover:scale-105"
                    }`}
                  >
                    {ed.label}
                  </div>

                  <span className="font-mono text-xs text-muted-foreground mt-3 font-semibold">
                    {ed.title}
                  </span>

                  {ed.active && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 }}
                      className="mt-2 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-primary font-mono text-[9px] font-bold uppercase tracking-widest animate-pulse"
                    >
                      YOU ARE HERE
                    </motion.span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Why Participate?" subtitle="More than just a hackathon" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Handshake, title: "Networking",          desc: "Connect with industry leaders, mentors, and like-minded innovators." },
              { icon: Lightbulb, title: "Build Real Solutions", desc: "Work on real-world problems and create impactful solutions that matter." },
              { icon: Star,      title: "Industry Mentorship",  desc: "Get guided by expert mentors from top tech companies throughout the event." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="glass-card-hover p-8 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:border-primary/60 transition-all duration-300">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About VVCE & ISE */}
      <section className="relative z-10 py-24 px-4 bg-[#09120D]/60 backdrop-blur-md border-y border-primary/10">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="About Us" subtitle="The institution behind Infothon 7.0" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* VVCE Card */}
            <motion.div
              {...stagger}
              transition={{ delay: 0.1 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/15 transition-all duration-300 overflow-hidden">
                  <img
                    src="/34.png"
                    alt="VVCE"
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <span className="text-primary font-display font-black text-sm hidden w-full h-full items-center justify-center">
                    VVCE
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 mb-1">Est. 1997 · Mysuru</p>
                  <h3 className="font-display text-base font-bold text-foreground leading-snug">
                    Vidyavardhaka College<br />of Engineering
                  </h3>
                </div>
              </div>

              <div className="w-10 h-px bg-primary/40 mb-5" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                An autonomous institute affiliated with Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE & UGC, New Delhi. Accredited by NAAC with an{" "}
                <span className="text-primary font-semibold">"A" grade</span> and seven UG programs accredited by NBA. With{" "}
                <span className="text-foreground/90 font-medium">3200+ students</span>, nine PhD research centers, and a passionate faculty team dedicated to world-class education.
              </p>

              <div className="flex flex-wrap gap-2">
                {["NBA Accredited", "NAAC 'A' Grade", "VTU Affiliated", "AICTE Approved"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-primary/25 text-primary/80 bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ISE Card */}
            <motion.div
              {...stagger}
              transition={{ delay: 0.2 }}
              className="glass-card-hover p-8 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/15 transition-all duration-300 overflow-hidden">
                  <img
                    src="/23.png"
                    alt="ISE"
                    className="w-14 h-14 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement).style.display = "flex";
                    }}
                  />
                  <span className="text-primary font-display font-black text-sm hidden w-full h-full items-center justify-center">
                    ISE
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary/70 mb-1">Dept. of</p>
                  <h3 className="font-display text-base font-bold text-foreground leading-snug">
                    Information Science<br />&amp; Engineering
                  </h3>
                </div>
              </div>

              <div className="w-10 h-px bg-primary/40 mb-5" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                A department known for its cutting-edge curriculum, dedicated faculty, and state-of-the-art facilities. Focused on fostering{" "}
                <span className="text-primary font-semibold">innovation and technological excellence</span>, ISE empowers students to thrive in information science. Our graduates consistently demonstrate proficiency in the latest industry trends, making them valuable contributors to the ever-evolving world of technology.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Cutting-Edge Curriculum", "Research Focused", "Industry Ready", "Innovation Hub"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-primary/25 text-primary/80 bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="relative z-10 py-16 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Our Sponsors" subtitle="Proudly supported by" />
          <motion.div
            {...fadeUp}
            className="flex justify-center items-center"
          >
            <div className="rounded-3xl overflow-hidden border border-primary/40 hover:border-primary hover:shadow-[0_0_30px_rgba(124,255,79,0.3)] transition-all duration-500 flex items-center justify-center bg-white/95 p-4">
              <img
                src="/sponsors.jpg"
                alt="Infothon 7.0 Sponsors - ISTE & IEI"
                className="max-w-xl w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
