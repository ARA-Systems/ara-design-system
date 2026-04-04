import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRight, Download, Plus } from 'lucide-react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'default',
    loading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
};

export const Ghost: Story = {
  args: { variant: 'ghost', children: 'Ghost' },
};

export const CTA: Story = {
  args: { variant: 'cta', children: 'Get Started' },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button leftIcon={<Plus size={16} />}>Add Item</Button>
      <Button rightIcon={<ArrowRight size={16} />}>Continue</Button>
      <Button variant="secondary" leftIcon={<Download size={16} />}>Download</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { loading: true, children: 'Loading…' },
};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};
