import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Bot,
  Globe,
  Search,
  Download,
  Upload,
  Sparkles,
  Layers,
  ChevronRight,
  X,
  Cpu,
  Shield,
  Zap,
  BookOpen,
  HeartPulse,
  Building2,
  Languages,
  Landmark,
  GraduationCap,
  Recycle,
  AlertCircle,
  FileSpreadsheet,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  FileText
} from "lucide-react";

export interface ProblemStatement {
  id: string;
  number: number;
  track: "agentic-ai" | "sdg";
  title: string;
  category: string;
  sdgTag?: string;
  source?: string;
  description: string;
  icon?: any;
  difficulty: "Medium" | "Hard" | "Advanced";
}

const defaultAgenticAIProblems: ProblemStatement[] = [
  {
    id: "ai-01",
    number: 1,
    track: "agentic-ai",
    title: "Landslide Risk Early-Warning System",
    category: "Disaster Management & Geotechnical AI",
    source: "SIH26001 (SIH 2026)",
    description: "Autonomous agentic AI system predicting landslide risk from rainfall, soil-moisture, satellite & terrain data, with real-time alerts and GIS dashboards.",
    difficulty: "Advanced"
  },
  {
    id: "ai-02",
    number: 2,
    track: "agentic-ai",
    title: "Antarctic Sea-Ice & Iceberg Navigation Decision Support",
    category: "Maritime Logistics & Earth Observation",
    source: "SIH26059 (SIH 2026)",
    description: "Forecasts sea-ice concentration and iceberg trajectories to recommend safe, fuel-efficient vessel routes in polar waters.",
    difficulty: "Advanced"
  },
  {
    id: "ai-03",
    number: 3,
    track: "agentic-ai",
    title: "MPLADS Fraud & Anomaly Detection Platform",
    category: "Public Governance & Financial Integrity",
    source: "SIH26102 (SIH 2026)",
    description: "ML system flagging anomalies, cost overruns and fraud in MPLADS fund utilization, with risk-based alerts and milestone tracking.",
    difficulty: "Hard"
  },
  {
    id: "ai-04",
    number: 4,
    track: "agentic-ai",
    title: "Conversational Assistant for Indian Standards & BIS Services",
    category: "Legal & Regulatory Tech",
    source: "SIH26107 (SIH 2026)",
    description: "NLP agent answering standards/certification queries with source-backed, referenced responses for Indian MSMEs.",
    difficulty: "Medium"
  },
  {
    id: "ai-05",
    number: 5,
    track: "agentic-ai",
    title: "Sovereign On-Premise Agentic AI Workbench",
    category: "Cyber Security & Enterprise AI",
    source: "SIH26117 (SIH 2026)",
    description: "Self-hosted, air-gapped multi-model agent that plans and executes multi-step confidential industrial knowledge work without data leaks.",
    difficulty: "Hard"
  },
  {
    id: "ai-06",
    number: 6,
    track: "agentic-ai",
    title: "eRTMAC-NWIS Offset Well Decision Support",
    category: "Energy & Geological Engineering",
    source: "SIH26121 (SIH 2026)",
    description: "Correlates historical drilling data across nearby wells to predict and alert on drilling risks in real time.",
    difficulty: "Advanced"
  },
  {
    id: "ai-07",
    number: 7,
    track: "agentic-ai",
    title: "AI Mobile Urban Intelligence Platform",
    category: "Smart Cities & Mobility",
    source: "SIH26124 (SIH 2026)",
    description: "Onboard bus-camera AI detecting road hazards, congestion & incidents, aggregated into a city-wide intelligence dashboard.",
    difficulty: "Medium"
  },
  {
    id: "ai-08",
    number: 8,
    track: "agentic-ai",
    title: "Privacy-Preserving On-Device Browser Agent",
    category: "Privacy & Web Security",
    source: "SIH26171 (SIH 2026)",
    description: "Local vision model reads screen state, redacts PII, executes agentic actions via a sanitized server round-trip.",
    difficulty: "Hard"
  },
  {
    id: "ai-09",
    number: 9,
    track: "agentic-ai",
    title: "Sports Media Integrity Monitoring Agent",
    category: "Digital Rights & Media Analytics",
    source: "Google Solution Challenge 2026",
    description: "Detects and flags unauthorized use of official sports media across the internet in near real-time using audio/video fingerprinting.",
    difficulty: "Medium"
  },
  {
    id: "ai-10",
    number: 10,
    track: "agentic-ai",
    title: "Supply Chain Disruption Prediction Agent",
    category: "Logistics & Risk Analytics",
    source: "Google Solution Challenge 2026",
    description: "Analyzes logistics/weather data to predict disruptions and recommend rerouting before delays cascade through the supply chain.",
    difficulty: "Medium"
  },
  {
    id: "ai-11",
    number: 11,
    track: "agentic-ai",
    title: "Autonomous AI Agent for Detecting Prompt Injection & Agent Manipulation",
    category: "LLM Security & Threat Defense",
    source: "SIH 2024 (SIH1670)",
    description: "Real-time threat monitoring agent analyzing multi-turn prompts and indirect injection attack vectors targeting autonomous AI workflows.",
    difficulty: "Hard"
  },
  {
    id: "ai-12",
    number: 12,
    track: "agentic-ai",
    title: "Autonomous Cyber Threat Detection & Response Agent",
    category: "SOC Automation & Threat Hunting",
    source: "SIH 2025 (SIH25238)",
    description: "Advanced persistent threat (APT) detection agent leveraging ELK threat rules to orchestrate autonomous incident mitigation.",
    difficulty: "Advanced"
  },
  {
    id: "ai-13",
    number: 13,
    track: "agentic-ai",
    title: "AI Agent for Autonomous Software Supply-Chain Risk Detection",
    category: "DevSecOps & Open-Source Auditing",
    source: "SIH 2023 (SIH1449)",
    description: "Generates real-time Software Bill of Materials (SBOM), analyzing third-party package dependencies for zero-day vulnerabilities.",
    difficulty: "Hard"
  },
  {
    id: "ai-14",
    number: 14,
    track: "agentic-ai",
    title: "Autonomous API Threat Discovery & Exploitation Prevention Agent",
    category: "Application & API Security",
    source: "SIH 2024 (SIH1741)",
    description: "Application-context aware firewall agent continuously scanning endpoint schemas and blocking unauthorized data exfiltration.",
    difficulty: "Hard"
  },
  {
    id: "ai-15",
    number: 15,
    track: "agentic-ai",
    title: "AI-Powered Insider Behaviour Prediction & Threat Prevention Agent",
    category: "UEBA & Internal Security",
    source: "SIH 2025 (SIH25244)",
    description: "User and entity behavior analytics (UEBA) system monitoring anomalous internal file access, privilege escalation, and data staging.",
    difficulty: "Advanced"
  },
  {
    id: "ai-16",
    number: 16,
    track: "agentic-ai",
    title: "Autonomous Vulnerability Discovery & Prioritization Agent",
    category: "Vulnerability Management",
    source: "SIH 2025 (SIH25233)",
    description: "Automated vulnerability assessment and penetration testing (VAPT) agent assessing exploit severity across hybrid infrastructure.",
    difficulty: "Hard"
  },
  {
    id: "ai-17",
    number: 17,
    track: "agentic-ai",
    title: "Autonomous Vulnerability Intelligence & RAG Agent",
    category: "SecOps & Knowledge Graph",
    source: "SIH 2025 (SIH25234)",
    description: "Centralized vulnerability detection repository integrated with RAG query assistant for instant patch prioritization.",
    difficulty: "Medium"
  },
  {
    id: "ai-18",
    number: 18,
    track: "agentic-ai",
    title: "Autonomous Multi-Platform Security Hardening Agent",
    category: "Infrastructure Security",
    source: "SIH 2025 (SIH25237)",
    description: "Multi-platform system hardening agent enforcing CIS benchmarks across cloud instances, containers, and edge hardware.",
    difficulty: "Medium"
  },
  {
    id: "ai-19",
    number: 19,
    track: "agentic-ai",
    title: "AI Agent for Cryptographic Intelligence in Firmware",
    category: "Firmware & Embedded Security",
    source: "SIH 2025 (SIH25239)",
    description: "AI/ML identification agent analyzing binary firmware images to detect weak cryptographic primitives and hardcoded keys.",
    difficulty: "Advanced"
  },
  {
    id: "ai-20",
    number: 20,
    track: "agentic-ai",
    title: "Autonomous Digital Forensics Investigation Agent",
    category: "Digital Forensics & Triage",
    source: "SIH 2024 (SIH1744)",
    description: "Cyber triage agent accelerating artifact timeline extraction, memory analysis, and digital evidence chain-of-custody logging.",
    difficulty: "Hard"
  },
  {
    id: "ai-21",
    number: 21,
    track: "agentic-ai",
    title: "AI Agent for Social Media Intelligence & Threat Discovery",
    category: "OSINT & Threat Intelligence",
    source: "SIH 2024 (SIH1743)",
    description: "Automated parser analyzing social media feeds to discover emerging cyber attack coordination and targeted campaigns.",
    difficulty: "Medium"
  },
  {
    id: "ai-22",
    number: 22,
    track: "agentic-ai",
    title: "Autonomous Web Application Security Testing Agent",
    category: "AppSec & Automated Fuzzing",
    source: "SIH 2024 (SIH1750)",
    description: "Comprehensive web application fuzzer simulating intelligent multi-step OWASP Top-10 attack sequences.",
    difficulty: "Hard"
  },
  {
    id: "ai-23",
    number: 23,
    track: "agentic-ai",
    title: "AI Agent for Software Vulnerability Fuzzing & Root-Cause Analysis",
    category: "Software Audit & Quality",
    source: "SIH 2024 (SIH1746)",
    description: "Open-source software security fuzzer analyzing crash dumps to pin-point root-cause memory corruption vulnerabilities.",
    difficulty: "Advanced"
  },
  {
    id: "ai-24",
    number: 24,
    track: "agentic-ai",
    title: "Autonomous Network Compromise Detection & Response Agent",
    category: "Network Defense",
    source: "SIH 2023 (SIH1451)",
    description: "AI/ML agent monitoring high-throughput packet streams to isolate compromised internal nodes in real time.",
    difficulty: "Hard"
  },
  {
    id: "ai-25",
    number: 25,
    track: "agentic-ai",
    title: "AI-Powered Phishing Intelligence & Autonomous Response Agent",
    category: "Email & Domain Security",
    source: "SIH 2023 (SIH1454)",
    description: "Identifies lookalike phishing domains, rogue SSL certificates, and malicious email headers, taking down threat vectors automatically.",
    difficulty: "Medium"
  },
  {
    id: "ai-26",
    number: 26,
    track: "agentic-ai",
    title: "Autonomous Ransomware Readiness & Recovery Agent",
    category: "Disaster Recovery & SecOps",
    source: "SIH 2023 (SIH1452)",
    description: "Automates enterprise ransomware readiness assessment, immutable backup validation, and rapid system restoration.",
    difficulty: "Hard"
  },
  {
    id: "ai-27",
    number: 27,
    track: "agentic-ai",
    title: "Digital Provenance & Deepfake Trust Agent",
    category: "Media Security & Forensics",
    source: "SIH 2024 (SIH1683)",
    description: "Face-swap deepfake detection engine verifying content provenance and digital signatures across viral media uploads.",
    difficulty: "Hard"
  },
  {
    id: "ai-28",
    number: 28,
    track: "agentic-ai",
    title: "Autonomous Misinformation Detection & Containment Agent",
    category: "Information Integrity",
    source: "SIH 2024 (SIH1743)",
    description: "Multi-modal verification agent cross-referencing viral claims against trusted fact-check repositories to contain dis-information.",
    difficulty: "Medium"
  },
  {
    id: "ai-29",
    number: 29,
    track: "agentic-ai",
    title: "AI-Powered Synthetic Identity Detection & Trust Agent",
    category: "Identity Verification",
    source: "SIH 2023",
    description: "Detects fake user profiles, botnets, and synthetic identities constructed from breached PII data points.",
    difficulty: "Medium"
  },
  {
    id: "ai-30",
    number: 30,
    track: "agentic-ai",
    title: "Autonomous Privacy Leakage Detection & Prevention Agent",
    category: "Data Loss Prevention",
    source: "SIH 2024 (SIH1678)",
    description: "Secure redaction, masking, and anonymization system scanning outgoing documents and database dumps for sensitive data.",
    difficulty: "Medium"
  },
  {
    id: "ai-31",
    number: 31,
    track: "agentic-ai",
    title: "AI Agent for Intelligent Legal Research & Case Intelligence",
    category: "LegalTech & Case Analysis",
    source: "SIH 2024 (SIH1701)",
    description: "AI-driven research engine for commercial courts parsing precedents, statutes, and judicial judgments to aid legal strategy.",
    difficulty: "Hard"
  },
  {
    id: "ai-32",
    number: 32,
    track: "agentic-ai",
    title: "Autonomous Enterprise Knowledge Retrieval & Decision Agent",
    category: "Enterprise Search & RAG",
    source: "SIH 2024 (SIH1706)",
    description: "Intelligent enterprise assistant orchestrating internal document search, policy queries, and decision synthesis across departments.",
    difficulty: "Medium"
  },
  {
    id: "ai-33",
    number: 33,
    track: "agentic-ai",
    title: "Offline Multimodal RAG Agent for Autonomous Knowledge Processing",
    category: "Edge AI & Offline Systems",
    source: "SIH 2025 (SIH25231)",
    description: "Multimodal RAG system optimized for offline, remote field deployments with zero internet connectivity requirements.",
    difficulty: "Advanced"
  },
  {
    id: "ai-34",
    number: 34,
    track: "agentic-ai",
    title: "AI Agent for Technology Intelligence & Future Trend Forecasting",
    category: "Tech Strategy & Foresight",
    source: "SIH 2025 (SIH25245)",
    description: "Technology intelligence platform parsing global patent filings, research papers, and market data to forecast innovation trends.",
    difficulty: "Hard"
  },
  {
    id: "ai-35",
    number: 35,
    track: "agentic-ai",
    title: "Multi-Agent Logistics Disruption Prediction & Recovery System",
    category: "Supply Chain & Multi-Agent",
    source: "SIH 2025 (SIH25209)",
    description: "AI-enabled logistics optimizer coordinating autonomous agents across freight carriers, port authorities, and warehouse hubs.",
    difficulty: "Advanced"
  }
];

