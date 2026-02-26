import { Component, Input } from '@angular/core';

export interface SidebarNavItem {
  label: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'particle-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() appTitle = '';
}
