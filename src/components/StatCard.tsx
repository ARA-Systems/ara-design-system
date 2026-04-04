import { ReactNode } from 'react'
import { ChangeBadge } from './ChangeBadge'

export interface StatCardProps {
  label: string
  subtitle?: string
  value: string | number
  change?: number
  icon?: ReactNode
}

export const StatCard = ({ label, subtitle, value, change, icon }: StatCardProps) => {
  return (
    <div className="stat-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p className="stat-card-label">{label}</p>
          {subtitle && (
            <p style={{ fontSize: 'var(--text-xs)', color: 'var(--c-fg-muted)', marginTop: '0.125rem' }}>
              {subtitle}
            </p>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {change !== undefined && <ChangeBadge value={change} />}
          {icon && <span style={{ color: 'var(--c-fg-muted)' }}>{icon}</span>}
        </div>
      </div>
      <p className="stat-card-value" style={{ marginTop: '0.375rem' }}>{value}</p>
    </div>
  )
}

export default StatCard
