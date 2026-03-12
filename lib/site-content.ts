export const brandOptions = [
  {
    name: "Kopano Learning Intelligence",
    rationale:
      "Combines a credible African-rooted name with clear niche relevance for analytics, reporting, and programme visibility.",
  },
  {
    name: "Groundline Learning Advisory",
    rationale:
      "Feels composed and practical, but is less distinct and less explicit about analytics depth.",
  },
  {
    name: "Motswedi Programme Intelligence",
    rationale:
      "Has regional texture and seriousness, though it asks more explanation from first-time buyers.",
  },
] as const;

export const brand = {
  name: "Kopano Learning Intelligence",
  shortName: "Kopano",
  location: "Johannesburg, South Africa",
  email: "hello@kopanolearningintelligence.co.za",
  siteUrl: "https://kopanolearningintelligence.co.za",
  strapline: "Operational Intelligence for Learning Organisations",
} as const;

export const services = [
  {
    slug: "learning-analytics-dashboards",
    title: "Learning Analytics Dashboards",
    outcome: "Make learner and programme performance visible",
    summary:
      "Design a reporting layer that gives programme leaders clear visibility into cohort progress, attendance, completion, and learner movement without relying on manual spreadsheet summaries.",
    idealClient:
      "Training academies, private learning providers, online programmes, or education operations teams with fragmented learner reporting.",
    problem:
      "Managers can see administrative data in separate systems, but not the performance picture across learners, cohorts, facilitators, and modules.",
    deliverables: [
      "Cohort, attendance, and completion dashboard structure",
      "Learner progress and module progression views",
      "Facilitator or programme-level performance reporting",
      "Definitions for priority metrics, filters, and management views",
    ],
    outcomes: [
      "Faster visibility into where cohorts are progressing or stalling",
      "Reduced manual reporting effort in recurring reviews",
      "A management-ready dashboard layer that complements existing LMS or admin tools",
    ],
  },
  {
    slug: "programme-performance-reviews",
    title: "Programme Performance Reviews",
    outcome: "Diagnose where reporting and delivery are breaking down",
    summary:
      "Run a structured review of current reporting, KPI design, and programme performance logic to show where visibility is weak and what needs redesign first.",
    idealClient:
      "Skills programmes, youth development initiatives, NGOs, or funded delivery environments with reporting friction and unclear management insight.",
    problem:
      "Leadership knows completion, attendance, or learner outcomes need attention, but the current reporting setup does not reveal where the issues actually sit.",
    deliverables: [
      "Reporting maturity assessment",
      "Programme KPI review and visibility-gap analysis",
      "Dropout, bottleneck, or intervention diagnosis",
      "A prioritised recommendation memo for the next 30 to 90 days",
    ],
    outcomes: [
      "Clearer understanding of the real reporting problem",
      "A sharper intervention path before new dashboards are built",
      "More defensible management conversations around performance",
    ],
  },
  {
    slug: "operational-reporting-systems",
    title: "Operational Reporting Systems",
    outcome: "Move beyond spreadsheet-heavy reporting routines",
    summary:
      "Build structured reporting systems that turn fragmented exports and manual updates into a repeatable decision-support rhythm for programme and operations managers.",
    idealClient:
      "Learning providers, academies, and programme teams that already produce reports but struggle with consistency, trust, or management usefulness.",
    problem:
      "Reporting exists, but it is slow to assemble, inconsistent from month to month, and too administrative to support decisions.",
    deliverables: [
      "KPI definitions and reporting cadence design",
      "Management-ready templates or reporting packs",
      "Dashboard structure for monthly or weekly reviews",
      "Interpretation guidance for leadership use",
    ],
    outcomes: [
      "A cleaner operating rhythm for reporting and review",
      "Less ambiguity in recurring performance updates",
      "Structured decision support instead of ad hoc admin summaries",
    ],
  },
  {
    slug: "intervention-cohort-visibility",
    title: "Intervention and Cohort Visibility",
    outcome: "See which learners and cohorts need action",
    summary:
      "Create practical visibility for at-risk cohorts, stalled learners, and intervention follow-through so managers can act earlier and more consistently.",
    idealClient:
      "Programme managers, academic operations teams, and funded programme environments responsible for learner support and outcomes reporting.",
    problem:
      "Support actions are reactive because managers cannot see risk patterns, cohort comparison, or intervention status early enough.",
    deliverables: [
      "At-risk cohort and learner segmentation logic",
      "Intervention tracking views and escalation markers",
      "Progress monitoring by cohort, facilitator, or programme",
      "Simple management logic for when action should be triggered",
    ],
    outcomes: [
      "Earlier identification of learners or groups that need support",
      "Improved follow-through on interventions and escalation",
      "Better visibility for sponsor, donor, or management reporting",
    ],
  },
  {
    slug: "bespoke-programme-intelligence-layer",
    title: "Bespoke Programme Intelligence Layer",
    outcome: "A premium reporting layer without a full platform rebuild",
    summary:
      "Where standard dashboards are not enough, scope a tailored reporting and KPI layer around the organisation's actual programme model, existing systems, and management needs.",
    idealClient:
      "Organisations with multiple programmes, more complex delivery logic, or sponsor-facing reporting demands that outgrow generic exports.",
    problem:
      "Existing systems hold the data, but they do not produce the operational visibility that leadership or funders need.",
    deliverables: [
      "Scoped reporting architecture for programme intelligence",
      "Dashboard, KPI, and decision-support design",
      "Visibility logic tied to cohorts, interventions, and outcomes",
      "Implementation guidance that sits on top of existing systems",
    ],
    outcomes: [
      "A bespoke analytics layer designed around real management questions",
      "Sharper visibility without positioning a new LMS or enterprise platform",
      "A scalable foundation for more mature programme reporting",
    ],
  },
] as const;

