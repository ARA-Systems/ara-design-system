import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    name: 'Jane Doe',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithInitials: Story = {
  args: { name: 'Jane Doe' },
};

export const WithImage: Story = {
  args: {
    name: 'Jane Doe',
    src: 'https://i.pravatar.cc/150?img=1',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar name="Jane Doe" size="xs" />
      <Avatar name="Jane Doe" size="sm" />
      <Avatar name="Jane Doe" size="md" />
      <Avatar name="Jane Doe" size="lg" />
      <Avatar name="Jane Doe" size="xl" />
    </div>
  ),
};

export const SizesWithImage: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <Avatar name="Jane Doe" src="https://i.pravatar.cc/150?img=1" size="xs" />
      <Avatar name="Jane Doe" src="https://i.pravatar.cc/150?img=1" size="sm" />
      <Avatar name="Jane Doe" src="https://i.pravatar.cc/150?img=1" size="md" />
      <Avatar name="Jane Doe" src="https://i.pravatar.cc/150?img=1" size="lg" />
      <Avatar name="Jane Doe" src="https://i.pravatar.cc/150?img=1" size="xl" />
    </div>
  ),
};
