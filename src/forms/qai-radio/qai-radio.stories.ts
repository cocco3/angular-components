import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiRadio } from './qai-radio';
import { argsToAttributes } from '../../../.storybook/utilities';

const meta: Meta<QaiRadio> = {
  component: QaiRadio,
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
      <input qai-radio type="radio" ${argsToAttributes(args)} />
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiRadio>;

export const Default: Story = {
  args: { value: 'Hello world' },
};

export const Checked: Story = {
  args: { value: 'Hello world', checked: true },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true },
};

export const CheckedDisabled: Story = {
  args: { value: 'Hello world', checked: true, disabled: true },
};