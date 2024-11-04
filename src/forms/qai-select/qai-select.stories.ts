import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiSelect } from './qai-select';
import { argsToAttributes } from '../../../.storybook/utilities';

const meta: Meta<QaiSelect> = {
  component: QaiSelect,
  tags: ['autodocs'],
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
        <option>Two</option>
      </select>
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiSelect>;

export const Default: Story = {
  args: { value: 'Hello world' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true },
};
