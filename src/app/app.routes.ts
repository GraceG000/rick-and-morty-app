import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CharactersComponent } from './components/characters/characters.component';
import { LocationsComponent } from './components/locations/locations.component';
import { EpisodesComponent } from './components/episodes/episodes.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'characters', component: CharactersComponent},
    {path: 'locations', component: LocationsComponent},
    {path: 'episodes', component: EpisodesComponent}
];
