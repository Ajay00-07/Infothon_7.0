import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, User } from "lucide-react";
import { ShortlistedTeam } from "@/data/shortlistedTeams";

interface ShortlistedTeamCardProps {
  team: ShortlistedTeam;
  categoryLabel: string;
  index: number;
}

export const ShortlistedTeamCard: React.FC<ShortlistedTeamCardProps> = ({
  team,
  categoryLabel,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.05, 0.4), duration: 0.3 }}
      className="glass-card p-6 flex flex-col justify-between hover:neon-border transition-all duration-300 group relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

      <div>
        {/* Header Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            {team.reference && (
              <span className="font-mono text-xs font-extrabold text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/30">
                REF #{team.reference}
              </span>
            )}
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-lg border border-border bg-card">
              {categoryLabel}
            </span>
          </div>

          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30 text-[10px] font-mono text-primary font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3 h-3 text-primary" />
            Shortlisted
          </span>
        </div>

        {/* 1. TEAM NAME: Uppercase, bold prominent typography, most visually noticeable text */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors tracking-wide">
          {team.teamName.toUpperCase()}
        </h3>

        {/* 2. TEAM LEADER: Immediately below team name, smaller font size, formatted exactly as "Team Leader: Name" */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-sans text-muted-foreground mt-2">
          <User className="w-3.5 h-3.5 text-primary/70 flex-shrink-0" />
          <span className="font-semibold text-foreground/90">Team Leader:</span>
          <span className="text-foreground/75 font-normal">{team.teamLeader}</span>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-4 mt-5 border-t border-border/60 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground">
          Infothon 7.0 Official Shortlist
        </span>
        <span className="text-[10px] font-mono text-primary font-semibold">
          Finalist
        </span>
      </div>
    </motion.div>
  );
};

export default ShortlistedTeamCard;
