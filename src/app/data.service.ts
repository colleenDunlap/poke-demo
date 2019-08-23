import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public default;
  constructor(private http: HttpClient) { 
    this.default = this.http.get('https://pokeapi.co/api/v2/pokemon/bulbasaur');
    this.http.get('https://pokeapi.co/api/v2/pokemon/gengar');
    this.http.get('https://pokeapi.co/api/v2/pokemon/psyduck');
    this.http.get('https://pokeapi.co/api/v2/pokemon/lucario');
  }
  gimmeJokes(){
    let a = this.getRandomInt(4);
    
    if(a==0){
      return this.http.get('https://pokeapi.co/api/v2/pokemon/bulbasaur')
    }
    else if(a==1){
      return this.http.get('https://pokeapi.co/api/v2/pokemon/gengar')
    }
    else if(a==2){
      return this.http.get('https://pokeapi.co/api/v2/pokemon/psyduck')
    }
    else{
      return this.http.get('https://pokeapi.co/api/v2/pokemon/lucario')
    }
    
  }
  public getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
