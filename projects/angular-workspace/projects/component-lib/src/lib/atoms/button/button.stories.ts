import type { Meta, StoryObj } from '@storybook/angular';
import { ParticleButton } from './button.component';

const meta: Meta<ParticleButton> = {
  title: 'Atoms/Button',
  component: ParticleButton,
  tags: ['autodocs'],
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
  parameters: {
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-button 
  [variant]="'primary'" 
  [size]="'medium'"
  [disabled]="false">
  Click me
</particle-button>
\`\`\`

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \\| 'secondary' \\| 'outline' | 'primary' | Button style variant |
| size | 'small' \\| 'medium' \\| 'large' | 'medium' | Button size |
| disabled | boolean | false | Whether the button is disabled |
`,
      },
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
