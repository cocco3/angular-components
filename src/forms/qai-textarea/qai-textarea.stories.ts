import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { QaiTextarea } from './qai-textarea';
import { argsToAttributes } from '../../../.storybook/utilities';

const meta: Meta<QaiTextarea> = {
  component: QaiTextarea,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=1090-57817&node-type=frame&t=MLkgc0CS2RhZNW99-0',
    },
  },

  // custom render to allow content projection
  render: ({ ...args }) => ({
    props: args,
    template: `
      <textarea qai-textarea ${argsToTemplate(args)}>
      </textarea>
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiTextarea>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};
