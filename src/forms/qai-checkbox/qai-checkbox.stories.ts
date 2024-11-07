import { type Meta, type StoryObj } from '@storybook/angular';
import { QaiCheckbox } from './qai-checkbox';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiCheckboxStory = QaiCheckbox & {
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
};

const meta: Meta<QaiCheckboxStory> = {
  component: QaiCheckbox,
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
      <input qai-checkbox type="checkbox" ${argsToAttributes(args)} />
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiCheckboxStory>;

export const Default: Story = {
  args: { value: 'Hello world', name: 'cb-default' },
};

export const Checked: Story = {
  args: { value: 'Hello world', checked: true, name: 'cb-checked' },
};

export const Disabled: Story = {
  args: { value: 'Hello world', disabled: true, name: 'cb-disabled' },
};

export const CheckedDisabled: Story = {
  args: {
    value: 'Hello world',
    checked: true,
    disabled: true,
    name: 'cb-checked-disabled',
  },
};
