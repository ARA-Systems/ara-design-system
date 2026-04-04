import { CSSProperties, ReactNode } from 'react';

export interface CardProps {
  variant?: 'default' | 'elevated';
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Card = ({ variant = 'default', children, className, style }: CardProps) => {
  const cls = [variant === 'elevated' ? 'card-elevated' : 'card', className].filter(Boolean).join(' ');
  return <div className={cls} style={style}>{children}</div>;
};

export interface CardHeaderProps { children: ReactNode }
export const CardHeader = ({ children }: CardHeaderProps) => (
  <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--c-border)' }}>{children}</div>
);

export interface CardTitleProps { children: ReactNode }
export const CardTitle = ({ children }: CardTitleProps) => (
  <div style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.4 }}>{children}</div>
);

export interface CardContentProps { children: ReactNode }
export const CardContent = ({ children }: CardContentProps) => (
  <div style={{ padding: '1.25rem 1.5rem' }}>{children}</div>
);

export interface CardFooterProps { children: ReactNode }
export const CardFooter = ({ children }: CardFooterProps) => (
  <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--c-border)' }}>{children}</div>
);

export default Card;
