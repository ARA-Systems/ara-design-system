import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  args: {
    value: 60,
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: { value: 60, label: '60% complete' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Progress value={60} size="sm" label="Small" />
      <Progress value={60} size="md" label="Medium" />
      <Progress value={60} size="lg" label="Large" />
    </div>
  ),
};

export const Values: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <Progress value={0} label="0%" />
      <Progress value={25} label="25%" />
      <Progress value={50} label="50%" />
      <Progress value={75} label="75%" />
      <Progress value={100} label="100%" />
    </div>
  ),
};
