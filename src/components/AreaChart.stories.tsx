import type { Meta, StoryObj } from '@storybook/react'
import { AreaChart } from './AreaChart'

const meta: Meta<typeof AreaChart> = {
  title: 'Components/AreaChart',
  component: AreaChart,
}
export default meta

type Story = StoryObj<typeof AreaChart>

const salesData = [
  { label: '00:00', value: 20 },
  { label: '02:00', value: 45 },
  { label: '04:00', value: 30 },
  { label: '06:00', value: 80 },
  { label: '08:00', value: 160 },
  { label: '10:00', value: 280 },
  { label: '12:00', value: 350 },
  { label: '14:00', value: 420 },
]

export const Default: Story = {
  args: {
    data: salesData,
    title: 'Desempenho de vendas',
    height: 220,
  },
}

export const WeeklyData: Story = {
  args: {
    data: [
      { label: 'Seg', value: 120 },
      { label: 'Ter', value: 180 },
      { label: 'Qua', value: 95 },
      { label: 'Qui', value: 240 },
      { label: 'Sex', value: 310 },
      { label: 'Sab', value: 190 },
      { label: 'Dom', value: 140 },
    ],
    title: 'Vendas da semana',
    height: 200,
  },
}

export const TicketMedio: Story = {
  args: {
    data: [
      { label: '00:00', value: 12 },
      { label: '02:00', value: 14 },
      { label: '04:00', value: 11 },
      { label: '06:00', value: 16 },
      { label: '08:00', value: 18 },
      { label: '10:00', value: 15 },
      { label: '12:00', value: 20 },
      { label: '14:00', value: 22 },
    ],
    title: 'Evolução do Ticket Médio',
    height: 200,
  },
}

export const DashboardPair: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: 900 }}>
      <AreaChart
        data={salesData}
        title="Desempenho de vendas"
        height={200}
      />
      <AreaChart
        data={[
          { label: '00:00', value: 12 },
          { label: '02:00', value: 14 },
          { label: '04:00', value: 11 },
          { label: '06:00', value: 16 },
          { label: '08:00', value: 18 },
          { label: '10:00', value: 15 },
          { label: '12:00', value: 20 },
          { label: '14:00', value: 22 },
        ]}
        title="Evolução do Ticket Médio"
        height={200}
      />
    </div>
  ),
}

export const MonthlyRevenue: Story = {
  args: {
    data: [
      { label: 'Jan', value: 4200 },
      { label: 'Fev', value: 5800 },
      { label: 'Mar', value: 4900 },
      { label: 'Abr', value: 7200 },
      { label: 'Mai', value: 6100 },
      { label: 'Jun', value: 8500 },
      { label: 'Jul', value: 7800 },
      { label: 'Ago', value: 9200 },
      { label: 'Set', value: 8100 },
      { label: 'Out', value: 10500 },
      { label: 'Nov', value: 9800 },
      { label: 'Dez', value: 12000 },
    ],
    title: 'Receita mensal',
    height: 240,
  },
}
