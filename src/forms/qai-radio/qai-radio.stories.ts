import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiRadio } from './qai-radio';
import { argsToAttributes } from '../../../.storybook/utilities';

const meta: Meta<QaiRadio> = {
  component: QaiRadio,
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=1097-63652&node-type=frame&t=poPFcNNJgIELb63g-0',
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
  args: { value: 'Hello world', name: 'default' },
};

export const Checked: Story = {
  args: { value: 'Hello world', checked: true, name: 'checked' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true, name: 'disabled' },
};

export const CheckedDisabled: Story = {
  args: {
    value: 'Hello world',
    checked: true,
    disabled: true,
    name: 'checkedDisabled',
  },
};
