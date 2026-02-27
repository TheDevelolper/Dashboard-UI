import { Component, input, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../organisms/sidebar.component';
import { NavListComponent } from '../molecules/nav-list/nav-list.component';
import { ParticleIcon } from '../atoms/icons/icon.component';
import type { NavListItem } from '../organisms/sidebar.component';
import { themeSignal, toggleTheme } from '../services/theme.service';

@Component({
  selector: 'particle-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavListComponent, ParticleIcon],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  readonly appTitle = input<string>('Dashboard');
  readonly navItems = input<readonly NavListItem[]>([]);
  readonly userInitials = input<string>('');

  protected readonly sidebarCollapsed = signal(false);
  protected readonly isMobile = signal(false);
  protected readonly mobileSidebarOpen = signal(false);
  protected readonly isDark = themeSignal;

  constructor() {
    this.checkScreenSize();
  }

  private getBreakpoint(): number {
    return parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--breakpoint-mobile') || '768',
      10,
    );
  }

  @HostListener('window:resize')
  protected readonly checkScreenSize = () => {
    this.isMobile.set(window.innerWidth < this.getBreakpoint());
  };

  protected readonly toggleSidebar = () => {
    if (this.isMobile()) {
      this.mobileSidebarOpen.update((v) => !v);
    } else {
      this.sidebarCollapsed.update((v) => !v);
    }
  };

  protected readonly closeMobileSidebar = () => {
    this.mobileSidebarOpen.set(false);
  };

  protected readonly toggleTheme = () => toggleTheme();
}
