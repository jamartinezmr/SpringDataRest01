import { CityService } from 'src/app/services/city.service';
import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-create',
  templateUrl: './city-create.component.html',
  styles: [
  ]
})
export class CityCreateComponent implements OnInit {

  public city: City | undefined;
  public nombre = '';
  public submitted = false;

  constructor(
    private cityService: CityService,
    private activateRoute: ActivatedRoute
      ) {
    console.log(this.nombre);

  }

  ngOnInit(): void {
    const cityId = this.activateRoute.snapshot.params.id;

    if (cityId !== undefined){
      console.log(cityId);
    }
  }

  guardar(): void {
    console.log(this.nombre);
    this.city = new City(this.nombre, new Date().toISOString(), 2, 'AC');

    console.log(this.city);

    this.cityService.crear(this.city)//manejo de observable
    .subscribe(
      response => {//esto si no falla
        console.log('resultado: ');
        console.log(response);
        this.submitted = true;
      },
      err => {//esto si falla
        console.log(err);
      }
    );
  }

  obtenerCiudad(cityId: number){
    this.cityService.obtenerPorId(cityId)
    .subscribe(
      resp => {
        this.city = resp;

        this.nombre = this.city.city;
      },
      err => {
        console.log(err);
      }
    );
  }

  nueva(): void {
    this.submitted = false;
    this.nombre = '';

  }

}

