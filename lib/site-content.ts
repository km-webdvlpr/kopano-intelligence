export const brand = {
  name: "Kopano Intelligence",
  shortName: "Kopano",
  location: "Johannesburg, South Africa",
  email: "hello@kopanointelligence.co.za",
  siteUrl: "https://kopanointelligence.co.za",
  strapline: "Business-Facing Analytics for Operational Visibility",
} as const;

export const identity = {
  title: "A business-facing data analyst for reporting, KPI clarity, and operational visibility.",
  summary:
    "The site is designed to support consulting conversations, contract work, and the right analyst or BI role. The common thread is the same: turning messy data into clear business direction.",
  proofPoints: [
    "SQL, Power BI, Python, reporting logic",
    "Clear communication for leaders and operators",
    "Open to projects, contract work, and the right full-time role",
  ],
} as const;

export const services = [
  {
    slug: "reporting-dashboard-setup",
    title: "Reporting and Dashboard Setup",
    outcome: "Turn raw data into management visibility",
    summary:
      "Build reporting views and dashboards that help leaders see performance, bottlenecks, and KPI movement without living inside spreadsheet-heavy reporting cycles.",
    idealClient:
      "Small teams, founders, programme managers, and operations leaders who need sharper reporting without overbuilding.",
    problem:
      "The data exists, but it is difficult to scan, difficult to trust, and too manual to support recurring decisions.",
    deliverables: [
      "Dashboard structure and management views",
      "KPI logic and metric definitions",
      "Reporting cleanup across source data and recurring packs",
      "Handover notes for interpretation and usage",
    ],
    outcomes: [
      "Clearer recurring reporting",
      "Less manual report assembly",
      "Faster decisions with more confidence in the numbers",
    ],
  },
  {
    slug: "kpi-performance-reviews",
    title: "KPI and Performance Reviews",
    outcome: "See what the current reporting is missing",
    summary:
      "Run a focused review of current KPIs, reports, and workflow visibility to identify where the reporting breaks down and what should be fixed first.",
    idealClient:
      "Teams that know reporting is weak but need a practical diagnosis before investing in more dashboards or tooling.",
    problem:
      "Managers are working with reports, but the current setup still leaves too much ambiguity around performance, risk, or follow-through.",
    deliverables: [
      "Current-state reporting diagnosis",
      "Visibility gap assessment",
      "Metric and KPI redesign recommendations",
      "A practical next-step roadmap",
    ],
    outcomes: [
      "Clearer understanding of the real reporting problem",
      "Better prioritisation before implementation work starts",
      "Stronger alignment between reporting and management use",
    ],
  },
  {
    slug: "learning-programme-visibility",
    title: "Learning and Programme Visibility",
    outcome: "A specialist reporting layer for training and programme environments",
    summary:
      "Support learning providers, academies, and programme teams with reporting on cohorts, completion, attendance, interventions, and delivery performance.",
    idealClient:
      "Training providers, learning platforms, academies, NGOs, or funded programmes that need more visibility into programme operations.",
    problem:
      "Administrative reporting exists, but managers still cannot clearly see learner movement, cohort risk, or programme performance.",
    deliverables: [
      "Cohort and learner reporting views",
      "Completion, attendance, and intervention logic",
      "Programme review dashboards or packs",
      "Management-ready monthly visibility structure",
    ],
    outcomes: [
      "Stronger programme oversight",
      "Earlier visibility into risk and intervention needs",
      "A premium reporting layer without pretending to replace the core platform",
    ],
  },
] as const;

export const focusAreas = [
  {
    title: "Reporting clarity",
    summary:
      "Move from scattered exports and screenshots to cleaner reporting that management can actually use.",
  },
  {
    title: "KPI trust",
    summary:
      "Define metrics properly so dashboards and packs carry business meaning instead of visual noise.",
  },
  {
    title: "Operational visibility",
    summary:
      "Show where work, learners, or programmes are progressing, stalling, or needing attention.",
  },
  {
    title: "Business direction",
    summary:
      "Translate analytics into fast-scan decision support rather than leaving insight trapped in the data.",
  },
] as const;

export const reasons = [
  {
    title: "Analyst first, commercially aware",
    text: "The work is grounded in analytics craft, but always shaped around how managers, operators, and leaders actually use reporting.",
  },
  {
    title: "Strong signal for both work and roles",
    text: "The site is designed to support consulting projects, contract work, and strong analyst opportunities without reading like a generic portfolio.",
  },
  {
    title: "Structured thinking, practical execution",
    text: "The strongest theme across the work is clarity: better reporting logic, cleaner communication, and outputs that can be used immediately.",
  },
] as const;

