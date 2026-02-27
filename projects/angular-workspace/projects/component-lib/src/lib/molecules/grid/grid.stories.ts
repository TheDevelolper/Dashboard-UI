import type { Meta, StoryObj } from '@storybook/angular';
import { GridComponent } from './grid.component';
import { CardComponent } from '../../atoms/card/card.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<GridComponent> = {
  title: 'Molecules/Grid',
  component: GridComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CardComponent],
    }),
  ],
  argTypes: {
    gap: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    cols: { control: { type: 'range', min: 1, max: 12 } },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Usage

\`\`\`html
<particle-grid [gap]="'md'" [cols]="4">
  <particle-card>Item 1</particle-card>
  <particle-card>Item 2</particle-card>
  <particle-card>Item 3</particle-card>
  <particle-card>Item 4</particle-card>
</particle-grid>
\`\`\`
`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<GridComponent>;

const cardTemplate = (n: number) => `
  <particle-card style=" text-align: center;">Card ${n}</particle-card>
`;

export const Default: Story = {
  args: {
    gap: 'md',
    cols: 4,
  },
  render: (args) => ({
    template: `
      <particle-grid [gap]="gap" [cols]="cols">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => cardTemplate(n)).join('')}
      </particle-grid>
    `,
    props: args,
  }),
};

export const TwoColumns: Story = {
  args: {
    gap: 'md',
    cols: 2,
  },
  render: (args) => ({
    template: `
      <particle-grid [gap]="gap" [cols]="cols">
        ${cardTemplate(1)}${cardTemplate(2)}
      </particle-grid>
    `,
    props: args,
  }),
};

export const ThreeColumns: Story = {
  args: {
    gap: 'md',
    cols: 3,
  },
  render: (args) => ({
    template: `
      <particle-grid [gap]="gap" [cols]="cols">
        ${cardTemplate(1)}${cardTemplate(2)}${cardTemplate(3)}
      </particle-grid>
    `,
    props: args,
  }),
};

export const LargeGap: Story = {
  args: {
    gap: 'xl',
    cols: 3,
  },
  render: (args) => ({
    template: `
      <particle-grid [gap]="gap" [cols]="cols">
        ${cardTemplate(1)}${cardTemplate(2)}${cardTemplate(3)}
      </particle-grid>
    `,
    props: args,
  }),
};
