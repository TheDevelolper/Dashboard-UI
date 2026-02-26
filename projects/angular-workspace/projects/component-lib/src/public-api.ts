/*
 * Public API Surface of component-lib
 */

export { ComponentLib } from './lib/component-lib';

export { ParticleButton } from './lib/atoms/lib-button.component';
export type { ButtonVariant, ButtonSize, ButtonType } from './lib/atoms/lib-button.component';

export { CardComponent } from './lib/atoms/card.component';

export { GridComponent } from './lib/atoms/grid.component';
export type { GridGap, GridCols } from './lib/atoms/grid.component';

export { DashboardComponent } from './lib/templates/dashboard.component';

export { SidebarComponent } from './lib/organisms/sidebar.component';
export type { SidebarNavItem } from './lib/organisms/sidebar.component';

export { SidebarNavComponent } from './lib/molecules/sidebar-nav/sidebar-nav.component';

export { initializeTheme, themeSignal, toggleTheme, setTheme } from './lib/services/theme.service';
