import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import { BarChart2, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { TabPills } from './TabPills';

const meta: Meta<typeof TabPills> = {
  title: 'Components/TabPills',
  component: TabPills,
};

export default meta;
type Story = StoryObj<typeof TabPills>;

const basicTabs = [
  { id: 'all', label: 'All' },
  { id: 'pending', label: 'Pending' },
  { id: 'completed', label: 'Completed' },
  { id: 'failed', label: 'Failed' },
];

const tabsWithIcons = [
  { id: 'overview', label: 'Overview', icon: <BarChart2 size={14} /> },
  { id: 'pending', label: 'Pending', icon: <Clock size={14} /> },
  { id: 'completed', label: 'Completed', icon: <CheckCircle2 size={14} /> },
  { id: 'failed', label: 'Failed', icon: <XCircle size={14} /> },
];

export const Default: Story = {
  render: () => {
    const [active, setActive] = useState('all');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TabPills tabs={basicTabs} value={active} onChange={setActive} />
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>Active tab: <strong>{active}</strong></p>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [active, setActive] = useState('overview');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TabPills tabs={tabsWithIcons} value={active} onChange={setActive} />
        <p style={{ fontSize: 14, color: 'var(--muted)' }}>Active tab: <strong>{active}</strong></p>
      </div>
    );
  },
};
