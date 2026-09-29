import { Component, signal } from '@angular/core';
import { Main } from './Component1/main/main';

@Component({
  imports: [Main],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('Dr_Sano_2');
}
