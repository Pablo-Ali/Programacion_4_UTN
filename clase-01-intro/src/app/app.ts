import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tutoriales } from './tutoriales/tutoriales';

@Component({
  selector: 'app-root', //¿Cómo lo instancio?
  imports: [RouterOutlet, Tutoriales], //¿Qué agrego?
  templateUrl: './app.html', //¿Qué renderizo?
  styleUrl: './app.css' //¿Qué estilos?
})
export class App {
  titulo: string = 'Clase 01';
}
