# @kiranshub/dashboard-ui

Angular UI component library featuring a dashboard layout with sidebar navigation, buttons, icons, and more.

## Installation

```bash
npm install @kiranshub/dashboard-ui
```

Include the theme styles and override as you see fit for your app

```css

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* ===========================================
     Typography
     =========================================== */
  --font-family:
    'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Font sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;

  /* ===========================================
     Breakpoints
     =========================================== */
  --breakpoint-mobile: 768px;

  /* ===========================================
     Spacing
     =========================================== */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* ===========================================
     Grid
     =========================================== */
  --grid-gap-xs: 0.25rem;
  --grid-gap-sm: 0.5rem;
  --grid-gap-md: 1rem;
  --grid-gap-lg: 1.5rem;
  --grid-gap-xl: 2rem;

  /* ===========================================
     Layout
     =========================================== */
  --sidebar-width: 15.625rem;
  --header-height: 3.75rem;

  /* ===========================================
     Border Radius
     =========================================== */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;

  /* ===========================================
     Button Padding
     =========================================== */
  --padding-button-sm-x: 0.5rem;
  --padding-button-sm-y: 0.25rem;
  --padding-button-md-x: 0.75rem;
  --padding-button-md-y: 0.5rem;
  --padding-button-lg-x: 1rem;
  --padding-button-lg-y: 0.75rem;

  /* ===========================================
     Colors - Primary
     =========================================== */
  --color-primary: #fdb5ce;
  --color-primary-hover: #f5a3c0;
  --color-primary-foreground: #333333;
  --color-btn-text: #333333;

  /* ===========================================
     Colors - Secondary
     =========================================== */
  --color-secondary: #333333;
  --color-secondary-hover: #4a4a4a;
  --color-secondary-foreground: #ffffff;
  --color-btn-secondary-text: #ffffff;

  /* ===========================================
     Colors - Outline
     =========================================== */
  --color-outline: #fdb5ce;
  --color-outline-foreground: #333333;

  /* ===========================================
     Colors - Neutrals
     =========================================== */

  /* ===========================================
     Colors - Background
     =========================================== */
  --color-bg: #fff1f6;
  --color-bg-sidebar: #ffffff;
  --color-bg-sidebar-nav: #ffffff;
  --color-bg-card: #ffffff;

  /* ===========================================
     Colors - Sidebar
     =========================================== */
  --color-sidebar-text: #333333;
  --color-sidebar-text-hover: #555555;
  --color-sidebar-hover: rgba(0, 0, 0, 0.05);
  --color-sidebar-border: #e5e5e5;

  /* ===========================================
     Colors - Text
     =========================================== */
  --color-text: #333333;
  --color-text-muted: #666666;

  /* ===========================================
     Colors - Border
     =========================================== */
  --color-border: #e5e5e5;

  /* ===========================================
     Transitions
     =========================================== */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
}

/* Dark mode - controlled via data-theme attribute */
[data-theme='dark'] {
  /* Primary, Secondary, Outline */
  --color-primary: #fdb5ce;
  --color-primary-hover: #f5a3c0;
  --color-primary-foreground: #333333;
  --color-btn-text: #333333;
  --color-secondary: #333333;
  --color-secondary-hover: #4a4a4a;
  --color-secondary-foreground: #ffffff;
  --color-btn-secondary-text: #ffffff;
  --color-outline: #fdb5ce;
  --color-outline-foreground: #333333;

  --color-bg: #1a1a1a;
  --color-bg-card: #252525;
  --color-bg-sidebar: #141414;
  --color-bg-sidebar-nav: #141414;
  --color-text: #fdb5ce;
  --color-text-muted: #b08fa0;
  --color-border: #3a3a3a;
  --color-sidebar-text: #fdb5ce;
  --color-sidebar-text-hover: #ffc5e0;
  --color-sidebar-hover: rgba(255, 255, 255, 0.08);
  --color-sidebar-border: #2a2a2a;
}


```




## Components

### Dashboard

A full dashboard layout with collapsible sidebar, theme toggle, and user dropdown menu.

```typescript
import { DashboardComponent, type NavListItem } from '@kiranshub/dashboard-ui';

@Component({
  imports: [DashboardComponent],
  ...
})
export class AppComponent {
  readonly navItems: readonly NavListItem[] = [
    { label: 'Home', icon: 'home', route: '/home' },
    { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
    { label: 'Settings', icon: 'cog', route: '/settings' },
  ];
}
```

```html
<particle-dashboard [appTitle]="'My App'" [navItems]="navItems" [userInitials]="'JD'">
  <!-- Your content here -->
  <h1>Welcome</h1>
</particle-dashboard>
```

### Inputs

| Input           | Type                     | Default       | Description                |
| --------------- | ------------------------ | ------------- | -------------------------- |
| `appTitle`      | `string`                 | `'Dashboard'` | Title displayed in sidebar |
| `navItems`      | `readonly NavListItem[]` | `[]`          | Navigation items           |
| `userInitials`  | `string`                 | `''`          | User initials to display   |
| `userMenuItems` | `readonly NavListItem[]` | Default menu  | Dropdown menu items        |

### NavListItem

```typescript
interface NavListItem {
  label: string;
  icon: IconName;
  route?: string;
}
```

### Icon Names

Available icons: `menu`, `chevron-left`, `chevron-right`, `xmark`, `home`, `chart-bar`, `users`, `cog`, `sun`, `moon`, `bell`, `folder`, `shopping-cart`, `mail`, `information-circle`, `user`, `logout`

## Button

```typescript
import { ParticleButton, type ButtonVariant, type ButtonSize } from '@kiranshub/dashboard-ui';

@Component({
  imports: [ParticleButton],
  ...
})
export class AppComponent {
  readonly variant: ButtonVariant = 'primary';
  readonly size: ButtonSize = 'medium';
}
```

```html
<particle-button [variant]="variant" [size]="size"> Click me </particle-button>
```

## Icon

```typescript
import { ParticleIcon, type IconName } from '@kiranshub/dashboard-ui';

@Component({
  imports: [ParticleIcon],
  ...
})
export class AppComponent {
  readonly icon: IconName = 'home';
}
```

```html
<particle-icon [name]="icon" size="medium" />
```

## License

MIT
