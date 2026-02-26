import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type GridGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

@Component({
  selector: 'particle-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  readonly gap = input<GridGap>('md');
  readonly cols = input<GridCols>(4);
}
