# particle-ui

Angular UI component library featuring a dashboard layout with sidebar navigation, buttons, icons, and more.

## Installation

```bash
npm install particle-ui
```

## Components

### Dashboard

A full dashboard layout with collapsible sidebar, theme toggle, and user dropdown menu.

```typescript
import { DashboardComponent, type NavListItem } from 'particle-ui';

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
import { ParticleButton, type ButtonVariant, type ButtonSize } from 'particle-ui';

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
import { ParticleIcon, type IconName } from 'particle-ui';

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
