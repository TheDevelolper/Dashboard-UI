import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../organisms/sidebar.component';
import { SidebarNavComponent } from '../molecules/sidebar-nav/sidebar-nav.component';
import type { SidebarNavItem } from '../organisms/sidebar.component';
import { themeSignal, toggleTheme } from '../services/theme.service';

@Component({
  selector: 'particle-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SidebarNavComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly appTitle = input<string>('Dashboard');
  readonly navItems = input<readonly SidebarNavItem[]>([]);
  readonly userName = input<string>('');
  readonly userInitials = input<string>('');

  protected readonly sidebarCollapsed = signal(false);
  protected readonly isDark = themeSignal;

  protected readonly toggleSidebar = () => {
    this.sidebarCollapsed.update((v) => !v);
  };

  protected readonly toggleTheme = () => toggleTheme();
}
