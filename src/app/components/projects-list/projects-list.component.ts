import { Component, Input } from '@angular/core';

interface Project {
  name: string;
  description: string;
  technologies: string;
  link: string;
  codeLink: string;
  status: string;
}

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  @Input() project: Project | undefined;

  constructor() {}
}
