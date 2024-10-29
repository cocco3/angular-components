import type { Meta, StoryObj } from '@storybook/angular';
import { QaiButton, QaiButtonKinds, QaiButtonSizes } from './qai-button';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiButtonStory = QaiButton & { content: string };

const meta: Meta<QaiButtonStory> = {
  component: QaiButton,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: QaiButtonKinds, control: { type: 'radio' } },
    size: { options: QaiButtonSizes, control: { type: 'radio' } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=3287-427074&node-type=frame&t=Vo6ryYVpPncwmEEa-0',
    },
  },

  // custom render to allow content projection
  render: ({ content, ...args }) => ({
    props: args,
    template: `<button qai-button ${argsToAttributes(
      args
    )}>${content}</button>`,
  }),
};

export default meta;
type Story = StoryObj<QaiButtonStory>;

export const Primary: Story = {
  args: { kind: 'primary', size: 'medium', content: 'Primary' },
};

export const Secondary: Story = {
  args: { kind: 'secondary', size: 'medium', content: 'Secondary' },
};

export const Tertiary: Story = {
  args: { kind: 'tertiary', size: 'medium', content: 'Tertiary' },
};

export const Disabled: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    disabled: true,
    content: 'Disabled',
  },
};
