import type { Meta, StoryObj } from '@storybook/angular';
import { DashboardComponent } from './dashboard.component';
import type { SidebarNavItem } from '../organisms/sidebar.component';

const meta: Meta<DashboardComponent> = {
  title: 'Templates/Dashboard',
  component: DashboardComponent,
  tags: ['autodocs'],
  argTypes: {
    appTitle: { control: 'text' },
    userName: { control: 'text' },
    userInitials: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<DashboardComponent>;

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
    userName: 'Admin User',
    userInitials: 'AU',
  },
};
