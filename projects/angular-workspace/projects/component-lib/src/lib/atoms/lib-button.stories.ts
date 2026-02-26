import type { Meta, StoryObj } from '@storybook/angular';
import { ParticleButton } from './lib-button.component';

const meta: Meta<ParticleButton> = {
  title: 'Atoms/Button',
  component: ParticleButton,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<ParticleButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  render: (args) => ({
    props: args,
    template: `<particle-button [variant]="variant" [size]="size" [disabled]="disabled">Primary Button</particle-button>`,
  }),
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render: (args) => ({
    props: args,
    template: `<particle-button [variant]="variant" [size]="size" [disabled]="disabled">Secondary Button</particle-button>`,
  }),
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
  render: (args) => ({
    props: args,
    template: `<particle-button [variant]="variant" [size]="size" [disabled]="disabled">Outline Button</particle-button>`,
  }),
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
  },
  render: (args) => ({
    props: args,
    template: `<particle-button [variant]="variant" [size]="size" [disabled]="disabled">Small Button</particle-button>`,
  }),
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
  },
  render: (args) => ({
    props: args,
    template: `<particle-button [variant]="variant" [size]="size" [disabled]="disabled">Large Button</particle-button>`,
  }),
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
  render: (args) => ({
    props: args,
    template: `<particle-button [variant]="variant" [size]="size" [disabled]="disabled">Disabled Button</particle-button>`,
  }),
};
