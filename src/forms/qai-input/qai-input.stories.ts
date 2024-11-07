import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiInput, QaiInputTypes } from './qai-input';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiInputStory = QaiInput & {
  disabled?: boolean;
  readonly?: boolean;
  name?: string;
  type?: string;
  value?: string;
};

const meta: Meta<QaiInputStory> = {
  component: QaiInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: ['text', 'password', 'email', 'date'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    readonly: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
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

type Story = StoryObj<QaiInputStory>;

export const Default: Story = {
  args: { value: 'Hello world' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true },
};

export const Readonly: Story = {
  args: { value: 'Hello world', readonly: true },
};

export const Password: Story = {
  args: { value: 'Hello world', type: 'password' },
};

export const Email: Story = {
  args: { value: 'hello@world.com', type: 'email' },
};

export const Date: Story = {
  args: { type: 'date' },
};
