import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarNavComponent } from './sidebar-nav.component';
import type { SidebarNavItem } from '../../organisms/sidebar.component';

const meta: Meta<SidebarNavComponent> = {
  title: 'Molecules/SidebarNav',
  component: SidebarNavComponent,
  tags: ['autodocs'],
  argTypes: {
    collapsed: { control: 'boolean' },
  },
  parameters: {
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
  { label: 'Home', icon: '🏠', route: '#' },
  { label: 'Analytics', icon: '📊', route: '#' },
  { label: 'Users', icon: '👥', route: '#' },
  { label: 'Settings', icon: '⚙️', route: '#' },
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
      { label: 'Dashboard', icon: '🏠', route: '#' },
      { label: 'Analytics', icon: '📈', route: '#' },
      { label: 'Customers', icon: '👥', route: '#' },
      { label: 'Products', icon: '📦', route: '#' },
      { label: 'Orders', icon: '🛒', route: '#' },
      { label: 'Messages', icon: '💬', route: '#' },
      { label: 'Notifications', icon: '🔔', route: '#' },
      { label: 'Settings', icon: '⚙️', route: '#' },
      { label: 'Help & Support', icon: '❓', route: '#' },
    ],
    collapsed: false,
  },
};
