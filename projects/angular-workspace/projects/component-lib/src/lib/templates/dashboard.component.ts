import { Component, input, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../organisms/sidebar.component';
import { SidebarNavComponent } from '../molecules/sidebar-nav/sidebar-nav.component';
import { ParticleIcon } from '../atoms/icons/icon.component';
import type { SidebarNavItem } from '../organisms/sidebar.component';
import { themeSignal, toggleTheme } from '../services/theme.service';

@Component({
  selector: 'particle-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SidebarNavComponent, ParticleIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  readonly appTitle = input<string>('Dashboard');
  readonly navItems = input<readonly SidebarNavItem[]>([]);
  readonly userName = input<string>('');
  readonly userInitials = input<string>('');

  protected readonly sidebarCollapsed = signal(false);
  protected readonly isMobile = signal(false);
  protected readonly isDark = themeSignal;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  protected readonly checkScreenSize = () => {
    this.isMobile.set(window.innerWidth < 768);
  };

  protected readonly toggleSidebar = () => {
    this.sidebarCollapsed.update((v) => !v);
  };

  protected readonly toggleTheme = () => toggleTheme();
}
