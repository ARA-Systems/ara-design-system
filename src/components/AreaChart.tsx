import { useId } from 'react'
import { TrendingUp, Info } from 'lucide-react'
import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
} from 'recharts'

export interface AreaChartDataPoint {
  label: string
  value: number
}

/**
 * brand   – one colour (the `color` prop), for counts and volumes.
 * score   – the line runs from red (low) through amber to green (high). Pass `domain`
 *           so the colours match the scale, e.g. [1, 5] for the shop score.
 * onBrand – white line on a brand-blue card, for highlight tiles.
 */
export type AreaChartTone = 'brand' | 'score' | 'onBrand'

export interface AreaChartProps {
  data: AreaChartDataPoint[]
  title?: string
  height?: number
  color?: string
  showInfo?: boolean
  tone?: AreaChartTone
  /** Fixed value axis, e.g. [1, 5]. Defaults to the data range. */
  domain?: [number, number]
  /** Dashed line to compare against (previous period, target). */
  reference?: number
  referenceLabel?: string
  /** Pill next to the last point, e.g. "Nota da loja 4,6". */
  endLabel?: string
  /** How values are written in the tooltip. */
  formatValue?: (value: number) => string
}

const SCORE_GOOD = '#12b76a'
const SCORE_MID = '#ffb020'
const SCORE_BAD = '#ff5a5f'

const MARGIN = { top: 16, right: 20, bottom: 0, left: -12 }
/** Room recharts keeps for the X axis labels below the plot. */
const X_AXIS_HEIGHT = 30

export const AreaChart = ({
  data,
  title = 'Desempenho de vendas',
  height = 220,
  color = '#1760fd',
  showInfo = true,
  tone = 'brand',
  domain,
  reference,
  referenceLabel,
  endLabel,
  formatValue = (value) => value.toLocaleString('pt-BR'),
}: AreaChartProps) => {
  const id = useId().replace(/:/g, '')
  const lineId = `chart-line-${id}`
  const fillId = `chart-fill-${id}`

  const onBrand = tone === 'onBrand'
  const lineColor = onBrand ? '#ffffff' : tone === 'score' ? SCORE_GOOD : color
  const stroke = tone === 'score' ? `url(#${lineId})` : lineColor
  const axisColor = onBrand ? 'rgba(255,255,255,.72)' : 'var(--c-fg-muted)'
  const gridColor = onBrand ? 'rgba(255,255,255,.16)' : 'var(--c-border)'
  const lastIndex = data.length - 1

  // Ring on the last point, with the pill beside it. Recharts calls this for every point.
  const renderDot = (props: { cx?: number; cy?: number; index?: number }) => {
    const { cx, cy, index } = props
    if (index !== lastIndex || cx == null || cy == null) return <g key={`dot-${index}`} />
    const pillWidth = endLabel ? endLabel.length * 7.2 + 20 : 0
    // Above the point when there is room (a rising line leaves that corner free), else below.
    const pillY = cy - 13 - 26 >= MARGIN.top - 8 ? cy - 13 - 26 : cy + 13
    return (
      <g key={`dot-${index}`}>
        <circle
          cx={cx}
          cy={cy}
          r={7}
          fill={onBrand ? 'var(--color-brand-400)' : 'var(--c-surface)'}
          stroke={lineColor}
          strokeWidth={3.5}
        />
        {endLabel && (
          <g transform={`translate(${cx - pillWidth + 14}, ${pillY})`}>
            <rect width={pillWidth} height={26} rx={8} fill={onBrand ? '#ffffff' : lineColor} />
            <text
              x={pillWidth / 2}
              y={17.5}
              textAnchor="middle"
              className="chart-pill-text"
              fill={onBrand ? 'var(--color-brand-400)' : '#ffffff'}
            >
              {endLabel}
            </text>
          </g>
        )}
      </g>
    )
  }

  return (
    <div className={`chart-container${onBrand ? ' chart-container-brand' : ''}`}>
      <div className="chart-header">
        <span className="chart-title">
          <TrendingUp size={16} style={{ color: lineColor }} />
          {title}
        </span>
        {showInfo && (
          <button type="button" className="chart-info" aria-label="Sobre este gráfico">
            <Info size={16} />
          </button>
        )}
      </div>

      <ResponsiveContainer width="100%" height={height}>
        <RechartsAreaChart data={[...data]} margin={MARGIN}>
          <defs>
            {/* In chart coordinates, so the colours follow the value axis even on a flat line */}
            <linearGradient
              id={lineId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1={MARGIN.top}
              x2="0"
              y2={height - X_AXIS_HEIGHT}
            >
              <stop offset="0" stopColor={SCORE_GOOD} />
              <stop offset="0.3" stopColor={SCORE_GOOD} />
              <stop offset="0.6" stopColor={SCORE_MID} />
              <stop offset="1" stopColor={SCORE_BAD} />
            </linearGradient>
            <linearGradient id={fillId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={lineColor} stopOpacity={onBrand ? 0.22 : 0.28} />
              <stop offset="100%" stopColor={lineColor} stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke={gridColor} vertical={false} />

          <XAxis
            dataKey="label"
            tick={{ fontSize: 11, fill: axisColor }}
            tickLine={false}
            axisLine={false}
            dy={8}
          />

          <YAxis
            domain={domain ?? ['auto', 'auto']}
            tick={{ fontSize: 11, fill: axisColor }}
            tickLine={false}
            axisLine={false}
            dx={-4}
          />

          {reference != null && (
            <ReferenceLine
              y={reference}
              stroke={onBrand ? 'rgba(255,255,255,.6)' : 'var(--color-brand-100)'}
              strokeWidth={2}
              strokeDasharray="10 8"
              strokeLinecap="round"
              label={
                referenceLabel
                  ? { value: referenceLabel, position: 'insideBottomLeft', fontSize: 11, fill: axisColor }
                  : undefined
              }
            />
          )}

          <Tooltip
            cursor={{ stroke: gridColor, strokeWidth: 1 }}
            content={({ active, payload, label }) =>
              active && payload?.length ? (
                <div className="chart-tooltip">
                  <span>{label}</span>
                  <strong>{formatValue(Number(payload[0].value))}</strong>
                </div>
              ) : null
            }
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke={stroke}
            strokeWidth={3}
            strokeLinecap="round"
            fill={`url(#${fillId})`}
            dot={renderDot}
            activeDot={{
              r: 5,
              fill: onBrand ? 'var(--color-brand-400)' : 'var(--c-surface)',
              stroke: lineColor,
              strokeWidth: 3,
            }}
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart
