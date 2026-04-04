import type { Meta, StoryObj } from '@storybook/react'
import { StatCard } from './StatCard'

const meta: Meta<typeof StatCard> = {
  title: 'Components/StatCard',
  component: StatCard,
}
export default meta

type Story = StoryObj<typeof StatCard>

export const Default: Story = {
  args: {
    label: 'Total em vendas',
    value: 'R$ 8.283,35',
  },
}

export const WithSubtitle: Story = {
  args: {
    label: 'Pedidos feitos',
    subtitle: 'Todos',
    value: '652',
    change: 12,
  },
}

export const NegativeChange: Story = {
  args: {
    label: 'Pedidos pagos',
    subtitle: 'Todos',
    value: '231',
    change: -4,
  },
}

export const DashboardGroup: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', maxWidth: 800 }}>
      <StatCard label="Total em vendas" value="R$ 8.283,35" />
      <StatCard label="Pedidos feitos" subtitle="Todos" value="652" change={12} />
      <StatCard label="Pedidos pagos" subtitle="Todos" value="231" change={-4} />
    </div>
  ),
}

export const MobileDashboard: Story = {
  render: () => (
    <div style={{ maxWidth: 360, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      <StatCard label="Total em vendas" value="R$ 8.283,35" />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        <StatCard label="Pedidos feitos" subtitle="Todos" value="652" change={12} />
        <StatCard label="Pedidos pagos" subtitle="Todos" value="231" change={-4} />
      </div>
    </div>
  ),
}
