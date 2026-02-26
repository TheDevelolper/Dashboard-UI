# AGENTS.md - Agent Coding Guidelines

This document provides guidelines for agents working on this Angular + pnpm workspace codebase.

## Project Structure

```
/
├── pnpm-workspace.yaml              # pnpm workspace config
├── package.json                     # root package with scripts
└── projects/angular-workspace/     # Angular workspace
    ├── src/                        # Angular app source
    │   ├── app/                   # App components
    │   └── styles.scss            # Global styles
    └── projects/component-lib/    # Component library
        └── src/lib/
            ├── atoms/              # Atomic Design: basic components
            ├── molecules/          # Groups of atoms
            ├── organisms/          # Complex components
            └── templates/         # Layout templates
```

## Signal Usage

All component inputs should use Angular signals instead of the `@Input()` decorator.

### Use `input()` for Component Inputs

```typescript
// Good - using signals
@Component({...})
export class MyComponent {
  readonly title = input<string>('Default Title');
  readonly items = input<Item[]>([]);
  readonly disabled = input<boolean>(false);
}

// In template, call as functions:
<my-component [title]="title()" [items]="items()" />
```

### Do Not Use `@Input()` Decorator

```typescript
// Avoid - using @Input
@Component({...})
export class MyComponent {
  @Input() title = 'Default Title';  // Don't use this
}
```

## Build Commands

### Root Commands (from project root)

```bash
# Start development server
pnpm start

# Build the Angular app
pnpm build

# Build only the app
pnpm build:app

# Build only the component library
pnpm build:lib
```

### Angular Workspace Commands

```bash
cd projects/angular-workspace

# Start dev server
pnpm start
# or
npx ng serve

# Start on specific port
npx ng serve --port 4201

# Build app
npx ng build

# Build library
npx ng build component-lib

# Watch mode for development
npx ng build --watch --configuration development
```

### Testing

```bash
# Run tests (via Angular)
cd projects/angular-workspace
npx ng test

# Run tests in watch mode
npx ng test --watch

# Run a single test file
npx ng test --include="**/lib-button.component.spec.ts"

# Run tests with coverage
npx ng test --coverage
```

### Storybook

```bash
# Start Storybook (runs on port 6006 by default)
pnpm storybook

# Build Storybook static files
pnpm build:storybook
```

**Notes:**

- Run `npx storybook automigrate` if you encounter migration errors

## Theme System

The project uses CSS variables for theming. Theme variables are defined in `src/theme.css` and imported via `src/styles.scss`.

### Theme File Location

- `projects/angular-workspace/src/theme.css` - CSS custom properties

### Theme Variables

```css
:root {
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Padding */
  --padding-button-sm-x: 0.5rem;
  --padding-button-sm-y: 0.25rem;
  --padding-button-md-x: 0.75rem;
  --padding-button-md-y: 0.5rem;
  --padding-button-lg-x: 1rem;
  --padding-button-lg-y: 0.75rem;

  /* Font sizes */
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;

  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;

  /* Colors */
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-secondary: #4b5563;
  --color-secondary-hover: #374151;
  --color-white: #ffffff;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-normal: 200ms ease;
}
```

### Using Theme in Components

- Button styles are defined globally in `src/styles.scss`
- Use CSS variables (e.g., `var(--color-primary)`) instead of hardcoded values
- Component-specific styles should use the theme variables

## Code Style Guidelines

### TypeScript

- **Strict mode enabled** - All strict TypeScript options are on
- **Use explicit types** - Always type function parameters and return values
- **Use `readonly`** - For arrays and objects that won't be mutated
- **Use `const`** - Prefer const over let
- **No implicit any** - Never use implicit any, always type explicitly
- **Use `import type`** - Use `import type` for types only

```typescript
// Good
import { Component, Input, Output } from '@angular/core';
import type { ButtonVariant } from './button.types';

export interface User {
  readonly id: string;
  readonly name: string;
}

@Component({...})
export class MyComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() disabled = false; // primitive, can infer

  protected readonly title = signal('Hello');
}
```

