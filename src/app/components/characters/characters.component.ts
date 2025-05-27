import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters/characters.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {
  characters: any[] =[];
    //injecting the service into the component...
   constructor(private characterService: CharactersService){}
  

   ngOnInit() : void{
     this.characterService.getAllCharacters().subscribe(
       data =>{ 
        this.characters = data.results;
      }
     )
   }

}
