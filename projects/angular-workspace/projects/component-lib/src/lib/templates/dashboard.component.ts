import { Component, input, signal, HostListener, ViewChild, ElementRef } from '@angular/core';
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
  readonly userMenuItems = input<readonly NavListItem[]>([
    { label: 'Manage Account', icon: 'user', route: '/account' },
    { label: 'Settings', icon: 'cog', route: '/settings' },
    { label: 'Log Out', icon: 'logout', route: '/logout' },
  ]);

  protected readonly sidebarCollapsed = signal(false);
  protected readonly isMobile = signal(false);
  protected readonly mobileSidebarOpen = signal(false);
  protected readonly isDark = themeSignal;
  protected readonly userMenuOpen = signal(false);

  @ViewChild('userMenu') private readonly userMenu?: ElementRef<HTMLDivElement>;

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

  @HostListener('document:click', ['$event'])
  protected readonly onDocumentClick = (event: MouseEvent) => {
    if (
      this.userMenuOpen() &&
      this.userMenu &&
      !this.userMenu.nativeElement.contains(event.target as Node)
    ) {
      this.userMenuOpen.set(false);
    }
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

  protected readonly toggleUserMenu = () => {
    this.userMenuOpen.update((v) => !v);
  };

  protected readonly closeUserMenu = () => {
    this.userMenuOpen.set(false);
  };
}
