export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
}

export interface ProjectItem {
  id: string;
  code: string;
  title: string;
  category: string;
  status: string;
  summary: string;
  metrics: string;
  stack: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  duration: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  detail: string;
}

export interface TeamMember {
  name: string;
  role: string;
  clearance: string;
  bio: string;
  linkedin: string;
  github: string;
}

export const SITE_CONFIG = {
  name: "ROOTSIGHT",
  tagline: "See the root of every threat.",
  subTagline: "Security, automated.",
  // TODO: Replace with your official domain once live
  url: "https://rootsight.in",
  // TODO: Replace with your official contact email
  email: "contact@rootsight.in",
  // TODO: Replace with your Startup India DIPP certificate number
  startupIndiaId: "DIPP-XXXXXX",
  location: "New Delhi, India",
  socials: {
    // TODO: Replace with your official social profile URLs
    linkedin: "https://linkedin.com/company/rootsight",
    github: "https://github.com/rootsight",
    instagram: "https://instagram.com/rootsight.in",
  },
};

export const MARQUEE_KEYWORDS = [
  "OSINT",
  "AUTOMATION",
  "PENTEST",
  "THREAT INTEL",
  "LAW ENFORCEMENT TECH",
  "RED TEAMING",
  "MALWARE ANALYSIS",
  "ROOT CAUSE",
];

export const SERVICES: ServiceItem[] = [
  {
    id: "law-enforcement",
    code: "SVC // 01",
    title: "Law Enforcement Automation",
    subtitle: "Investigation & Evidence Pipelines",
    description:
      "Purpose-built automation suites that compress multi-day digital investigations into minutes. Automated CDR/IPDR correlation, case triage, and chain-of-custody workflows.",
    capabilities: [
      "Automated OSINT & Entity Graphing",
      "Case & Evidence Workflow Engines",
      "Real-time Surface & Darknet Monitoring",
      "Court-ready Forensic Reporting",
    ],
  },
  {
    id: "pentest-redteam",
    code: "SVC // 02",
    title: "Penetration Testing & Red Teaming",
    subtitle: "Adversarial Simulation",
    description:
      "Full-scope offensive security assessments across web, API, mobile, cloud, and internal networks. We emulate real-world threat actors to expose root vulnerabilities before they do.",
    capabilities: [
      "Black / Grey-box Penetration Testing",
      "Adversary Emulation & Red Teaming",
      "Cloud & Kubernetes Hardening",
      "Zero-Trust Architecture Audits",
    ],
  },
  {
    id: "threat-intel-osint",
    code: "SVC // 03",
    title: "Threat Intelligence & OSINT",
    subtitle: "Actionable Signal Over Noise",
    description:
      "Continuous intelligence collection across clearnet, darkweb forums, paste sites, and breach telemetry—mapped to your attack surface and threat profile.",
    capabilities: [
      "Executive & Brand Exposure Tracking",
      "Credential & Leak Telemetry",
      "Threat Actor Infrastructure Mapping",
      "STIX/TAXII Intelligence Feeds",
    ],
  },
  {
    id: "malware-analysis",
    code: "SVC // 04",
    title: "Malware Analysis",
    subtitle: "Reverse Engineering & Triage",
    description:
      "Deep static and dynamic dissection of suspicious binaries, ransomware payloads, and mobile spyware to extract IOCs, C2 protocols, and attribution artifacts.",
    capabilities: [
      "Binary Disassembly & Deobfuscation",
      "Automated Sandbox Detonation",
      "YARA & Sigma Rule Authoring",
      "Incident Containment Advisory",
    ],
  },
  {
    id: "custom-automation",
    code: "SVC // 05",
    title: "Custom Automation Development",
    subtitle: "Bespoke Engineering",
    description:
      "Tailored security orchestration, SOAR playbooks, internal intelligence dashboards, and high-throughput data pipelines engineered for high-trust organizations.",
    capabilities: [
      "SOAR & Incident Response Playbooks",
      "Custom Scrapers & Telemetry Collectors",
      "Air-gapped On-Premise Deployments",
      "API & Legacy System Integrations",
    ],
  },
];

