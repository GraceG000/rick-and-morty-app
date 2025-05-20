import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {TuiAppearance, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
  selector: 'app-navigation-card',
  standalone: true,
  imports: [
    TuiAppearance,
    TuiCardLarge,
    TuiHeader,
    TuiTitle,
    NgFor
],
  templateUrl: './navigation-card.component.html',
  styleUrl: './navigation-card.component.css'
})
export class NavigationCardComponent {

 cardItem: {title: string, url: string}[] = [
   {
    "title": "Characters",
    "url": "/assets/rick-and-morty3.png",
   },

   {
    "title": "Location",
    "url": "/assets/Meta_reality.webp",
   },

   {
    "title": "Episodes",
    "url": "/assets/rick-and-morty2.jpeg",
   }
 ]

}
