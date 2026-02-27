import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type GridGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type GridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface GridResponsiveCols {
  mobile?: GridCols;
  tablet?: GridCols;
  desktop?: GridCols;
}

export function getEffectiveCols(
  cols: GridCols | GridResponsiveCols | undefined,
  defaultCols: GridCols = 1,
): { mobile: number; tablet: number; desktop: number } {
  if (cols === undefined) {
    return { mobile: defaultCols, tablet: defaultCols, desktop: defaultCols };
  }

  if (typeof cols === 'number') {
    return { mobile: cols, tablet: cols, desktop: cols };
  }

  const mobile = cols.mobile ?? defaultCols;
  const tablet = cols.tablet ?? cols.desktop ?? mobile;
  const desktop = cols.desktop ?? cols.tablet ?? mobile;

  return { mobile, tablet, desktop };
}

@Component({
  selector: 'particle-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  readonly gap = input<GridGap>('md');
  readonly cols = input<GridCols | GridResponsiveCols>(1);

  protected readonly responsiveCols = () => getEffectiveCols(this.cols());
}
