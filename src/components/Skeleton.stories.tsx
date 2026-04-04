import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Text: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Skeleton variant="text" />
    </div>
  ),
};

export const TextMultiline: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <Skeleton variant="text" lines={3} />
    </div>
  ),
};

export const Title: Story = {
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <Skeleton variant="title" />
    </div>
  ),
};

export const Avatar: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Skeleton variant="avatar" />
      <Skeleton variant="avatar" width={48} height={48} />
      <Skeleton variant="avatar" width={64} height={64} />
    </div>
  ),
};

export const Rect: Story = {
  render: () => (
    <Skeleton variant="rect" width="100%" height={200} />
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div
      style={{
        border: '1px solid var(--border, #e5e7eb)',
        borderRadius: 8,
        padding: 24,
        maxWidth: 380,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Skeleton variant="avatar" />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Skeleton variant="title" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rect" height={120} />
      <Skeleton variant="text" lines={3} />
      <div style={{ display: 'flex', gap: 8 }}>
        <Skeleton variant="rect" width={80} height={32} />
        <Skeleton variant="rect" width={80} height={32} />
      </div>
    </div>
  ),
};

export const TransactionListSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0' }}>
          <Skeleton variant="avatar" width={40} height={40} />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Skeleton variant="text" width="50%" />
            <Skeleton variant="text" width="30%" />
          </div>
          <Skeleton variant="text" width={60} />
        </div>
      ))}
    </div>
  ),
};
