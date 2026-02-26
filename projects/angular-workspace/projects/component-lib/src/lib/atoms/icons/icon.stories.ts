import type { Meta, StoryObj } from '@storybook/angular';
import { ParticleIcon } from './icon.component';

const meta: Meta<ParticleIcon> = {
  title: 'Atoms/Icon',
  component: ParticleIcon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: [
        'menu',
        'x',
        'check',
        'home',
        'chart-bar',
        'users',
        'cog',
        'sun',
        'moon',
        'bell',
        'search',
        'plus',
        'minus',
        'chevron-left',
        'chevron-right',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<ParticleIcon>;

export const Menu: Story = {
  args: {
    name: 'menu',
    size: 'medium',
  },
};

export const Home: Story = {
  args: {
    name: 'home',
    size: 'medium',
  },
};

export const Settings: Story = {
  args: {
    name: 'cog',
    size: 'medium',
  },
};

export const Sun: Story = {
  args: {
    name: 'sun',
    size: 'medium',
  },
};

export const Moon: Story = {
  args: {
    name: 'moon',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    name: 'menu',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    name: 'menu',
    size: 'large',
  },
};
