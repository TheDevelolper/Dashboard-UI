import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from '@kiranshub/dashboard-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-workspace');

  protected readonly navItems = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
    { label: 'Users', icon: 'users', route: '/users' },
    { label: 'Settings', icon: 'cog', route: '/settings' },
  ] as const;
}
