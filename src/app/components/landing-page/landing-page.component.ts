import { Component } from '@angular/core';
import { NavigationCardComponent } from '../navigation-card/navigation-card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NavigationCardComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
