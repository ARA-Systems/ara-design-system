import type { Meta, StoryObj } from '@storybook/react'
import { AreaChart } from './AreaChart'

const meta: Meta<typeof AreaChart> = {
  title: 'Components/AreaChart',
  component: AreaChart,
}
export default meta

type Story = StoryObj<typeof AreaChart>

const sampleData = [120, 180, 150, 280, 220, 310, 260, 400, 350, 420, 380, 500, 450, 480]
const hourLabels = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00']

export const Default: Story = {
  args: {
    data: sampleData,
    labels: hourLabels,
    title: 'Desempenho de vendas',
    height: 220,
  },
}

export const SmallChart: Story = {
  args: {
    data: [10, 30, 25, 50, 45, 60, 55, 80],
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'],
    title: 'Vendas da semana',
    height: 160,
  },
}

export const VolatileData: Story = {
  args: {
    data: [200, 380, 120, 450, 80, 320, 500, 150, 400, 220, 480, 300],
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    title: 'Evolução anual',
    height: 200,
  },
}

export const DashboardLayout: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: 900 }}>
      <AreaChart
        data={sampleData}
        labels={hourLabels}
        title="Desempenho de vendas"
        height={200}
      />
      <AreaChart
        data={[12, 14, 11, 16, 13, 15, 18, 14, 17, 20, 16, 19, 22, 18]}
        labels={hourLabels}
        title="Evolução do Ticket Médio"
        height={200}
      />
    </div>
  ),
}
