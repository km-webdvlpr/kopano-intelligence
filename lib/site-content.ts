export const brand = {
  name: "Tec4th",
  location: "Johannesburg, South Africa",
  email: "kabelomakua@tec4th.co.za",
  siteUrl: "https://tec4th.co.za",
  strapline: "Bespoke Business Systems Without Enterprise Overhead",
} as const;

export const identity = {
  title: "Custom workflow, admin, and reporting systems for businesses that have outgrown spreadsheets.",
  summary:
    "Tec4th builds focused business software for operators who need something better than WhatsApp chains, paper processes, or scattered tools. The goal is practical software that improves daily operations, not startup theatre.",
  proofPoints: [
    "Frontend and backend delivery shipped as one practical system",
    "Strong fit for salons, learning businesses, service operators, and admin-heavy teams",
    "Open to scoped builds, phased delivery, and payment plans where needed",
  ],
} as const;

export const services = [
  {
    slug: "internal-business-systems",
    title: "Internal Business Systems",
    outcome: "Replace fragile manual operations with a focused working system",
    summary:
      "Build internal software for bookings, records, workflows, client tracking, staff admin, or service operations where spreadsheets and chat threads are no longer enough.",
    idealClient:
      "Growing businesses with recurring admin pressure, operational complexity, or too much important work sitting in Excel, paper, or WhatsApp.",
    problem:
      "The business is operating, but the system underneath it is too manual, too fragmented, or too dependent on memory and workarounds.",
    deliverables: [
      "Scoped web application tailored to the workflow",
      "Frontend and backend delivery aligned to real business use",
      "Admin views, forms, status logic, and operational screens",
      "Practical rollout and handover guidance",
    ],
    outcomes: [
      "Less admin drag",
      "Clearer workflow control",
      "A system built around the actual way the business works",
    ],
  },
  {
    slug: "dashboards-reporting-tools",
    title: "Dashboards and Reporting Tools",
    outcome: "Make the business easier to monitor and manage",
    summary:
      "Create reporting layers, dashboards, and operational views that help owners and managers see performance, bottlenecks, and follow-through without waiting for enterprise tooling.",
    idealClient:
      "Businesses that already have data, transactions, or workflow movement but weak visibility into what is really happening.",
    problem:
      "The numbers exist, but they are spread across files and systems, too slow to assemble, or too unclear to support confident decisions.",
    deliverables: [
      "Management dashboard structure",
      "KPI and reporting logic",
      "Operational performance views",
      "Recurring reporting support where needed",
    ],
    outcomes: [
      "Stronger decision support",
      "Less manual report assembly",
      "Better visibility across operations",
    ],
  },
  {
    slug: "client-admin-portals",
    title: "Client and Admin Portals",
    outcome: "Give teams and clients a cleaner way to interact with the business",
    summary:
      "Build lightweight portals and interfaces for bookings, requests, records, updates, approvals, or client access without the weight of a large software rollout.",
    idealClient:
      "Service businesses, private operators, or programme-led organisations that need a more structured digital experience for internal teams or clients.",
    problem:
      "Important interactions are happening informally, and the business needs a more reliable interface for staff, clients, or programme administration.",
    deliverables: [
      "Portal design and interface flow",
      "Authentication, records, and admin logic where required",
      "Status tracking and workflow handling",
      "A scoped platform that fits the operating need",
    ],
    outcomes: [
      "A cleaner client or admin experience",
      "Better consistency in how requests and records are handled",
      "A practical custom system without enterprise complexity",
    ],
  },
] as const;

export const focusAreas = [
  {
    title: "Workflow control",
    summary:
      "Make movement visible across bookings, tasks, requests, client records, or service delivery.",
  },
  {
    title: "Admin relief",
    summary:
      "Reduce the daily drag caused by scattered spreadsheets, repeated manual updates, and process confusion.",
  },
  {
    title: "Reporting visibility",
    summary:
      "See what the business is doing through simple dashboards and management views that are built around reality.",
  },
  {
    title: "Affordable bespoke systems",
    summary:
      "Deliver custom software with focus and restraint so smaller operators can access working systems without enterprise overhead.",
  },
] as const;

export const reasons = [
  {
    title: "Built for practical operators",
    text: "The target client is not chasing a unicorn app. They need a working system that improves daily operations and pays for itself in clarity and time saved.",
  },
  {
    title: "Fast, modern, and scoped",
    text: "The advantage is focused delivery: modern tools, tight scope, and a clear bias toward what can be shipped and used rather than endlessly planned.",
  },
  {
    title: "African grounding without performance",
    text: "The brand stays regionally grounded and commercially serious. It is built for local operators and practical businesses, not imported startup theatre.",
  },
] as const;

