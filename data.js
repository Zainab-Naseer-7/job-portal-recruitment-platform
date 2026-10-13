/**
 * CareerSphere - Comprehensive Dataset & State Models
 * Production-ready mock data for 36+ Jobs, 16+ Companies, Candidates, Applications, Messages, Analytics & Resources
 */

const INITIAL_COMPANIES = [
  {
    id: "comp-technova",
    name: "TechNova Systems",
    slug: "technova",
    logoColor: "#2563EB",
    logoLetter: "TN",
    verified: true,
    rating: 4.9,
    reviewsCount: 342,
    industry: "Technology",
    category: "technology",
    location: "San Francisco, CA",
    employees: "1,200 - 5,000",
    openPositions: 8,
    founded: 2018,
    website: "https://technova.io",
    tagline: "Pioneering Next-Gen Cloud Infrastructure & Distributed Systems",
    about: "TechNova Systems is an enterprise software company developing ultra-scalable cloud architectures, autonomous API gateways, and distributed databases used by Fortune 500 organizations worldwide.",
    culture: [
      "Asynchronous-first work culture with flexible global hours",
      "Continuous learning stipend ($3,500/year per engineer)",
      "Open source contribution encouraged with paid work time",
      "Semi-annual global team retreats in world-class destinations"
    ],
    benefits: [
      "Comprehensive Health, Dental & Vision (100% covered)",
      "Unlimited Paid Time Off & 16 weeks parental leave",
      "401(k) retirement match up to 6%",
      "$2,000 home office workstation setup grant",
      "Annual equity refresh and performance bonuses"
    ],
    hiringProcess: [
      "Initial 30-min recruiter conversation",
      "Technical deep dive & architecture discussion (60 min)",
      "Pair programming session on realistic problem (75 min)",
      "Leadership & culture alignment chat",
      "Offer extension within 48 hours"
    ],
    reviews: [
      { author: "Staff Infrastructure Engineer", rating: 5, date: "2 weeks ago", comment: "Best engineering culture I've experienced in 12 years. Exceptional leadership and zero micromanagement." },
      { author: "Senior Product Designer", rating: 4.8, date: "1 month ago", comment: "Great focus on craft and user experience. Designers have a strong voice at the executive table." }
    ]
  },
  {
    id: "comp-quantumai",
    name: "QuantumAI Labs",
    slug: "quantumai",
    logoColor: "#7C3AED",
    logoLetter: "QA",
    verified: true,
    rating: 4.95,
    reviewsCount: 198,
    industry: "Technology",
    category: "technology",
    location: "New York, NY",
    employees: "350 - 800",
    openPositions: 6,
    founded: 2021,
    website: "https://quantumai.ai",
    tagline: "Unlocking Frontier Multimodal Intelligence for Enterprise Automation",
    about: "QuantumAI Labs is at the forefront of foundation model research, reasoning systems, and enterprise generative AI platforms designed to empower high-complexity workflows in law, medicine, and engineering.",
    culture: [
      "Rigorous scientific approach paired with rapid shipping cadence",
      "High agency, flat hierarchy, and intellectual curiosity",
      "Direct collaboration with top ML researchers and AI fellows"
    ],
    benefits: [
      "Top-tier compensation packages with significant equity stakes",
      "Daily gourmet catered lunches & premium wellness plans",
      "Full conference sponsorship (NeurIPS, ICML, CVPR)",
      "Custom high-performance computing hardware allowances"
    ],
    hiringProcess: [
      "Screening call with Head of Talent",
      "System design or algorithmic research interview",
      "Take-home ML systems challenge or past work walk-through",
      "Founders discussion and alignment"
    ],
    reviews: [
      { author: "Research Scientist", rating: 5, date: "3 weeks ago", comment: "The compute resources and talent density here are unmatched anywhere in the industry." }
    ]
  },
  {
    id: "comp-stripeflow",
    name: "StripeFlow FinTech",
    slug: "stripeflow",
    logoColor: "#06B6D4",
    logoLetter: "SF",
    verified: true,
    rating: 4.85,
    reviewsCount: 420,
    industry: "Finance",
    category: "finance",
    location: "London, UK & Remote",
    employees: "2,500 - 6,000",
    openPositions: 7,
    founded: 2016,
    website: "https://stripeflow.finance",
    tagline: "The Modern Financial Infrastructure for Global Commerce",
    about: "StripeFlow empowers millions of merchants, platforms, and multinational corporations with real-time cross-border settlements, fraud detection ML, and unified Treasury management.",
    culture: [
      "Extreme clarity of written communication",
      "Customer obsession with zero downtime tolerance",
      "Diverse global team across 34 countries"
    ],
    benefits: [
      "Competitive global salaries benchmarked to 90th percentile",
      "Generous stock option plan with early liquidity windows",
      "Private health insurance and mental health support (Modern Health)",
      "30 days annual leave + local public holidays"
    ],
    hiringProcess: [
      "Recruiter intro call",
      "Role-specific practical assessment",
      "Cross-functional team interviews",
      "Executive review and offer"
    ],
    reviews: [
      { author: "Principal Backend Engineer", rating: 4.9, date: "1 month ago", comment: "High scale problems. We process over 150,000 transactions/sec during peak events." }
    ]
  },
  {
    id: "comp-apexcloud",
    name: "ApexCloud Networks",
    slug: "apexcloud",
    logoColor: "#0284C7",
    logoLetter: "AC",
    verified: true,
    rating: 4.75,
    reviewsCount: 260,
    industry: "Technology",
    category: "technology",
    location: "Austin, TX",
    employees: "800 - 2,000",
    openPositions: 5,
    founded: 2019,
    website: "https://apexcloud.net",
    tagline: "High-Performance Edge Computing & Zero-Trust Security",
    about: "ApexCloud operates over 280 edge computing points-of-presence globally, enabling microsecond latency content delivery and quantum-resistant network security for enterprise systems.",
    culture: ["DevOps-first mindsets", "Empowered autonomous squads", "Transparent company metrics"],
    benefits: ["Comprehensive medical, dental, vision", "401k 5% match", "Remote stipend", "Gym subsidy"],
    hiringProcess: ["Resume screening", "Technical interview", "System architecture review", "Culture chat"],
    reviews: [{ author: "DevOps Architect", rating: 4.7, date: "2 months ago", comment: "Great colleagues and exciting technical infrastructure." }]
  },
  {
    id: "comp-biohealth",
    name: "BioHealth Diagnostics",
    slug: "biohealth",
    logoColor: "#10B981",
    logoLetter: "BH",
    verified: true,
    rating: 4.88,
    reviewsCount: 154,
    industry: "Healthcare",
    category: "healthcare",
    location: "Boston, MA",
    employees: "500 - 1,500",
    openPositions: 4,
    founded: 2017,
    website: "https://biohealthdiagnostics.com",
    tagline: "AI-Powered Genomic Sequencing & Precision Oncology",
    about: "BioHealth combines machine learning and advanced molecular assays to identify cancer biomarkers months earlier than conventional clinical testing.",
    culture: ["Mission-driven purpose", "Collaborative cross-disciplinary research", "High scientific integrity"],
    benefits: ["Full healthcare coverage", "Family planning assistance", "Tuition reimbursement", "Life insurance"],
    hiringProcess: ["HR screening", "Domain expertise interview", "Case study presentation", "Offer"],
    reviews: [{ author: "Bioinformatics Lead", rating: 5, date: "3 weeks ago", comment: "Every day we know our code is directly saving patient lives." }]
  },
  {
    id: "comp-cybershield",
    name: "CyberShield Security",
    slug: "cybershield",
    logoColor: "#DC2626",
    logoLetter: "CS",
    verified: true,
    rating: 4.82,
    reviewsCount: 310,
    industry: "Cybersecurity",
    category: "technology",
    location: "Washington, DC & Remote",
    employees: "1,000 - 3,000",
    openPositions: 5,
    founded: 2015,
    website: "https://cybershield.sec",
    tagline: "Proactive Autonomous Threat Intelligence & Red Teaming",
    about: "Protecting sovereign cloud architectures, financial hubs, and critical infrastructure through autonomous threat response and AI-driven intrusion prevention.",
    culture: ["Security mindset in every discipline", "Continuous penetration testing drills", "Work-life balance"],
    benefits: ["Unlimited PTO", "Health & Wellness stipend", "Home office budget", "Annual bonus"],
    hiringProcess: ["Recruiter check", "Technical challenge", "Pen-test scenario review", "Final offer"],
    reviews: [{ author: "Security Analyst", rating: 4.8, date: "1 month ago", comment: "Cutting edge cybersecurity tools and great team cohesion." }]
  },
  {
    id: "comp-finscale",
    name: "FinScale Capital",
    slug: "finscale",
    logoColor: "#F59E0B",
    logoLetter: "FC",
    verified: true,
    rating: 4.79,
    reviewsCount: 180,
    industry: "Finance",
    category: "finance",
    location: "Chicago, IL",
    employees: "400 - 1,000",
    openPositions: 4,
    founded: 2018,
    website: "https://finscalecapital.com",
    tagline: "Quantitative Algorithmic Trading & High-Frequency Systems",
    about: "FinScale designs ultra-low latency execution engines, mathematical statistical models, and risk management systems for automated equities and commodities markets.",
    culture: ["Meritocratic environment", "High precision and numerical rigor", "Rapid feedback loops"],
    benefits: ["Performance profit sharing", "Full health insurance", "Executive coaching", "Free breakfast & lunch"],
    hiringProcess: ["Quant screening", "Live coding interview", "Math & logic assessment", "Partner interview"],
    reviews: [{ author: "Quantitative Developer", rating: 4.9, date: "2 months ago", comment: "Massive compensation upside and intellectual satisfaction." }]
  },
  {
    id: "comp-ecopulse",
    name: "EcoPulse Energy",
    slug: "ecopulse",
    logoColor: "#059669",
    logoLetter: "EP",
    verified: true,
    rating: 4.91,
    reviewsCount: 140,
    industry: "Engineering",
    category: "engineering",
    location: "Denver, CO",
    employees: "600 - 1,800",
    openPositions: 4,
    founded: 2020,
    website: "https://ecopulse.energy",
    tagline: "Decarbonizing the Grid with Smart Distributed Energy Storage",
    about: "EcoPulse builds next-generation battery management operating systems and grid balancing software to accelerate the worldwide renewable energy transition.",
    culture: ["Sustainability first", "Passionate engineers", "Transparent goals"],
    benefits: ["Clean transit subsidies", "Comprehensive healthcare", "Parental leave", "Stock options"],
    hiringProcess: ["Recruiter screen", "Hardware/Software design interview", "Onsite technical panel", "Offer"],
    reviews: [{ author: "Embedded Systems Engineer", rating: 5, date: "4 weeks ago", comment: "Meaningful work solving the climate challenge." }]
  },
  {
    id: "comp-hyperdrive",
    name: "HyperDrive Mobility",
    slug: "hyperdrive",
    logoColor: "#8B5CF6",
    logoLetter: "HD",
    verified: true,
    rating: 4.84,
    reviewsCount: 220,
    industry: "Engineering",
    category: "engineering",
    location: "Detroit, MI & Remote",
    employees: "1,500 - 4,000",
    openPositions: 6,
    founded: 2017,
    website: "https://hyperdrive.auto",
    tagline: "Autonomous Electric Vehicle Platforms & Connected Fleets",
    about: "Building the digital nervous system for level 4 autonomous commercial freight vehicles and electric smart transportation.",
    culture: ["Engineering excellence", "Safety critical rigor", "Cross functional synergy"],
    benefits: ["EV lease credit program", "Top healthcare", "401k match", "Flexible remote work"],
    hiringProcess: ["HR chat", "Technical code challenge", "Systems interview", "Executive review"],
    reviews: [{ author: "Computer Vision Engineer", rating: 4.8, date: "1 month ago", comment: "Working on state of the art sensor fusion." }]
  },
  {
    id: "comp-pulsedesign",
    name: "Pulse Design Studio",
    slug: "pulsedesign",
    logoColor: "#EC4899",
    logoLetter: "PD",
    verified: true,
    rating: 4.93,
    reviewsCount: 110,
    industry: "Marketing",
    category: "marketing",
    location: "Los Angeles, CA & Remote",
    employees: "120 - 300",
    openPositions: 3,
    founded: 2019,
    website: "https://pulsedesign.studio",
    tagline: "Award-Winning Brand Systems, Product Design & Digital Experiences",
    about: "Pulse is an elite digital product design agency partnering with tier-one tech startups to craft immersive design systems, 3D web experiences, and viral brands.",
    culture: ["Radical creativity", "Craft perfectionism", "4-day work week experiment"],
    benefits: ["4-day work week (32 hrs)", "Design tool stipends", "Full health insurance", "Annual retreat"],
    hiringProcess: ["Portfolio review", "Design challenge walk-through", "Team collaboration session", "Offer"],
    reviews: [{ author: "Senior UI/UX Designer", rating: 5, date: "2 weeks ago", comment: "Pure creative freedom and highest design standards." }]
  },
  {
    id: "comp-nextgen",
    name: "NextGen Dynamics",
    slug: "nextgen",
    logoColor: "#3B82F6",
    logoLetter: "ND",
    verified: true,
    rating: 4.76,
    reviewsCount: 275,
    industry: "Technology",
    category: "technology",
    location: "Seattle, WA",
    employees: "3,000 - 8,000",
    openPositions: 8,
    founded: 2014,
    website: "https://nextgendynamics.com",
    tagline: "Enterprise SaaS Applications & Intelligent Workforce Solutions",
    about: "Serving over 40 million knowledge workers with unified workflow automation, enterprise collaboration platforms, and AI assistant integrations.",
    culture: ["Customer-first innovation", "Growth mindset", "Supportive mentorship programs"],
    benefits: ["Robust healthcare & dental", "Employee stock purchase plan (ESPP)", "Generous PTO", "Education reimbursement"],
    hiringProcess: ["Recruiter intro", "Hiring manager interview", "Technical assignment", "Final panel"],
    reviews: [{ author: "Product Manager", rating: 4.7, date: "3 months ago", comment: "Great company stability with room for career growth." }]
  },
  {
    id: "comp-globallogix",
    name: "GlobalLogix Supply",
    slug: "globallogix",
    logoColor: "#0D9488",
    logoLetter: "GL",
    verified: true,
    rating: 4.71,
    reviewsCount: 390,
    industry: "E-commerce",
    category: "ecommerce",
    location: "Atlanta, GA",
    employees: "5,000 - 15,000",
    openPositions: 5,
    founded: 2012,
    website: "https://globallogix.com",
    tagline: "Predictive AI Supply Chains & Automated Global Fulfillment",
    about: "GlobalLogix unifies maritime, air freight, and last-mile distribution networks using predictive machine learning algorithms.",
    culture: ["Operational excellence", "Data-driven decisions", "Collaborative team"],
    benefits: ["Medical, Dental, Vision", "Annual performance incentives", "Tuition support", "Retirement plan"],
    hiringProcess: ["HR screen", "Skills test", "Leadership behavioral interview", "Offer"],
    reviews: [{ author: "Operations Director", rating: 4.7, date: "1 month ago", comment: "Tremendous scale and interesting logistics puzzles." }]
  },
  {
    id: "comp-edusphere",
    name: "EduSphere Learning",
    slug: "edusphere",
    logoColor: "#84CC16",
    logoLetter: "ES",
    verified: true,
    rating: 4.87,
    reviewsCount: 165,
    industry: "Education",
    category: "education",
    location: "Toronto, Canada & Remote",
    employees: "300 - 900",
    openPositions: 4,
    founded: 2019,
    website: "https://edusphere.learn",
    tagline: "Adaptive AI Tutors & Interactive STEM Education Platforms",
    about: "Making world-class personalized STEM education universally accessible through interactive simulations, gamified coding labs, and adaptive learning algorithms.",
    culture: ["Lifelong learners", "Empathy-centric leadership", "Transparent asynchronous work"],
    benefits: ["Comprehensive benefits", "Unlimited book/course budget", "Work from anywhere", "Home office fund"],
    hiringProcess: ["Application review", "Teaching/Technical demo", "Team culture chat", "Offer"],
    reviews: [{ author: "Curriculum Engineer", rating: 4.9, date: "2 weeks ago", comment: "Inspiring mission and deeply compassionate team." }]
  },
  {
    id: "comp-omnicommerce",
    name: "OmniCommerce Cloud",
    slug: "omnicommerce",
    logoColor: "#EA580C",
    logoLetter: "OC",
    verified: true,
    rating: 4.8,
    reviewsCount: 240,
    industry: "E-commerce",
    category: "ecommerce",
    location: "Miami, FL & Remote",
    employees: "700 - 2,200",
    openPositions: 5,
    founded: 2017,
    website: "https://omnicommerce.cloud",
    tagline: "Headless E-commerce Architecture & Conversational Checkout",
    about: "Powers over $12B in annual digital merchandise sales with sub-second page loads, headless microservices, and 1-click global checkout.",
    culture: ["High velocity shipping", "Empirical testing", "Remote autonomy"],
    benefits: ["100% remote flexibility", "Health coverage", "Annual profit share", "Home desk budget"],
    hiringProcess: ["Screening call", "Technical design session", "Executive interview", "Offer"],
    reviews: [{ author: "Full Stack Lead", rating: 4.8, date: "1 month ago", comment: "Freedom to choose the best modern tech stack." }]
  },
  {
    id: "comp-marketscale",
    name: "MarketScale Digital",
    slug: "marketscale",
    logoColor: "#6366F1",
    logoLetter: "MS",
    verified: true,
    rating: 4.77,
    reviewsCount: 130,
    industry: "Marketing",
    category: "marketing",
    location: "San Diego, CA",
    employees: "200 - 600",
    openPositions: 3,
    founded: 2020,
    website: "https://marketscale.io",
    tagline: "AI Customer Acquisition & Automated Growth Marketing Engine",
    about: "Automating omnichannel ad optimization, creative generation, and conversion analytics for high-growth tech brands.",
    culture: ["Experimentation mindset", "Data over opinions", "High celebration of wins"],
    benefits: ["Competitive salary + bonus", "Generous health coverage", "Flexible vacation", "Team offsites"],
    hiringProcess: ["Recruiter intro", "Case study review", "Leadership conversation", "Offer"],
    reviews: [{ author: "Growth Strategist", rating: 4.8, date: "3 weeks ago", comment: "Super fast-paced and rewarding." }]
  },
  {
    id: "comp-veritashealth",
    name: "Veritas Digital Health",
    slug: "veritashealth",
    logoColor: "#14B8A6",
    logoLetter: "VH",
    verified: true,
    rating: 4.89,
    reviewsCount: 175,
    industry: "Healthcare",
    category: "healthcare",
    location: "Philadelphia, PA & Remote",
    employees: "450 - 1,200",
    openPositions: 4,
    founded: 2018,
    website: "https://veritashealth.tech",
    tagline: "Secure Telehealth Networks & Automated Remote Patient Monitoring",
    about: "Connecting millions of patients to specialist clinicians with encrypted low-latency video, remote vital telemetry, and automated prescription routing.",
    culture: ["Patient care centered", "Strict HIPAA compliance focus", "Supportive work climate"],
    benefits: ["Comprehensive medical & mental health", "401k matching", "Wellness days off", "Generous PTO"],
    hiringProcess: ["Initial phone call", "Security & architecture round", "Team interviews", "Offer"],
    reviews: [{ author: "Senior Mobile Engineer", rating: 4.9, date: "1 month ago", comment: "Proud of the reliability and security of our healthcare app." }]
  }
];

