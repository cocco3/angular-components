import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiTextarea } from './qai-textarea';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiTextareaStory = QaiTextarea & {
  disabled?: boolean;
  name?: string;
  value?: string;
};

const meta: Meta<QaiTextareaStory> = {
  component: QaiTextarea,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
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
    template: `<textarea qai-textarea ${argsToAttributes(args)}></textarea>`,
  }),
};

export default meta;

type Story = StoryObj<QaiTextareaStory>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: { disabled: true },
};
