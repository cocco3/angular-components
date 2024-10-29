import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { argsToAttributes } from '../../../.storybook/utilities';
import { QaiButton, QaiButtonKinds, QaiButtonSizes } from './qai-button';
import { QaiIcon, QaiIconKinds, type QaiIconKind } from '../qai-icon';

type QaiButtonStory = QaiButton & {
  content: string;
  startIcon?: QaiIconKind;
  endIcon?: QaiIconKind;
};

const meta: Meta<QaiButtonStory> = {
  component: QaiButton,
  subcomponents: { QaiIcon },
  tags: ['autodocs'],
  argTypes: {
    kind: { options: QaiButtonKinds, control: { type: 'radio' } },
    size: { options: QaiButtonSizes, control: { type: 'radio' } },
    startIcon: { options: QaiIconKinds, control: { type: 'select' } },
    endIcon: { options: QaiIconKinds, control: { type: 'select' } },
  },
  decorators: [moduleMetadata({ imports: [QaiIcon] })],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=3287-427074&node-type=frame&t=Vo6ryYVpPncwmEEa-0',
    },
  },

  // custom render to allow content projection
  render: ({ content, startIcon, endIcon, ...args }) => ({
    props: args,
    template: `<button qai-button ${argsToAttributes(args)}>
    ${startIcon ? `<qai-icon kind="${startIcon}" positionStart />` : ''}
    ${content}
    ${endIcon ? `<qai-icon kind="${endIcon}" positionEnd />` : ''}
    </button>`,
  }),
};

export default meta;
type Story = StoryObj<QaiButtonStory>;

export const Primary: Story = {
  args: { kind: 'primary', size: 'medium', content: 'Primary' },
};

export const Secondary: Story = {
  args: { kind: 'secondary', size: 'medium', content: 'Secondary' },
};

export const Tertiary: Story = {
  args: { kind: 'tertiary', size: 'medium', content: 'Tertiary' },
};

export const Disabled: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    disabled: true,
    content: 'Disabled',
  },
};

export const StartIcon: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'Icon',
    startIcon: 'arrow-left',
  },
};

export const EndIcon: Story = {
  args: {
    kind: 'primary',
    size: 'medium',
    content: 'Icon',
    endIcon: 'arrow-right',
  },
};
