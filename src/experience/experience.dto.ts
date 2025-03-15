export class ExperienceCreator {
  company_name: string;
  tech_stack: string[];
  company_website: string;
  timeline: string;
  role: string;
  responsibilites: string[];
  job_type: string;
  constructor(
    company_name: string,
    tech_stack: string[],
    company_website: string,
    timeline: string,
    role: string,
    responsibilites: string[],
    job_type: string,
  ) {
    this.company_name = company_name;
    this.tech_stack = tech_stack;
    this.company_website = company_website;
    this.timeline = timeline;
    this.role = role;
    this.responsibilites = responsibilites;
    this.job_type = job_type;
  }
}
