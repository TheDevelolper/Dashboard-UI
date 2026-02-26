import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'particle-button',
  imports: [CommonModule],
  templateUrl: './lib-button.component.html',
})
export class ParticleButton {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'medium';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  protected getClasses(): string {
    const base = 'btn';
    const sizeClasses = {
      small: 'btn-small',
      medium: 'btn-medium',
      large: 'btn-large',
    };
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
    };

    const sizeClass = sizeClasses[this.size] || 'btn-medium';
    const variantClass = variantClasses[this.variant] || 'btn-primary';

    return `${base} ${sizeClass} ${variantClass}`;
  }
}