const INITIAL_JOBS = [
  {
    id: "job-01",
    title: "Senior Frontend Engineer",
    companyId: "comp-technova",
    companyName: "TechNova Systems",
    companyLogoColor: "#2563EB",
    companyLetter: "TN",
    location: "Remote (US/EU)",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$140,000 - $185,000",
    minSalary: 140000,
    maxSalary: 185000,
    experience: "Senior",
    postedDate: "2 days ago",
    featured: true,
    category: "Engineering",
    industry: "Technology",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"],
    applicantsCount: 42,
    description: "We are seeking a Senior Frontend Engineer to lead the architecture and user experience of our flagship Cloud Console. You will build high-frequency data visualizations, design systems, and responsive user workflows used by over 80,000 cloud engineers.",
    responsibilities: [
      "Architect and implement responsive, high-performance web applications using React 18, TypeScript, and modern state architectures.",
      "Collaborate with UX designers and backend engineers to craft intuitive interfaces for complex infrastructure systems.",
      "Maintain and expand our design system components with accessibility (WCAG AAA) and sub-100ms render speeds.",
      "Mentor mid-level engineers and conduct thoughtful architectural reviews."
    ],
    requirements: [
      "5+ years of production experience building complex Single Page Applications with React and TypeScript.",
      "Deep understanding of browser performance optimization, web vitals, and rendering lifecycles.",
      "Proficiency with modern CSS, Tailwind, CSS modules, and design tokens.",
      "Experience with modern build tools, testing frameworks (Vitest, Playwright), and CI/CD."
    ],
    benefits: [
      "100% remote flexibility with home office stipend",
      "Comprehensive medical, dental, and optical insurance",
      "401(k) 6% immediate matching",
      "Unlimited paid time off with 4 weeks minimum encouraged",
      "Annual $3,500 continuous learning and conference grant"
    ]
  },
  {
    id: "job-02",
    title: "Staff Machine Learning Engineer",
    companyId: "comp-quantumai",
    companyName: "QuantumAI Labs",
    companyLogoColor: "#7C3AED",
    companyLetter: "QA",
    location: "New York, NY",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$210,000 - $280,000",
    minSalary: 210000,
    maxSalary: 280000,
    experience: "Lead",
    postedDate: "1 day ago",
    featured: true,
    category: "AI & Data",
    industry: "Technology",
    skills: ["PyTorch", "LLMs", "Distributed Systems", "CUDA", "Python"],
    applicantsCount: 68,
    description: "Join our frontier research team training and serving multimodal foundation models. You will design distributed training pipelines across thousands of H100 GPUs and optimize real-time inference latency for enterprise clients.",
    responsibilities: [
      "Scale training runs across massive GPU clusters using Megatron-LM and DeepSpeed.",
      "Develop innovative quantization, speculative decoding, and caching techniques to minimize latency.",
      "Collaborate directly with AI research scientists to translate breakthroughs into production services.",
      "Lead architectural discussions and establish engineering standards for our AI platform."
    ],
    requirements: [
      "6+ years of software engineering experience with 4+ years dedicated to ML systems.",
      "Extensive experience with PyTorch, distributed training primitives, and GPU memory optimization.",
      "Strong background in C++, CUDA kernel development, or high-throughput Triton serving.",
      "Proven track record of deploying large language models or diffusion models in high-load production."
    ],
    benefits: [
      "Significant tier-1 equity package with annual refresh grants",
      "Top-tier PPO health insurance with 100% dependent coverage",
      "Daily gourmet catered meals and wellness amenities in Manhattan office",
      "Full sponsorship for publishing and presenting at leading AI conferences"
    ]
  },
  {
    id: "job-03",
    title: "Lead Product Designer",
    companyId: "comp-stripeflow",
    companyName: "StripeFlow FinTech",
    companyLogoColor: "#06B6D4",
    companyLetter: "SF",
    location: "London, UK / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "£110,000 - £145,000",
    minSalary: 145000,
    maxSalary: 190000,
    experience: "Lead",
    postedDate: "Just now",
    featured: true,
    category: "Design",
    industry: "Finance",
    skills: ["Figma", "Design Systems", "UI/UX", "User Research", "Prototyping"],
    applicantsCount: 29,
    description: "Lead Product Designer needed to define the visual language and interaction architecture for our next-generation Treasury and global settlement products. You will turn intricate financial primitives into breathtaking, effortless user experiences.",
    responsibilities: [
      "Direct end-to-end design strategy from discovery and user research to interactive prototypes and production polish.",
      "Champion our global design system, ensuring pixel-perfect consistency across web and mobile platforms.",
      "Conduct regular user interviews with CFOs, financial controllers, and startup founders.",
      "Partner with product managers and engineering directors to set quarterly roadmap priorities."
    ],
    requirements: [
      "6+ years of digital product design experience, preferably in FinTech, developer tools, or enterprise SaaS.",
      "Mastery of Figma, advanced auto-layout, interactive component states, and token systems.",
      "Demonstrated portfolio showcasing end-to-end UX thinking, elegant visual craft, and business impact.",
      "Strong communication skills and ability to articulate design rationale through clear writing."
    ],
    benefits: [
      "Competitive global compensation with stock option plan",
      "30 days paid holiday + national holidays",
      "Private medical, mental healthcare and gym membership",
      "Choice of high-end Apple hardware and home office stipend"
    ]
  },
  {
    id: "job-04",
    title: "DevOps & Cloud Architect",
    companyId: "comp-apexcloud",
    companyName: "ApexCloud Networks",
    companyLogoColor: "#0284C7",
    companyLetter: "AC",
    location: "Austin, TX",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$165,000 - $210,000",
    minSalary: 165000,
    maxSalary: 210000,
    experience: "Senior",
    postedDate: "3 days ago",
    featured: true,
    category: "Engineering",
    industry: "Technology",
    skills: ["Kubernetes", "Terraform", "AWS", "Go", "CI/CD"],
    applicantsCount: 35,
    description: "ApexCloud is looking for a DevOps Architect to scale our multi-region Kubernetes clusters and automated deployment pipelines supporting millions of requests per second.",
    responsibilities: [
      "Manage Infrastructure as Code across multi-cloud environments using Terraform and Pulumi.",
      "Architect zero-downtime deployment pipelines, blue/green releases, and automated rollbacks.",
      "Implement robust telemetry, Prometheus metrics, Grafana dashboards, and automated alert response.",
      "Audit network security, IAM policies, and ensure SOC 2 Type II compliance."
    ],
    requirements: [
      "5+ years in cloud infrastructure, site reliability engineering, or platform architecture.",
      "Deep expertise in production Kubernetes cluster operations, service meshes (Istio), and container security.",
      "Proficient in writing automation tools in Go or Python.",
      "Experience with edge routing, BGP, and Cloudflare/Fastly architectures is a big plus."
    ],
    benefits: [
      "Flexible hybrid model (2 days office, 3 days remote)",
      "401(k) matching up to 5%",
      "Comprehensive medical, dental, vision coverage",
      "Annual wellness stipend of $1,500"
    ]
  },
  {
    id: "job-05",
    title: "Bioinformatics Data Scientist",
    companyId: "comp-biohealth",
    companyName: "BioHealth Diagnostics",
    companyLogoColor: "#10B981",
    companyLetter: "BH",
    location: "Boston, MA",
    workMode: "On-site",
    jobType: "Full-time",
    salaryRange: "$150,000 - $190,000",
    minSalary: 150000,
    maxSalary: 190000,
    experience: "Mid",
    postedDate: "4 days ago",
    featured: false,
    category: "AI & Data",
    industry: "Healthcare",
    skills: ["Python", "R", "Nextflow", "Machine Learning", "Genomics"],
    applicantsCount: 19,
    description: "Analyze next-generation genomic sequencing datasets to uncover novel oncology biomarkers. Work side-by-side with wet-lab scientists and computational biologists.",
    responsibilities: [
      "Develop scalable data pipelines for whole genome and exome sequencing variant analysis.",
      "Build predictive statistical models correlating genomic mutations with clinical treatment outcomes.",
      "Author scientific reports and maintain reproducible analytical workflows using Nextflow and Docker.",
      "Collaborate with clinical teams to validate diagnostic accuracy."
    ],
    requirements: [
      "MS or PhD in Bioinformatics, Computational Biology, or Data Science with genomic focus.",
      "Proficiency in Python (NumPy, SciPy, Pandas) and statistical modeling in R.",
      "Hands-on experience with variant calling tools (GATK, Mutect2) and public genomic databases.",
      "Strong passion for healthcare innovation and oncology treatment."
    ],
    benefits: [
      "Competitive base salary and annual milestone bonus",
      "Top-tier health and dental plans with zero deductible",
      "Tuition assistance and continuous training grants",
      "MBTA commuter pass subsidy"
    ]
  },
  {
    id: "job-06",
    title: "Senior Security Engineer (Red Team)",
    companyId: "comp-cybershield",
    companyName: "CyberShield Security",
    companyLogoColor: "#DC2626",
    companyLetter: "CS",
    location: "Washington, DC / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$175,000 - $225,000",
    minSalary: 175000,
    maxSalary: 225000,
    experience: "Senior",
    postedDate: "2 days ago",
    featured: true,
    category: "Engineering",
    industry: "Technology",
    skills: ["Penetration Testing", "Reverse Engineering", "Rust", "Python", "Cloud Security"],
    applicantsCount: 24,
    description: "Conduct offensive security simulations, adversary emulation, and vulnerability research against critical cloud architectures and enterprise software stacks.",
    responsibilities: [
      "Execute end-to-end red team campaigns, spear-phishing assessments, and physical/digital penetration tests.",
      "Analyze malware, reverse engineer zero-day vulnerabilities, and produce actionable defensive recommendations.",
      "Collaborate with blue team defense engineers to refine SIEM correlation rules and intrusion detection.",
      "Author comprehensive executive vulnerability briefing documents."
    ],
    requirements: [
      "5+ years of dedicated experience in offensive security, red teaming, or penetration testing.",
      "Industry certifications such as OSCP, OSEP, GXPN, or equivalent proven track record.",
      "Proficiency in scripting exploit payloads in Python, Go, or Rust.",
      "Thorough understanding of Windows Active Directory internals and AWS/GCP IAM exploitation."
    ],
    benefits: [
      "Unlimited PTO with mandatory disconnect periods",
      "Full hardware lab budget for security research",
      "Annual $4,000 training and Black Hat/DEF CON conference pass",
      "Top-bracket medical coverage"
    ]
  },
  {
    id: "job-07",
    title: "Quantitative Trading Strategist",
    companyId: "comp-finscale",
    companyName: "FinScale Capital",
    companyLogoColor: "#F59E0B",
    companyLetter: "FC",
    location: "Chicago, IL",
    workMode: "On-site",
    jobType: "Full-time",
    salaryRange: "$220,000 - $350,000",
    minSalary: 220000,
    maxSalary: 350000,
    experience: "Senior",
    postedDate: "5 days ago",
    featured: true,
    category: "Finance",
    industry: "Finance",
    skills: ["C++", "Python", "Stochastic Calculus", "Time Series", "Data Analysis"],
    applicantsCount: 52,
    description: "Develop mathematical alpha signals and automated statistical arbitrage strategies for high-frequency equities and derivatives markets.",
    responsibilities: [
      "Formulate, backtest, and deploy systematic trading strategies based on microstructural market data.",
      "Optimize execution algorithms to minimize market impact and latency costs.",
      "Perform high-dimensional statistical analysis on petabyte-scale tick datasets.",
      "Collaborate with C++ low-latency software engineers to deploy real-time trading engines."
    ],
    requirements: [
      "Master's or PhD in Mathematics, Physics, Statistics, Financial Engineering, or Computer Science.",
      "Deep understanding of probability theory, time-series econometrics, and machine learning.",
      "Proficient in Python for research and intermediate C++ for production systems.",
      "Competitive background (e.g. Olympiads, Putnam, Kaggle Grandmaster) is highly valued."
    ],
    benefits: [
      "Substantial profit-sharing bonus linked directly to strategy performance",
      "100% company-paid healthcare and dental for employee and family",
      "Chef-prepared breakfast and lunch daily in downtown Chicago trading floor",
      "Full relocation package provided"
    ]
  },
  {
    id: "job-08",
    title: "Embedded Battery Systems Engineer",
    companyId: "comp-ecopulse",
    companyName: "EcoPulse Energy",
    companyLogoColor: "#059669",
    companyLetter: "EP",
    location: "Denver, CO",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$135,000 - $175,000",
    minSalary: 135000,
    maxSalary: 175000,
    experience: "Mid",
    postedDate: "1 week ago",
    featured: false,
    category: "Engineering",
    industry: "Engineering",
    skills: ["C", "C++", "BMS", "CAN Bus", "RTOS", "Hardware"],
    applicantsCount: 16,
    description: "Write safety-critical firmware for our high-capacity utility-scale grid battery storage installations. Help eliminate fossil fuels with robust hardware control algorithms.",
    responsibilities: [
      "Design and maintain deterministic firmware for Battery Management Systems (BMS) in C/C++.",
      "Implement State of Charge (SoC) and State of Health (SoH) estimation algorithms.",
      "Verify functional safety standards (ISO 26262 / IEC 61508) in hardware-in-the-loop (HIL) environments.",
      "Troubleshoot CAN, SPI, and Modbus communication protocols."
    ],
    requirements: [
      "Bachelor's degree in Electrical Engineering, Computer Engineering, or related field.",
      "3+ years of bare-metal or FreeRTOS embedded software development in C.",
      "Experience with battery chemistry, cell balancing, and thermal runaway prevention.",
      "Hands-on laboratory experience with oscilloscopes, logic analyzers, and power supplies."
    ],
    benefits: [
      "Equity in a rapidly growing climate tech pioneer",
      "Flexible hybrid schedule with modern lab facilities",
      "Ski pass and outdoor recreation annual allowance",
      "Full family healthcare coverage"
    ]
  },
  {
    id: "job-09",
    title: "Autonomous Vehicle Perception Engineer",
    companyId: "comp-hyperdrive",
    companyName: "HyperDrive Mobility",
    companyLogoColor: "#8B5CF6",
    companyLetter: "HD",
    location: "Detroit, MI",
    workMode: "On-site",
    jobType: "Full-time",
    salaryRange: "$160,000 - $215,000",
    minSalary: 160000,
    maxSalary: 215000,
    experience: "Senior",
    postedDate: "3 days ago",
    featured: true,
    category: "Engineering",
    industry: "Engineering",
    skills: ["Computer Vision", "C++", "LiDAR", "PyTorch", "ROS2"],
    applicantsCount: 31,
    description: "Develop 3D object detection, tracking, and sensor fusion algorithms for our autonomous commercial truck fleet navigating highway and urban environments.",
    responsibilities: [
      "Build deep neural network models combining LiDAR point clouds, radar, and camera vision feeds.",
      "Optimize real-time inference on automotive embedded GPUs (NVIDIA DRIVE Orin).",
      "Conduct vehicle test track trials and analyze real-world edge case telemetry.",
      "Ensure real-time execution safety budgets and fail-operational architectures."
    ],
    requirements: [
      "MS or PhD in Robotics, Computer Science, or Computer Vision.",
      "4+ years of professional C++ development in Linux environments with ROS/ROS2.",
      "Demonstrated experience training 3D bounding box detection models or occupancy grids.",
      "Strong linear algebra and spatial transformation fundamentals."
    ],
    benefits: [
      "Generous vehicle lease program on partner EV models",
      "Comprehensive medical, dental, vision insurance",
      "401k 6% match from day one",
      "Relocation package to Michigan tech campus"
    ]
  },
  {
    id: "job-10",
    title: "Senior Product Marketing Manager",
    companyId: "comp-pulsedesign",
    companyName: "Pulse Design Studio",
    companyLogoColor: "#EC4899",
    companyLetter: "PD",
    location: "Los Angeles, CA / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$130,000 - $165,000",
    minSalary: 130000,
    maxSalary: 165000,
    experience: "Senior",
    postedDate: "6 days ago",
    featured: false,
    category: "Marketing",
    industry: "Marketing",
    skills: ["Product Marketing", "GTM Strategy", "Content Strategy", "SaaS", "Analytics"],
    applicantsCount: 22,
    description: "Own go-to-market strategy, product positioning, and launch campaigns for our premium design systems and creative digital products.",
    responsibilities: [
      "Define value propositions, messaging frameworks, and customer personas for enterprise design teams.",
      "Orchestrate high-impact multi-channel product launches across digital, social, and developer communities.",
      "Create compelling case studies, product demonstration videos, and sales enablement collateral.",
      "Track conversion metrics and funnel analytics to optimize onboarding conversion."
    ],
    requirements: [
      "4+ years of product marketing experience in SaaS, B2B software, or creative technology.",
      "Outstanding written storytelling skills and visual taste.",
      "Experience conducting competitive intelligence and customer interviews.",
      "Familiarity with modern design tools (Figma) and web marketing platforms."
    ],
    benefits: [
      "4-day work week (32 hours, 100% pay)",
      "Remote work stipend and creative software budget",
      "Full health, dental, and optical insurance",
      "Company retreats in Mexico and Southern California"
    ]
  },
  {
    id: "job-11",
    title: "Principal Backend Architect (Go / Rust)",
    companyId: "comp-nextgen",
    companyName: "NextGen Dynamics",
    companyLogoColor: "#3B82F6",
    companyLetter: "ND",
    location: "Seattle, WA",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$195,000 - $260,000",
    minSalary: 195000,
    maxSalary: 260000,
    experience: "Lead",
    postedDate: "1 day ago",
    featured: true,
    category: "Engineering",
    industry: "Technology",
    skills: ["Go", "Rust", "Distributed Systems", "gRPC", "PostgreSQL", "Kafka"],
    applicantsCount: 47,
    description: "Lead the technical architecture of our core distributed microservices handling over 2 billion daily events. Drive technology choices and mentor across 12 product teams.",
    responsibilities: [
      "Architect high-throughput, low-latency microservices using Go and Rust.",
      "Design database schemas, distributed partitioning strategies, and Kafka streaming topologies.",
      "Establish engineering wide architectural standards, API guidelines, and performance budgets.",
      "Partner with Chief Architect on 3-year enterprise roadmap."
    ],
    requirements: [
      "8+ years of backend engineering experience with substantial experience in Go or Rust.",
      "Proven track record scaling multi-tenant distributed enterprise platforms.",
      "Mastery of database internals (PostgreSQL, CockroachDB) and event-driven architectures.",
      "Exceptional technical communication and mentorship capabilities."
    ],
    benefits: [
      "Competitive base salary + significant annual stock grants (RSUs)",
      "Comprehensive healthcare with employer HSA contribution",
      "Onsite fitness center, dining, and transit pass in Seattle",
      "16 weeks paid parental leave for all parents"
    ]
  },
  {
    id: "job-12",
    title: "VP of Enterprise Sales",
    companyId: "comp-nextgen",
    companyName: "NextGen Dynamics",
    companyLogoColor: "#3B82F6",
    companyLetter: "ND",
    location: "New York, NY / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$240,000 - $380,000 OTE",
    minSalary: 240000,
    maxSalary: 380000,
    experience: "Executive",
    postedDate: "4 days ago",
    featured: true,
    category: "Sales",
    industry: "Technology",
    skills: ["Enterprise Sales", "SaaS", "B2B", "Team Leadership", "Revenue Growth"],
    applicantsCount: 18,
    description: "Lead our enterprise sales team closing $500k+ ARR contracts with Global 2000 organizations. Drive revenue expansion and build our global sales leadership bench.",
    responsibilities: [
      "Lead, recruit, and coach a world-class team of 15 Enterprise Account Executives.",
      "Build deep C-suite relationships with Fortune 500 CIOs, CTOs, and Chief Digital Officers.",
      "Establish scalable sales methodologies (MEDDPICC) and accurate forecast management in Salesforce.",
      "Work closely with product and marketing leadership on pricing and expansion strategy."
    ],
    requirements: [
      "8+ years in enterprise B2B SaaS sales with 4+ years in leadership.",
      "Consistent track record of exceeding $20M+ team annual quotas.",
      "Extensive network of enterprise enterprise executive relationships.",
      "Inspirational leadership style and high emotional intelligence."
    ],
    benefits: [
      "Uncapped commission structure with aggressive accelerators",
      "Executive equity participation plan",
      "Top-tier executive health benefits",
      "Flexible executive travel budget"
    ]
  },
  {
    id: "job-13",
    title: "Full Stack Engineer (Node.js & React)",
    companyId: "comp-omnicommerce",
    companyName: "OmniCommerce Cloud",
    companyLogoColor: "#EA580C",
    companyLetter: "OC",
    location: "Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$125,000 - $160,000",
    minSalary: 125000,
    maxSalary: 160000,
    experience: "Mid",
    postedDate: "2 days ago",
    featured: false,
    category: "Engineering",
    industry: "E-commerce",
    skills: ["Node.js", "React", "TypeScript", "GraphQL", "Redis", "MongoDB"],
    applicantsCount: 39,
    description: "Build ultra-fast headless e-commerce storefronts and high-capacity inventory APIs handling millions of holiday shopping sessions.",
    responsibilities: [
      "Develop end-to-end features spanning React storefronts and Node.js microservices.",
      "Implement real-time inventory reservation engines using Redis and message queues.",
      "Collaborate with merchant partners to build custom checkout integrations.",
      "Maintain automated test suites with high code coverage."
    ],
    requirements: [
      "3+ years of experience with Node.js, Express/Fastify, and React.",
      "Solid knowledge of asynchronous JavaScript, REST APIs, and GraphQL schemas.",
      "Experience optimizing high-traffic web applications and database queries.",
      "Self-directed and comfortable working in remote asynchronous teams."
    ],
    benefits: [
      "100% remote anywhere in the Americas",
      "Annual wellness stipend and home ergonomics budget",
      "Comprehensive medical, vision, and dental insurance",
      "Annual company retreats in tropical locations"
    ]
  },
  {
    id: "job-14",
    title: "Senior Product Manager - AI Workflows",
    companyId: "comp-technova",
    companyName: "TechNova Systems",
    companyLogoColor: "#2563EB",
    companyLetter: "TN",
    location: "San Francisco, CA / Remote",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$165,000 - $215,000",
    minSalary: 165000,
    maxSalary: 215000,
    experience: "Senior",
    postedDate: "3 days ago",
    featured: true,
    category: "Product",
    industry: "Technology",
    skills: ["Product Management", "AI/ML", "Agile", "Roadmapping", "User Analytics"],
    applicantsCount: 33,
    description: "Define the vision and execute product roadmaps for TechNova's intelligent automation features. Turn machine learning capabilities into intuitive productivity superpowers.",
    responsibilities: [
      "Own product discovery, customer validation, and execution for our AI assistant suite.",
      "Collaborate closely with ML engineering, UX designers, and sales teams.",
      "Define quantitative product success metrics (activation, retention, NPS).",
      "Author clear PRDs, user stories, and present quarterly product roadmaps."
    ],
    requirements: [
      "4+ years of software product management experience, preferably in SaaS or AI.",
      "Strong technical literacy and ability to communicate effectively with ML researchers.",
      "Data-fluent with experience in Mixpanel, Amplitude, or SQL analytics.",
      "Demonstrated ability to drive alignment across cross-functional stakeholders."
    ],
    benefits: [
      "Competitive salary and equity grant",
      "Flexible hybrid working schedule",
      "Generous parental leave and family health benefits",
      "Annual education and executive coaching stipend"
    ]
  },
  {
    id: "job-15",
    title: "Curriculum Engineer & STEM Educator",
    companyId: "comp-edusphere",
    companyName: "EduSphere Learning",
    companyLogoColor: "#84CC16",
    companyLetter: "ES",
    location: "Toronto, Canada / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$95,000 - $130,000",
    minSalary: 95000,
    maxSalary: 130000,
    experience: "Mid",
    postedDate: "5 days ago",
    featured: false,
    category: "Education",
    industry: "Education",
    skills: ["Python", "JavaScript", "Curriculum Design", "Education", "Pedagogy"],
    applicantsCount: 15,
    description: "Design interactive coding simulations and gamified programming tutorials that teach high-school and university students fundamentals of computer science.",
    responsibilities: [
      "Author engaging, project-based coding curricula in Python and JavaScript.",
      "Design automated code grading tests and interactive debugging exercises.",
      "Collaborate with animators and software engineers to create visual learning widgets.",
      "Analyze student learning telemetry to eliminate friction in concept mastery."
    ],
    requirements: [
      "Experience teaching computer science, bootcamp instruction, or curriculum design.",
      "Proficient coding skills in Python and JavaScript.",
      "Passionate empathy for beginner learners and clear pedagogical communication.",
      "Familiarity with markdown, git, and modern web learning platforms."
    ],
    benefits: [
      "Work from anywhere with flexible hours",
      "Full health and dental coverage",
      "Unlimited budget for books, software, and learning courses",
      "Paid volunteer days to teach in underserved communities"
    ]
  },
  {
    id: "job-16",
    title: "Senior Growth Marketing Specialist",
    companyId: "comp-marketscale",
    companyName: "MarketScale Digital",
    companyLogoColor: "#6366F1",
    companyLetter: "MS",
    location: "San Diego, CA / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$110,000 - $145,000",
    minSalary: 110000,
    maxSalary: 145000,
    experience: "Mid",
    postedDate: "1 week ago",
    featured: false,
    category: "Marketing",
    industry: "Marketing",
    skills: ["Growth Marketing", "Paid Media", "SEO", "A/B Testing", "HubSpot", "Google Ads"],
    applicantsCount: 27,
    description: "Drive digital acquisition funnels across paid search, social, programmatic, and SEO. Optimize payback periods and scale qualified inbound customer pipeline.",
    responsibilities: [
      "Manage and optimize six-figure monthly digital ad spend across Google, LinkedIn, and Meta.",
      "Design and execute iterative A/B testing on landing pages to lift conversion rates.",
      "Develop attribution models and provide weekly executive reporting on CAC and LTV.",
      "Collaborate with copywriters and designers to produce high-converting ad creative."
    ],
    requirements: [
      "3+ years managing performance marketing campaigns in B2B SaaS or e-commerce.",
      "Deep expertise in Google Analytics 4, Tag Manager, and ad platform bidding algorithms.",
      "Analytical mindset with strong spreadsheet modeling and data visualization skills.",
      "Hands-on experience with marketing automation tools (HubSpot, Marketo)."
    ],
    benefits: [
      "Performance-based quarterly bonuses",
      "Full health, dental, and vision insurance",
      "Flexible remote schedule and coworking allowance",
      "Annual team retreat in Southern California"
    ]
  },
  {
    id: "job-17",
    title: "iOS Mobile Engineer (SwiftUI)",
    companyId: "comp-veritashealth",
    companyName: "Veritas Digital Health",
    companyLogoColor: "#14B8A6",
    companyLetter: "VH",
    location: "Philadelphia, PA / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$135,000 - $175,000",
    minSalary: 135000,
    maxSalary: 175000,
    experience: "Senior",
    postedDate: "4 days ago",
    featured: false,
    category: "Engineering",
    industry: "Healthcare",
    skills: ["Swift", "SwiftUI", "Combine", "CoreData", "WebRTC", "iOS"],
    applicantsCount: 21,
    description: "Build accessible, life-critical telehealth apps connecting patients to healthcare providers. Implement encrypted video conferencing and HealthKit sensor integration.",
    responsibilities: [
      "Develop and maintain our native iOS app using modern SwiftUI and Combine architectures.",
      "Implement HIPAA-compliant peer-to-peer WebRTC video and audio consultations.",
      "Integrate Apple HealthKit telemetry for heart rate and blood glucose monitoring.",
      "Ensure adherence to accessibility standards (VoiceOver, dynamic text sizing)."
    ],
    requirements: [
      "4+ years of professional iOS application development with Swift.",
      "Deep experience with SwiftUI, Combine, and reactive state management.",
      "Experience with real-time communications (WebSockets, WebRTC) or multimedia streaming.",
      "Strong commitment to security, encryption, and automated testing (XCTest)."
    ],
    benefits: [
      "Comprehensive healthcare with employer HSA match",
      "Annual Apple hardware refresh budget",
      "Unlimited PTO policy with 3 weeks minimum",
      "401(k) retirement plan with 4% match"
    ]
  },
  {
    id: "job-18",
    title: "Senior Data Engineer",
    companyId: "comp-globallogix",
    companyName: "GlobalLogix Supply",
    companyLogoColor: "#0D9488",
    companyLetter: "GL",
    location: "Atlanta, GA",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$145,000 - $185,000",
    minSalary: 145000,
    maxSalary: 185000,
    experience: "Senior",
    postedDate: "3 days ago",
    featured: false,
    category: "AI & Data",
    industry: "E-commerce",
    skills: ["Snowflake", "dbt", "Apache Spark", "Python", "SQL", "Airflow"],
    applicantsCount: 26,
    description: "Design robust, petabyte-scale streaming and batch data architectures powering predictive logistics algorithms and global supply chain visibility.",
    responsibilities: [
      "Build and maintain resilient ETL/ELT pipelines using dbt, Apache Airflow, and Snowflake.",
      "Architect data models and star schemas optimized for analytical query performance.",
      "Collaborate with BI analysts and data scientists to productionize ML feature stores.",
      "Ensure high data quality standards and automated data observability alerts."
    ],
    requirements: [
      "5+ years of data engineering experience with modern cloud data warehouses.",
      "Advanced SQL proficiency and strong Python programming skills.",
      "Hands-on experience with distributed data processing (Spark, Databricks).",
      "Familiarity with event streaming platforms (Kafka, Kinesis)."
    ],
    benefits: [
      "Competitive salary and annual bonus structure",
      "Comprehensive medical, dental, vision coverage",
      "Hybrid flexibility (2 days in Atlanta office)",
      "401(k) with company match"
    ]
  },
  {
    id: "job-19",
    title: "Junior Frontend Developer",
    companyId: "comp-technova",
    companyName: "TechNova Systems",
    companyLogoColor: "#2563EB",
    companyLetter: "TN",
    location: "San Francisco, CA / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$85,000 - $115,000",
    minSalary: 85000,
    maxSalary: 115000,
    experience: "Entry",
    postedDate: "Just now",
    featured: false,
    category: "Engineering",
    industry: "Technology",
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Git"],
    applicantsCount: 84,
    description: "An exceptional opportunity for an aspiring frontend developer to learn from world-class senior engineers while contributing to production React applications.",
    responsibilities: [
      "Build reusable UI components following our established design system guidelines.",
      "Fix bugs, optimize page loading speeds, and write unit tests.",
      "Participate actively in code reviews and engineering design discussions.",
      "Collaborate with UX designers to ensure pixel-perfect fidelity."
    ],
    requirements: [
      "Strong foundational understanding of modern JavaScript (ES6+), HTML5, and CSS3.",
      "Hands-on experience with React (hooks, component lifecycles) through projects or internships.",
      "Eagerness to learn, ask thoughtful questions, and receive constructive feedback.",
      "Familiarity with git version control and GitHub workflows."
    ],
    benefits: [
      "Dedicated senior engineer mentorship program",
      "Annual $2,500 learning budget for courses and books",
      "Full health, dental, and vision insurance",
      "Remote work setup allowance"
    ]
  },
  {
    id: "job-20",
    title: "Customer Success Manager - Enterprise",
    companyId: "comp-stripeflow",
    companyName: "StripeFlow FinTech",
    companyLogoColor: "#06B6D4",
    companyLetter: "SF",
    location: "London, UK / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "£65,000 - £85,000",
    minSalary: 85000,
    maxSalary: 110000,
    experience: "Mid",
    postedDate: "4 days ago",
    featured: false,
    category: "Customer Success",
    industry: "Finance",
    skills: ["Customer Success", "SaaS", "Account Management", "Onboarding", "FinTech"],
    applicantsCount: 31,
    description: "Guide strategic enterprise clients through onboarding, implementation, and long-term expansion of StripeFlow's global payment infrastructure.",
    responsibilities: [
      "Manage a portfolio of 25 enterprise accounts, driving adoption, retention, and net expansion.",
      "Conduct quarterly executive business reviews (EBRs) and showcase ROI metrics.",
      "Act as the voice of the customer to influence engineering and product roadmaps.",
      "Identify churn risks early and execute mitigation playbooks."
    ],
    requirements: [
      "3+ years in B2B SaaS Customer Success or Account Management.",
      "Excellent executive communication, presentation, and relationship-building skills.",
      "Familiarity with payment gateways, APIs, or financial software is a plus.",
      "Proactive, empathetic problem solver with high attention to detail."
    ],
    benefits: [
      "Competitive base salary + customer retention incentive bonus",
      "30 days annual leave + bank holidays",
      "Private medical insurance and mental health support",
      "Stock options in high-growth FinTech leader"
    ]
  },
  {
    id: "job-21",
    title: "Senior React Native Mobile Developer",
    companyId: "comp-pulsedesign",
    companyName: "Pulse Design Studio",
    companyLogoColor: "#EC4899",
    companyLetter: "PD",
    location: "Remote",
    workMode: "Remote",
    jobType: "Contract",
    salaryRange: "$80 - $115 / hour",
    minSalary: 140000,
    maxSalary: 180000,
    experience: "Senior",
    postedDate: "1 week ago",
    featured: false,
    category: "Engineering",
    industry: "Marketing",
    skills: ["React Native", "TypeScript", "Redux", "iOS", "Android", "Animations"],
    applicantsCount: 23,
    description: "6-month contract with possibility of full-time conversion. Build a visually stunning, smooth 60fps mobile application with custom micro-animations for an international client.",
    responsibilities: [
      "Develop cross-platform iOS and Android features using React Native and TypeScript.",
      "Implement fluid gesture animations using Reanimated 3 and Skia.",
      "Bridge native modules when necessary for optimal camera and Bluetooth performance.",
      "Optimize bundle size and memory consumption."
    ],
    requirements: [
      "4+ years building production mobile apps in React Native.",
      "Mastery of TypeScript, state management, and gesture-driven animations.",
      "Published apps on both Apple App Store and Google Play Store.",
      "Strong portfolio demonstrating high visual craft and smooth performance."
    ],
    benefits: [
      "Competitive hourly rate with guaranteed weekly hours",
      "100% remote flexibility across any timezone",
      "Access to design studio assets and elite creative team"
    ]
  },
  {
    id: "job-22",
    title: "Human Resources & Talent Acquisition Lead",
    companyId: "comp-quantumai",
    companyName: "QuantumAI Labs",
    companyLogoColor: "#7C3AED",
    companyLetter: "QA",
    location: "New York, NY",
    workMode: "Hybrid",
    jobType: "Full-time",
    salaryRange: "$130,000 - $170,000",
    minSalary: 130000,
    maxSalary: 170000,
    experience: "Senior",
    postedDate: "2 days ago",
    featured: false,
    category: "Customer Success",
    industry: "Technology",
    skills: ["Talent Acquisition", "Technical Recruiting", "HR Operations", "Employer Branding"],
    applicantsCount: 28,
    description: "Scale our world-class research and engineering team. You will lead technical recruiting for elite AI researchers, manage candidate pipelines, and elevate our employer brand.",
    responsibilities: [
      "Lead full-cycle recruiting for high-complexity AI, engineering, and product roles.",
      "Partner with leadership to forecast headcount and build proactive talent pipelines.",
      "Design an extraordinary candidate experience with transparent, respectful feedback loops.",
      "Organize university recruitment drives and technical meetups."
    ],
    requirements: [
      "4+ years of technical recruiting experience in high-growth tech or research labs.",
      "Proven ability to source and close passive senior and staff-level engineering candidates.",
      "Deep understanding of modern compensation structures and equity models.",
      "Warm, empathetic communicator with outstanding organizational skills."
    ],
    benefits: [
      "Equity grant in frontier AI company",
      "Full health, dental, and vision insurance",
      "Free daily gourmet lunch and snacks in Manhattan",
      "Flexible hybrid working schedule"
    ]
  },
  {
    id: "job-23",
    title: "Cybersecurity Compliance Analyst (SOC2 / ISO)",
    companyId: "comp-cybershield",
    companyName: "CyberShield Security",
    companyLogoColor: "#DC2626",
    companyLetter: "CS",
    location: "Washington, DC / Remote",
    workMode: "Remote",
    jobType: "Full-time",
    salaryRange: "$115,000 - $150,000",
    minSalary: 115000,
    maxSalary: 150000,
    experience: "Mid",
    postedDate: "5 days ago",
    featured: false,
    category: "Engineering",
    industry: "Technology",
    skills: ["SOC 2", "ISO 27001", "Compliance", "Risk Assessment", "Audit"],
    applicantsCount: 17,
    description: "Maintain continuous compliance for our cloud security products against SOC 2 Type II, ISO 27001, and FedRAMP frameworks.",
    responsibilities: [
      "Coordinate external audit engagements and evidence collection.",
      "Conduct internal vendor security reviews and risk assessments.",
      "Maintain automated compliance monitoring using modern GRC platforms (Vanta, Drata).",
      "Educate internal teams on security policies and privacy best practices."
    ],
    requirements: [
      "3+ years in information security compliance or IT audit.",
      "Working knowledge of SOC 2, ISO 27001, HIPAA, and GDPR frameworks.",
      "Certifications such as CISA, CRISC, or CISSP are advantageous.",
      "Clear technical writing ability."
    ],
    benefits: [
      "100% remote flexibility with home office grant",
      "Comprehensive medical and dental coverage",
      "401(k) matching up to 5%",
      "Generous professional development stipend"
    ]
  },
  {
    id: "job-24",
    title: "Software Engineering Intern (Summer 2026)",
    companyId: "comp-apexcloud",
    companyName: "ApexCloud Networks",
    companyLogoColor: "#0284C7",
    companyLetter: "AC",
    location: "Austin, TX / Remote",
    workMode: "Hybrid",
    jobType: "Internship",
    salaryRange: "$45 - $60 / hour",
    minSalary: 85000,
    maxSalary: 110000,
    experience: "Entry",
    postedDate: "Just now",
    featured: true,
    category: "Engineering",
    industry: "Technology",
    skills: ["Go", "Python", "Linux", "Data Structures", "Git"],
    applicantsCount: 142,
    description: "Join our 12-week intensive paid summer internship program. Work alongside senior engineers building high-speed networking microservices, with full-time return offer opportunities.",
    responsibilities: [
      "Build and deploy a scoped production microservice within our edge telemetry infrastructure.",
      "Write clean, well-tested code in Go or Python.",
      "Present project results to engineering leadership at the conclusion of the internship.",
      "Participate in technical workshops and executive mentorship sessions."
    ],
    requirements: [
      "Currently enrolled in a BS, MS, or PhD in Computer Science or related STEM degree.",
      "Strong grasp of core data structures, algorithms, and networking concepts.",
      "Personal coding projects or open source contributions.",
      "Enthusiasm for low-level systems and distributed computing."
    ],
    benefits: [
      "Highly competitive hourly compensation",
      "Housing stipend for out-of-state students relocating to Austin",
      "1-on-1 mentorship with a senior staff engineer",
      "Social events, company hackathons, and return offer track"
    ]
  }
];

