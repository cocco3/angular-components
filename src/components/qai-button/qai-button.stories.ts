import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { argsToAttributes } from '../../../.storybook/utilities';
import {
  QaiButton,
  QaiButtonAnchor,
  QaiButtonKinds,
  QaiButtonSizes,
} from './qai-button';
import { QaiIcon, QaiIconKinds, type QaiIconKind } from '../qai-icon';

type QaiButtonStory = QaiButton & {
  content: string;
  disabled?: boolean;
  startIcon?: QaiIconKind;
  endIcon?: QaiIconKind;
};

const meta: Meta<QaiButtonStory> = {
  component: QaiButton,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [QaiIcon, QaiButtonAnchor] })],
  argTypes: {
    disabled: { control: { type: 'boolean' } },
    kind: { options: QaiButtonKinds, control: { type: 'radio' } },
    size: { options: QaiButtonSizes, control: { type: 'radio' } },
    startIcon: { options: QaiIconKinds, control: { type: 'select' } },
    endIcon: { options: QaiIconKinds, control: { type: 'select' } },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=3287-427074&node-type=frame&t=Vo6ryYVpPncwmEEa-0',
    },
  },

  // custom render to allow content projection
  render: ({ content, startIcon, endIcon, ...args }) => ({
    props: args,
    template: `
      <button qai-button ${argsToAttributes(args)}>
        ${startIcon ? `<qai-icon kind="${startIcon}" positionStart />` : ''}
        ${content}
        ${endIcon ? `<qai-icon kind="${endIcon}" positionEnd />` : ''}
      </button>
    `,
  }),
};

export default meta;
type Story = StoryObj<QaiButtonStory>;

export const Primary: Story = {
  args: { kind: 'primary', size: 'medium', content: 'Submit' },
};

export const Secondary: Story = {
  args: { kind: 'secondary', size: 'medium', content: 'Cancel' },
};

export const Tertiary: Story = {
  args: { kind: 'tertiary', size: 'medium', content: 'Tertiary' },
};

export const Disabled: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    disabled: true,
    content: 'Save',
  },
};

export const StartIcon: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'Back',
    startIcon: 'arrow-left',
  },
};

export const EndIcon: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'Next',
    endIcon: 'arrow-right',
  },
};

type AnchorStory = StoryObj<
  QaiButtonStory & {
    href: string;
    target?: string;
  }
>;

export const Anchor: AnchorStory = {
  render: ({ content, startIcon, endIcon, ...args }) => ({
    props: args,
    template: `
      <a qai-button ${argsToAttributes(args)}>
        ${startIcon ? `<qai-icon kind="${startIcon}" positionStart />` : ''}
        ${content}
        ${endIcon ? `<qai-icon kind="${endIcon}" positionEnd />` : ''}
      </a>
    `,
  }),
  argTypes: {
    disabled: { table: { disable: true } },
    href: { control: { type: 'text' } },
    target: { control: { type: 'text' } },
  },
  args: {
    href: '/',
    target: '_blank',
    kind: 'primary',
    size: 'medium',
    content: 'Link',
    endIcon: 'arrow-right',
  },
};
