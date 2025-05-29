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

  //the currentPage is set to 1, but it will be updated automatically...
  currentPage = 1;
  //this is set to 0, but it will be updated automatically...
  totalPages=0;
  pageSize = 5;
    //injecting the service into the component...
   constructor(private characterService: CharactersService){}
  

   ngOnInit() : void{
     this.getAllCharactersPaginated(this.currentPage)
   }

   getAllCharactersPaginated(page: number){
       this.characterService.getAllCharacters(page).subscribe(
       data =>{ 
        this.characters = data.results;
        this.totalPages = data.info.pages;
        this.currentPage = page;
      }
     )
   }

   pageNavigation(page: number){
    if(page >= 1 && page <= this.totalPages){
      this.getAllCharactersPaginated(page);
    }
   }

   nextPage(){
    this.pageNavigation(this.currentPage + 1);
   }

   prevPage(){
    this.pageNavigation(this.currentPage - 1);
   }
}
