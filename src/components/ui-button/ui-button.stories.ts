import type { Meta, StoryObj } from '@storybook/angular';
import { UiButton, UiButtonKinds, UiButtonSizes } from './ui-button';

type StoryType = UiButton & { content: string; onClick: () => void };

const meta: Meta<StoryType> = {
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: UiButtonKinds, control: { type: 'radio' } },
    size: { options: UiButtonSizes, control: { type: 'radio' } },
  },
  render: (args) => {
    return {
      props: args,
      template: `
        <button
          ui-button
          [disabled]="disabled"
          [size]="size"
          [kind]="kind"
        >
          {{content}}
        </button>`,
    };
  },
};

export default meta;
type Story = StoryObj<StoryType>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    kind: 'secondary',
    size: 'medium',
    content: 'Secondary',
  },
};