export const audiences = [
  {
    slug: "hiring-managers",
    label: "Hiring Managers",
    title: "Hiring managers who need a sharp analyst with business judgment",
    summary:
      "The strongest signal here is not generic data enthusiasm. It is the ability to structure messy reporting problems and turn them into clear management visibility.",
    painPoints: [
      "Too many analysts can query data but struggle to frame business questions clearly",
      "Reporting work often lacks communication quality and decision relevance",
      "Leaders need analysts who can bridge data, dashboards, and operational use",
    ],
    analyticsHelps: [
      "Shows clear thinking on reporting, KPIs, and performance visibility",
      "Demonstrates business-facing communication, not just technical output",
      "Signals readiness for analyst, BI, reporting, or operations-facing roles",
    ],
  },
  {
    slug: "founders-and-operators",
    label: "Founders and Operators",
    title: "Founders and operators who need clearer reporting without complexity",
    summary:
      "Smaller teams often have enough data to make better decisions, but not enough reporting structure to use it properly.",
    painPoints: [
      "Important numbers are scattered across spreadsheets and tools",
      "Reports are assembled manually and still leave questions unanswered",
      "KPI packs exist, but managers do not fully trust or use them",
    ],
    analyticsHelps: [
      "Tightens reporting structure and dashboard logic",
      "Introduces clearer KPI definitions",
      "Builds a lighter reporting layer sized to the actual need",
    ],
  },
  {
    slug: "learning-teams",
    label: "Learning Teams",
    title: "Learning and programme teams that need stronger operational visibility",
    summary:
      "This remains a focused niche strength: reporting on cohorts, learner progress, completion, attendance, and intervention visibility.",
    painPoints: [
      "Administrative reporting does not answer operational questions",
      "Programme managers cannot clearly compare cohorts or spot risk early",
      "Intervention follow-through is often poorly tracked",
    ],
    analyticsHelps: [
      "Makes cohort and learner movement easier to see",
      "Improves monthly reporting for programme reviews",
      "Adds a stronger intelligence layer without pitching a platform rebuild",
    ],
  },
] as const;

export const caseStudies = [
  {
    title: "Bontle Operational Intelligence Case Study",
    summary:
      "Bontle remains the strongest proof point for how workflow logic, KPI design, and management-facing reporting can be designed with rigor and commercial sense.",
    tags: [
      "Workflow visibility",
      "KPI design",
      "Reporting architecture",
      "Executive reporting",
      "Operational thinking",
    ],
    results: [
      "Translated workflow movement into measurable states",
      "Designed KPI logic for credible management reporting",
      "Built reporting architecture around leadership visibility",
      "Showed how operational data can become decision support",
    ],
    highlights: [
      {
        title: "Workflow measurement",
        text: "The work centered on making movement visible, measurable, and useful in management discussions.",
      },
      {
        title: "KPI trust",
        text: "The metrics were designed to be interpretable and defensible rather than decorative.",
      },
      {
        title: "Management use",
        text: "The reporting logic was shaped for leaders and operators, not just for screens and charts.",
      },
    ],
  },
  {
    title: "Reporting pack redesign",
    status: "Future proof point",
    summary:
      "A placeholder for a reporting improvement story focused on KPI clarity, monthly management visibility, and better decision support.",
    framework: [
      "Starting reporting problem",
      "KPI and visibility redesign",
      "New reporting structure",
      "Management outcomes",
    ],
  },
  {
    title: "Learning programme visibility layer",
    status: "Future proof point",
    summary:
      "A future case study showing how cohort reporting, completion tracking, and intervention visibility can be tightened in a learning environment.",
    framework: [
      "Current reporting blind spots",
      "Cohort and learner logic",
      "Management-facing outputs",
      "Operational decisions improved",
    ],
  },
] as const;

export const processSteps = [
  {
    label: "Step 1",
    title: "Clarify the business question",
    text: "Start with what management needs to see, what decisions are being made, and where the reporting currently fails.",
    outputs: ["Reporting diagnosis", "Priority questions"],
  },
  {
    label: "Step 2",
    title: "Define the KPI logic",
    text: "Make the metrics clear enough to trust before building visual layers or recurring reports.",
    outputs: ["Metric definitions", "Interpretation notes"],
  },
  {
    label: "Step 3",
    title: "Structure the reporting",
    text: "Organise the data and reporting views around recurring management use rather than raw exports.",
    outputs: ["Reporting structure", "Dashboard or pack layout"],
  },
  {
    label: "Step 4",
    title: "Support decision use",
    text: "Translate the output into something leaders, operators, or hiring teams can scan quickly and act on.",
    outputs: ["Decision-ready outputs", "Usage guidance"],
  },
] as const;

export const insights = [
  {
    category: "Analytics practice",
    title: "Why reporting is a business problem before it is a dashboard problem",
    summary:
      "A concise view on why unclear management questions and weak KPI logic usually break reporting before tooling does.",
  },
  {
    category: "KPI design",
    title: "Dashboards are not enough without KPI clarity",
    summary:
      "A practical argument for metric definitions, thresholds, and business meaning before visual design.",
  },
  {
    category: "Learning operations",
    title: "What learning teams need beyond admin reports",
    summary:
      "A focused piece on how programme managers need more than exports to manage cohorts, completion, and interventions well.",
  },
] as const;

export const testimonials = [
  {
    name: "Hiring signal",
    role: "Analyst and BI lens",
    quote:
      "The strongest signal here is structured thinking: clear communication, useful metrics, and reporting built for actual decisions.",
  },
  {
    name: "Operator signal",
    role: "Business-facing analytics lens",
    quote:
      "This reads like someone who can work with messy reality and still produce reporting leaders can trust.",
  },
  {
    name: "Niche signal",
    role: "Learning and programme lens",
    quote:
      "The learning-platform angle feels like a specialist strength, not a forced industry list.",
  },
] as const;
