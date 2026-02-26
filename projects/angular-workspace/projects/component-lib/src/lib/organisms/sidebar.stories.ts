import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';
import type { SidebarNavItem } from './sidebar.component';

const meta: Meta<SidebarComponent> = {
  title: 'Organisms/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  argTypes: {
    appTitle: { control: 'text' },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-sidebar 
  [appTitle]="'My App'" 
  [navItems]="navItems">
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
    navItems,
  },
};

export const Empty: Story = {
  args: {
    appTitle: 'Dashboard',
    navItems: [],
  },
};

export const LongNavItems: Story = {
  args: {
    appTitle: 'Admin Panel',
    navItems: [
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
  },
};
