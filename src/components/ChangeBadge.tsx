export interface ChangeBadgeProps {
  value: number
  showDot?: boolean
}

export const ChangeBadge = ({ value, showDot = true }: ChangeBadgeProps) => {
  const isPositive = value >= 0
  const cls = `change-badge ${isPositive ? 'change-badge-positive' : 'change-badge-negative'}`
  const prefix = isPositive ? '+' : ''
  const formatted = `${prefix}${String(Math.abs(value)).padStart(2, '0')}`

  return (
    <span className={cls}>
      {formatted}
      {showDot && <span className="change-badge-dot" />}
    </span>
  )
}

export default ChangeBadge
