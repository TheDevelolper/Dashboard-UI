import { Component, output, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'particle-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ParticleButton {
  readonly variant = input<ButtonVariant>('primary');
  readonly size = input<ButtonSize>('medium');
  readonly disabled = input<boolean>(false);
  readonly type = input<ButtonType>('button');
  readonly clicked = output<void>();

  protected onClick(): void {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }

  protected getClasses(): string {
    const base = 'btn';
    const sizeClasses: Record<ButtonSize, string> = {
      small: 'btn-small',
      medium: 'btn-medium',
      large: 'btn-large',
    };
    const variantClasses: Record<ButtonVariant, string> = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
    };

    const sizeClass = sizeClasses[this.size()] || 'btn-medium';
    const variantClass = variantClasses[this.variant()] || 'btn-primary';

    return `${base} ${sizeClass} ${variantClass}`;
  }
}
