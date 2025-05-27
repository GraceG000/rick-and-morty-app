import { Injectable } from '@angular/core';
//importing HttpClient to facilitate implementing API calls...
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  //injecting the HTTPClient Constructor...
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<any>{
    return this.http.get("https://rickandmortyapi.com/api/character");
  }
}
