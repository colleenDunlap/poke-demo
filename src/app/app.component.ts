import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-demo';
  joke: any;
  constructor(private data: DataService){

  }
  ngOnInit(){
    this.data.gimmeJokes().subscribe(res =>{
      this.joke = res;
    })
  }
}
