import { Component, signal } from '@angular/core';
import { ParticleButton } from '../../projects/component-lib/src/lib/atoms/lib-button.component';
import { DashboardComponent } from '../../projects/component-lib/src/lib/templates/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [ParticleButton, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-workspace');

  protected readonly navItems = [
    { label: 'Dashboard', icon: '🏠', route: '#' },
    { label: 'Analytics', icon: '📊', route: '#' },
    { label: 'Users', icon: '👥', route: '#' },
    { label: 'Settings', icon: '⚙️', route: '#' },
  ] as const;
}
