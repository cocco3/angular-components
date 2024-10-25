import type { Meta, StoryObj } from '@storybook/angular';
import { QaiBadge, QaiBadgeKinds, QaiBadgeSizes } from './qai-badge';

const meta: Meta<QaiBadge> = {
  component: QaiBadge,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: QaiBadgeKinds, control: { type: 'radio' } },
    size: { options: QaiBadgeSizes, control: { type: 'radio' } },
  },
};

export default meta;
type Story = StoryObj<QaiBadge>;

export const Gray: Story = {
  args: { kind: 'gray', size: 'medium', label: 'Gray' },
};

export const Red: Story = {
  args: { kind: 'red', size: 'medium', label: 'Red' },
};

export const Yellow: Story = {
  args: { kind: 'yellow', size: 'medium', label: 'Yellow' },
};

export const Green: Story = {
  args: { kind: 'green', size: 'medium', label: 'Green' },
};
