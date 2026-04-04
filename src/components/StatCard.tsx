import { ReactNode } from 'react';

export interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: ReactNode;
}

export const StatCard = ({ label, value, change, icon }: StatCardProps) => {
  const isPositive = change !== undefined && change >= 0;
  const changeColor = isPositive ? 'var(--color-success, #16a34a)' : 'var(--color-error, #dc2626)';
  const changePrefix = isPositive ? '+' : '';

  return (
    <div className="stat-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <p className="stat-card-label">{label}</p>
        {icon && <span className="stat-card-icon">{icon}</span>}
      </div>
      <p className="stat-card-value">{value}</p>
      {change !== undefined && (
        <span className="stat-card-change" style={{ color: changeColor, fontSize: '0.8125rem', fontWeight: 500 }}>
          {changePrefix}{change}%
        </span>
      )}
    </div>
  );
};

export default StatCard;
