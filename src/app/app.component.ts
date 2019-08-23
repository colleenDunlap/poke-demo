import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'poke-demo';
  poke: any;
  constructor(private data: DataService){

  }
  ngOnInit(){
    this.data.gimmeJokes().subscribe(res =>{
      this.poke= res;
      console.log(this.poke)
    })
  }
}
