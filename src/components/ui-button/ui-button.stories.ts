import type { Meta, StoryObj } from '@storybook/angular';
import { UiButton, UiButtonKinds, UiButtonSizes } from './ui-button';

const meta: Meta<UiButton> = {
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: UiButtonKinds, control: { type: 'radio' } },
    size: { options: UiButtonSizes, control: { type: 'radio' } },
  },
};

export default meta;
type Story = StoryObj<UiButton>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
  },
};
