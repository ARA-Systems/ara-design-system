import { forwardRef, ButtonHTMLAttributes, ReactNode } from 'react';
import { Spinner } from './Spinner';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cta';
  size?: 'sm' | 'default' | 'lg';
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'default',
      loading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    let cls: string;
    if (variant === 'cta') {
      cls = 'btn-cta';
    } else {
      cls = `btn btn-${variant}${size !== 'default' ? ` btn-${size}` : ''}`;
    }
    if (className) cls += ` ${className}`;

    return (
      <button ref={ref} className={cls} disabled={disabled || loading} {...props}>
        {loading ? (
          <Spinner size="sm" />
        ) : (
          leftIcon && <span>{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
