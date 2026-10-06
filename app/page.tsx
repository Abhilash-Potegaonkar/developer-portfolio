"use client";

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  Code2,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  MoonStar,
  Orbit,
  ShieldCheck,
  Sparkles,
  SunMedium,
  Users,
} from "lucide-react";

type ThemeMode = "dark" | "light";
type SkillGroup = {
  title: string;
  items: string[];
};

type Metric = {
  value: string;
  label: string;
};

type Project = {
  name: string;
  domain: string;
  stack: string[];
  highlights: string[];
  impact?: string;
  preview: "hr" | "transport" | "dms";
};

type Certification = {
  name: string;
  issuer: string;
  date: string;
  verificationUrl: string;
};

type Strength = {
  title: string;
  description: string;
  icon: typeof Sparkles;
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;

const profileMetrics: Metric[] = [
  { value: "3+", label: "Years Experience" },
  { value: "5000+", label: "Internal Users" },
  { value: "47%", label: "Build Time Reduction" },
  { value: "40%", label: "Build Stability Improvement" },
  { value: "30%", label: "Data-Fetch Error Reduction" },
  { value: "35%", label: "Fewer Navigation Steps" },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "React Hooks"],
  },
  {
    title: "State Management",
    items: ["Zustand", "Context API", "Redux", "Redux Toolkit"],
  },
  {
    title: "UI & Styling",
    items: ["Tailwind CSS", "shadcn/ui", "MUI", "Responsive Design"],
  },
  {
    title: "Forms & Validation",
    items: ["React Hook Form", "Zod", "Complex Conditional Workflows"],
  },
  {
    title: "Performance",
    items: ["Memoization", "Code Splitting", "Lazy Loading", "Webpack", "Turbopack", "Tree Shaking"],
  },
  {
    title: "Architecture",
    items: ["Microservice Frontend Integration", "RBAC", "Next.js SEO", "Clean Code", "Agile/Scrum"],
  },
  {
    title: "Testing",
    items: ["Jest", "React Testing Library", "MSW / API Mocking"],
  },
  {
    title: "Cloud & CI/CD",
    items: ["Azure App Service", "Azure Static Web Apps", "Azure DevOps", "TeamCity", "Git"],
  },
  {
    title: "AI Tools",
    items: ["Claude", "ChatGPT", "GitHub Copilot", "Cursor IDE", "Codeium"],
  },
];

const strengths: Strength[] = [
  {
    title: "Fast Onboarding",
    description: "Pick up new codebases and tools quickly.",
    icon: Orbit,
  },
  {
    title: "Strong Team Collaboration",
    description: "Work closely with backend, design and QA teams.",
    icon: Users,
  },
  {
    title: "Problem-First Thinking",
    description: "Focus on user impact, not just clean code.",
    icon: BrainCircuit,
  },
  {
    title: "AI-Augmented Productivity",
    description: "Use AI tools daily to ship faster and smarter.",
    icon: Sparkles,
  },
  {
    title: "Ownership Mindset",
    description: "Take end-to-end responsibility for features.",
    icon: ShieldCheck,
  },
  {
    title: "Detail-Oriented",
    description: "Care about UI consistency and edge cases.",
    icon: Layers3,
  },
];

const projects: Project[] = [
  {
    name: "HR V2 - Attendance & Leave Management",
    domain: "HRMS",
    stack: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Next.js 15 → 16 migration with React 19 upgrade",
      "Attendance and leave module development",
      "Employee change manager for single and bulk operations",
      "Multi-view monthly muster reports and biometric configuration",
    ],
    impact: "47% build time reduction • 40% stability improvement • zero downtime",
    preview: "hr",
  },
  {
    name: "Transport Management System V2",
    domain: "Transport",
    stack: ["React", "TypeScript", "Next.js", "Google Maps API", "MUI"],
    highlights: [
      "Vehicle booking workflow design",
      "Real-time route visualization",
      "Stop-level tracking with Google Maps API",
      "Fleet operations and master configuration mapping",
    ],
    preview: "transport",
  },
  {
    name: "Data Management System V2 (DMS)",
    domain: "Document Management",
    stack: ["React", "TypeScript", "Next.js", "shadcn/ui"],
    highlights: [
      "Home dashboard and quick access flows",
      "Favorite Master and My Files Master",
      "Personalized centralized document management",
      "~35% fewer navigation steps",
    ],
    preview: "dms",
  },
];

const certifications: Certification[] = [
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "July 2026",
    verificationUrl: "https://verify.skilljar.com/c/gj2v26jwitg2",
  },
  {
    name: "Agents and Workflows",
    issuer: "OpenAI Academy",
    date: "July 2026",
    verificationUrl: "https://academy.openai.com/public/certificate/euc2zjugex",
  },
  {
    name: "Applied AI Foundations",
    issuer: "OpenAI Academy",
    date: "July 2026",
    verificationUrl: "https://academy.openai.com/public/certificate/k6zjv5o43f",
  },
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-[var(--text-soft)]">{description}</p>
    </div>
  );
}

function PreviewGraphic({ type }: { type: Project["preview"] }) {
  if (type === "hr") {
    return (
      <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 shadow-[0_18px_60px_rgba(5,8,18,0.25)]">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span>HR dashboard</span>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium text-[var(--text-soft)]">Attendance</span>
              <span className="rounded-full bg-[var(--accent-soft)] px-2 py-1 text-[10px] font-medium text-[var(--accent-strong)]">Live</span>
            </div>
            <div className="space-y-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="grid grid-cols-[1.2fr_1fr_0.8fr] gap-2 text-[10px] text-[var(--text-soft)]">
                  <div className="h-2 rounded-full bg-[var(--border)]" />
                  <div className="h-2 rounded-full bg-[var(--border)]" />
                  <div className="h-2 rounded-full bg-[var(--accent-soft)]" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">Utilization</p>
              <div className="mt-3 flex items-end gap-2">
                {[38, 52, 68, 44].map((height) => (
                  <span key={height} className="w-full rounded-t-md bg-[var(--accent)]/80" style={{ height: `${height}px` }} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3 text-[10px] text-[var(--text-soft)]">
              <div className="mb-2 flex items-center justify-between">
                <span>Approved</span>
                <span className="font-medium text-[var(--text)]">84%</span>
              </div>
              <div className="h-2 rounded-full bg-[var(--border)]">
                <div className="h-full w-[84%] rounded-full bg-[var(--accent)]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "transport") {
    return (
      <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 shadow-[0_18px_60px_rgba(5,8,18,0.25)]">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
          <span>Route overview</span>
          <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1">Live</span>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[radial-gradient(circle_at_center,_rgba(125,211,252,0.12),_transparent_50%),linear-gradient(180deg,#0e1726,#0a0f1a)] p-3">
          <div className="absolute inset-4 rounded-[1.25rem] border border-dashed border-[var(--border)]" />
          <div className="relative h-40">
            <div className="absolute left-[18%] top-[22%] h-[2px] w-[58%] rotate-12 bg-[var(--accent)]/80" />
            <div className="absolute left-[32%] top-[56%] h-[2px] w-[42%] -rotate-6 bg-[var(--accent)]/80" />
            <div className="absolute left-[28%] top-[32%] h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
            <div className="absolute right-[18%] top-[60%] h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="absolute left-[52%] top-[42%] h-2.5 w-2.5 rounded-full bg-[var(--text)]" />
            <div className="absolute left-[10%] top-[70%] rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1 text-[9px] uppercase tracking-[0.16em] text-[var(--text-soft)]">Stops</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4 shadow-[0_18px_60px_rgba(5,8,18,0.25)]">
      <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
        <span>Documents</span>
        <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2 py-1">My Files</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-[var(--accent-soft)]" />
                <div className="h-2 flex-1 rounded-full bg-[var(--border)]" />
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-3">
          <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            <span>Quick access</span>
            <span>12 items</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-2 text-[9px] text-[var(--text-soft)]">
                <div className="mb-2 h-10 rounded-lg bg-[var(--accent-soft)]" />
                Doc {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return systemPrefersDark ? "dark" : "light";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-15% 0px -45% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Abhilash Potegaonkar home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--text-strong)] text-xs font-semibold text-[var(--bg)]">
              AP
            </span>
            <span className="hidden text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--text-soft)] sm:inline-flex">
              Abhilash Potegaonkar
            </span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "relative text-sm font-medium transition-colors",
                  activeSection === item.href.replace("#", "")
                    ? "text-[var(--text-strong)]"
                    : "text-[var(--text-soft)] hover:text-[var(--text)]",
                ].join(" ")}
              >
                {item.label}
                {activeSection === item.href.replace("#", "") ? (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-[var(--accent)]" />
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label={theme === "dark" ? "Activate light theme" : "Activate dark theme"}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
            >
              {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>

            <button
              type="button"
              aria-label="Open navigation menu"
              onClick={() => setMobileMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)] md:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-medium",
                    activeSection === item.href.replace("#", "")
                      ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                      : "text-[var(--text-soft)] hover:bg-[var(--surface)] hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--text-soft)]">
              <Code2 size={12} />
              Frontend Developer
            </div>

            <h1 className="max-w-2xl text-4xl font-semibold tracking-[-0.06em] text-[var(--text-strong)] sm:text-5xl lg:text-[4rem] lg:leading-[1.05]">
              Building scalable interfaces with React &amp; Next.js.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-soft)]">
              Frontend Developer with 3+ years of experience building ERP and SaaS applications with React, TypeScript and Next.js.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-semibold text-[#031421] shadow-[0_12px_30px_rgba(56,189,248,0.32)] hover:translate-y-[-1px] hover:bg-[var(--accent-strong)]"
              >
                View Projects
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]"
              >
                Contact Me
                <Mail size={16} />
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-soft)]">
              <a href="https://github.com/Abhilash-Potegaonkar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 hover:border-[var(--border-strong)] hover:text-[var(--text)]">
                <Code2 size={14} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/abhilash-potegaonkar-a210aa178" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 hover:border-[var(--border-strong)] hover:text-[var(--text)]">
                <BriefcaseBusiness size={14} />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/8 px-3 py-1.5 text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Open to opportunities
              </span>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-[var(--text-soft)]">
              <a href="/Abhilash-Potegaonkar-CV.txt" download className="inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-4 py-2.5 font-medium text-[var(--text)] hover:bg-[var(--surface-strong)]">
                <BriefcaseBusiness size={16} />
                Download CV
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-32 w-32 rounded-full bg-[var(--accent-soft)] blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_25px_80px_rgba(2,6,23,0.48)]">
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">Profile</p>
                  <h2 className="mt-2 text-xl font-semibold text-[var(--text-strong)]">Abhilash Girish Potegaonkar</h2>
                </div>
                <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-soft)]">
                  Pune, India
                </span>
              </div>

              <div className="mt-5 rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[var(--muted)]">TypeScript</p>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-[var(--text)]">
{`interface Developer {
  name: "Abhilash";
  stack: ["React", "Next.js", "TypeScript"];
  focus: "ERP & SaaS";
}`}
                </pre>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3">
                  <span className="text-sm text-[var(--text-soft)]">Role</span>
                  <span className="text-sm font-medium text-[var(--text)]">Frontend Developer</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3">
                  <span className="text-sm text-[var(--text-soft)]">Focus</span>
                  <span className="text-right text-sm font-medium text-[var(--text)]">React · Next.js · TypeScript</span>
                </div>
                <div className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3">
                  <span className="text-sm text-[var(--text-soft)]">Experience</span>
                  <span className="text-sm font-medium text-[var(--text)]">3+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-4 border-y border-[var(--border)] bg-[var(--surface)] py-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {profileMetrics.map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
              <p className="text-3xl font-semibold tracking-[-0.06em] text-[var(--text-strong)]">{metric.value}</p>
              <p className="mt-2 text-sm text-[var(--text-soft)]">{metric.label}</p>
            </div>
          ))}
        </section>

        <section id="about" className="scroll-mt-24 py-20">
          <SectionHeader
            eyebrow="About"
            title="About Me"
            description="Frontend Developer with 3+ years of experience building scalable ERP and SaaS systems across Transport, HRMS and DMS domains."
          />

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_60px_rgba(2,6,23,0.18)]">
              <p className="text-base leading-8 text-[var(--text-soft)]">
                I build enterprise frontend systems that turn complex business processes into clear, scalable, and reliable user experiences. My work focuses on ERP and SaaS dashboards, operational workflows, RBAC-driven access patterns, and form-heavy experiences where consistency, speed, and usability matter.
              </p>
              <p className="mt-5 text-base leading-8 text-[var(--text-soft)]">
                I collaborate closely with backend, product, and design teams to align API contracts, improve frontend performance, and keep the architecture maintainable as systems grow. I also use AI tools like Claude, GitHub Copilot, and ChatGPT to accelerate delivery while maintaining quality and maintainability.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--bg-elevated),var(--surface-strong))] p-6 text-[var(--text)] shadow-[0_20px_60px_rgba(2,6,23,0.22)]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Professional Summary</p>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                <li className="flex gap-2"><span className="mt-2 text-[var(--accent)]">•</span><span>Design and build enterprise frontend systems for complex operational workflows</span></li>
                <li className="flex gap-2"><span className="mt-2 text-[var(--accent)]">•</span><span>Develop RBAC-based dashboards and role-driven business tools for large user bases</span></li>
                <li className="flex gap-2"><span className="mt-2 text-[var(--accent)]">•</span><span>Create reusable UI components and scalable design patterns across product surfaces</span></li>
                <li className="flex gap-2"><span className="mt-2 text-[var(--accent)]">•</span><span>Build form-heavy experiences that balance clarity, usability, and business accuracy</span></li>
                <li className="flex gap-2"><span className="mt-2 text-[var(--accent)]">•</span><span>Optimize React and Next.js applications for performance, maintainability, and scale</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {strengths.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_16px_40px_rgba(2,6,23,0.08)]">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent-soft)] text-[var(--accent-strong)]">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-strong)]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-soft)]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 py-20">
          <SectionHeader
            eyebrow="Skills"
            title="Technical strengths"
            description="A practical mix of product-facing UI implementation, architecture decisions and enterprise-grade workflows."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="mb-4 text-lg font-semibold text-[var(--text-strong)]">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1.5 text-[11px] font-medium text-[var(--text-soft)]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 py-20">
          <SectionHeader
            eyebrow="Experience"
            title="Career timeline"
            description="Core frontend ownership across ERP and SaaS products in a collaborative agile environment."
          />

          <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_20px_60px_rgba(2,6,23,0.16)] sm:p-7">
            <div className="relative pl-0 sm:pl-8">
              <div className="absolute left-3.5 top-2 hidden h-[calc(100%-0.5rem)] w-px bg-[var(--border)] sm:block" />
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute -left-2 top-1 hidden h-4 w-4 rounded-full border-4 border-[var(--bg)] bg-[var(--accent)] sm:block" />
                  <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface-soft)] p-5 sm:ml-8">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">2023 — 2026</p>
                        <h3 className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">Frontend Developer</h3>
                        <p className="mt-2 text-base text-[var(--text-soft)]">JUNO Software Systems Pvt. Ltd.</p>
                      </div>
                      <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-[var(--text-soft)]">
                        Pune, India
                      </span>
                    </div>

                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                      <li className="flex gap-3"><Check size={16} className="mt-1 text-[var(--accent-strong)]" /><span>Built and maintained ERP web modules for Transport, HRMS and DMS serving 500+ internal users using React, TypeScript and Next.js.</span></li>
                      <li className="flex gap-3"><Check size={16} className="mt-1 text-[var(--accent-strong)]" /><span>Integrated REST APIs using parallel calls, shared async utility patterns and partial failure handling, reducing data-fetch errors by approximately 30% across modules.</span></li>
                      <li className="flex gap-3"><Check size={16} className="mt-1 text-[var(--accent-strong)]" /><span>Implemented admin dashboards with advanced filters, date pickers and RBAC supporting multiple user permission levels.</span></li>
                      <li className="flex gap-3"><Check size={16} className="mt-1 text-[var(--accent-strong)]" /><span>Improved frontend performance through component memoization, state batching and a shared design system using shadcn/ui, MUI and Tailwind CSS.</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-24 py-20">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work"
            description="Professional system work spanning enterprise operations, dashboards and highly interactive workflow products."
          />

          <article className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--bg-elevated),var(--surface-strong))] p-5 shadow-[0_25px_80px_rgba(2,6,23,0.26)] sm:p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--text)]">
                Featured Project
              </span>
              <span className="text-sm text-[var(--muted)]">{projects[0].domain}</span>
            </div>

            <div className="mt-5 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-2xl font-semibold text-[var(--text-strong)] sm:text-3xl">{projects[0].name}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {projects[0].stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 text-[11px] text-[var(--text-soft)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">Build Time</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">47%</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">Stability</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">40%</p>
                  </div>
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                    <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">Downtime</p>
                    <p className="mt-2 text-2xl font-semibold text-[var(--text-strong)]">Zero</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                  {projects[0].highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5">
                <PreviewGraphic type={projects[0].preview} />
                <div className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text)]">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-[var(--muted)]">Impact</p>
                  <p className="mt-3 text-lg font-medium text-[var(--text-strong)]">{projects[0].impact}</p>
                </div>
              </div>
            </div>
          </article>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {projects.slice(1).map((project) => (
              <article key={project.name} className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.12)] transition-all duration-200 hover:-translate-y-1 hover:border-[var(--border-strong)]">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">{project.domain}</span>
                  <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--text-soft)]">
                    Project
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[var(--text-strong)]">{project.name}</h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 text-[11px] text-[var(--text-soft)]">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <PreviewGraphic type={project.preview} />
                </div>

                <ul className="mt-5 space-y-3 text-sm leading-7 text-[var(--text-soft)]">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[var(--text)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="scroll-mt-24 py-20">
          <SectionHeader
            eyebrow="Certifications"
            title="Continuous learning"
            description="Recent professional certifications focused on AI workflows, modern product delivery and applied foundations."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {certifications.map((certification) => (
              <article key={certification.name} className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_18px_50px_rgba(2,6,23,0.12)]">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">{certification.issuer}</p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--text-strong)]">{certification.name}</h3>
                <p className="mt-2 text-sm text-[var(--text-soft)]">{certification.date}</p>
                <a href={certification.verificationUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)] hover:text-[var(--accent)]">
                  Verify Certificate
                  <ExternalLink size={14} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-24 py-20">
          <SectionHeader
            eyebrow="Education"
            title="Academic background"
            description="Formal training in advanced computing alongside a grounding in engineering fundamentals."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">PG-DAC</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--text-strong)]">C-DAC, Pune</h3>
              <p className="mt-2 text-sm text-[var(--text-soft)]">September 2022 — March 2023</p>
              <p className="mt-4 text-sm text-[var(--text-soft)]">Post Graduate Diploma in Advanced Computing (Information Technology)</p>
            </article>

            <article className="rounded-[1.75rem] border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[var(--muted)]">B.E. Engineering</p>
              <h3 className="mt-3 text-xl font-semibold text-[var(--text-strong)]">College of Engineering Hadapsar, Pune</h3>
              <p className="mt-2 text-sm text-[var(--text-soft)]">2019</p>
              <p className="mt-4 text-sm text-[var(--text-soft)]">65%</p>
            </article>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-20">
          <div className="rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(135deg,var(--bg-elevated),var(--surface-strong))] p-7 text-[var(--text)] shadow-[0_25px_80px_rgba(2,6,23,0.22)] sm:p-10">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">Contact</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.04em] text-[var(--text-strong)] sm:text-4xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-soft)]">
              Interested in working together or discussing a frontend opportunity?
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:abhilashpotegaonkar88@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--text-strong)] px-5 py-3 text-sm font-semibold text-[var(--bg)] hover:opacity-90">
                <Mail size={16} />
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/abhilash-potegaonkar-a210aa178" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]">
                <BriefcaseBusiness size={16} />
                LinkedIn
              </a>
              <a href="https://github.com/Abhilash-Potegaonkar" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--text)] hover:border-[var(--border-strong)] hover:bg-[var(--surface-strong)]">
                <Code2 size={16} />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-[var(--text-soft)] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-medium text-[var(--text-strong)]">Abhilash Girish Potegaonkar</p>
            <p className="mt-1">Frontend Developer • React • Next.js • TypeScript</p>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/Abhilash-Potegaonkar" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
              <Code2 size={14} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/abhilash-potegaonkar-a210aa178" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
              <BriefcaseBusiness size={14} />
              LinkedIn
            </a>
            <a href="mailto:abhilashpotegaonkar88@gmail.com" className="inline-flex items-center gap-2 hover:text-[var(--text)]">
              <Mail size={14} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
