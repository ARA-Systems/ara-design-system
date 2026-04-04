import { useMemo } from 'react'
import { TrendingUp, Info } from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'

export interface AreaChartDataPoint {
  label: string
  value: number
}

export interface AreaChartProps {
  data: AreaChartDataPoint[]
  title?: string
  height?: number
  color?: string
  showInfo?: boolean
}

export const AreaChart = ({
  data,
  title = 'Desempenho de vendas',
  height = 220,
  color = '#58C411',
  showInfo = true,
}: AreaChartProps) => {
  const gradientId = useMemo(
    () => `area-fill-${Math.random().toString(36).slice(2, 8)}`,
    []
  )

  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-title">
          <TrendingUp size={16} style={{ color }} />
          {title}
        </span>
        {showInfo && (
          <button
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--c-fg-muted)',
              padding: '0.25rem',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
            }}
          >
            <Info size={16} />
          </button>
        )}
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart
          data={[...data]}
          margin={{ top: 4, right: 4, bottom: 0, left: -12 }}
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.25} />
              <stop offset="95%" stopColor={color} stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="var(--c-border)"
            strokeDasharray="4 4"
            vertical={false}
          />

          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: 'var(--c-fg-muted)' }}
            tickLine={false}
            axisLine={false}
            dy={8}
          />

          <YAxis
            tick={{ fontSize: 11, fill: 'var(--c-fg-muted)' }}
            tickLine={false}
            axisLine={false}
            dx={-4}
          />

          <Tooltip
            contentStyle={{
              background: 'var(--c-surface)',
              border: '1px solid var(--c-border)',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.8125rem',
              boxShadow: 'var(--shadow-md)',
              color: 'var(--c-fg)',
            }}
            labelStyle={{ color: 'var(--c-fg-muted)', marginBottom: 4 }}
            itemStyle={{ color: 'var(--c-fg)' }}
            cursor={{ stroke: 'var(--c-border)', strokeWidth: 1 }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            dot={false}
            activeDot={{
              r: 4,
              fill: color,
              stroke: 'var(--c-surface)',
              strokeWidth: 2,
            }}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart
