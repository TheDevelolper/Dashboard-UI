import { Component, input } from '@angular/core';
import type { IconName } from '../atoms/icons/icon.component';

export interface SidebarNavItem {
  label: string;
  icon: IconName;
  route?: string;
}

@Component({
  selector: 'particle-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly appTitle = input<string>('');
  readonly collapsed = input<boolean>(false);
}
