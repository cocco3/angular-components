import type { Meta, StoryObj } from '@storybook/angular';
import {
  QaiBadge,
  QaiBadgeKinds,
  QaiBadgeShapes,
  QaiBadgeSizes,
} from './qai-badge';

const meta: Meta<QaiBadge> = {
  component: QaiBadge,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: QaiBadgeKinds, control: { type: 'radio' } },
    shape: { options: QaiBadgeShapes, control: { type: 'radio' } },
    size: { options: QaiBadgeSizes, control: { type: 'radio' } },
  },
  args: {
    shape: 'rectangle',
    size: 'medium',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=1046-3819&node-type=frame&t=Vo6ryYVpPncwmEEa-0',
    },
  },
};

export default meta;

type Story = StoryObj<QaiBadge>;

export const Gray: Story = {
  args: { kind: 'gray', label: 'Gray' },
};

export const Red: Story = {
  args: { kind: 'red', label: 'Red' },
};

export const Yellow: Story = {
  args: { kind: 'yellow', label: 'Yellow' },
};

export const Green: Story = {
  args: { kind: 'green', label: 'Green' },
};
