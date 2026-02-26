import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';
import type { SidebarNavItem } from '../organisms/sidebar.component';
import { moduleMetadata } from '@storybook/angular';
import { RouterTestingModule } from '@angular/router/testing';

const meta: Meta<DashboardComponent> = {
  title: 'Templates/Dashboard',
  component: DashboardComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  argTypes: {
    appTitle: { control: 'text' },
    userName: { control: 'text' },
    userInitials: { control: 'text' },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-dashboard 
  [appTitle]="'My Dashboard'" 
  [navItems]="navItems"
  [userName]="'John Doe'"
  [userInitials]="'JD'">
  
  <!-- Your page content here -->
  <h1>Welcome</h1>
  
</particle-dashboard>
\`\`\`

### With Navigation Items

\`\`\`typescript
const navItems = [
  { label: 'Home', icon: '🏠', route: '/home' },
  { label: 'Analytics', icon: '📊', route: '/analytics' },
  { label: 'Settings', icon: '⚙️', route: '/settings' }
];
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<DashboardComponent>;

const navItems: readonly SidebarNavItem[] = [
  { label: 'Home', icon: '🏠', route: '/home' },
  { label: 'Analytics', icon: '📊', route: '/analytics' },
  { label: 'Users', icon: '👥', route: '/users' },
  { label: 'Settings', icon: '⚙️', route: '/settings' },
];

export const Default: Story = {
  args: {
    appTitle: 'My Dashboard',
    navItems,
    userName: 'John Doe',
    userInitials: 'JD',
  },
};

export const Minimal: Story = {
  args: {
    appTitle: 'Dashboard',
    navItems: [],
    userName: '',
    userInitials: 'A',
  },
};

export const LongNavItems: Story = {
  args: {
    appTitle: 'Admin Panel',
    navItems: [
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
    userName: 'Admin User',
    userInitials: 'AU',
  },
};