const INITIAL_CANDIDATE = {
  id: "user-cand-01",
  name: "Alex Morgan",
  headline: "Senior Full Stack & Frontend Engineer | React, TypeScript, Next.js, Node.js",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  email: "alex.morgan@careersphere.io",
  phone: "+1 (555) 382-9104",
  location: "San Francisco, CA (Open to Remote)",
  about: "Full Stack Engineer with 6+ years of experience specializing in building production-grade web applications with React, TypeScript, and modern distributed backends. Passionate about design systems, web performance, and developer experience.",
  completionPercentage: 92,
  completionSuggestions: [
    "Add a link to your live design portfolio or GitHub showcases",
    "Add your AWS or Kubernetes Cloud Certification",
    "Request a peer recommendation from a previous team lead"
  ],
  skills: [
    { name: "React", level: "Expert" },
    { name: "TypeScript", level: "Expert" },
    { name: "Next.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "GraphQL", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" }
  ],
  experience: [
    {
      role: "Senior Frontend Developer",
      company: "Vanguard Tech Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: "Led the frontend migration of an analytics dashboard to Next.js 14, reducing initial load time by 48% and improving core web vitals across 200,000 active users."
    },
    {
      role: "Frontend Engineer",
      company: "CloudScale Systems",
      period: "2020 - 2023",
      location: "Remote",
      description: "Developed and maintained 40+ reusable design system components using React, TypeScript, and Storybook. Collaborated with UX researchers to ensure WCAG 2.1 AAA accessibility compliance."
    },
    {
      role: "Software Developer Intern",
      company: "Apex Media Group",
      period: "2019 - 2020",
      location: "San Jose, CA",
      description: "Built client-facing web portals and REST APIs using JavaScript, Node.js, and MongoDB."
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      period: "2015 - 2019",
      grade: "3.85 GPA, Magna Cum Laude"
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect - Associate (2024)",
    "Meta Certified Front-End Developer Professional (2023)"
  ],
  languages: ["English (Native)", "Spanish (Conversational)"],
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    portfolio: "https://alexmorgan.dev"
  }
};

