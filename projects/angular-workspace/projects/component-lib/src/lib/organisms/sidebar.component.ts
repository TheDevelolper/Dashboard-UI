import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SidebarNavItem {
  label: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'particle-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() appTitle = '';
  @Input() navItems: readonly SidebarNavItem[] = [];
}