export const focusAreas = [
  {
    title: "Cohort visibility",
    summary:
      "See how cohorts are progressing, stalling, or dropping off across modules, delivery periods, or programme streams.",
  },
  {
    title: "Completion and dropout tracking",
    summary:
      "Replace end-of-cycle surprises with clearer leading signals on completion risk and learner attrition.",
  },
  {
    title: "Attendance and engagement reporting",
    summary:
      "Track attendance patterns, engagement gaps, and operational pressure points that affect outcomes.",
  },
  {
    title: "Management decision support",
    summary:
      "Turn recurring reports into something leaders can use in review meetings, intervention discussions, and sponsor updates.",
  },
] as const;

export const reasons = [
  {
    title: "Focused on one reporting niche",
    text: "The practice is intentionally narrow. It is built for learning, skills, and programme delivery environments rather than for every sector with data.",
  },
  {
    title: "Built around management use",
    text: "The aim is not to produce decorative dashboards. It is to help leaders see learner movement, cohort risk, operational pressure, and intervention needs in time to act.",
  },
  {
    title: "Technical depth with practical restraint",
    text: "SQL, Power BI, Python, KPI logic, and product experience support delivery, but the offer remains a focused reporting layer rather than a promise to build full enterprise software.",
  },
] as const;

export const audiences = [
  {
    slug: "training-academies",
    label: "Training Academies",
    title: "Training academies running multiple cohorts and modules",
    summary:
      "Training teams often have learner data, attendance records, and assessment information, but still struggle to see which cohorts are performing, slipping, or requiring intervention.",
    painPoints: [
      "Cohort reporting is manual and time-consuming",
      "Completion and dropout patterns are spotted too late",
      "Programme managers lack a single view across learners, modules, and facilitators",
    ],
    analyticsHelps: [
      "Creates cohort and module performance visibility for recurring reviews",
      "Introduces clearer tracking of completion, attendance, and risk",
      "Supports management action with cleaner intervention logic",
    ],
  },
  {
    slug: "skills-programmes",
    label: "Skills Programmes",
    title: "Skills development and workforce readiness programmes",
    summary:
      "Programme delivery environments often need to report both internally and externally, yet rely on spreadsheet-heavy updates that make it hard to trust the signal.",
    painPoints: [
      "Learner progress and support actions are hard to monitor consistently",
      "Stakeholder reports emphasise counts more than operational insight",
      "Funded programmes need better visibility into outcomes and exceptions",
    ],
    analyticsHelps: [
      "Improves visibility into cohort movement and learner support status",
      "Strengthens sponsor or management reporting with clearer KPI definitions",
      "Makes intervention and escalation patterns easier to see",
    ],
  },
  {
    slug: "ngos-funded-programmes",
    label: "NGOs and Funded Programmes",
    title: "NGOs and funded programmes delivering training or youth development",
    summary:
      "Many organisations in this category carry serious reporting obligations but still manage data across disconnected tools and manually assembled reports.",
    painPoints: [
      "Reporting must satisfy programme managers, executives, and funders",
      "Intervention tracking is inconsistent across teams or sites",
      "Operational issues are often buried inside narrative reporting",
    ],
    analyticsHelps: [
      "Builds structured monthly reporting packs and dashboard views",
      "Makes intervention follow-through easier to review and evidence",
      "Helps leadership separate operational issues from administrative noise",
    ],
  },
  {
    slug: "education-operations",
    label: "Education Operations",
    title: "Education operations teams supporting delivery and learner outcomes",
    summary:
      "Operations teams inside education and training environments need reporting that links attendance, progression, interventions, and programme delivery to real management decisions.",
    painPoints: [
      "Administrative systems do not answer operational management questions",
      "Leaders lack visibility across cohorts, sites, or delivery cycles",
      "Reports are built for compliance first and decision support second",
    ],
    analyticsHelps: [
      "Clarifies what management should review weekly or monthly",
      "Creates a reporting layer aligned to operational meetings and decisions",
      "Makes learner, cohort, and facilitator performance easier to interpret",
    ],
  },
  {
    slug: "private-learning-providers",
    label: "Private Learning Providers",
    title: "Private providers scaling programmes without losing visibility",
    summary:
      "As delivery expands, private learning providers often outgrow manual reporting long before they outgrow their LMS or admin platform.",
    painPoints: [
      "Leadership reporting depends on exports and manual reconciliations",
      "Teams cannot easily compare cohorts, programmes, or facilitator performance",
      "There is no premium reporting layer for investor, board, or management visibility",
    ],
    analyticsHelps: [
      "Introduces a structured reporting layer without replacing core systems",
      "Improves trust in KPI definitions and programme comparisons",
      "Provides leadership-ready visibility into growth, risk, and delivery quality",
    ],
  },
] as const;

