import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarNavComponent } from './sidebar-nav.component';
import type { SidebarNavItem } from '../../organisms/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<SidebarNavComponent> = {
  title: 'Molecules/SidebarNav',
  component: SidebarNavComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  argTypes: {
    collapsed: { control: 'boolean' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-sidebar-nav 
  [items]="navItems"
  [collapsed]="false" />
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

type Story = StoryObj<SidebarNavComponent>;

const navItems: readonly SidebarNavItem[] = [
  { label: 'Home', icon: '🏠', route: '/home' },
  { label: 'Analytics', icon: '📊', route: '/analytics' },
  { label: 'Users', icon: '👥', route: '/users' },
  { label: 'Settings', icon: '⚙️', route: '/settings' },
];

export const Default: Story = {
  args: {
    items: navItems,
    collapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    items: navItems,
    collapsed: true,
  },
};

export const LongNavItems: Story = {
  args: {
    items: [
      { label: 'Dashboard', icon: '🏠', route: '/dashboard' },
      { label: 'Analytics', icon: '📈', route: '/analytics' },
      { label: 'Customers', icon: '👥', route: '/customers' },
      { label: 'Products', icon: '📦', route: '/products' },
      { label: 'Orders', icon: '🛒', route: '/orders' },
      { label: 'Messages', icon: '💬', route: '/messages' },
      { label: 'Notifications', icon: '🔔', route: '/notifications' },
      { label: 'Settings', icon: '⚙️', route: '/settings' },
      { label: 'Help & Support', icon: '❓', route: '/help' },
    ],
    collapsed: false,
  },
};
