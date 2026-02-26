import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ParticleIcon } from '../../atoms/icons/icon.component';
import type { SidebarNavItem } from '../../organisms/sidebar.component';

@Component({
  selector: 'particle-sidebar-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ParticleIcon],
  templateUrl: './sidebar-nav.component.html',
  styleUrl: './sidebar-nav.component.css',
})
export class SidebarNavComponent {
  readonly items = input<readonly SidebarNavItem[]>([]);
  readonly collapsed = input<boolean>(false);
}
