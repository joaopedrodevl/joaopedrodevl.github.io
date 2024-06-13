import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FontAwesomeModule, NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  year = new Date().getFullYear() - 2004;
}
