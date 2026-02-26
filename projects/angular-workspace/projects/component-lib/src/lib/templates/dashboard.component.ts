import { Component, Input } from '@angular/core';
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
  @Input() appTitle = 'Dashboard';
  @Input() navItems: readonly SidebarNavItem[] = [];
  @Input() userName = '';
  @Input() userInitials = '';

  protected readonly isDark = themeSignal;
  protected readonly toggleTheme = () => toggleTheme();
}
