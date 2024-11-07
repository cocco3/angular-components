import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiSelect } from './qai-select';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiSelectStory = QaiSelect & {
  disabled?: boolean;
  name?: string;
  value?: string;
};

const meta: Meta<QaiSelectStory> = {
  component: QaiSelect,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=3281-377673&node-type=frame&t=MLkgc0CS2RhZNW99-0',
    },
  },

  // custom render to allow content projection
  render: ({ ...args }) => ({
    props: args,
    template: `
      <select qai-select ${argsToAttributes(args)}>
        <option>One</option>
        <option selected>Two</option>
      </select>
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiSelectStory>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