const INITIAL_APPLICATIONS = [
  {
    id: "app-101",
    jobId: "job-01",
    jobTitle: "Senior Frontend Engineer",
    companyId: "comp-technova",
    companyName: "TechNova Systems",
    companyLogoColor: "#2563EB",
    companyLetter: "TN",
    location: "Remote (US/EU)",
    salary: "$140,000 - $185,000",
    status: "Interview",
    appliedDate: "Sep 01, 2026",
    timeline: [
      { step: "Applied", date: "Sep 01, 2026", status: "completed" },
      { step: "Under Review", date: "Sep 02, 2026", status: "completed" },
      { step: "Shortlisted", date: "Sep 03, 2026", status: "completed" },
      { step: "Interview", date: "Sep 05, 2026", status: "active" },
      { step: "Decision", date: "Pending", status: "pending" }
    ],
    interviewDetails: {
      type: "Technical Deep Dive & Architecture",
      date: "Sep 08, 2026 at 2:00 PM PST",
      interviewer: "Sarah Lin (VP Engineering)",
      link: "https://meet.careersphere.io/technova-tech-interview"
    },
    notes: "Review TechNova's public architecture blog on distributed consoles prior to call."
  },
  {
    id: "app-102",
    jobId: "job-03",
    jobTitle: "Lead Product Designer",
    companyId: "comp-stripeflow",
    companyName: "StripeFlow FinTech",
    companyLogoColor: "#06B6D4",
    companyLetter: "SF",
    location: "London, UK / Remote",
    salary: "£110,000 - £145,000",
    status: "Shortlisted",
    appliedDate: "Aug 29, 2026",
    timeline: [
      { step: "Applied", date: "Aug 29, 2026", status: "completed" },
      { step: "Under Review", date: "Aug 30, 2026", status: "completed" },
      { step: "Shortlisted", date: "Sep 02, 2026", status: "active" },
      { step: "Interview", date: "Pending", status: "pending" },
      { step: "Decision", date: "Pending", status: "pending" }
    ],
    notes: "Recruiter indicated team was impressed by design system case study."
  },
  {
    id: "app-103",
    jobId: "job-02",
    jobTitle: "Staff Machine Learning Engineer",
    companyId: "comp-quantumai",
    companyName: "QuantumAI Labs",
    companyLogoColor: "#7C3AED",
    companyLetter: "QA",
    location: "New York, NY",
    salary: "$210,000 - $280,000",
    status: "Under Review",
    appliedDate: "Sep 03, 2026",
    timeline: [
      { step: "Applied", date: "Sep 03, 2026", status: "completed" },
      { step: "Under Review", date: "Sep 04, 2026", status: "active" },
      { step: "Shortlisted", date: "Pending", status: "pending" },
      { step: "Interview", date: "Pending", status: "pending" },
      { step: "Decision", date: "Pending", status: "pending" }
    ],
    notes: "Application submitted with tailored cover letter on distributed inference."
  },
  {
    id: "app-104",
    jobId: "job-04",
    jobTitle: "DevOps & Cloud Architect",
    companyId: "comp-apexcloud",
    companyName: "ApexCloud Networks",
    companyLogoColor: "#0284C7",
    companyLetter: "AC",
    location: "Austin, TX",
    salary: "$165,000 - $210,000",
    status: "Applied",
    appliedDate: "Sep 05, 2026",
    timeline: [
      { step: "Applied", date: "Sep 05, 2026", status: "active" },
      { step: "Under Review", date: "Pending", status: "pending" },
      { step: "Shortlisted", date: "Pending", status: "pending" },
      { step: "Interview", date: "Pending", status: "pending" },
      { step: "Decision", date: "Pending", status: "pending" }
    ],
    notes: "Awaiting recruiter review."
  }
];

