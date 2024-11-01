import type { Meta, StoryObj } from '@storybook/angular';
import { ScoreSquare, ScoreSquareKinds } from './score-square';

const meta: Meta<ScoreSquare> = {
  title: 'assignments/score-square',
  component: ScoreSquare,
  tags: ['autodocs'],
  argTypes: {
    kind: { options: ScoreSquareKinds, control: { type: 'radio' } },
  },
};

export default meta;

type Story = StoryObj<ScoreSquare>;

export const Pass: Story = {
  args: { kind: 'pass', score: 4.5, max: 5 },
};

export const Fail: Story = {
  args: { kind: 'fail', score: 2, max: 10 },
};
