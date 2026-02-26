import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '../../projects/component-lib/src/lib/templates/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-workspace');

  protected readonly navItems = [
    { label: 'Home', icon: '🏠', route: '/home' },
    { label: 'Analytics', icon: '📊', route: '/analytics' },
    { label: 'Users', icon: '👥', route: '/users' },
    { label: 'Settings', icon: '⚙️', route: '/settings' },
  ] as const;
}