// TODO: Replace placeholder projects with your actual tools & case studies
export const PROJECTS: ProjectItem[] = [
  {
    id: "project-01",
    code: "PRJ // 01",
    title: "Project 01 – Monitoring & Threat Intel Tool",
    category: "Law Enforcement / OSINT",
    status: "ACTIVE DEPLOYMENT",
    summary:
      "Automated multi-source intelligence aggregator and entity correlation engine built for rapid cyber-crime investigation triage and live target monitoring.",
    metrics: "82% faster initial case triage",
    stack: ["Python", "Graph DB", "Headless Collectors", "Next.js"],
  },
  {
    id: "project-02",
    code: "PRJ // 02",
    title: "Project 02 – Evidence & Case Automation Suite",
    category: "Digital Forensics Workflow",
    status: "PILOT // AGENCY",
    summary:
      "Zero-tamper evidence intake, cryptographic hashing, CDR/IPDR parser, and automated timeline generator with audit-logged chain of custody.",
    metrics: "10,000+ artifacts indexed / hr",
    stack: ["Rust", "PostgreSQL", "SHA-256 Vault", "Docker"],
  },
  {
    id: "project-03",
    code: "PRJ // 03",
    title: "Project 03 – Continuous Attack Surface Scanner",
    category: "Offensive Security",
    status: "ENTERPRISE",
    summary:
      "Autonomous external attack surface discovery engine that fingerprints exposed services, misconfigurations, and shadow APIs with zero false-positive noise.",
    metrics: "24/7 continuous telemetry",
    stack: ["Go", "Nuclei Engine", "Redis", "TypeScript"],
  },
  {
    id: "project-04",
    code: "PRJ // 04",
    title: "Project 04 – Automated Malware Triage Sandbox",
    category: "Malware Analysis",
    status: "R&D LAB",
    summary:
      "Isolated detonation environment with automated API hooking, memory dumping, and instant YARA signature extraction for rapid incident response.",
    metrics: "< 90s full behavioral report",
    stack: ["QEMU", "YARA", "eBPF", "FastAPI"],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Discover",
    duration: "PHASE 01",
    description:
      "We audit operational bottlenecks, threat models, and investigation workflows to isolate the exact root problem.",
  },
  {
    step: "02",
    title: "Build",
    duration: "PHASE 02",
    description:
      "We architect hardened, low-latency tooling and offensive security frameworks tailored to your environment.",
  },
  {
    step: "03",
    title: "Automate",
    duration: "PHASE 03",
    description:
      "Manual correlation, repetitive triage, and reporting are replaced by deterministic, auditable pipelines.",
  },
  {
    step: "04",
    title: "Deploy",
    duration: "PHASE 04",
    description:
      "Shipped on-premise, air-gapped, or cloud-native with operator training, telemetry, and continuous support.",
  },
];

// TODO: Replace placeholder stats with verified company metrics
export const STATS: StatItem[] = [
  {
    label: "Security & Automation Projects",
    value: 42,
    suffix: "+",
    detail: "Enterprise & public-sector engagements",
  },
  {
    label: "Custom Intelligence Tools",
    value: 14,
    suffix: "",
    detail: "Production-grade modules deployed",
  },
  {
    label: "Analyst Hours Saved",
    value: 18500,
    suffix: "+",
    detail: "Through deterministic automation",
  },
  {
    label: "Critical Vulns Uncovered",
    value: 310,
    suffix: "+",
    detail: "Before adversarial exploitation",
  },
];

// TODO: Replace placeholder team members with your founding team & leadership
export const TEAM: TeamMember[] = [
  {
    name: "// TODO: Founder Name",
    role: "Founder & Chief Security Architect",
    clearance: "LEAD // 01",
    bio: "Offensive security researcher and automation architect focused on adversarial simulation and law enforcement tooling.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "// TODO: Co-Founder Name",
    role: "Co-Founder & Head of Engineering",
    clearance: "LEAD // 02",
    bio: "Distributed systems engineer building high-throughput OSINT collectors, forensic pipelines, and resilient infrastructure.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  {
    name: "// TODO: Lead Researcher",
    role: "Principal Threat & Malware Analyst",
    clearance: "LEAD // 03",
    bio: "Reverse engineering specialist dissecting APT implants, mobile spyware, and threat actor infrastructure.",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
];