export const caseStudies = [
  {
    title: "Bontle Operational Intelligence Case Study",
    summary:
      "Bontle is framed honestly as a designed and shipped operational intelligence proof point. It shows the founder's strength in workflow visibility, KPI design, state-based logic, and management-facing reporting architecture.",
    tags: [
      "Workflow visibility",
      "KPI design",
      "State-based logic",
      "Executive reporting",
      "Operational intelligence",
    ],
    results: [
      "Mapped operational movement into measurable state transitions",
      "Defined KPI logic that could support trusted management reporting",
      "Designed reporting architecture for leadership visibility and follow-through",
      "Demonstrated how operational data can be turned into decision-ready insight",
    ],
    highlights: [
      {
        title: "Workflow measurement",
        text: "The case study shows how activity can be translated into measurable states so leaders can see flow, backlog, and intervention pressure clearly.",
      },
      {
        title: "KPI trust",
        text: "Metrics were designed to be interpretable and defensible rather than decorative. That same discipline matters in programme and learning environments.",
      },
      {
        title: "Reporting logic",
        text: "The reporting structure was designed for management use, which is directly relevant to learning operations dashboards and monthly programme reviews.",
      },
    ],
  },
  {
    title: "Cohort performance reporting redesign",
    status: "Future case study placeholder",
    summary:
      "A future learning-focused proof point showing how cohort performance, attendance, and intervention logic can be redesigned into a cleaner reporting layer for programme managers.",
    framework: [
      "Initial reporting pain and management blind spots",
      "KPI definitions for cohorts, completion, and risk",
      "Dashboard and review pack structure",
      "Operational decisions improved by the new reporting layer",
    ],
  },
  {
    title: "Completion dashboard and intervention visibility",
    status: "Future case study placeholder",
    summary:
      "A placeholder structure for showing how a training provider could move from fragmented admin reports to a clearer operational view of completion risk and intervention follow-through.",
    framework: [
      "Current reporting maturity and data fragmentation",
      "Segmentation logic for risk, progress, and support actions",
      "Management views for weekly and monthly reviews",
      "Practical outcomes for programme delivery and reporting confidence",
    ],
  },
] as const;

