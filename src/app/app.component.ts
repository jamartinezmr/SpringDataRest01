import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'sakila-angular';
  private algo = 0;

  constructor(){}


  actualizarAlgo(): void{}
}
