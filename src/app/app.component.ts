import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre = 'Capitán América';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  porcentaje = 0.2345;
  salario = 24500.55;
  fecha = new Date();
  idioma = 'es';

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llegaron los datos')
    }, 4500);
  } );

  heroe = {
     nombre: 'Logan',
     clave: 'Wolverine',
     edad: 500,
     direccion: {
       calle: 'Sexta Avenida',
       numero: 22
     }
  };
  
}
