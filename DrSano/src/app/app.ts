import { Component, signal } from '@angular/core';
import { PrimerComponente } from './components/primer-componente/primer-componente';
import { CuartoComponente } from './components/cuarto-componente/cuarto-componente';
import { TercerComponente } from './components/tercer-componente/tercer-componente';

@Component({
  imports: [PrimerComponente, TercerComponente, CuartoComponente],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('DrSano');
}