const INITIAL_SAVED_JOBS = ["job-01", "job-02", "job-03", "job-11", "job-14"];

const INITIAL_RESUMES = [
  {
    id: "res-01",
    name: "Alex_Morgan_Senior_Engineer_2026.pdf",
    size: "184 KB",
    uploadedDate: "Aug 20, 2026",
    isPrimary: true,
    fileType: "PDF"
  },
  {
    id: "res-02",
    name: "Alex_Morgan_FullStack_React_Node.pdf",
    size: "192 KB",
    uploadedDate: "Jul 15, 2026",
    isPrimary: false,
    fileType: "PDF"
  }
];

const INITIAL_CONVERSATIONS = [
  {
    id: "conv-01",
    participantId: "recruiter-technova",
    participantName: "Sarah Lin",
    participantTitle: "Engineering VP at TechNova Systems",
    participantAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    companyName: "TechNova Systems",
    online: true,
    unreadCount: 1,
    messages: [
      { id: "m-01", sender: "other", text: "Hi Alex! Thanks for submitting your application for the Senior Frontend Engineer role.", timestamp: "Yesterday, 10:14 AM" },
      { id: "m-02", sender: "other", text: "Our team reviewed your GitHub repository and was very impressed by your work on accessible component libraries.", timestamp: "Yesterday, 10:15 AM" },
      { id: "m-03", sender: "user", text: "Hello Sarah, thank you for reaching out! I've been following TechNova's engineering updates on distributed consoles and would love to contribute.", timestamp: "Yesterday, 11:20 AM" },
      { id: "m-04", sender: "other", text: "Wonderful. Are you open for a 45-minute technical architecture discussion this coming Tuesday at 2:00 PM PST?", timestamp: "10:30 AM" }
    ]
  },
  {
    id: "conv-02",
    participantId: "recruiter-stripeflow",
    participantName: "Marcus Vance",
    participantTitle: "Talent Partner at StripeFlow FinTech",
    participantAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    companyName: "StripeFlow FinTech",
    online: false,
    unreadCount: 0,
    messages: [
      { id: "m-11", sender: "other", text: "Hey Alex! Just confirming that we have shortlisted your portfolio for our product team.", timestamp: "Sep 02, 3:45 PM" },
      { id: "m-12", sender: "user", text: "That is fantastic news, Marcus. Looking forward to the next steps!", timestamp: "Sep 02, 4:10 PM" }
    ]
  },
  {
    id: "conv-03",
    participantId: "recruiter-quantumai",
    participantName: "Elena Rostova",
    participantTitle: "Head of Talent at QuantumAI Labs",
    participantAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    companyName: "QuantumAI Labs",
    online: true,
    unreadCount: 0,
    messages: [
      { id: "m-21", sender: "other", text: "Hi Alex, our ML platform group is reviewing your background and will be in touch with an update by tomorrow afternoon.", timestamp: "Sep 04, 11:00 AM" }
    ]
  }
];

