import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { argsToAttributes } from '../../../.storybook/utilities';
import { AssignmentCard } from './assignment-card';
import { QaiBadge } from '../qai-badge';
import { QaiButton } from '../qai-button';
import { QaiIcon } from '../qai-icon';

const meta: Meta<AssignmentCard> = {
  title: 'assignments/assignment-card',
  component: AssignmentCard,
  tags: ['autodocs'],
  argTypes: {
    buttonTitle: {
      table: { disable: true },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/b04bJi9cG0CFIL8ZI95rGo/Quantified-UI?node-id=312-5785&node-type=frame&t=iSsEVSLtrzNHt81l-0',
    },
  },
};

export default meta;

type Story = StoryObj<AssignmentCard>;

export const Default: Story = {
  args: {
    title: 'Objection Handling Q3 2024',
    badges: [
      { kind: 'red', label: 'Past due', icon: 'alert-triangle' },
      { kind: 'gray', label: 'Incomplete' },
    ],
  },
};
