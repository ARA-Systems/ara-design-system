import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    variant: 'neutral',
    pill: false,
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {};

export const Brand: Story = {
  args: { variant: 'brand', children: 'Brand' },
};

export const Neutral: Story = {
  args: { variant: 'neutral', children: 'Neutral' },
};

export const Success: Story = {
  args: { variant: 'success', children: 'Success' },
};

export const Error: Story = {
  args: { variant: 'error', children: 'Error' },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge variant="brand">Brand</Badge>
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  ),
};

export const Pill: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Badge pill>Pill Badge</Badge>
      <Badge pill>Another</Badge>
    </div>
  ),
};
