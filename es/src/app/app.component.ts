import { Component } from '@angular/core';
import { Nano } from './nano/nano.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Esercitazione Angular';
  nani : Nano[]
  str_interpolation : string

  constructor(){
    this.nani = [new Nano(1, "Dotto"), new Nano(2,"Brontolo"), new Nano(3,"Pisolo"), new Nano(4,"Mammolo"), new Nano(5,"Gongolo"), new Nano(6,"Eolo"), new Nano(7,"Cucciolo")]
    this.str_interpolation = "sopa"
  }
}

