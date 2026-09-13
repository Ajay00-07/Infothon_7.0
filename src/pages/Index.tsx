import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroScene from "@/components/HeroScene";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Clock, Users, Trophy, Zap, Lightbulb, Handshake, Calendar, CheckCircle, Send, Star } from "lucide-react";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <HeroScene />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(hsl(48 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(48 100% 50%) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground uppercase tracking-[0.3em] text-sm mb-4"
          >
            Presenting
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary neon-text mb-6"
          >
            INFOTHON 7.0
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="font-display text-lg md:text-2xl tracking-[0.2em] text-foreground/80 mb-12"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="lg" asChild>
              <Link to="/register">Register</Link>
            </Button>
            <Button variant="neon" size="lg" asChild>
              <Link to="/problems">View Problem Statements</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/results">🏆 Shortlisted Teams</Link>
            </Button>
          </motion.div>
        </div>
      </section>
{/* Event Flow */}
<section className="relative z-10 py-24 px-4 bg-card/30">
  <div className="container mx-auto">
    <SectionHeading 
      title="Event Flow" 
      subtitle="Complete schedule of Infothon 7.0 hackathon"
    />

    <div className="glass-card p-8 max-w-5xl mx-auto text-center">
      <p className="text-muted-foreground">Coming Soon</p>
    </div>
  </div>
</section>
      {/* Event Overview */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading
            title="Event Overview"
            subtitle="A 10 hour hackathon bringing the brightest minds together to solve real-world challenges."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock,  title: "10 hours",    desc: "Non-stop innovation and coding marathon" },
              { icon: Users,  title: "Open to All", desc: "Students and enthusiasts welcome" },
              { icon: Trophy, title: "Coming Soon", desc: "Prize pool with exciting goodies and swag" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 text-center hover:neon-border transition-all duration-500"
              >
                <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-24 px-4 bg-card/30">
        <div className="container mx-auto">
          <SectionHeading title="Timeline" subtitle="Key milestones for Infothon 7.0" />
          <div className="max-w-3xl mx-auto space-y-0">
            {[
              { icon: Calendar,    date: "March 28th",              title: "Registration Ends", desc: "Sign up and form your team" },
              { icon: Send,        date: "March 29th – April 1st",  title: "PPT Submission",    desc: "Submit your solution approach" },
              { icon: Zap,         date: "April 11th and 12th",     title: "Hackathon Day",     desc: "10 hours of building and hacking" },
              { icon: CheckCircle, date: "April 12th",              title: "Results Announced", desc: "Winners declared and prizes distributed" },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="flex gap-6 items-start relative"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center neon-glow-sm flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {i < 3 && <div className="w-px h-16 bg-border" />}
                </div>
                <div className="pb-12 min-w-0">
                  <span className="text-primary font-display text-xs tracking-wider">{item.date}</span>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto">
          <SectionHeading title="Why Participate?" subtitle="More than just a hackathon" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Handshake, title: "Networking",          desc: "Connect with industry leaders, mentors, and like-minded innovators." },
              { icon: Lightbulb, title: "Build Real Solutions", desc: "Work on real-world problems and create impactful solutions that matter." },
              { icon: Star,      title: "Industry Mentorship",  desc: "Get guided by expert mentors from top tech companies throughout the event." },
            ].map((item, i) => (
              <motion.div
                key={i}
                {...stagger}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-8 hover:neon-border transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-500">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About VVCE & ISE */}
      <section className="relative z-10 py-24 px-4 bg-card/30 overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          <SectionHeading title="About Us" subtitle="The institution behind Infothon 7.0" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* VVCE Card */}
            <motion.div
              {...stagger}
              transition={{ delay: 0.1 }}
              className="glass-card p-8 hover:neon-border transition-all duration-500 group"
            >
              {/* Header with logo placeholder */}
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
                  <span
                    className="text-primary font-display font-black text-sm hidden w-full h-full items-center justify-center"
                  >
                    VVCE
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 mb-1">Est. 1997 · Mysuru</p>
                  <h3 className="font-display text-base font-bold text-foreground leading-snug">
                    Vidyavardhaka College<br />of Engineering
                  </h3>
                </div>
              </div>

              <div className="w-10 h-px bg-primary/40 mb-5" />

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                An autonomous institute affiliated with Visvesvaraya Technological University (VTU), Belagavi, approved by AICTE & UGC, New Delhi. Accredited by NAAC with an{" "}
                <span className="text-primary font-semibold">"A" grade</span> and seven UG programs accredited by NBA. With{" "}
                <span className="text-foreground/80 font-medium">3200+ students</span>, nine PhD research centers, and a passionate faculty team dedicated to world-class education.
              </p>

              <div className="flex flex-wrap gap-2">
                {["NBA Accredited", "NAAC 'A' Grade", "VTU Affiliated", "AICTE Approved"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/20 text-primary/60 bg-primary/5"
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
              className="glass-card p-8 hover:neon-border transition-all duration-500 group"
            >
              {/* Header with logo placeholder */}
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
                  <span
                    className="text-primary font-display font-black text-sm hidden w-full h-full items-center justify-center"
                  >
                    ISE
                  </span>
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 mb-1">Dept. of</p>
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
                    className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/20 text-primary/60 bg-primary/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

          {/* About Infothon strip */}
          <motion.div
            {...stagger}
            transition={{ delay: 0.3 }}
            className="mt-8 glass-card p-8 hover:neon-border transition-all duration-500"
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Trophy className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/60 mb-1">Legacy</p>
                <h3 className="font-display text-base font-bold text-foreground mb-3">About Infothon</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Infothon, hosted by the Department of ISE at VVCE, has been a flagship event fostering collaboration, innovation, and knowledge sharing among bright minds. From Infothon 1.0 through 6.0, each edition has set new benchmarks — inspiring creativity, teamwork, and impactful projects. Now in its{" "}
                  <span className="text-primary font-semibold">Seventh Edition</span>, Infothon 7.0 is a platform where participants go beyond coding to explore ideas, build networks, and create solutions that matter.
                </p>
              </div>
            </div>
          </motion.div>

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
<div className="rounded-3xl overflow-hidden border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_40px_hsl(48_100%_50%_/_0.3)] transition-all duration-500 flex items-center justify-center bg-white/95">
        <img
          src="/677.png"
          alt="Infothon 7.0 Sponsors"
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
