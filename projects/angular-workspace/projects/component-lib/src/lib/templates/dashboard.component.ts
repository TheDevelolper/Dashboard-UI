import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../organisms/sidebar.component';
import type { SidebarNavItem } from '../organisms/sidebar.component';

@Component({
  selector: 'particle-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  @Input() appTitle = 'Dashboard';
  @Input() navItems: readonly SidebarNavItem[] = [];
  @Input() userName = '';
  @Input() userInitials = '';
}
