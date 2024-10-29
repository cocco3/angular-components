import type { Meta, StoryObj } from '@storybook/angular';
import { QaiHeading, QaiHeadingSizes } from './qai-heading';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiHeadingStory = QaiHeading & { content: string };

const meta: Meta<QaiHeadingStory> = {
  component: QaiHeading,
  tags: ['autodocs'],
  argTypes: {
    size: { options: QaiHeadingSizes, control: { type: 'radio' } },
  },

  // custom render to allow content projection
  render: ({ content, ...args }) => ({
    props: args,
    template: `
      <h1 qai-heading ${argsToAttributes(args)}>
        ${content}
      </h1>
    `,
  }),
};

export default meta;
type Story = StoryObj<QaiHeadingStory>;

export const Small: Story = {
  args: { size: 'small', content: 'Small' },
};

export const Medium: Story = {
  args: { size: 'medium', content: 'Medium' },
};

export const Large: Story = {
  args: { size: 'large', content: 'Large' },
};
