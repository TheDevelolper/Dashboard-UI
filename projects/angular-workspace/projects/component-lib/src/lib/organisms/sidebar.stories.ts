import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import { SidebarNavComponent } from '../molecules/sidebar-nav/sidebar-nav.component';
import type { SidebarNavItem } from './sidebar.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<SidebarComponent> = {
  title: 'Organisms/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [SidebarNavComponent],
    }),
  ],
  argTypes: {
    appTitle: { control: 'text' },
  },
  parameters: {
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
  { label: 'Home', icon: '🏠', route: '#' },
  { label: 'Analytics', icon: '📊', route: '#' },
  { label: 'Users', icon: '👥', route: '#' },
  { label: 'Settings', icon: '⚙️', route: '#' },
];

export const Default: Story = {
  args: {
    appTitle: 'My Dashboard',
  },
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
  args: {
    appTitle: 'Dashboard',
  },
  render: () => ({
    template: `
      <particle-sidebar [appTitle]="'Dashboard'">
        <p style="padding: 1rem; color: rgba(255,255,255,0.5);">No navigation items</p>
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
  { label: 'Dashboard', icon: '🏠', route: '#' },
  { label: 'Analytics', icon: '📈', route: '#' },
  { label: 'Customers', icon: '👥', route: '#' },
  { label: 'Products', icon: '📦', route: '#' },
  { label: 'Orders', icon: '🛒', route: '#' },
  { label: 'Messages', icon: '💬', route: '#' },
  { label: 'Notifications', icon: '🔔', route: '#' },
  { label: 'Settings', icon: '⚙️', route: '#' },
  { label: 'Help & Support', icon: '❓', route: '#' },
];
