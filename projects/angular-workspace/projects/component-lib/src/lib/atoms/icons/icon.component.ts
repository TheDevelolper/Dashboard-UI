import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICONS } from './icons';

export type IconName = keyof typeof ICONS;
export type IconSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'particle-icon',
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
})
export class ParticleIcon {
  readonly name = input.required<IconName>();
  readonly size = input<IconSize>('medium');

  constructor(private sanitizer: DomSanitizer) {}

  protected svgContent = computed(() => {
    const iconName = this.name();
    const svg = ICONS[iconName] || '';
    return this.sanitizer.bypassSecurityTrustHtml(svg) as SafeHtml;
  });

  protected getSizeClass(): string {
    return `icon-${this.size()}`;
  }
}
