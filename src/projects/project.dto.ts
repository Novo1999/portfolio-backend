export class Project {
  id: number;
  title: string;
  tech_stack: string[];
  image_url: string;
  github_client_url?: string;
  github_server_url?: string;
  live_url: string;
  constructor(
    id: number,
    title: string,
    tech_stack: string[],
    image_url: string,
    live_url: string,
    github_client_url?: string,
    github_server_url?: string,
  ) {
    this.id = id;
    this.github_client_url = github_client_url;
    this.title = title;
    this.tech_stack = tech_stack;
    this.image_url = image_url;
    this.github_server_url = github_server_url;
    this.live_url = live_url;
  }
}
