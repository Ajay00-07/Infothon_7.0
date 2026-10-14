import { useState, useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Bot, Globe, Layers, ArrowLeft, Search, X, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ShortlistedTeamCard from "@/components/ShortlistedTeamCard";
import { shortlistedTeams } from "@/data/shortlistedTeams";

interface ShortlistedTeamsProps {
  initialCategory?: "agentic-ai" | "sdg";
}

const ShortlistedTeams = ({ initialCategory }: ShortlistedTeamsProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine initial track based on props, URL pathname, or search params
  const getInitialCategory = (): "agentic-ai" | "sdg" => {
    if (initialCategory) return initialCategory;

    const path = location.pathname.toLowerCase();
    if (path.includes("sdg")) return "sdg";
    if (path.includes("agentic-ai") || path.includes("agentic")) return "agentic-ai";

    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam === "sdg") return "sdg";

    return "agentic-ai";
  };

  const [activeCategory, setActiveCategory] = useState<"agentic-ai" | "sdg">(getInitialCategory);
  const [searchQuery, setSearchQuery] = useState("");

  // Sync state if URL changes externally (e.g. browser back/forward)
  useEffect(() => {
    const determined = getInitialCategory();
    setActiveCategory(determined);
  }, [location.pathname, location.search]);

  const handleCategoryChange = (category: "agentic-ai" | "sdg") => {
    setActiveCategory(category);
    // Update URL seamlessly to preserve selected category in routing
    navigate(`/shortlisted-teams/${category}`, { replace: true });
  };

  const activeTeamsList = useMemo(() => {
    return activeCategory === "agentic-ai"
      ? shortlistedTeams.agenticAI
      : shortlistedTeams.sdg;
  }, [activeCategory]);

  const filteredTeams = useMemo(() => {
    if (!searchQuery.trim()) return activeTeamsList;
    const query = searchQuery.toLowerCase().trim();
    return activeTeamsList.filter(
      (team) =>
        team.teamName.toLowerCase().includes(query) ||
        team.teamLeader.toLowerCase().includes(query) ||
        (team.reference && team.reference.toLowerCase().includes(query))
    );
  }, [activeTeamsList, searchQuery]);

  const categoryLabel =
    activeCategory === "agentic-ai"
      ? "Agentic AI"
      : "Sustainable Development Goals";

  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-12 flex-1 max-w-6xl">
        {/* Page Heading matching site standard */}
        <SectionHeading
          title="SHORTLISTED TEAMS"
          subtitle="Explore the shortlisted teams by category across Agentic AI and Sustainable Development Goals."
        />

        {/* Category Selector Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Category Tabs (Segmented Control matching Problem Statements design) */}
          <div className="flex items-center p-1.5 rounded-2xl bg-card border border-primary/25 w-full md:w-auto shadow-lg shadow-black/20">
            <button
              type="button"
              onClick={() => handleCategoryChange("agentic-ai")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === "agentic-ai"
                  ? "bg-primary text-background shadow-[0_0_20px_rgba(124,255,79,0.5)] font-extrabold"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <Bot className="w-4 h-4 flex-shrink-0" />
              <span>Agentic AI</span>
              <span className="ml-1 px-2 py-0.5 rounded-full bg-background/25 text-[10px] font-mono font-bold">
                {shortlistedTeams.agenticAI.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleCategoryChange("sdg")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === "sdg"
                  ? "bg-primary text-background shadow-[0_0_20px_rgba(124,255,79,0.5)] font-extrabold"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <Globe className="w-4 h-4 flex-shrink-0" />
              <span>Sustainable Development Goals</span>
              <span className="ml-1 px-2 py-0.5 rounded-full bg-background/25 text-[10px] font-mono font-bold">
                {shortlistedTeams.sdg.length}
              </span>
            </button>
          </div>

          {/* Quick Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search teams or leaders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card/80 border border-primary/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Category Description Banner */}
        <div className="mb-8 p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-3">
          <Layers className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-xs text-foreground/80 font-mono">
            {activeCategory === "agentic-ai" ? (
              <span>
                <strong className="text-primary font-bold">Agentic AI Category ({shortlistedTeams.agenticAI.length} {shortlistedTeams.agenticAI.length === 1 ? "Team" : "Teams"}):</strong> Official shortlisted finalists selected for autonomous agentic systems and AI tracks.
              </span>
            ) : (
              <span>
                <strong className="text-primary font-bold">Sustainable Development Goals Category ({shortlistedTeams.sdg.length} {shortlistedTeams.sdg.length === 1 ? "Team" : "Teams"}):</strong> Official shortlisted finalists selected for UN Sustainable Development Goals challenges.
              </span>
            )}
          </p>
        </div>

        {/* Shortlisted Teams Structured Grid */}
        {filteredTeams.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {filteredTeams.map((team, index) => (
              <ShortlistedTeamCard
                key={`${team.teamName}-${index}`}
                team={team}
                categoryLabel={categoryLabel}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 glass-card rounded-2xl max-w-md mx-auto p-8 mb-14">
            <Users className="w-8 h-8 text-primary/40 mx-auto mb-3" />
            <h4 className="font-display text-base font-bold text-foreground mb-1">
              No Teams Found
            </h4>
            <p className="text-muted-foreground text-xs">
              {searchQuery
                ? "No shortlisted teams match your search keyword."
                : "No shortlisted teams announced for this category yet."}
            </p>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="flex justify-center pb-8">
          <Button
            size="lg"
            asChild
            className="h-12 px-8 rounded-xl bg-[#050907]/80 backdrop-blur-md border border-primary/30 text-primary font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:border-primary hover:bg-[#050907] hover:shadow-[0_0_20px_rgba(124,255,79,0.3)] transition-all duration-300 gap-2"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO HOME</span>
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShortlistedTeams;