### Angular Components

- **Standalone components** - Use standalone components (not NgModules)
- **Use `styleUrl`** - Separate CSS files (not inline styles)
- **Use `templateUrl`** - Separate HTML templates
- **Use signals** - Prefer Angular signals for reactive state
- **Use `protected`** - Expose data to template as protected
- **Use `input()`** - Use signal-based inputs instead of `@Input()`

```typescript
@Component({
  selector: 'particle-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ParticleButton {
  readonly variant = input<ButtonVariant>('primary');
}
```

### Naming Conventions

| Element          | Convention               | Example               |
| ---------------- | ------------------------ | --------------------- |
| Components       | PascalCase + descriptive | `ParticleButton`      |
| Selectors        | kebab-case + prefix      | `particle-button`     |
| Files            | kebab-case               | `button.component.ts` |
| Types/Interfaces | PascalCase               | `ButtonVariant`       |
| Constants        | SCREAMING_SNAKE_CASE     | `MAX_LENGTH`          |
| CSS Classes      | kebab-case               | `.btn-primary`        |

### Component Prefix

The library uses `particle-` as the component prefix (e.g., `<particle-button>`).

### Import Order

1. Angular core imports
2. Angular common imports
3. Third-party imports
4. Local imports (relative paths)
5. Type imports

```typescript
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParticleButton } from './lib/atoms/button/button.component';
import type { ButtonVariant } from './lib/atoms/button/button.component';
```

### CSS / Tailwind

- **Use Tailwind v4** - Use `@use "tailwindcss"` at the top of CSS files
- **Component-scoped styles** - Keep styles in component CSS files
- **Use utility classes** - Prefer Tailwind utilities over custom CSS

```css
@use 'tailwindcss';

.btn {
  @apply border-none rounded font-medium transition-all duration-200;
}
```

### Error Handling

- **Use typed errors** - Create custom error types
- **Graceful degradation** - Handle errors in templates with `@if`
- **Use try/catch** - For async operations

```typescript
try {
  await this.service.save(data);
} catch (error) {
  console.error('Save failed:', error);
}
```

### HTML Templates

- **Use control flow** - Use Angular's `@if`, `@for`, `@switch` (not *ngIf, *ngFor)
- **Use attribute binding** - `[disabled]="isDisabled"` not `disabled="{{isDisabled}}"`
- **Use event binding** - `(click)="onClick()"` not `on-click="onClick()"`
- **Call signal inputs as functions** - `[title]="title()"` not `[title]="title"`

```html
@if (isLoading) {
<span>Loading...</span>
} @for (item of items; track item.id) {
<div>{{ item.name }}</div>
}

<particle-button [disabled]="isDisabled()" (click)="onClick()"> Click me </particle-button>
```

### Linting & Formatting

- **Prettier** - Code is formatted with Prettier
- **No manual formatting** - Let Prettier handle it
- **Run before commit** - Ensure code is formatted before committing

### Component Library Structure (Atomic Design)

```
lib/
├── atoms/           # Basic building blocks (buttons, inputs, icons)
├── molecules/      # Simple component groups
├── organisms/      # Complex, full-featured components
└── templates/      # Page layouts
```

- Add new components to the appropriate folder
- Export all public APIs from `public-api.ts`
- Use the prefix `particle-` for all library components
- Use named exports in `public-api.ts` for better tree shaking

### Conventional Commits

Use [Conventional Commits](https://www.conventionalcommits.org/) format for commit messages:

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation only
- `style` - Code style (formatting, no logic change)
- `refactor` - Code refactoring
- `test` - Adding/updating tests
- `chore` - Build, tooling, dependencies

**Examples:**

```
feat(button): add outline variant
fix(button): resolve padding issue on primary variant
docs(readme): update installation instructions
```
