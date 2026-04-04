import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, hint, leftIcon, rightIcon, className, ...props }, ref) => {
    const inputCls = ['input', error ? 'input-error' : '', className].filter(Boolean).join(' ');

    const input = <input ref={ref} className={inputCls} {...props} />;

    return (
      <div>
        {leftIcon || rightIcon ? (
          <div className="input-wrapper">
            {leftIcon && <span className="input-icon-left">{leftIcon}</span>}
            {input}
            {rightIcon && <span className="input-icon-right">{rightIcon}</span>}
          </div>
        ) : (
          input
        )}
        {hint && !error && <span className="form-hint">{hint}</span>}
        {error && (
          <span className="form-error-msg">
            <AlertCircle size={14} />
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
