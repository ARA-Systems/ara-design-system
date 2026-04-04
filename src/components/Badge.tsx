import { ReactNode } from 'react';

export interface BadgeProps {
  variant?: 'brand' | 'neutral' | 'success' | 'error';
  pill?: boolean;
  children: ReactNode;
}

export const Badge = ({ variant = 'neutral', pill = false, children }: BadgeProps) => {
  const cls = pill ? 'badge-pill' : `badge badge-${variant}`;
  return <span className={cls}>{children}</span>;
};

export default Badge;
