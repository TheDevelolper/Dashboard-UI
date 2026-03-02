
import type { Preview } from '@storybook/angular';
import { initializeTheme } from '../projects/component-lib/src/lib/services/theme.service';

const order = ['Atoms', 'Organisms', 'Molecules', 'Templates'];

interface StorySortObject {
  title: string | string[];
  importPath: string;
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      story: {
        inline: true,
      },
    },
    sidebar: {
      showRoots: true,
    storySort: {
      order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
    },
    },
  },
};

export default preview;
initializeTheme();

