import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Route } from '@angular/router';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import { LandingPageComponent } from '../landing-page/landing-page.component';

@Component({
  selector: 'app-navigation-card',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    NgFor,
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive
],
  templateUrl: './navigation-card.component.html',
  styleUrl: './navigation-card.component.css'
})
export class NavigationCardComponent {

 cardItem: {title: string, url: string, route: string}[] = [
   {
    "title": "Characters",
    "url": "/assets/rick-and-morty3.png",
    "route": "/characters"
   },

   {
    "title": "Location",
    "url": "/assets/Meta_reality.webp",
    "route": "/locations"
   },

   {
    "title": "Episodes",
    "url": "/assets/rick-and-morty2.jpeg",
    "route": "/episodes"
   }
 ]

}