const defaultSDGProblems: ProblemStatement[] = [
  {
    id: "sdg-01",
    number: 1,
    track: "sdg",
    title: "Real-Time Tribal Language Translation Tool",
    category: "Language Preservation & Education",
    sdgTag: "SDG 4: Quality Education",
    source: "SIH26042 (SIH 2026)",
    description: "AI translation/curriculum suite enabling mother-tongue teaching in Ho, Mundari, Santhali for tribal primary schools.",
    difficulty: "Hard"
  },
  {
    id: "sdg-02",
    number: 2,
    track: "sdg",
    title: "Hyper-Local Business Advisory & Loan-Structuring Assistant",
    category: "FinTech & Rural Inclusion",
    sdgTag: "SDG 1: No Poverty • SDG 8: Decent Work",
    source: "SIH26091 (SIH 2026)",
    description: "AI advisor generating local market feasibility reports and auto-routing rural entrepreneurs to the correct credit scheme.",
    difficulty: "Medium"
  },
  {
    id: "sdg-03",
    number: 3,
    track: "sdg",
    title: "AI Competency-Gap & Personalized Training Engine",
    category: "Governance & Skill Development",
    sdgTag: "SDG 4: Quality Education",
    source: "SIH26101 (SIH 2026)",
    description: "AI platform assessing officials' skill gaps and recommending personalized iGOT Karmayogi training modules.",
    difficulty: "Medium"
  },
  {
    id: "sdg-04",
    number: 4,
    track: "sdg",
    title: "Autonomous Medical-Waste Collection & Segregation System",
    category: "HealthTech & Waste Management",
    sdgTag: "SDG 3: Good Health & Well-Being",
    source: "SIH26115 (SIH 2026)",
    description: "Vision-based autonomous system classifying and segregating biomedical waste in hospitals to reduce contamination.",
    difficulty: "Hard"
  },
  {
    id: "sdg-05",
    number: 5,
    track: "sdg",
    title: "Hospitality Crisis Coordination Platform",
    category: "Disaster Management & Safety",
    sdgTag: "SDG 11: Sustainable Cities",
    source: "Google Solution Challenge 2026",
    description: "Synchronizes communication between guests, staff and emergency responders during hospitality facility crises.",
    difficulty: "Medium"
  },
  {
    id: "sdg-06",
    number: 6,
    track: "sdg",
    title: "AI Fairness & Bias Audit Toolkit",
    category: "Responsible AI & Governance",
    sdgTag: "SDG 10: Reduced Inequalities",
    source: "Google Solution Challenge 2026",
    description: "Audits datasets and models for hiring, credit and healthcare bias, flagging discrepancies and guiding remediation.",
    difficulty: "Hard"
  },
  {
    id: "sdg-07",
    number: 7,
    track: "sdg",
    title: "Data-Driven Volunteer Coordination Platform",
    category: "Community Action & Partnerships",
    sdgTag: "SDG 1: No Poverty • SDG 17: Partnerships",
    source: "Google Solution Challenge 2026",
    description: "Consolidates scattered NGO field data to surface priority needs and match skilled volunteers to urgent local tasks.",
    difficulty: "Medium"
  },
  {
    id: "sdg-08",
    number: 8,
    track: "sdg",
    title: "Real-time Ganga River Water Quality Forecasting Using AI Sensors",
    category: "Clean Water & Environment",
    sdgTag: "SDG 6: Clean Water • SDG 14: Life Below Water",
    source: "SIH 2024 (SIH1694)",
    description: "Predictive water quality forecasting system monitoring bio-chemical indicators across river basins.",
    difficulty: "Hard"
  },
  {
    id: "sdg-09",
    number: 9,
    track: "sdg",
    title: "Smart Community Health Monitoring & Early Warning for Water-Borne Diseases",
    category: "Public Health & Epidemiology",
    sdgTag: "SDG 3: Good Health • SDG 6: Clean Water",
    source: "SIH 2025 (SIH25001)",
    description: "Early warning health alert system tracking water-borne disease outbreaks in rural Northeast India.",
    difficulty: "Medium"
  },
  {
    id: "sdg-10",
    number: 10,
    track: "sdg",
    title: "AI-Powered Crop Yield Prediction and Optimization",
    category: "AgriTech & Food Security",
    sdgTag: "SDG 2: Zero Hunger • SDG 12: Responsible Consumption",
    source: "SIH 2025 (SIH25044)",
    description: "Machine learning yield model integrating soil parameters, weather forecasts, and satellite vegetation indices.",
    difficulty: "Medium"
  },
  {
    id: "sdg-11",
    number: 11,
    track: "sdg",
    title: "Projection of Flood Inundation Extent from River Forecast Levels",
    category: "Disaster Preparedness",
    sdgTag: "SDG 11: Sustainable Cities • SDG 13: Climate Action",
    source: "SIH 2023 (SIH1289)",
    description: "Hydrological mapping tool predicting flood inundation boundaries from real-time river level gauges.",
    difficulty: "Hard"
  },
  {
    id: "sdg-12",
    number: 12,
    track: "sdg",
    title: "Blockchain-Based Supply Chain Transparency for Agricultural Produce",
    category: "AgriTech & Blockchain",
    sdgTag: "SDG 2: Zero Hunger • SDG 8: Decent Work • SDG 12",
    source: "SIH 2025 (SIH25045)",
    description: "Immutable ledger tracking farm-to-table origin, fair trade pricing, and quality certifications for smallholder farmers.",
    difficulty: "Medium"
  },
  {
    id: "sdg-13",
    number: 13,
    track: "sdg",
    title: "AI-Driven Crop Disease Prediction and Management System",
    category: "AgriTech & Plant Health",
    sdgTag: "SDG 2: Zero Hunger • SDG 12: Responsible Consumption",
    source: "SIH 2024 (SIH1638)",
    description: "Computer vision image diagnostic tool detecting crop diseases from leaf scans with treatment recommendations.",
    difficulty: "Medium"
  },
  {
    id: "sdg-14",
    number: 14,
    track: "sdg",
    title: "AI-Powered Personal Farming Assistant for Kerala Farmers",
    category: "AgriTech & Vernacular AI",
    sdgTag: "SDG 2: Zero Hunger • SDG 12: Responsible Consumption",
    source: "SIH 2025 (SIH25074)",
    description: "Localized Malayalam advisory assistant guiding smallholder farmers on weather windows, pest control, and market prices.",
    difficulty: "Medium"
  },
  {
    id: "sdg-15",
    number: 15,
    track: "sdg",
    title: "Software Solutions to Reduce Student Dropout Rate",
    category: "EdTech & Analytics",
    sdgTag: "SDG 4: Quality Education • SDG 10: Reduced Inequalities",
    source: "SIH 2024 (SIH1661)",
    description: "Early warning analytics engine identifying student drop-out risks using attendance, socio-economic, and academic markers.",
    difficulty: "Medium"
  },
  {
    id: "sdg-16",
    number: 16,
    track: "sdg",
    title: "Digital Technology for Addressing Non-Revenue Water (NRW)",
    category: "Smart Water Management",
    sdgTag: "SDG 6: Clean Water • SDG 11: Sustainable Cities",
    source: "SIH 2023 (SIH1288)",
    description: "IoT sensor and pressure flow analytics platform identifying unbilled water leakage and municipal pipe bursts.",
    difficulty: "Hard"
  },
  {
    id: "sdg-17",
    number: 17,
    track: "sdg",
    title: "Gamified Learning Platform for Rural Education",
    category: "EdTech & Rural Literacy",
    sdgTag: "SDG 4: Quality Education • SDG 10: Reduced Inequalities",
    source: "SIH 2025 (SIH25048)",
    description: "Interactive offline-capable gamified platform teaching STEM concepts to primary school students in remote areas.",
    difficulty: "Medium"
  },
  {
    id: "sdg-18",
    number: 18,
    track: "sdg",
    title: "Ground Water Level Predictor",
    category: "Hydro-Informatics",
    sdgTag: "SDG 6: Clean Water • SDG 13: Climate Action",
    source: "SIH 2024 (SIH1696)",
    description: "Predictive aquifer depletion model analyzing monsoon recharge data to forecast seasonal groundwater tables.",
    difficulty: "Medium"
  },
  {
    id: "sdg-19",
    number: 19,
    track: "sdg",
    title: "Real-Life Solutions for Waste Management",
    category: "Circular Economy",
    sdgTag: "SDG 11: Sustainable Cities • SDG 12",
    source: "SIH 2025 (SIH25060)",
    description: "Community waste collection route optimizer and recycling incentives platform for municipal solid waste.",
    difficulty: "Medium"
  },
  {
    id: "sdg-20",
    number: 20,
    track: "sdg",
    title: "Domestic Waste Management",
    category: "Urban Sanitation",
    sdgTag: "SDG 11: Sustainable Cities • SDG 12",
    source: "SIH 2023 (SIH1322)",
    description: "Smart bin fill-level monitoring and household organic waste composting tracking system.",
    difficulty: "Medium"
  },
  {
    id: "sdg-21",
    number: 21,
    track: "sdg",
    title: "AI-Based Farmer Query Support and Advisory System",
    category: "AgriTech & Conversational AI",
    sdgTag: "SDG 2: Zero Hunger • SDG 12",
    source: "SIH 2025 (SIH25076)",
    description: "Multilingual voice query assistant connecting small farmers with agricultural research database recommendations.",
    difficulty: "Medium"
  },
  {
    id: "sdg-22",
    number: 22,
    track: "sdg",
    title: "Early Warning System for Glacial Lake Outburst Floods (GLOFs)",
    category: "Climate Resilience",
    sdgTag: "SDG 11: Sustainable Cities • SDG 13: Climate Action",
    source: "SIH 2024 (SIH1650)",
    description: "High-altitude satellite monitoring system alerting down-stream Himalayan communities to glacial lake expansion.",
    difficulty: "Advanced"
  },
  {
    id: "sdg-23",
    number: 23,
    track: "sdg",
    title: "AI-Enabled Water Well Predictor",
    category: "Water Infrastructure",
    sdgTag: "SDG 6: Clean Water • SDG 13: Climate Action",
    source: "SIH 2023 (SIH1292)",
    description: "Geospatial groundwater prospecting system aiding rural panchayats in locating optimal bore-well sites.",
    difficulty: "Hard"
  },
  {
    id: "sdg-24",
    number: 24,
    track: "sdg",
    title: "Real-Time Disaster Information Aggregation Software",
    category: "Emergency Logistics",
    sdgTag: "SDG 11: Sustainable Cities • SDG 13: Climate Action",
    source: "SIH 2024 (SIH1687)",
    description: "Aggregates social feeds, emergency calls, and satellite heatmaps into a unified disaster control room view.",
    difficulty: "Hard"
  },
  {
    id: "sdg-25",
    number: 25,
    track: "sdg",
    title: "Smart Traffic Management System for Urban Congestion",
    category: "Smart Mobility",
    sdgTag: "SDG 9: Industry & Infrastructure • SDG 11",
    source: "SIH 2025 (SIH25050)",
    description: "Adaptive traffic signal control agent dynamically adjusting signal timings based on real-time camera density streams.",
    difficulty: "Medium"
  },
  {
    id: "sdg-26",
    number: 26,
    track: "sdg",
    title: "Sustainable Fertilizer Usage Optimizer for Higher Yield",
    category: "Precision Agriculture",
    sdgTag: "SDG 2: Zero Hunger • SDG 12 • SDG 15: Life on Land",
    source: "SIH 2024 (SIH1639)",
    description: "Soil health test analyzer recommending precise NPK fertilizer dosage to prevent soil degradation.",
    difficulty: "Medium"
  },
  {
    id: "sdg-27",
    number: 27,
    track: "sdg",
    title: "Inspection and Analysis of Water Supply Distribution Lines",
    category: "Infrastructure Analytics",
    sdgTag: "SDG 6: Clean Water • SDG 11: Sustainable Cities",
    source: "SIH 2023 (SIH1514)",
    description: "Acoustic sensor analytics and thermal drone imaging system detecting hidden pipeline anomalies.",
    difficulty: "Hard"
  },
  {
    id: "sdg-28",
    number: 28,
    track: "sdg",
    title: "AI-Driven Public Health Chatbot for Disease Awareness",
    category: "HealthTech & Public Awareness",
    sdgTag: "SDG 3: Good Health & Well-Being",
    source: "SIH 2025 (SIH25049)",
    description: "Interactive health awareness chatbot providing symptom triage, vaccine scheduling, and disease prevention advice.",
    difficulty: "Medium"
  },
  {
    id: "sdg-29",
    number: 29,
    track: "sdg",
    title: "Career Counselling and Guidance Programs in Schools",
    category: "EdTech & Career Guidance",
    sdgTag: "SDG 4: Quality Education • SDG 8: Decent Work",
    source: "SIH 2024 (SIH1666)",
    description: "Psychometric assessment engine matching high school students to emerging vocational and technical career tracks.",
    difficulty: "Medium"
  },
  {
    id: "sdg-30",
    number: 30,
    track: "sdg",
    title: "AR-Based Cultural Heritage Preservation Platform",
    category: "Culture & Tech",
    sdgTag: "SDG 4: Quality Education • SDG 11: Sustainable Cities",
    source: "SIH 2025 (SIH25052)",
    description: "Augmented reality application documenting historical monuments and artifacts for immersive educational preservation.",
    difficulty: "Medium"
  },
  {
    id: "sdg-31",
    number: 31,
    track: "sdg",
    title: "AI Assisted Tele-medicine KIOSK for Rural India",
    category: "Tele-Health & Healthcare Access",
    sdgTag: "SDG 3: Good Health • SDG 10: Reduced Inequalities",
    source: "SIH 2023 (SIH1325)",
    description: "Smart hardware kiosk equipped with vital sensors and AI diagnostic support connecting remote patients to doctors.",
    difficulty: "Hard"
  },
  {
    id: "sdg-32",
    number: 32,
    track: "sdg",
    title: "Digital Technology to Calculate Water Footprints",
    category: "Sustainability & Resource Tracking",
    sdgTag: "SDG 6: Clean Water • SDG 12: Responsible Consumption",
    source: "SIH 2024 (SIH1689)",
    description: "Industrial and agricultural water footprint calculator measuring direct and indirect embedded water consumption.",
    difficulty: "Medium"
  }
];

