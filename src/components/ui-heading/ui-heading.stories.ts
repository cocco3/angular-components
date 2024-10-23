import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { UiHeading, UiHeadingSizes } from './ui-heading';

type StoryType = UiHeading & { content: string };

const meta: Meta<StoryType> = {
  component: UiHeading,
  tags: ['autodocs'],
  argTypes: {
    size: { options: UiHeadingSizes, control: { type: 'radio' } },
  },
  // for being able to use content projection
  render: ({ content, ...args }) => ({
    props: args,
    template: `<h1 ui-heading ${argsToTemplate(args)}>${content}</h1>`,
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
