import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign, TrendingUp, Users, CreditCard } from 'lucide-react';
import { StatCard } from './StatCard';

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
  args: {
    label: 'Total Revenue',
    value: '$48,295.00',
  },
};

export default meta;
type Story = StoryObj<typeof StatCard>;

export const Default: Story = {};

export const WithChange: Story = {
  args: {
    label: 'Total Revenue',
    value: '$48,295.00',
    change: 12.4,
  },
};

export const WithNegativeChange: Story = {
  args: {
    label: 'Chargeback Rate',
    value: '2.3%',
    change: -0.8,
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Total Revenue',
    value: '$48,295.00',
    change: 12.4,
    icon: <DollarSign size={20} />,
  },
};

export const Group: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
      <StatCard
        label="Total Revenue"
        value="$48,295"
        change={12.4}
        icon={<DollarSign size={20} />}
      />
      <StatCard
        label="Transactions"
        value="1,284"
        change={8.1}
        icon={<CreditCard size={20} />}
      />
      <StatCard
        label="Active Users"
        value="3,421"
        change={5.3}
        icon={<Users size={20} />}
      />
      <StatCard
        label="Avg. Order Value"
        value="$37.62"
        change={-2.1}
        icon={<TrendingUp size={20} />}
      />
    </div>
  ),
};
