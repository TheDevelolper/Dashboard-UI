import type { Meta, StoryObj } from '@storybook/angular';
import { CardComponent } from './card.component';

const meta: Meta<CardComponent> = {
  title: 'Atoms/Card',
  component: CardComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-card>
  Card content here
</particle-card>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<CardComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <particle-card>
        <h3 style="margin: 0 0 0.5rem 0; font-weight: 600;">Card Title</h3>
        <p style="margin: 0; color: var(--color-text-muted);">This is card content with some text.</p>
      </particle-card>
    `,
  }),
};

export const WithActions: Story = {
  render: () => ({
    template: `
      <particle-card>
        <h3 style="margin: 0 0 0.5rem 0; font-weight: 600;">Card Title</h3>
        <p style="margin: 0 0 1rem 0; color: var(--color-text-muted);">This is card content with some text.</p>
        <div style="display: flex; gap: 0.5rem;">
          <button style="padding: 0.5rem 1rem; background: var(--color-primary); color: var(--color-primary-foreground); border: none; border-radius: var(--radius-sm);">Action</button>
          <button style="padding: 0.5rem 1rem; background: transparent; border: 1px solid var(--color-border); border-radius: var(--radius-sm);">Cancel</button>
        </div>
      </particle-card>
    `,
  }),
};
