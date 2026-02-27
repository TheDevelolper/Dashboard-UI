import type { Meta, StoryObj } from '@storybook/angular';
import { NavListComponent } from './nav-list.component';
import type { NavListItem } from '../../organisms/sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<NavListComponent> = {
  title: 'Molecules/NavList',
  component: NavListComponent,
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
<particle-nav-list 
  [items]="navItems"
  [collapsed]="false" />
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

type Story = StoryObj<NavListComponent>;

const navItems: readonly NavListItem[] = [
  { label: 'Home', icon: 'home', route: '/home' },
  { label: 'Analytics', icon: 'chart-bar', route: '/analytics' },
  { label: 'Users', icon: 'users', route: '/users' },
  { label: 'Settings', icon: 'cog', route: '/settings' },
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
    collapsed: false,
  },
};
