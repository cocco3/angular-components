import { argsToTemplate, type Meta, type StoryObj } from '@storybook/angular';
import { UiButton, UiButtonKinds, UiButtonSizes } from './ui-button';

type UiButtonStory = UiButton & { content: string };

const meta: Meta<UiButtonStory> = {
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: UiButtonKinds, control: { type: 'radio' } },
    size: { options: UiButtonSizes, control: { type: 'radio' } },
  },

  // for being able to use content projection
  render: ({ content, ...args }) => ({
    props: args,
    template: `<button ui-button ${argsToTemplate(args)}>${content}</button>`,
  }),
};

export default meta;
type Story = StoryObj<UiButtonStory>;

export const Primary: Story = {
  args: { kind: 'primary', size: 'medium', content: 'Primary' },
};

export const Secondary: Story = {
  args: { kind: 'secondary', size: 'medium', content: 'Secondary' },
};
