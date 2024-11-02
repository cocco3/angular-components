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
  decorators: [moduleMetadata({ imports: [QaiBadge, QaiButton, QaiIcon] })],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/b04bJi9cG0CFIL8ZI95rGo/Quantified-UI?node-id=312-5785&node-type=frame&t=iSsEVSLtrzNHt81l-0',
    },
  },

  // custom render to allow content projection
  // render: (args) => ({
  //   props: args,
  //   template: `
  //     <assignment-card ${argsToAttributes(args)}>
  //       <div action>
  //         <button qai-button kind="primary" size="medium">View Assignment</button>
  //       </div>
  //     </assignment-card>
  //   `,
  // }),
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
