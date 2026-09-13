import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Eye, Users, Share2, Star, Award, Gem } from "lucide-react";

const tiers = [
  {
    name: "Platinum",
    icon: Gem,
    color: "from-slate-300 to-slate-100",
    perks: ["Premium logo on all materials", "Exclusive booth at venue", "Full social media campaign", "Keynote speaking slot", "Access to participant resumes"],
  },
  {
    name: "Gold",
    icon: Award,
    color: "from-yellow-500 to-yellow-300",
    perks: ["Logo on website & banners", "Booth at venue", "Social media mentions", "Judge panel opportunity", "Branded swag distribution"],
  },
  {
    name: "Silver",
    icon: Star,
    color: "from-gray-400 to-gray-300",
    perks: ["Logo on website", "Social media shoutout", "Brand mention in opening", "Certificate of partnership"],
  },
];

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const Sponsors = () => (
  <div className="min-h-screen bg-background pt-24">
    <div className="container mx-auto px-4 py-16">
      <SectionHeading
        title="Partner With Infothon 7.0"
        subtitle="Join us in empowering the next generation of innovators"
      />

      {/* Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
        {[
          { icon: Eye, title: "Brand Visibility", desc: "Get your brand in front of 5000+ tech enthusiasts and innovators." },
          { icon: Users, title: "Talent Recruitment", desc: "Direct access to top-tier student talent and their innovative projects." },
          { icon: Share2, title: "Industry Collaboration", desc: "Shape real-world problem statements and mentor the next wave of builders." },
        ].map((item, i) => (
          <motion.div key={i} {...stagger} transition={{ delay: i * 0.15 }} className="glass-card p-8 hover:neon-border transition-all duration-500">
            <item.icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Current Sponsors Banner */}
      <div className="mb-24">
        <SectionHeading title="Our Sponsors & Partners" subtitle="Proudly supported by" />
        <motion.div {...stagger} className="flex justify-center items-center">
          <div className="rounded-3xl overflow-hidden border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_40px_hsl(91_100%_50%_/_0.3)] transition-all duration-500 flex items-center justify-center bg-white/95 p-4 max-w-xl mx-auto">
            <img
              src="/sponsors.jpg"
              alt="Infothon 7.0 Sponsors - ISTE & IEI"
              className="w-full object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>

      {/* Tiers */}
      <SectionHeading title="Sponsor Tiers" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            {...stagger}
            transition={{ delay: i * 0.15 }}
            className="glass-card p-8 hover:neon-border transition-all duration-500 text-center"
          >
            <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center mx-auto mb-6`}>
              <tier.icon className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">{tier.name}</h3>
            <ul className="space-y-3 text-left mb-8">
              {tier.perks.map((perk, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">✦</span>
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-lg mx-auto">
        <SectionHeading title="Become a Sponsor" subtitle="Reach out and let's create something remarkable together" />
        <motion.form {...stagger} className="glass-card neon-border p-8 space-y-4">
          {[
            { label: "Company Name", type: "text" },
            { label: "Contact Person", type: "text" },
            { label: "Email", type: "email" },
            { label: "Phone", type: "tel" },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-sm font-display text-foreground/80 mb-1 block">{f.label}</label>
              <input
                type={f.type}
                className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          ))}
          <div>
            <label className="text-sm font-display text-foreground/80 mb-1 block">Message</label>
            <textarea rows={4} className="w-full bg-secondary border border-border rounded-lg px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
          </div>
          <Button variant="hero" className="w-full" type="submit" onClick={(e) => e.preventDefault()}>
            Send Inquiry
          </Button>
        </motion.form>
      </div>
    </div>
    <Footer />
  </div>
);

export default Sponsors;
