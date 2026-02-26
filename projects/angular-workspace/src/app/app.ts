import { Component, signal } from '@angular/core';
import { ParticleButton } from '../../projects/component-lib/src/lib/atoms/lib-button.component';

@Component({
  selector: 'app-root',
  imports: [ParticleButton],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-workspace');
}
