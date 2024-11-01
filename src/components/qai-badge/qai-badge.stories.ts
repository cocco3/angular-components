import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { QaiBadge, QaiBadgeKinds, QaiBadgeShapes } from './qai-badge';
import { QaiIcon, type QaiIconKind, QaiIconKinds } from '../qai-icon';
import { argsToAttributes } from '../../../.storybook/utilities';

type QaiBadgeStory = QaiBadge & {
  startIcon?: QaiIconKind;
  endIcon?: QaiIconKind;
};

const meta: Meta<QaiBadgeStory> = {
  component: QaiBadge,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [QaiIcon] })],
  argTypes: {
    kind: { options: QaiBadgeKinds, control: { type: 'radio' } },
    shape: { options: QaiBadgeShapes, control: { type: 'radio' } },
    startIcon: { options: QaiIconKinds, control: { type: 'select' } },
    endIcon: { options: QaiIconKinds, control: { type: 'select' } },
  },
  args: {
    shape: 'rectangle',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=1046-3819&node-type=frame&t=Vo6ryYVpPncwmEEa-0',
    },
  },

  // custom render to allow content projection
  render: ({ startIcon, endIcon, ...args }) => ({
    props: args,
    template: `
      <qai-badge ${argsToAttributes(args)}>
        ${startIcon ? `<qai-icon kind="${startIcon}" positionStart />` : ''}
        ${endIcon ? `<qai-icon kind="${endIcon}" positionEnd />` : ''}
      </qai-badge>
    `,
  }),
};

export default meta;

type Story = StoryObj<QaiBadgeStory>;

export const Gray: Story = {
  args: { kind: 'gray', label: 'Incomplete' },
};

export const Red: Story = {
  args: { kind: 'red', label: 'Not Certified' },
};

export const Yellow: Story = {
  args: { kind: 'yellow', label: 'Due Soon' },
};

export const Green: Story = {
  args: { kind: 'green', label: 'Completed' },
};

export const StartIcon: Story = {
  args: {
    kind: 'red',
    label: 'Past due',
    startIcon: 'alert-triangle',
  },
};

export const EndIcon: Story = {
  args: {
    kind: 'gray',
    label: 'Chip',
    endIcon: 'x-close',
  },
};
