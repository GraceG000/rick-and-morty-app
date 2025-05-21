import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TuiTabs } from '@taiga-ui/kit';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    TuiTabs,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

    protected activeItemIndex = 0;

}
