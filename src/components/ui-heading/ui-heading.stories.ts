import type { Meta, StoryObj } from '@storybook/angular';
import { UiHeading, UiHeadingSizes } from './ui-heading';
import { argsToAttributes } from '../../sb-utils';

type StoryType = UiHeading & { content: string };

const meta: Meta<StoryType> = {
  component: UiHeading,
  tags: ['autodocs'],
  argTypes: {
    size: { options: UiHeadingSizes, control: { type: 'radio' } },
  },

  // custom render to allow content projection
  render: ({ content, ...args }) => ({
    props: args,
    template: `<h1 ui-heading ${argsToAttributes(args)}>${content}</h1>`,
  }),
};

export default meta;
type Story = StoryObj<StoryType>;

export const Small: Story = {
  args: { size: 'small', content: 'Heading' },
};

export const Medium: Story = {
  args: { size: 'medium', content: 'Heading' },
};

export const Large: Story = {
  args: { size: 'large', content: 'Heading' },
};
