import { City } from 'src/app/models/city.model';
import { CityService } from 'src/app/services/city.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styles: [
  ]
})
export class CityListComponent implements OnInit {

  public cities: Array<City> |  undefined;
  public size = 20;
  constructor(
    private cityService: CityService,
    private router: Router
    ) { }

  ngOnInit(): void {
  this.obtenerTodos();
  }

  obtenerTodos(): void{
    this.cityService.obtenerTodos(this.size)
    .subscribe(
      resp =>{
        this.cities = resp._embedded.ciudad;
        console.log(this.cities);
      },
      err =>{
        console.log(err);
      }
    )
  }


cargaCiudades(): void{
  this.obtenerTodos();
}

editarCiudad(cityId: number): void{
  console.log(cityId);
  this.router.navigateByUrl(`create/${cityId}`); //Redirecciona al url correspondiente
}
}
