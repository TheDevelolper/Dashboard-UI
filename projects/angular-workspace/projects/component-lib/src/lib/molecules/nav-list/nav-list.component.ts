import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ParticleIcon } from '../../atoms/icons/icon.component';
import type { NavListItem } from '../../organisms/sidebar.component';

@Component({
  selector: 'particle-nav-list',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, ParticleIcon],
  templateUrl: './nav-list.component.html',
  styleUrl: './nav-list.component.scss',
})
export class NavListComponent {
  readonly items = input<readonly NavListItem[]>([]);
  readonly collapsed = input<boolean>(false);
}
