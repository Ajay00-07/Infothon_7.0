import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { ImageIcon, X } from "lucide-react";

const gallery = [
  { src: "/gallery/g1.jpg" },
  { src: "/gallery/g2.jpg" },
  { src: "/gallery/g3.jpg" },
  { src: "/gallery/g4.jpg" },
  { src: "/gallery/g5.jpg" },
];

const teams = [
  {
    label: "Faculty Coordinators",
    isFaculty: true,
    members: [
      { name: "Dr. R Kasturi Rangan", role: "Faculty Coordinator", initials: "FC" },
      { name: "Prof. Manjesh R", role: "Faculty Coordinator", initials: "FC" },
    ],
  },
  {
    label: "Lead Organizers",
    members: [
      { name: "Priyadarshani Sarja", role: "Lead Organizer", initials: "LO" },
      { name: "Sukrutha K", role: "Lead Organizer", initials: "LO" },
    ],
  },
  {
    label: "Technical Team",
    members: [
      { name: "Dheeraj LY", role: "Unstop Organizer", initials: "UO" },
      { name: "Srushti Shashikanth Patil", role: "Unstop Organizer", initials: "UO" },
      { name: "Ajay Kumar R", role: "Technical Head", initials: "TH" },
      { name: "Abhinav C", role: "Tech Team", initials: "TT" },
    ],
  },
  {
    label: "Overall Co-ordinators",
    isOverall: true,
    members: [
      { name: "Athripriya K Poojari", role: "Co-ordinator", initials: "AP" },
      { name: "Vasudev S", role: "Co-ordinator", initials: "VS" },
      { name: "Nikhil S P", role: "Co-ordinator", initials: "NS" },
      { name: "Chethas Gowda D", role: "Co-ordinator", initials: "CG" },
      { name: "Ajith Raj P", role: "Co-ordinator", initials: "AR" },
      { name: "Poorvitha M", role: "Co-ordinator", initials: "PM" },
      { name: "Archana Anil Patil", role: "Co-ordinator", initials: "AP" },
      { name: "Nudi C", role: "Co-ordinator", initials: "NC" },
      { name: "Neha HK", role: "Co-ordinator", initials: "NH" },
      { name: "Nithyashree", role: "Co-ordinator", initials: "NS" },
      { name: "Khushi R", role: "Co-ordinator", initials: "KR" },
      { name: "Poorvi RS", role: "Co-ordinator", initials: "PR" },
      { name: "Sneha Pradeep Raj", role: "Co-ordinator", initials: "SR" },
      { name: "Likitha C", role: "Co-ordinator", initials: "LC" },
    ],
  },
];

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const FacultyCard = ({ member }: { member: { name: string; role: string; initials: string } }) => (
  <motion.div
    whileHover={{ y: -3 }}
    transition={{ duration: 0.2 }}
    className="glass-card-hover p-5 rounded-2xl border border-primary/30 flex items-center gap-4 bg-primary/5 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300 shadow-[0_0_15px_rgba(124,255,79,0.08)]"
  >
    <div className="w-12 h-12 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-mono font-bold text-sm flex-shrink-0 shadow-[0_0_10px_#7CFF4F]">
      {member.initials}
    </div>
    <div>
      <h4 className="font-sans font-bold text-base md:text-lg text-foreground tracking-normal">{member.name}</h4>
      <p className="text-primary/80 font-mono text-xs font-semibold tracking-wider uppercase mt-0.5">{member.role}</p>
    </div>
  </motion.div>
);

const MemberChip = ({ member }: { member: { name: string; role: string; initials: string; desc?: string } }) => {
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
        className="flex items-center gap-3 px-4 py-2.5 rounded-2xl border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 cursor-default"
      >
        <span className="w-8 h-8 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-mono font-bold text-xs flex-shrink-0">
          {member.initials}
        </span>
        <div>
          <p className="font-sans font-semibold text-sm text-foreground tracking-normal leading-snug mb-0.5">{member.name}</p>
          <p className="text-muted-foreground font-sans text-xs leading-none">{member.role}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {hovered && member.desc && (
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

const About = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden">
      <div className="container mx-auto px-4 py-16">

        {/* About */}
        <SectionHeading title="About Infothon" subtitle="Where innovation meets impact" />
        <motion.div {...stagger} className="glass-card neon-border p-8 md:p-12 max-w-3xl mx-auto mb-24 text-center">
          <p className="text-muted-foreground leading-relaxed font-sans">
            Infothon is the flagship hackathon of the Department of Information Science & Engineering at Vidyavardhaka College of Engineering — a platform where curious minds come together to build, break, and innovate.
            <br /><br />
            Now in its 7th edition, Infothon has grown into one of the most anticipated tech events on campus, bringing together students, developers, and problem-solvers to tackle real-world challenges head-on.
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

              {team.isFaculty ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 md:pl-8">
                  {team.members.map((member, mi) => (
                    <motion.div
                      key={mi}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: mi * 0.12 + 0.1, duration: 0.5 }}
                    >
                      <FacultyCard member={member} />
                    </motion.div>
                  ))}
                </div>
              ) : team.isOverall ? (
                <div className="pl-0 md:pl-8 space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
                    {team.members.map((member, mi) => (
                      <motion.div
                        key={mi}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: mi * 0.03, duration: 0.3 }}
                        whileHover={{ y: -2 }}
                        className="flex items-center gap-3 p-3.5 rounded-2xl border border-primary/20 bg-primary/5 hover:border-primary/50 hover:bg-primary/10 transition-all duration-200"
                      >
                        <span className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-mono font-bold text-xs flex-shrink-0">
                          {member.initials}
                        </span>
                        <div className="min-w-0">
                          <p className="font-sans font-semibold text-sm text-foreground tracking-normal leading-snug truncate">
                            {member.name}
                          </p>
                          <p className="text-muted-foreground font-sans text-xs mt-0.5">
                            {member.role}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Subtle divider & Tribute line */}
                  <div className="pt-6 border-t border-primary/15 max-w-2xl mx-auto text-center">
                    <div className="glass-card p-6 md:p-8 rounded-2xl border border-primary/25 bg-[#050907]/60 backdrop-blur-md shadow-[0_0_20px_rgba(124,255,79,0.08)]">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-[11px] font-mono uppercase tracking-widest mb-3">
                        ✦ WITH GRATITUDE ✦
                      </div>
                      <p className="text-foreground/90 font-sans text-xs md:text-sm leading-relaxed max-w-lg mx-auto">
                        To all the coordinators behind the scenes — your dedication, support, and contribution make Infothon possible.
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap gap-2.5 pl-0 md:pl-8">
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
              )}
            </motion.div>
          ))}
        </div>

        {/* Gallery */}
        <SectionHeading title="Gallery" subtitle="Moments from past editions" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-24">
          {gallery.map((item, i) => (
            <motion.div
              key={i}
              {...stagger}
              transition={{ delay: i * 0.08 }}
              onClick={() => setSelectedImage(item.src)}
              className="glass-card hover:neon-border transition-all duration-300 group overflow-hidden relative aspect-square rounded-2xl cursor-pointer"
            >
              {item.src ? (
                <>
                  <img
                    src={item.src}
                    alt={`Gallery item ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-wider bg-black/70 px-2 py-1 rounded border border-primary/40 backdrop-blur-sm">
                      View
                    </span>
                  </div>
                </>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
                  <ImageIcon className="w-8 h-8 text-primary/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-primary/30 shadow-2xl shadow-primary/10 bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/70 border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage}
                alt="Gallery Preview"
                className="w-full h-full max-h-[85vh] object-contain rounded-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default About;