export type Shot = { src: string; url: string; cap: string };
export type Feature = { idx: string; title: string; body: string };
export type Stat = { big: string; lab: string };

export type Project = {
  slug: string;
  // roadmap
  when: string;
  title: string;
  desc: string;
  tag: string;
  status: string;
  deck: string[];
  // case study
  caseNo: string;
  meta: string;
  titleLines: string[];
  sub: string;
  roleLines: string[];
  stack: string[];
  liveUrl?: string;
  liveLabel?: string;
  productLab: string;
  features: Feature[];
  stats: Stat[];
  shots: Shot[];
  footNote: string;
};

export const projects: Project[] = [
  {
    slug: "outsource-global-erp",
    when: "2024 · present",
    title: "Outsource Global ERP",
    desc: "Enterprise workforce platform for a 200+ employee org — ATS, real-time inbox & role-aware dashboards.",
    tag: "Next.js · Rails · WebSockets",
    status: "Production",
    deck: ["/erp-job-applications.png", "/erp-inbox.png", "/erp-dashboard.png", "/erp-login.png"],
    caseNo: "01",
    meta: "2024 — present · Enterprise · Web Platform",
    titleLines: ["Outsource", "Global ERP"],
    sub: "Enterprise workforce platform · 200+ employee organisation.",
    roleLines: ["Senior Software Developer", "Frontend Lead"],
    stack: ["Next.js", "TypeScript", "Rails ActionCable", "WebSockets", "PostgreSQL", "RBAC"],
    productLab: "02 · Production",
    features: [
      { idx: "01", title: "Applicant Tracking System", body: "State-machine recruitment pipeline — Talent Pool, Awaiting Documents, HR Queue, Interview Scheduled, Training. Filterable by date range, stage and job opening ID." },
      { idx: "02", title: "Real-Time Notification Inbox", body: "WebSocket via Rails ActionCable powering a unified cross-module inbox — offer acceptances, document submissions and status changes surfaced live." },
      { idx: "03", title: "Personalised Employee Dashboard", body: "Role-aware live widgets: shift times, leave balance, pending approvals, team headcount, announcements and quick actions — no page reload." },
      { idx: "04", title: "Enterprise Auth & RBAC", body: "Secure login portal with biometric attendance integration, role-based module access and SSL / 256-bit encryption." },
    ],
    stats: [
      { big: "200+", lab: "Employees served" },
      { big: "10+", lab: "Modules built" },
      { big: "Real-time", lab: "WebSockets" },
      { big: "RBAC", lab: "Across all modules" },
    ],
    shots: [
      { src: "/erp-job-applications.png", url: "app.outsourceglobal.io / recruitment / applications", cap: "<b>01 —</b> Applicant Tracking System — state-machine recruitment pipeline, filterable by stage, date & job opening ID." },
      { src: "/erp-inbox.png", url: "app.outsourceglobal.io / inbox", cap: "<b>02 —</b> Real-time notification inbox — WebSocket via Rails ActionCable, unified across modules." },
      { src: "/erp-dashboard.png", url: "app.outsourceglobal.io / dashboard", cap: "<b>03 —</b> Personalised employee dashboard — role-aware live widgets, zero page reloads." },
      { src: "/erp-login.png", url: "app.outsourceglobal.io / login", cap: "<b>04 —</b> Enterprise Auth — RBAC + biometric attendance, SSL / 256-bit." },
    ],
    footNote: "Live captures from the production ERP — recruitment ATS, employee dashboard, real-time inbox, and the auth surface. Internal product · screenshots used with anonymised test data.",
  },
  {
    slug: "raised",
    when: "2025 · Live",
    title: "RaisED",
    desc: "Education funding platform connecting verified African students with donors.",
    tag: "Next.js · Supabase · Cloudinary",
    status: "Live",
    deck: ["/raised-landing.png", "/raised-dashboard.png"],
    caseNo: "02",
    meta: "2025 · Education · Web Platform",
    titleLines: ["RaisED"],
    sub: "Education funding platform connecting verified African students with donors.",
    roleLines: ["Lead Technical Engineer", "Sole Engineer"],
    stack: ["Next.js", "Supabase", "Cloudinary", "PostgreSQL"],
    liveUrl: "https://www.raised.ng",
    liveLabel: "Visit www.raised.ng →",
    productLab: "02 · Live",
    features: [
      { idx: "01", title: "Funding platform", body: "Education funding platform connecting verified African students with donors who care." },
      { idx: "02", title: "Built from scratch", body: "Designed the full database schema, auth flows and media pipelines end-to-end." },
      { idx: "03", title: "University verification", body: "Coordinating student-verification API integration with University of Nigeria, Nsukka (UNN)." },
    ],
    stats: [
      { big: "Sole", lab: "Engineer on the build" },
      { big: "End-to-end", lab: "Schema → UI" },
      { big: "UNN", lab: "Verification API integration" },
      { big: "Cloudinary", lab: "Media pipeline" },
    ],
    shots: [
      { src: "/raised-landing.png", url: "www.raised.ng", cap: "<b>01 —</b> Public landing — connecting students in need with donors who care." },
      { src: "/raised-dashboard.png", url: "app.raised.ng / dashboard", cap: "<b>02 —</b> Student dashboard — funding progress, application status & supporters." },
    ],
    footNote: "RaisED — Nigeria's premier school-fees support platform, powered by the Africa Creative Fund.",
  },
  {
    slug: "the-tuition-project",
    when: "2025 · Live",
    title: "The Tuition Project",
    desc: "Live donation platform funding 50+ verified Nigerian students toward a ₦10M Phase 1 goal.",
    tag: "Next.js · Supabase · Loops",
    status: "Live",
    deck: ["/ttp-landing.png"],
    caseNo: "03",
    meta: "2025 · Social Impact · Web Platform",
    titleLines: ["The Tuition", "Project"],
    sub: "Live donation platform funding 50+ verified Nigerian students.",
    roleLines: ["Lead Technical Engineer", "Sole Engineer"],
    stack: ["Next.js", "Supabase", "Cloudinary", "Loops", "PostgreSQL"],
    liveUrl: "https://www.thetuitionproject.com.ng/",
    liveLabel: "Visit live site →",
    productLab: "02 · Live",
    features: [
      { idx: "01", title: "End-to-end donation platform", body: "Built an end-to-end donation platform supporting 50+ verified Nigerian students toward a ₦10M Phase 1 fundraising goal." },
      { idx: "02", title: "Role-based access", body: "Implemented Supabase RLS policies and role-based access controls for donor, student and admin segments." },
      { idx: "03", title: "Automated donor comms", body: "Integrated Loops for automated donor email sequences — receipts, updates and acknowledgements." },
    ],
    stats: [
      { big: "50+", lab: "Students funded" },
      { big: "₦10M", lab: "Phase 1 goal" },
      { big: "RLS", lab: "Donor / student / admin" },
      { big: "Loops", lab: "Automated emails" },
    ],
    shots: [
      { src: "/ttp-landing.png", url: "www.thetuitionproject.com.ng", cap: "<b>Keeping Nigerian students in school</b> — one thousand naira at a time. A bold, high-contrast donor experience." },
    ],
    footNote: "The Tuition Project — keeping Nigerian students in school, one thousand naira at a time.",
  },
  {
    slug: "swiphr",
    when: "2025 · Live",
    title: "Swiphr",
    desc: "Local-commerce platform connecting buyers & sellers — vendor analytics, orders & wallet.",
    tag: "Next.js · Commerce · Vercel",
    status: "Live",
    deck: ["/swiphr-dashboard.png", "/swiphr-sales.png"],
    caseNo: "04",
    meta: "2025 · Local Commerce · Web Platform",
    titleLines: ["Swiphr"],
    sub: "Revolutionizing local commerce — connecting buyers and sellers with ease using advanced technology.",
    roleLines: ["Software Developer"],
    stack: ["Next.js", "Vercel"],
    liveUrl: "https://swiphr-vendor.vercel.app/home/dashboard",
    liveLabel: "Visit the vendor app →",
    productLab: "02 · Live",
    features: [
      { idx: "01", title: "Performance overview", body: "At-a-glance vendor metrics — total sales, total orders and store visits with period-over-period comparisons." },
      { idx: "02", title: "Sales & earnings analytics", body: "Monthly sales-trend chart and an earning-category breakdown across wears, electronics and others, with weekly spend limits." },
      { idx: "03", title: "Orders & transactions", body: "Recent orders with customer, amount and status, plus incoming, outgoing and pending transaction streams." },
      { idx: "04", title: "Wallet & products", body: "Vendor wallet and product management, with top-performing-product tracking." },
    ],
    stats: [
      { big: "Vendor", lab: "Analytics dashboard" },
      { big: "Orders", lab: "& fulfilment" },
      { big: "Wallet", lab: "& payouts" },
      { big: "Real-time", lab: "Transactions" },
    ],
    shots: [
      { src: "/swiphr-dashboard.png", url: "swiphr-vendor.vercel.app / dashboard", cap: "<b>01 —</b> Vendor dashboard — total sales, orders and store-visit overview at a glance." },
      { src: "/swiphr-sales.png", url: "swiphr-vendor.vercel.app / sales", cap: "<b>02 —</b> Sales trend & earning categories — monthly performance and spend." },
    ],
    footNote: "Swiphr — revolutionizing local commerce, connecting buyers and sellers with ease.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
