import type { Meta, StoryObj } from '@storybook/angular';
import { QaiIcon, QaiIconKinds } from './qai-icon';

const meta: Meta<QaiIcon> = {
  component: QaiIcon,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: QaiIconKinds, control: { type: 'select' } },
  },
  args: {
    size: '24px',
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/tLul5JhVTYQ3evZpMEpKEm/Quail?node-id=13776-2148&node-type=section&t=Vo6ryYVpPncwmEEa-0',
    },
  },
};

export default meta;
type Story = StoryObj<QaiIcon>;

export const Default: Story = {
  args: { kind: 'arrow-down' },
};
