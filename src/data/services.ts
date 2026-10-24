export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    title: "Data Engineering",
    description:
      "ETL/ELT pipelines, cloud data warehouses and scheduled orchestration that run without someone watching them.",
  },
  {
    title: "Data Analysis & BI",
    description: "Dashboards and reports your team actually uses, with metrics that refresh on their own.",
  },
  {
    title: "Website Design & Development",
    description:
      "Fast, responsive websites and web apps, from business sites and online stores to analytics portals.",
  },
  {
    title: "Business Analysis",
    description: "Mapping how your processes and data really flow, then turning goals into a build plan.",
  },
  {
    title: "Project Management",
    description:
      "Technical projects run from kickoff to handover, with scope, timelines and stakeholders kept in step.",
  },
  {
    title: "Remote Office Setup",
    description:
      "Productive home offices: hardware, networking, ergonomics and the software remote teams rely on.",
  },
];
