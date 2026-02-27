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
  [userInitials]="'JD'">
  
  <!-- Your page content here -->
  <h1>Welcome</h1>
  
</particle-dashboard>
\`\`\`

### With Navigation Items

\`\`\`typescript
const navItems = [
  { label: 'Home', icon: 'home', route: '/home' },
  { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
  { label:: 'cog 'Settings', icon', route: '/settings' }
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
  { label: 'Home', icon: 'home', route: '/home' },
  { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
  { label: 'Users', icon: 'users', route: '/users' },
  { label: 'Settings', icon: 'cog', route: '/settings' },
];

export const Default: Story = {
  args: {
    appTitle: 'My Dashboard',
    navItems,
    userInitials: 'JD',
  },
};

export const Minimal: Story = {
  args: {
    appTitle: 'Dashboard',
    navItems: [],
    userInitials: 'A',
  },
};

export const LongNavItems: Story = {
  args: {
    appTitle: 'Admin Panel',
    navItems: [
      { label: 'Dashboard', icon: 'home', route: '/dashboard' },
      { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
      { label: 'Customers', icon: 'users', route: '/customers' },
      { label: 'Products', icon: 'folder', route: '/products' },
      { label: 'Orders', icon: 'shopping-cart', route: '/orders' },
      { label: 'Messages', icon: 'mail', route: '/messages' },
      { label: 'Notifications', icon: 'bell', route: '/notifications' },
      { label: 'Settings', icon: 'cog', route: '/settings' },
      { label: 'Help & Support', icon: 'information-circle', route: '/help' },
    ],
    userInitials: 'AU',
  },
};
