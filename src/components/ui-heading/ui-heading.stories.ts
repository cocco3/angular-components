import type { Meta, StoryObj } from '@storybook/angular';
import { UiHeading, UiHeadingSizes } from './ui-heading';

type StoryType = UiHeading & { content: string };

const meta: Meta<StoryType> = {
  component: UiHeading,
  tags: ['autodocs'],
  argTypes: {
    size: { options: UiHeadingSizes, control: { type: 'radio' } },
  },
  render: (args) => {
    return {
      props: args,
      template: `<h1 ui-heading [size]="size">{{content}}</h1>`,
    };
  },
};

export default meta;
type Story = StoryObj<StoryType>;

export const Large: Story = {
  args: {
    size: 'large',
    content: 'Heading',
  },
};
