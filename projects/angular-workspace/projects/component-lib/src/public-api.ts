/*
 * Public API Surface of component-lib
 */

export { ComponentLib } from './lib/component-lib';

export { ParticleButton } from './lib/atoms/button/button.component';
export type { ButtonVariant, ButtonSize, ButtonType } from './lib/atoms/button/button.component';

export { ParticleIcon } from './lib/atoms/icons/icon.component';
export type { IconName, IconSize } from './lib/atoms/icons/icon.component';

export { CardComponent } from './lib/atoms/card/card.component';

export { GridComponent } from './lib/molecules/grid/grid.component';
export type { GridGap, GridCols } from './lib/molecules/grid/grid.component';

export { DashboardComponent } from './lib/templates/dashboard.component';

export { SidebarComponent } from './lib/organisms/sidebar.component';
export type { NavListItem } from './lib/organisms/sidebar.component';

export { NavListComponent } from './lib/molecules/nav-list/nav-list.component';

export { initializeTheme, themeSignal, toggleTheme, setTheme } from './lib/services/theme.service';
