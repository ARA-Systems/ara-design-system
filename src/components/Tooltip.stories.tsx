import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 40px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: () => (
    <Tooltip content="This appears above" side="top">
      <Button variant="secondary">Hover me (top)</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  render: () => (
    <Tooltip content="This appears below" side="bottom">
      <Button variant="secondary">Hover me (bottom)</Button>
    </Tooltip>
  ),
};

export const OnIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <Tooltip content="Download statement" side="top">
        <Button variant="ghost" size="sm">Download</Button>
      </Tooltip>
      <Tooltip content="Share report" side="bottom">
        <Button variant="ghost" size="sm">Share</Button>
      </Tooltip>
    </div>
  ),
};
