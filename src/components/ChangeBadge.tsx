import { ArrowUp, ArrowDown } from 'lucide-react'

export interface ChangeBadgeProps {
  value: number
}

export const ChangeBadge = ({ value }: ChangeBadgeProps) => {
  const isPositive = value >= 0
  const cls = `change-badge ${isPositive ? 'change-badge-positive' : 'change-badge-negative'}`
  const prefix = isPositive ? '+' : '-'
  const formatted = `${prefix}${String(Math.abs(value)).padStart(2, '0')}`

  return (
    <span className={cls}>
      <span className="change-badge-icon">
        {isPositive
          ? <ArrowUp size={10} strokeWidth={3} />
          : <ArrowDown size={10} strokeWidth={3} />
        }
      </span>
      {formatted}
    </span>
  )
}

export default ChangeBadge
