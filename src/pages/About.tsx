import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { ImageIcon } from "lucide-react";

const gallery = [
  { src: "/gallery/photo1.jpg", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/2.jpeg", span: "" },
  { src: "/gallery/photo3.jpeg", span: "" },
  { src: "/gallery/photo4.jpeg", span: "" },
  { src: "/gallery/photo5.jpeg", span: "md:col-span-2" },
  { src: "/gallery/1234.jpeg", span: "md:col-span-2" },
];

const teams = [
  {
    label: "Faculty Coordinators",
    members: [
      { name: "Prof. Manjesh R", role: "Faculty Coordinator", initials: "FC" },
      { name: "Dr. R Kasturi Rangan", role: "Faculty Coordinator", initials: "FC" },
    ],
  },
  {
    label: "Lead Organizers",
    members: [
      { name: "Sanjana R", role: "Lead Organizer", initials: "LO", desc: "Overseeing the entire event — from ideation to execution, ensuring every team is aligned and every milestone is met." },
      { name: "Priyadarshani Sarja", role: "Lead Organizer", initials: "LO", desc: "Coordinating cross-team efforts and managing key stakeholder communications throughout the event." },
      { name: "Akash Valmiki", role: "Lead Organizer", initials: "LO", desc: "Supporting event leadership in driving the vision of Infothon 7.0 from planning to delivery." },
    ],
  },
  {
    label: "Technical Team",
    members: [
      { name: "Sreevathsa R", role: "Technical Head", initials: "TH", desc: "Architecting the hackathon's tech infrastructure — website, judging platforms, and dev environment setup." },
      { name: "Preetham SM", role: "Unstop Organizer", initials: "UO", desc: "Leading the Unstop team in managing registrations and participant engagement." },
      { name: "Dhurva D", role: "Tech Team", initials: "TT", desc: "Making the hackathon a success through effective technical coordination and management." },
    ],
  },
  {
    label: "Overall Co-ordinators",
    members: [
      { name: "Pragna C", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Unnathi P", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Raghav Bhat", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Shreyas Gowdru", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Anupama M", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Archana Anil Patil", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Pranamya R", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Sukrutha K", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Vaishnavi N Kamath", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Khushi Kiran Jigali", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Likitha C", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Srushti Ravindra", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Kuber Lakshman Nayaka", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Likith T B", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Mahesh C", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Akshay Nadig", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Jnyanesh", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Nithesh J", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
      { name: "Prabhav G K", role: "Co-ordinator", initials: "CO", desc: "Making the hackathon a success through effective coordination and management." },
    ],
  },
];

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const MemberChip = ({ member }: { member: typeof teams[0]["members"][0] }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.15 }}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
      >
        <span className="w-7 h-7 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-display font-bold text-[10px] flex-shrink-0">
          {member.initials}
        </span>
        <div>
          <p className="font-display font-semibold text-sm text-foreground leading-none mb-0.5">{member.name}</p>
          <p className="text-muted-foreground text-[11px] leading-none">{member.role}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 pointer-events-none w-56"
          >
            <div className="glass-card p-3 border border-primary/30 bg-card/95 backdrop-blur-xl shadow-2xl rounded-xl">
              <p className="text-[11px] text-muted-foreground leading-relaxed text-center">{member.desc}</p>
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-card border-r border-b border-primary/30 rounded-sm" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const About = () => (
  <div className="min-h-screen bg-background pt-24 overflow-x-hidden">
    <div className="container mx-auto px-4 py-16">

      {/* About */}
      <SectionHeading title="About Infothon" subtitle="Where innovation meets impact" />
      <motion.div {...stagger} className="glass-card neon-border p-8 md:p-12 max-w-3xl mx-auto mb-24 text-center">
        <p className="text-muted-foreground leading-relaxed">
          Infothon is the flagship hackathon of the Department of Information Science & Engineering at Vidyavardhaka College of Engineering — a platform where curious minds come together to build, break, and innovate.
          <br /><br />
          Now in its 6th edition, Infothon has grown into one of the most anticipated tech events on campus, bringing together students, developers, and problem-solvers to tackle real-world challenges head-on.
          <br /><br />
          Over the years, Infothon has become more than just a competition — it's a culture. A space where ideas get stress-tested, teams push their limits, and solutions that actually matter come to life.
          <br /><br />
          Infothon 7.0 continues that legacy — bigger, bolder, and built for the builders of tomorrow.
        </p>
      </motion.div>

      {/* Organizers */}
      <SectionHeading title="Our Team" subtitle="The people who make it happen" />
      <div className="max-w-4xl mx-auto mb-24 space-y-10">
        {teams.map((team, ti) => (
          <motion.div
            key={ti}
            {...stagger}
            transition={{ delay: ti * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display text-xs font-bold uppercase tracking-[0.2em] text-primary/50">
                {String(ti + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-foreground/70">{team.label}</h3>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">{team.members.length} members</span>
            </div>

            {/* All screens: chips */}
            <div className="flex flex-wrap gap-2 pl-8">
              {team.members.map((member, mi) => (
                <motion.div
                  key={mi}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: ti * 0.05 + mi * 0.06 }}
                >
                  <MemberChip member={member} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Gallery */}
      <SectionHeading title="Gallery" subtitle="Moments from past editions" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-24">
        {gallery.map((item, i) => (
          <motion.div
            key={i}
            {...stagger}
            transition={{ delay: i * 0.08 }}
            className={`glass-card hover:neon-border transition-all duration-500 group overflow-hidden relative ${item.span}`}
          >
            {item.src ? (
              <img
                src={item.src}
                alt="Gallery"
                className="w-full h-full object-cover min-h-40 group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full min-h-40 h-full flex flex-col items-center justify-center gap-2 p-4">
                <ImageIcon className="w-8 h-8 text-primary/40" />
              </div>
            )}
          </motion.div>
        ))}
      </div>

    </div>
    <Footer />
  </div>
);

export default About;