export const processSteps = [
  {
    label: "Step 1",
    title: "Diagnose the reporting problem",
    text: "Start with the programme model, reporting routine, management questions, and existing data sources to identify where visibility is weak or misleading.",
    outputs: [
      "Current-state reporting diagnosis",
      "Priority management questions",
    ],
  },
  {
    label: "Step 2",
    title: "Define the KPIs that matter",
    text: "Clarify completion, attendance, intervention, cohort, and programme definitions so the reporting layer is built on consistent logic.",
    outputs: ["KPI definitions", "Threshold and interpretation notes"],
  },
  {
    label: "Step 3",
    title: "Structure the reporting layer",
    text: "Organise the data, calculations, and reporting views around recurring management use rather than raw system exports.",
    outputs: ["Reporting logic", "Dashboard or pack structure"],
  },
  {
    label: "Step 4",
    title: "Build visibility",
    text: "Create dashboards, packs, and visibility views that show learner movement, cohort health, and intervention needs clearly.",
    outputs: ["Management-ready dashboard views", "Operational reporting assets"],
  },
  {
    label: "Step 5",
    title: "Support decision use",
    text: "Translate the reporting into action by clarifying what leaders should look for, how to interpret shifts, and where intervention should happen.",
    outputs: ["Decision guidance", "Intervention and review logic"],
  },
  {
    label: "Step 6",
    title: "Embed the routine",
    text: "Help the client use the reporting consistently in monthly reviews, operational meetings, and sponsor or leadership updates.",
    outputs: ["Usage guidance", "Review rhythm for ongoing adoption"],
  },
] as const;

export const insights = [
  {
    category: "Reporting maturity",
    title: "Why training providers struggle with reporting maturity",
    summary:
      "A practical look at why growing learning organisations accumulate admin data but still lack a structured reporting layer for management decisions.",
  },
  {
    category: "KPI clarity",
    title: "Dashboards are not enough without KPI clarity",
    summary:
      "An argument for defining completion, attendance, intervention, and outcome logic before building the visual layer.",
  },
  {
    category: "Learning operations",
    title: "What learning operations leaders need beyond admin reports",
    summary:
      "A perspective on the difference between administrative reporting and operational intelligence for cohorts, facilitators, and programme performance.",
  },
] as const;

export const testimonials = [
  {
    name: "Founder Positioning Signal",
    role: "Learning operations buyer lens",
    quote:
      "This feels like someone who understands how reporting actually breaks inside learning environments, not someone selling a generic dashboard package.",
  },
  {
    name: "Case-study credibility signal",
    role: "Operations and analytics perspective",
    quote:
      "The strongest thread is structured visibility: defining states, clarifying KPIs, and building reporting that management can genuinely use.",
  },
  {
    name: "Commercial fit signal",
    role: "Programme leadership perspective",
    quote:
      "The offer feels focused, credible, and appropriately scoped for a specialist solo consultant rather than a broad digital agency.",
  },
] as const;
