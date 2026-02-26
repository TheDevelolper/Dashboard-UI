import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { SidebarNavComponent } from '../molecules/sidebar-nav/sidebar-nav.component';
import type { SidebarNavItem } from './sidebar.component';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<SidebarComponent> = {
  title: 'Organisms/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SidebarNavComponent, RouterTestingModule],
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
  <particle-sidebar-nav [items]="navItems" />
</particle-sidebar>
\`\`\`

### With Navigation Items

\`\`\`typescript
const navItems = [
  { label: 'Home', icon: '🏠', route: '/home' },
  { label: 'Settings', icon: '⚙️', route: '/settings' }
];
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<SidebarComponent>;

const navItems: readonly SidebarNavItem[] = [
  { label: 'Home', icon: '🏠', route: '/home' },
  { label: 'Analytics', icon: '📊', route: '/analytics' },
  { label: 'Users', icon: '👥', route: '/users' },
  { label: 'Settings', icon: '⚙️', route: '/settings' },
];

export const Default: Story = {
  render: () => ({
    template: `
      <particle-sidebar [appTitle]="'My Dashboard'">
        <particle-sidebar-nav [items]="navItems" />
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
        <particle-sidebar-nav [items]="longNavItems" />
      </particle-sidebar>
    `,
    props: {
      longNavItems,
    },
  }),
};

const longNavItems: readonly SidebarNavItem[] = [
  { label: 'Dashboard', icon: '🏠', route: '/dashboard' },
  { label: 'Analytics', icon: '📈', route: '/analytics' },
  { label: 'Customers', icon: '👥', route: '/customers' },
  { label: 'Products', icon: '📦', route: '/products' },
  { label: 'Orders', icon: '🛒', route: '/orders' },
  { label: 'Messages', icon: '💬', route: '/messages' },
  { label: 'Notifications', icon: '🔔', route: '/notifications' },
  { label: 'Settings', icon: '⚙️', route: '/settings' },
  { label: 'Help & Support', icon: '❓', route: '/help' },
];
