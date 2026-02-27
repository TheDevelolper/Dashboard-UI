import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { NavListComponent } from '../molecules/nav-list/nav-list.component';
import type { NavListItem } from './sidebar.component';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<SidebarComponent> = {
  title: 'Organisms/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [NavListComponent, RouterTestingModule],
    }),
  ],
  argTypes: {
    appTitle: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-sidebar [appTitle]="'My App'">
  <particle-nav-list [items]="navItems" />
</particle-sidebar>
\`\`\`

### With Navigation Items

\`\`\`typescript
const navItems = [
  { label: 'Home', icon: 'home', route: '/home' },
  { label: 'Settings', icon: 'cog', route: '/settings' }
];
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<SidebarComponent>;

const navItems: readonly NavListItem[] = [
  { label: 'Home', icon: 'home', route: '/home' },
  { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
  { label: 'Users', icon: 'users', route: '/users' },
  { label: 'Settings', icon: 'cog', route: '/settings' },
];

export const Default: Story = {
  render: () => ({
    template: `
      <particle-sidebar [appTitle]="'My Dashboard'">
        <particle-nav-list [items]="navItems" />
      </particle-sidebar>
    `,
    props: {
      navItems,
    },
  }),
};

export const Empty: Story = {
  render: () => ({
    template: `
      <particle-sidebar [appTitle]="'Dashboard'">
        <p style="padding: 1rem; color: var(--color-sidebar-text); opacity: 0.7;">No navigation items</p>
      </particle-sidebar>
    `,
  }),
};

export const LongNavItems: Story = {
  render: () => ({
    template: `
      <particle-sidebar [appTitle]="'Admin Panel'">
        <particle-nav-list [items]="longNavItems" />
      </particle-sidebar>
    `,
    props: {
      longNavItems,
    },
  }),
};

const longNavItems: readonly NavListItem[] = [
  { label: 'Dashboard', icon: 'home', route: '/dashboard' },
  { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
  { label: 'Customers', icon: 'users', route: '/customers' },
  { label: 'Products', icon: 'folder', route: '/products' },
  { label: 'Orders', icon: 'shopping-cart', route: '/orders' },
  { label: 'Messages', icon: 'mail', route: '/messages' },
  { label: 'Notifications', icon: 'bell', route: '/notifications' },
  { label: 'Settings', icon: 'cog', route: '/settings' },
  { label: 'Help & Support', icon: 'information-circle', route: '/help' },
];
