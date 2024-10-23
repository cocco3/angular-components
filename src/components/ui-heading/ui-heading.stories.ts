import type { Meta, StoryObj } from '@storybook/angular';
import { UiHeading, UiHeadingSizes } from './ui-heading';

const meta: Meta<UiHeading> = {
  component: UiHeading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: UiHeadingSizes,
      control: { type: 'radio' },
      type: { name: 'boolean', required: true },
      // table: {type: { summary: 'summary', detail: 'detail' }},
    },
  },
};

export default meta;
type Story = StoryObj<UiHeading>;

export const Large: Story = {
  args: {
    size: 'large',
  },
};
