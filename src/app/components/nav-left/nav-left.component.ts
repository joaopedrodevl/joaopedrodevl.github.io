import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-left',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './nav-left.component.html',
  styleUrl: './nav-left.component.css'
})
export class NavLeftComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faFileDownload = faFileDownload;
  faEnvelope = faEnvelope;
}
