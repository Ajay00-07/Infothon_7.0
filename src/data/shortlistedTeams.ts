export interface ShortlistedTeam {
  teamName: string;
  teamLeader: string;
  reference?: string;
}

export interface ShortlistedTeamsData {
  agenticAI: ShortlistedTeam[];
  sdg: ShortlistedTeam[];
}

/**
 * Centralized Official Shortlisted Teams Data for Infothon 7.0
 * 
 * - teamName: Official name of the team (converted to UPPERCASE for display in cards)
 * - teamLeader: Official name of the team leader (displayed as "Team Leader: <name>")
 * - reference: Optional team reference or ID if provided
 */
export const shortlistedTeams: ShortlistedTeamsData = {
  agenticAI: [
    {
      teamName: "Only brains",
      teamLeader: "J U Sujan",
    },
    {
      teamName: "Team Parallax",
      teamLeader: "Thanmayi M",
    },
    {
      teamName: "Dexter",
      teamLeader: "Supriya B",
    },
    {
      teamName: "HYPER X",
      teamLeader: "Nandan Kumar S",
    },
    {
      teamName: "Astra",
      teamLeader: "Vibhu Murthy",
    },
    {
      teamName: "Pytons",
      teamLeader: "Manu P",
    },
    {
      teamName: "404 Brain Not Found",
      teamLeader: "Riddhika Sharma",
    },
    {
      teamName: "Alpha Script",
      teamLeader: "Anurag Sandeep Shrikhande",
    },
    {
      teamName: "sahayog",
      teamLeader: "Vismay K Raj",
    },
    {
      teamName: "Barbie",
      teamLeader: "Dileep Bharadwaj S",
    },
    {
      teamName: "TrustForge",
      teamLeader: "Chethushnavi",
    },
    {
      teamName: "TECH NEXUS",
      teamLeader: "Bharath Kumar A",
    },
    {
      teamName: "Robust gang",
      teamLeader: "Sanhitha PS",
    },
    {
      teamName: "Sparks",
      teamLeader: "Madan B R",
    },
    {
      teamName: "Zero",
      teamLeader: "Mokshith TK",
    },
    {
      teamName: "Geek^4",
      teamLeader: "Adithya R",
    },
    {
      teamName: "ThreatIntelX",
      teamLeader: "Sai Pranavi Vermula",
    },
    {
      teamName: "Ecologic",
      teamLeader: "Rathik Raj M S",
    },
    {
      teamName: "RESQ",
      teamLeader: "Harish Gowda J",
    },
    {
      teamName: "TRITON",
      teamLeader: "Bharat Pawar",
    },
  ],
  sdg: [
    {
      teamName: "Gladiators0018",
      teamLeader: "Kautilya N P",
    },
    {
      teamName: "CodeMind",
      teamLeader: "Ganavi M",
    },
    {
      teamName: "CurioX",
      teamLeader: "Deekshitha S K",
    },
    {
      teamName: "NeoPhytes",
      teamLeader: "Vyomika M",
    },
    {
      teamName: "Vision and Vibes",
      teamLeader: "Apeksha P",
    },
    {
      teamName: "Unity Innovaters",
      teamLeader: "Thushara M S",
    },
    {
      teamName: "Nexora",
      teamLeader: "Namratha",
    },
    {
      teamName: "SunForge",
      teamLeader: "D Siddharth",
    },
    {
      teamName: "Impacto",
      teamLeader: "Dhanush R",
    },
    {
      teamName: "core minds",
      teamLeader: "Sanvith KV",
    },
    {
      teamName: "CODENOVA",
      teamLeader: "Manasa M",
    },
    {
      teamName: "Astra",
      teamLeader: "Arkaprova Sarkar",
    },
    {
      teamName: "VegaX",
      teamLeader: "Taruni Alaparthi",
    },
    {
      teamName: "Digvijaya",
      teamLeader: "Lalith Kumar C",
    },
    {
      teamName: "Byte band",
      teamLeader: "Sinchana S Bhat",
    },
    {
      teamName: "VIGIL",
      teamLeader: "Akshatha k",
    },
    {
      teamName: "Code Titans",
      teamLeader: "Mayur S K",
    },
    {
      teamName: "404 not found",
      teamLeader: "Bil Washer B P",
    },
    {
      teamName: "Kinetics",
      teamLeader: "Sujith",
    },
    {
      teamName: "It's Simple",
      teamLeader: "Nimra Suroor",
    },
  ],
};
