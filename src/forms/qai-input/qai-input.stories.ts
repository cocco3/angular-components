import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiInput, QaiInputTypes } from './qai-input';
import { argsToAttributes } from '../../../.storybook/utilities';

const meta: Meta<QaiInput> = {
  component: QaiInput,
  tags: ['autodocs'],
  argTypes: {
    type: { options: QaiInputTypes, control: { type: 'radio' } },
  },
  args: {
    type: 'text',
  },
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
      <input qai-input ${argsToAttributes(args)} />
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiInput>;

export const Default: Story = {
  args: { value: 'Hello world' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true },
};