export const audiences = [
  {
    slug: "salons-and-service-businesses",
    label: "Salons and Service Businesses",
    title: "Operators who need bookings, records, staff flow, and reporting to work properly",
    summary:
      "These businesses often carry real operational complexity but still run important parts of the operation through paper, chat, memory, and fragmented files.",
    painPoints: [
      "Bookings and records live across too many places",
      "Staff and owner visibility is inconsistent",
      "Reporting on sales, clients, or service flow is too manual",
    ],
    analyticsHelps: [
      "Creates one cleaner system for daily operations",
      "Improves booking, record, and workflow visibility",
      "Adds management reporting without a bloated software rollout",
    ],
  },
  {
    slug: "learning-and-programme-businesses",
    label: "Learning and Programme Businesses",
    title: "Training providers and programme teams that need better operations software",
    summary:
      "This remains a strong niche because these environments often need custom admin, reporting, cohort visibility, and workflow logic that generic platforms do not handle well.",
    painPoints: [
      "Programme operations sit across spreadsheets and admin tools",
      "Cohort or learner visibility is weak",
      "Managers still lack a clean working system for internal use",
    ],
    analyticsHelps: [
      "Builds a bespoke layer around programme and learner operations",
      "Supports admin workflows and reporting together",
      "Improves visibility without pretending to replace every platform in use",
    ],
  },
  {
    slug: "owner-led-operators",
    label: "Owner-Led Operators",
    title: "Businesses that have outgrown manual systems but are not ready for enterprise software",
    summary:
      "This is the core Tec4th client: growing operators who need something more serious than spreadsheets, but far more practical than a heavyweight vendor process.",
    painPoints: [
      "Important work depends on one person remembering everything",
      "Processes are fragile and hard to scale",
      "Software options feel too expensive, too generic, or too slow",
    ],
    analyticsHelps: [
      "Introduces software built around the actual business workflow",
      "Keeps scope and cost grounded",
      "Creates a base that can mature over time",
    ],
  },
] as const;

export const caseStudies = [
  {
    title: "Bontle Bespoke Operations Platform",
    summary:
      "Bontle is the flagship proof point: a practical bespoke system that brings workflow logic, status visibility, reporting structure, and modern full-stack delivery into one coherent product.",
    tags: [
      "Bespoke system",
      "Workflow logic",
      "Frontend + backend",
      "Operational reporting",
      "Modern delivery",
    ],
    results: [
      "Turned operational movement into measurable and manageable states",
      "Combined frontend and backend delivery into one working platform",
      "Introduced reporting and KPI structure alongside workflow control",
      "Showed how a focused internal system can look and feel premium without enterprise bloat",
    ],
    highlights: [
      {
        title: "Shipped system thinking",
        text: "The proof is not only design. It is the ability to scope, structure, and ship a real operational platform.",
      },
      {
        title: "Workflow intelligence",
        text: "Bontle demonstrates how operational movement can be translated into status logic, visibility, and management usefulness.",
      },
      {
        title: "Modern bespoke delivery",
        text: "It shows the kind of custom system smaller operators usually assume they cannot access.",
      },
    ],
  },
  {
    title: "Salon operations system",
    status: "Future proof point",
    summary:
      "A future case study showing how bookings, client records, staff flow, and reporting can be unified inside a focused bespoke system.",
    framework: [
      "Operational pain before the build",
      "Workflow and admin redesign",
      "System delivery and rollout",
      "Daily business impact",
    ],
  },
  {
    title: "Training business admin platform",
    status: "Future proof point",
    summary:
      "A future case study showing how programme admin, cohort visibility, and reporting can be pulled into a more useful internal platform.",
    framework: [
      "Current admin and reporting friction",
      "Bespoke workflow structure",
      "Platform features and management views",
      "Operational gains from the new system",
    ],
  },
] as const;

export const processSteps = [
  {
    label: "Step 1",
    title: "Scope the real operating problem",
    text: "Start with the day-to-day workflow, where things break, what is too manual, and what the business actually needs the system to do.",
    outputs: ["Scope definition", "Workflow map"],
  },
  {
    label: "Step 2",
    title: "Design the system around the work",
    text: "Translate the business process into screens, roles, states, records, and reporting logic that match reality.",
    outputs: ["System logic", "Interface structure"],
  },
  {
    label: "Step 3",
    title: "Build and connect the stack",
    text: "Ship the frontend and backend as one practical platform with the right amount of structure and no unnecessary overengineering.",
    outputs: ["Working platform", "Operational data flow"],
  },
  {
    label: "Step 4",
    title: "Support rollout and use",
    text: "Make sure the client can actually operate the system, use the reporting, and grow into it sensibly.",
    outputs: ["Handover guidance", "Phased next steps"],
  },
] as const;

export const insights = [
  {
    category: "Bespoke systems",
    title: "Why smaller businesses outgrow spreadsheets long before they can afford enterprise software",
    summary:
      "A practical look at the gap between manual operations and heavyweight software, and why focused custom systems can sit in that middle space.",
  },
  {
    category: "Workflow design",
    title: "A business system should match the workflow, not force the workflow to match the software",
    summary:
      "Why custom admin and workflow tools become valuable when daily operations do not fit generic templates.",
  },
  {
    category: "African operators",
    title: "Modern bespoke software for real businesses, not startup theatre",
    summary:
      "A grounded position on building serious systems for local operators who need practical improvements rather than hype.",
  },
] as const;

export const testimonials = [
  {
    name: "Operator signal",
    role: "Business owner lens",
    quote:
      "This feels like someone who can actually build the system, not just talk about digital transformation.",
  },
  {
    name: "Delivery signal",
    role: "Product and operations lens",
    quote:
      "The strongest proof is the combination of workflow thinking, reporting logic, and the ability to ship frontend and backend together.",
  },
  {
    name: "Market signal",
    role: "Small business software lens",
    quote:
      "The offer is bold but believable because it stays focused on practical systems for real operators.",
  },
] as const;