const Problems = () => {
  const [activeTrack, setActiveTrack] = useState<"agentic-ai" | "sdg">("agentic-ai");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProblem, setSelectedProblem] = useState<ProblemStatement | null>(null);

  const activeProblemList = useMemo(() => {
    return activeTrack === "agentic-ai" ? defaultAgenticAIProblems : defaultSDGProblems;
  }, [activeTrack]);

  const filteredProblems = useMemo(() => {
    return activeProblemList.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.sdgTag && p.sdgTag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (p.source && p.source.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [activeProblemList, searchQuery]);

  return (
    <div className="min-h-screen bg-background pt-24 overflow-x-hidden flex flex-col justify-between">
      <div className="container mx-auto px-4 py-12 flex-1 max-w-6xl">
        <SectionHeading
          title="PROBLEM STATEMENTS"
          subtitle="Explore the complete problem statement repository across Agentic AI and Sustainable Development Goals"
        />

        {/* Action Header & Download PPT Template Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 bg-card/60 p-4 md:p-6 rounded-2xl border border-primary/20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-sm md:text-base text-foreground">Infothon 7.0 Problem Portfolio</h3>
              <p className="text-muted-foreground text-xs">Total 67 verified problem statements (35 Agentic AI + 32 SDG)</p>
            </div>
          </div>

          <a
            href="/templates/Infothon_7.0_Reference_Template.pptx"
            download="Infothon_7.0_Reference_Template.pptx"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#050907]/60 backdrop-blur-md border border-primary/30 text-primary font-mono text-xs font-bold uppercase tracking-wider hover:border-primary/70 hover:bg-primary/10 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(124,255,79,0.3)] transition-all duration-300 w-full sm:w-auto"
          >
            <Download className="w-4 h-4 text-primary" />
            <span>DOWNLOAD PPT TEMPLATE</span>
          </a>
        </div>

        {/* Track Selection Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Track Selector Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-card border border-primary/25 w-full md:w-auto">
            <button
              onClick={() => setActiveTrack("agentic-ai")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTrack === "agentic-ai"
                  ? "bg-primary text-background shadow-[0_0_20px_rgba(124,255,79,0.5)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <Bot className="w-4 h-4" />
              Agentic AI
              <span className="ml-1 px-2 py-0.5 rounded-full bg-background/20 text-[10px]">
                {defaultAgenticAIProblems.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTrack("sdg")}
              className={`flex-1 md:flex-initial flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTrack === "sdg"
                  ? "bg-primary text-background shadow-[0_0_20px_rgba(124,255,79,0.5)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
              }`}
            >
              <Globe className="w-4 h-4" />
              Sustainable Development Goals
              <span className="ml-1 px-2 py-0.5 rounded-full bg-background/20 text-[10px]">
                {defaultSDGProblems.length}
              </span>
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by title, number, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-card/80 border border-primary/20 rounded-xl pl-10 pr-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Track Description Banner */}
        <div className="mb-8 p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-center gap-3">
          <Layers className="w-5 h-5 text-primary flex-shrink-0" />
          <p className="text-xs text-foreground/80 font-mono">
            {activeTrack === "agentic-ai" ? (
              <span><strong>Agentic AI Track ({defaultAgenticAIProblems.length} Problems):</strong> Autonomous multi-agent systems, RAG assistants, LLM security, threat discovery, and decision platforms.</span>
            ) : (
              <span><strong>Sustainable Development Goals Track ({defaultSDGProblems.length} Problems):</strong> AI solutions addressing UN SDGs including Quality Education, Good Health, Clean Water, and Climate Action.</span>
            )}
          </p>
        </div>

        {/* Problem Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {filteredProblems.map((problem, i) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(i * 0.03, 0.4), duration: 0.3 }}
              className="glass-card p-6 flex flex-col justify-between hover:neon-border transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full filter blur-2xl pointer-events-none group-hover:bg-primary/10 transition-colors" />

              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-xs font-extrabold text-primary px-2.5 py-1 rounded-lg bg-primary/10 border border-primary/30">
                      PS #{String(problem.number).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-lg border border-border bg-card">
                      {problem.category}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-primary/30 text-primary bg-primary/10">
                    {problem.difficulty}
                  </span>
                </div>

                {/* SDG Tag if present */}
                {problem.sdgTag && (
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-primary/90 font-semibold px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/5">
                      {problem.sdgTag}
                    </span>
                  </div>
                )}

                {/* Title & Description */}
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 font-sans">
                  {problem.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                {problem.source && (
                  <span className="text-[10px] font-mono text-muted-foreground/80 truncate max-w-[200px]" title={problem.source}>
                    Ref: {problem.source}
                  </span>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProblem(problem)}
                  className="rounded-lg text-xs gap-1 border-primary/30 hover:border-primary hover:bg-primary hover:text-background transition-all ml-auto"
                >
                  View Details <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProblems.length === 0 && (
          <div className="text-center py-16 glass-card rounded-2xl max-w-md mx-auto p-8">
            <Search className="w-8 h-8 text-primary/40 mx-auto mb-3" />
            <h4 className="font-display text-base font-bold text-foreground mb-1">No Problem Statements Found</h4>
            <p className="text-muted-foreground text-xs">Try adjusting your search keywords or switching tracks.</p>
          </div>
        )}
      </div>

      {/* Modal View for Problem Details */}
      <AnimatePresence>
        {selectedProblem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProblem(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-2xl w-full p-6 md:p-8 rounded-2xl border border-primary/40 bg-[#09120D]/95 backdrop-blur-xl shadow-2xl relative overflow-hidden space-y-6"
            >
              <button
                onClick={() => setSelectedProblem(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-card border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-primary px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/30">
                    PS #{String(selectedProblem.number).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-0.5 rounded-full border border-border">
                    {selectedProblem.category}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground leading-snug">
                  {selectedProblem.title}
                </h3>
                {selectedProblem.sdgTag && (
                  <p className="text-xs font-mono text-primary/90 mt-1.5 font-semibold">
                    {selectedProblem.sdgTag}
                  </p>
                )}
              </div>

              <div>
                <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary mb-2">Description</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-sans">
                  {selectedProblem.description}
                </p>
              </div>

              {selectedProblem.source && (
                <div>
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-primary mb-1">Source / Citation</h4>
                  <p className="text-xs font-mono text-muted-foreground">
                    {selectedProblem.source}
                  </p>
                </div>
              )}

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs font-mono text-muted-foreground">Infothon 7.0 Official Problem Statement</span>
                <Button
                  variant="hero"
                  size="sm"
                  onClick={() => setSelectedProblem(null)}
                  className="rounded-xl px-6"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Problems;
