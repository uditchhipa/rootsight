export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  focus: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  github?: string;
}

export interface ValueItem {
  number: string;
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  name: "ROOTSIGHT",
  legalName: "Rootsight Cyber Technologies",
  tagline: "Security, Automated. Root Cause Identified.",
  subTagline:
    "Registered Indian cyber security & automation startup engineering intelligent law enforcement investigation suites, offensive red teaming, and threat research.",
  url: "https://rootsight.in",
  email: "contact@rootsight.in",
  startupIndiaId: "Startup India Registered",
  location: "New Delhi, India",
  socials: {
    linkedin: "https://linkedin.com/company/rootsight",
    github: "https://github.com/rootsight",
    instagram: "https://instagram.com/rootsight.in",
  },
};

export const SERVICES: ServiceItem[] = [
  {
    id: "law-enforcement",
    code: "01",
    title: "Law Enforcement Investigation Automation",
    subtitle: "Digital Evidence & Forensic Workflows",
    description:
      "Purpose-built automation pipelines that compress multi-day digital investigations into actionable minutes. Built for law enforcement agencies, cyber cells, and forensic examiners.",
    capabilities: [
      "Automated CDR / IPDR & Cell Tower Correlation",
      "Tamper-proof Digital Chain-of-Custody Logging",
      "Court-admissible Forensic Timeline Generation",
      "Multi-source Evidence Ingestion & Parsing",
    ],
  },
  {
    id: "pentest-redteam",
    code: "02",
    title: "Penetration Testing & Red Teaming",
    subtitle: "Adversarial Attack Simulation",
    description:
      "Rigorous, real-world offensive security assessments led by certified penetration testers. We identify and remediate exploitable weaknesses before malicious actors exploit them.",
    capabilities: [
      "Full-scope Web, API & Mobile App Penetration Testing",
      "Internal & External Network Infrastructure Auditing",
      "Adversary Emulation & Physical/Social Red Teaming",
      "Cloud Infrastructure & Identity Hardening",
    ],
  },
  {
    id: "malware-analysis",
    code: "03",
    title: "Malware Analysis & Reverse Engineering",
    subtitle: "Detonation & Exploit Defense",
    description:
      "In-depth static and dynamic malware disassembly, payload detonation, and exploit research to uncover hidden adversary behaviors and build proactive defensive shields.",
    capabilities: [
      "Isolated Sandboxing & Automated Behavioral Detonation",
      "Memory Dump Analysis & API Hooking Inspection",
      "Custom YARA & Sigma Rule Engineering",
      "Ransomware & C2 Infrastructure Dissection",
    ],
  },
  {
    id: "threat-intel-osint",
    code: "04",
    title: "OSINT & Threat Intelligence",
    subtitle: "Proactive Surface & Darknet Telemetry",
    description:
      "Continuous surveillance of public, private, and dark web vectors to pinpoint leaked credentials, exposed infrastructure, and emerging threat actor discussions.",
    capabilities: [
      "Target Entity Profiling & Autonomous Graphing",
      "Darknet Marketplace & Forum Monitoring",
      "Continuous Attack Surface Discovery",
      "Brand Impersonation & Phishing Detection",
    ],
  },
];

export const TEAM: TeamMember[] = [
  {
    name: "Sumit",
    role: "CEO & Founder",
    title: "Chief Executive Officer & Founder",
    focus: "Strategic Vision, Product Architecture & Law Enforcement Relations",
    bio: "Leads Rootsight's overarching mission, strategic partnerships, and product execution. Focuses on architecting practical automation systems that bridge digital forensics with real-world law enforcement requirements.",
    skills: ["Executive Leadership", "Product Strategy", "Forensics Architecture", "Agency Partnerships"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Vishwas",
    role: "Co-Founder",
    title: "Co-Founder & Head of Operations",
    focus: "Business Development, Client Strategy & Operational Growth",
    bio: "Directs company growth, institutional alignments, and operational scaling. Works closely with public and private sector clients to translate complex organizational security challenges into deployed technical solutions.",
    skills: ["Business Operations", "Client Engagements", "Strategic Planning", "Project Management"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Praveen",
    role: "CTO & Pen Tester",
    title: "Chief Technology Officer & Lead Penetration Tester",
    focus: "Offensive Security, Adversary Emulation & Technical Infrastructure",
    bio: "Heads the technical roadmap and offensive security practice at Rootsight. An active penetration tester and vulnerability researcher skilled in finding deep structural flaws across complex enterprise networks and cloud platforms.",
    skills: ["Red Teaming", "Penetration Testing", "Cloud Architecture", "Exploit Assessment"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "Udit",
    role: "CFO & Malware Dev",
    title: "Chief Financial Officer & Lead Malware Developer",
    focus: "Financial Operations, Reverse Engineering & Exploit Defense",
    bio: "Oversees financial planning and capital allocation while actively spearheading the core malware research lab. Specializes in low-level systems programming, payload dissection, and automated threat detonation sandboxes.",
    skills: ["Financial Strategy", "Malware Development", "Reverse Engineering", "Low-Level Systems"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];

export const VALUES: ValueItem[] = [
  {
    number: "01",
    title: "Evidence Integrity",
    description:
      "Every forensic automation tool we engineer is mathematically verified and cryptographic-grade to ensure absolute legal admissibility in court.",
  },
  {
    number: "02",
    title: "Deterministic Automation",
    description:
      "We replace tedious, manual multi-day investigation procedures with deterministic pipelines that yield reliable results in minutes.",
  },
  {
    number: "03",
    title: "Offensive-Informed Defense",
    description:
      "Our defense frameworks are built by active penetration testers and malware researchers who understand how modern threat actors think.",
  },
  {
    number: "04",
    title: "Sovereign Innovation",
    description:
      "Proudly registered under Startup India, dedicated to developing sovereign Indian cyber technologies for law enforcement and critical infrastructure.",
  },
];
