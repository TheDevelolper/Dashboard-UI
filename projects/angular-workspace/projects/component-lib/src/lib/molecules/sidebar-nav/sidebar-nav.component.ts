import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

import type { SidebarNavItem } from '../../organisms/sidebar.component';

@Component({
  selector: 'particle-sidebar-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css',
})
export class SidebarNavComponent {
  readonly items = input<readonly SidebarNavItem[]>([]);
  readonly collapsed = input<boolean>(false);
}