const INITIAL_NOTIFICATIONS = [
  {
    id: "notif-01",
    type: "interview",
    title: "Interview Invitation Received",
    body: "TechNova Systems scheduled a Technical Architecture interview for Sep 08 at 2:00 PM PST.",
    time: "2 hours ago",
    unread: true
  },
  {
    id: "notif-02",
    type: "shortlist",
    title: "Application Shortlisted",
    body: "Congratulations! Your application for Lead Product Designer at StripeFlow FinTech was shortlisted.",
    time: "1 day ago",
    unread: true
  },
  {
    id: "notif-03",
    type: "recommendation",
    title: "New 98% Match Opportunity",
    body: "Principal Backend Architect at NextGen Dynamics matches your React, Go, and TypeScript skills.",
    time: "2 days ago",
    unread: false
  },
  {
    id: "notif-04",
    type: "message",
    title: "New Recruiter Message",
    body: "Sarah Lin from TechNova sent you a message regarding scheduling next steps.",
    time: "3 days ago",
    unread: false
  }
];

const INITIAL_RESOURCES = [
  {
    id: "res-art-01",
    category: "Resume Tips",
    title: "The Anatomy of a 2026 Tech Resume That Beats ATS and Lands Tier-1 Interviews",
    readTime: "6 min read",
    author: "Elena Rostova, Tech Recruiting Director",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=800&q=80",
    summary: "Discover the exact quantified metric formulas, tech keyword structures, and visual formatting rules that top hiring teams look for in modern engineering resumes.",
    content: `Recruiters at top-tier SaaS startups and technology giants review hundreds of resumes every week. To stand out within the initial 10-second glance, your resume must communicate concrete technical impact rather than passive lists of duties.

### 1. The Power of Quantified Achievements
Avoid generic phrases like "Responsible for frontend architecture". Instead, write:
> "Re-architected client dashboard using React 18 and Next.js, reducing LCP by 48% and driving a 22% increase in weekly user engagement across 150k monthly active users."

### 2. High-Signal Skill Tagging
Group your skills logically by layer: Languages, Frameworks, Cloud & DevOps, Testing & Tooling. Keep them truthful and avoid rating bars (e.g. 5/5 stars on Python), which are arbitrary.

### 3. Clear Chronological Formatting
Keep your resume to one page (under 8 years experience) or two pages max (10+ years). Use high-contrast typography, generous margins, and export to clean, text-selectable PDF format.`
  },
  {
    id: "res-art-02",
    category: "Interview Preparation",
    title: "Mastering System Design: From Distributed Caching to Zero-Downtime Deployments",
    readTime: "8 min read",
    author: "David Chen, Principal Architect",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    summary: "A practical framework to tackle high-level architectural questions, estimate capacity, select databases, and discuss trade-offs with confidence.",
    content: `System design interviews evaluate how you navigate ambiguity, think through failure modes, and balance architectural trade-offs under scale.

### 1. The 4-Step Interview Framework
1. **Clarify Requirements & Constraints:** Always ask about read/write ratios, latency budgets, availability requirements (99.99%), and data consistency models.
2. **Back-of-the-Envelope Calculations:** Estimate storage requirements per day, network throughput (QPS), and memory cache requirements.
3. **High-Level Diagram:** Lay down the foundational blocks: Client, CDN, API Gateway, Load Balancer, Microservices, Cache (Redis), and Persistent Storage.
4. **Deep Dive into Bottlenecks:** Address single points of failure, partition tolerance, and rate limiting.`
  },
  {
    id: "res-art-03",
    category: "Salary Guide",
    title: "2026 Tech Compensation Report: Base, Equity, and Negotiation Tactics",
    readTime: "7 min read",
    author: "Rachel Sterling, FinTech Compensation Advisor",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    summary: "Real compensation benchmarks across US, European, and remote hubs, plus battle-tested strategies to negotiate equity refreshers and signing bonuses.",
    content: `Negotiating compensation is one of the highest leverage conversations in your professional career. Here is what modern engineering and product candidates need to know.

### Understanding the Total Compensation Formula
Total Comp (TC) = Base Salary + Annual Bonus + Equity (RSUs / Options) + Benefits.
When evaluating early-stage vs late-stage offers, carefully calculate strike price vs preferred liquidation preferences and tax implications (ISOs vs NSOs).

### Negotiation Rules
- Never give your current salary or name a hard number first; provide a well-researched target band.
- Anchor high with data from verified salary platforms.
- Frame requests around mutual value and long-term retention.`
  },
  {
    id: "res-art-04",
    category: "Remote Work",
    title: "The Asynchronous Advantage: Thriving in High-Output Global Teams",
    readTime: "5 min read",
    author: "Liam O'Connor, Head of Remote Operations",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    summary: "How to master written communication, manage time zones, and build high visibility while working remotely for international SaaS leaders.",
    content: `The most successful remote engineers do not spend 6 hours a day in video calls. They leverage asynchronous documentation, clear pull request descriptions, and recorded Loom walkthroughs to move projects forward without meeting fatigue.`
  }
];

