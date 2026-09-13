import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Linkedin, Instagram } from "lucide-react";

const contacts = [
  { name: "Sukrutha K", phone: "6361203438" },
  { name: "Vasudev S", phone: "8123099737" },
  { name: "Ajay Kumar R", phone: "8660164565" },
  { name: "Abhinav C", phone: "9481138912" },
];

const Contact = () => (
  <div className="min-h-screen bg-background pt-24">
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="CONTACT DETAILS FOR INFOTHON 7.0" subtitle="Reach out to our organizing team" />

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Email & Location info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <div className="glass-card flex gap-4 items-start p-5">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Email</h4>
              <a href="mailto:infothon@vvce.ac.in" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                infothon@vvce.ac.in
              </a>
            </div>
          </div>

          <div className="glass-card flex gap-4 items-start p-5">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Location</h4>
              <p className="text-muted-foreground text-sm">Vidyavardhaka College of Engineering, Mysuru</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Numbers Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          <h4 className="text-sm font-display font-bold uppercase tracking-wider text-foreground text-center mb-4">
            Coordinators
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contacts.map((c, i) => (
              <a
                key={i}
                href={`tel:${c.phone}`}
                className="glass-card p-5 flex items-center gap-4 hover:neon-border transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{c.name}</h4>
                  <p className="text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors">{c.phone}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center pt-2"
        >
          <h4 className="text-sm font-bold text-foreground mb-3">Follow Us</h4>
          <div className="flex gap-3 justify-center">
            {[
              { icon: Linkedin, link: "https://www.linkedin.com/school/vvceofficial/" },
              { icon: Instagram, link: "https://www.instagram.com/infothon.vvce/" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
              >
                <item.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card overflow-hidden rounded-xl h-64"
        >
          <iframe
            src="https://www.google.com/maps?q=12.336565,76.618745&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            loading="lazy"
            title="Location"
          />
        </motion.div>

      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;