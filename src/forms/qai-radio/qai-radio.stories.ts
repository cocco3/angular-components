import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiRadio } from './qai-radio';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiRadioStory = QaiRadio & {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
};

const meta: Meta<QaiRadioStory> = {
  component: QaiRadio,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    value: { control: { type: 'text' } },
  },
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

type Story = StoryObj<QaiRadioStory>;

export const Default: Story = {
  args: { value: 'Hello world', name: 'rb-default' },
};

export const Checked: Story = {
  args: { value: 'Hello world', checked: true, name: 'rb-checked' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true, name: 'rb-disabled' },
};

export const CheckedDisabled: Story = {
  args: {
    value: 'Hello world',
    checked: true,
    disabled: true,
    name: 'rb-checked-disabled',
  },
};