const INITIAL_EMPLOYER_DATA = {
  activeJobs: [
    {
      id: "emp-job-01",
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "San Francisco, CA / Remote",
      workMode: "Remote",
      type: "Full-time",
      salary: "$145K - $185K",
      applicantsCount: 42,
      shortlistedCount: 8,
      status: "Active",
      postedDate: "Sep 01, 2026"
    },
    {
      id: "emp-job-02",
      title: "Principal Cloud DevOps Specialist",
      department: "Infrastructure",
      location: "Austin, TX",
      workMode: "Hybrid",
      type: "Full-time",
      salary: "$160K - $200K",
      applicantsCount: 28,
      shortlistedCount: 5,
      status: "Active",
      postedDate: "Aug 26, 2026"
    },
    {
      id: "emp-job-03",
      title: "Senior Product Designer",
      department: "Design",
      location: "New York, NY / Remote",
      workMode: "Remote",
      type: "Full-time",
      salary: "$130K - $165K",
      applicantsCount: 35,
      shortlistedCount: 6,
      status: "Active",
      postedDate: "Aug 20, 2026"
    }
  ],
  candidates: [
    {
      id: "cand-001",
      name: "Jordan Rivera",
      role: "Senior Full Stack Developer",
      jobId: "emp-job-01",
      appliedFor: "Senior Full Stack Engineer",
      appliedDate: "Sep 02, 2026",
      experience: "6 Years",
      location: "Seattle, WA (Remote)",
      matchScore: 96,
      matchRationale: "Matches React, TypeScript, Next.js, and Node.js requirements perfectly.",
      skills: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
      status: "Shortlisted",
      email: "jordan.rivera@example.com",
      phone: "+1 (555) 749-2018",
      resumeFileName: "Jordan_Rivera_Senior_Resume.pdf"
    },
    {
      id: "cand-002",
      name: "Sophia Martinez",
      role: "Frontend Architect",
      jobId: "emp-job-01",
      appliedFor: "Senior Full Stack Engineer",
      appliedDate: "Sep 03, 2026",
      experience: "8 Years",
      location: "San Francisco, CA",
      matchScore: 94,
      matchRationale: "Extensive design system and high-scale web application experience.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Architecture", "Vitest"],
      status: "Interview",
      email: "sophia.m@example.com",
      phone: "+1 (555) 902-3841",
      resumeFileName: "Sophia_Martinez_CV.pdf"
    },
    {
      id: "cand-003",
      name: "Devon Clark",
      role: "Full Stack Engineer",
      jobId: "emp-job-01",
      appliedFor: "Senior Full Stack Engineer",
      appliedDate: "Sep 04, 2026",
      experience: "4 Years",
      location: "Denver, CO",
      matchScore: 82,
      matchRationale: "Solid React and Node foundation; less enterprise architecture background.",
      skills: ["JavaScript", "React", "Express", "PostgreSQL"],
      status: "New",
      email: "devon.clark@example.com",
      phone: "+1 (555) 314-5926",
      resumeFileName: "Devon_Clark_Resume.pdf"
    },
    {
      id: "cand-004",
      name: "Amina Al-Mansoor",
      role: "Lead DevOps Engineer",
      jobId: "emp-job-02",
      appliedFor: "Principal Cloud DevOps Specialist",
      appliedDate: "Sep 01, 2026",
      experience: "7 Years",
      location: "Austin, TX",
      matchScore: 98,
      matchRationale: "Top-tier Kubernetes, Terraform, and multi-region AWS cloud expertise.",
      skills: ["Kubernetes", "Terraform", "AWS", "Go", "Prometheus"],
      status: "Interview",
      email: "amina.mansoor@example.com",
      phone: "+1 (555) 883-1029",
      resumeFileName: "Amina_AlMansoor_DevOps.pdf"
    },
    {
      id: "cand-005",
      name: "Lucas Bennett",
      role: "Senior UX/UI Designer",
      jobId: "emp-job-03",
      appliedFor: "Senior Product Designer",
      appliedDate: "Aug 29, 2026",
      experience: "5 Years",
      location: "New York, NY",
      matchScore: 91,
      matchRationale: "Strong B2B SaaS portfolio with advanced Figma interactive prototyping.",
      skills: ["Figma", "Design Systems", "User Testing", "Prototyping"],
      status: "Shortlisted",
      email: "lucas.bennett@example.com",
      phone: "+1 (555) 442-8819",
      resumeFileName: "Lucas_Bennett_Product_Design.pdf"
    }
  ],
  analytics: {
    "7D": {
      applicationsCount: 84,
      viewsCount: 1420,
      shortlistedCount: 19,
      interviewsCount: 7,
      conversionRate: "5.9%",
      applicationsTimeline: [12, 16, 9, 14, 18, 22, 15],
      timelineLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      sources: [
        { name: "Direct CareerSphere Search", percentage: 52 },
        { name: "Recommended Match Engine", percentage: 28 },
        { name: "External Referrals & Social", percentage: 14 },
        { name: "Partner Talent Networks", percentage: 6 }
      ]
    },
    "30D": {
      applicationsCount: 348,
      viewsCount: 6850,
      shortlistedCount: 72,
      interviewsCount: 24,
      conversionRate: "5.1%",
      applicationsTimeline: [65, 82, 94, 107],
      timelineLabels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      sources: [
        { name: "Direct CareerSphere Search", percentage: 55 },
        { name: "Recommended Match Engine", percentage: 25 },
        { name: "External Referrals & Social", percentage: 12 },
        { name: "Partner Talent Networks", percentage: 8 }
      ]
    },
    "3M": {
      applicationsCount: 1120,
      viewsCount: 22400,
      shortlistedCount: 210,
      interviewsCount: 68,
      conversionRate: "5.0%",
      applicationsTimeline: [320, 390, 410],
      timelineLabels: ["Month 1", "Month 2", "Month 3"],
      sources: [
        { name: "Direct CareerSphere Search", percentage: 58 },
        { name: "Recommended Match Engine", percentage: 24 },
        { name: "External Referrals & Social", percentage: 11 },
        { name: "Partner Talent Networks", percentage: 7 }
      ]
    },
    "1Y": {
      applicationsCount: 4890,
      viewsCount: 94200,
      shortlistedCount: 880,
      interviewsCount: 275,
      conversionRate: "5.2%",
      applicationsTimeline: [850, 1100, 1340, 1600],
      timelineLabels: ["Q1", "Q2", "Q3", "Q4"],
      sources: [
        { name: "Direct CareerSphere Search", percentage: 60 },
        { name: "Recommended Match Engine", percentage: 22 },
        { name: "External Referrals & Social", percentage: 12 },
        { name: "Partner Talent Networks", percentage: 6 }
      ]
    }
  }
};
