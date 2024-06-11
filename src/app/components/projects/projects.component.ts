import { Component } from '@angular/core';
import { ProjectsListComponent } from '../projects-list/projects-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectsListComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  title = 'Projects';
  projects = [
    { name: 'Bot para Discord', description: 'Bot criado para uso interno no servidor de Engenharia de Computação do IFPB Campus Campina Grande. O bot possui diversas funcionalidades, como: controle de acesso, envio de mensagens automáticas, controle de cargos, entre outros.', technologies: 'Node.js, Discord.js, TypeScript, Prisma ORM e Sqlite.', link: '', codeLink: 'https://github.com/joaopedrodevl/newbot', status: 'Concluído'},
    { name: 'API de catálogo de produtos', description: 'API RESTful para cadastro, edição, exclusão e listagem de produtos. Possui autenticação JWT e controle de acesso por níveis de usuário. Desenvolvida durante o curso de .NET Core da Udemy.', technologies: '.NET Core, C#, Entity Framework Core, JWT, Swagger.', link: '', codeLink: 'https://github.com/joaopedrodevl/APICatalogo', status: 'Concluído'},
    { name: 'Encurtador de URLs', description: 'Encurtador de URLs desenvolvido em Node.js. O usuário insere uma URL e recebe uma URL encurtada. O projeto foi desenvolvido durante o curso de Node.js da Rocketseat.', technologies: 'Node.js, Express, TypeScript, Prisma ORM e Sqlite.', link: '', codeLink: 'ttps://github.com/joaopedrodevl/encurtador_url', status: 'Concluído'},
  ];
}
