import type { Meta, StoryObj } from '@storybook/angular';
import { UiButton, UiButtonKinds, UiButtonSizes } from './ui-button';

type StoryType = UiButton & { content: string };

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
      template: `<button ui-button [size]="size" [kind]="kind">{{content}}</button>`,
    };
  },
};

export default meta;
type Story = StoryObj<StoryType>;

export const Primary: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'primary',
  },
};
