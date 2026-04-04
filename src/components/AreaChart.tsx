import { useMemo } from 'react'
import { TrendingUp } from 'lucide-react'

export interface AreaChartProps {
  data: number[]
  labels?: string[]
  title?: string
  height?: number
  color?: string
}

function buildPath(data: number[], width: number, height: number, padding: { top: number; right: number; bottom: number; left: number }) {
  const max = Math.max(...data)
  const min = Math.min(...data)
  const range = max - min || 1
  const chartW = width - padding.left - padding.right
  const chartH = height - padding.top - padding.bottom
  const stepX = chartW / (data.length - 1)

  const points = data.map((v, i) => ({
    x: padding.left + i * stepX,
    y: padding.top + chartH - ((v - min) / range) * chartH,
  }))

  // Smooth curve using cardinal spline
  let line = `M ${points[0].x},${points[0].y}`
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[Math.max(0, i - 1)]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[Math.min(points.length - 1, i + 2)]

    const cp1x = p1.x + (p2.x - p0.x) / 6
    const cp1y = p1.y + (p2.y - p0.y) / 6
    const cp2x = p2.x - (p3.x - p1.x) / 6
    const cp2y = p2.y - (p3.y - p1.y) / 6

    line += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`
  }

  const area = `${line} L ${points[points.length - 1].x},${padding.top + chartH} L ${points[0].x},${padding.top + chartH} Z`

  return { line, area, points, max, min, range, chartH }
}

export const AreaChart = ({
  data,
  labels,
  title = 'Desempenho de vendas',
  height = 200,
  color,
}: AreaChartProps) => {
  const width = 600
  const padding = { top: 16, right: 16, bottom: 28, left: 40 }

  const chartColor = color ?? 'var(--c-primary)'
  const gradientId = useMemo(() => `area-grad-${Math.random().toString(36).slice(2, 8)}`, [])

  const { line, area, min, range, chartH } = useMemo(
    () => buildPath(data, width, height, padding),
    [data, height]
  )

  // Y axis ticks (5 lines)
  const yTicks = Array.from({ length: 5 }, (_, i) => {
    const value = min + (range / 4) * i
    const y = padding.top + chartH - (chartH / 4) * i
    return { value: Math.round(value), y }
  })

  // X axis labels
  const xStep = (width - padding.left - padding.right) / ((labels?.length ?? data.length) - 1)

  return (
    <div className="chart-container">
      <div className="chart-header">
        <span className="chart-title">
          <TrendingUp size={16} style={{ color: chartColor }} />
          {title}
        </span>
      </div>
      <svg
        className="chart-svg"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        style={{ height }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={chartColor} stopOpacity="0.3" />
            <stop offset="100%" stopColor={chartColor} stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {yTicks.map((tick, i) => (
          <g key={i}>
            <line
              x1={padding.left}
              y1={tick.y}
              x2={width - padding.right}
              y2={tick.y}
              className="chart-grid-line"
            />
            <text
              x={padding.left - 8}
              y={tick.y + 3}
              textAnchor="end"
              className="chart-axis-label"
            >
              {tick.value}
            </text>
          </g>
        ))}

        {/* X axis labels */}
        {labels?.map((label, i) => (
          <text
            key={i}
            x={padding.left + i * xStep}
            y={height - 4}
            textAnchor="middle"
            className="chart-axis-label"
          >
            {label}
          </text>
        ))}

        {/* Area fill */}
        <path d={area} fill={`url(#${gradientId})`} className="chart-area" />

        {/* Line */}
        <path d={line} className="chart-line" stroke={chartColor} />
      </svg>
    </div>
  )
}

export default AreaChart
