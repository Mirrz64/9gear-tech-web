import type { LucideIcon } from "lucide-react";
import { Database, BarChart3, Layout, Binary, Briefcase, Monitor } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  accent: "cyan" | "indigo";
  title: string;
  description: string;
  tags: string[];
};

export const services: Service[] = [
  {
    icon: Database,
    accent: "cyan",
    title: "Data Engineering",
    description:
      "ETL/ELT pipelines, cloud data warehouses and scheduled orchestration, built to run reliably without someone watching them.",
    tags: ["Python", "SQL", "Azure", "PostgreSQL", "dbt", "Airflow", "Docker"],
  },
  {
    icon: BarChart3,
    accent: "indigo",
    title: "Data Analysis & BI",
    description:
      "Turning raw data into dashboards and reports your team actually uses, with metrics that refresh on their own.",
    tags: ["Power BI", "SQL Analytics", "Data Modeling", "KPI Tracking"],
  },
  {
    icon: Layout,
    accent: "cyan",
    title: "Website Design & Development",
    description:
      "Fast, responsive websites and web apps, from business sites and online stores to internal analytics portals.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "UI/UX Design"],
  },
  {
    icon: Binary,
    accent: "indigo",
    title: "Business Analysis",
    description:
      "Mapping how your processes and data really flow, then writing the requirements that turn business goals into a build plan.",
    tags: ["Requirements Gathering", "Process Mapping", "Data Flows"],
  },
  {
    icon: Briefcase,
    accent: "cyan",
    title: "Project Management",
    description:
      "Running technical projects from kickoff to handover, keeping scope, timelines and stakeholders in step.",
    tags: ["Agile/Scrum", "Delivery Roadmaps", "Stakeholder Alignment"],
  },
  {
    icon: Monitor,
    accent: "indigo",
    title: "Remote Office Setup",
    description:
      "Planning and setting up productive home offices: hardware, networking, ergonomics and the software remote teams rely on.",
    tags: ["Workstation Setup", "Networking", "Ergonomics", "Remote Tooling"],
  },
];
