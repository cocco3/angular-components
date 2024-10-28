import type { Meta, StoryObj } from '@storybook/angular';
import { QaiIcon, QaiIconKinds } from './qai-icon';

const meta: Meta<QaiIcon> = {
  component: QaiIcon,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: QaiIconKinds.sort(), control: { type: 'select' } },
  },
  args: {
    size: '24px',
  },
};

export default meta;
type Story = StoryObj<QaiIcon>;

export const Default: Story = {
  args: { kind: 'arrow-down' },
};
