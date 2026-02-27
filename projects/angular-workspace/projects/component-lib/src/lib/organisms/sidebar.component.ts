import { Component, input, output } from '@angular/core';
import type { IconName } from '../atoms/icons/icon.component';
import { ParticleIcon } from '../atoms/icons/icon.component';

export interface NavListItem {
  label: string;
  icon: IconName;
  route?: string;
}

@Component({
  selector: 'particle-sidebar',
  standalone: true,
  imports: [ParticleIcon],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  readonly appTitle = input<string>('');
  readonly collapsed = input<boolean>(false);
  readonly isMobile = input<boolean>(false);
  readonly toggle = output<void>();
}
