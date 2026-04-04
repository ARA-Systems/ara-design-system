import { forwardRef, SelectHTMLAttributes } from 'react';
import { AlertCircle, ChevronDown } from 'lucide-react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  error?: string;
  hint?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, error, hint, className, ...props }, ref) => {
    const cls = ['select', error ? 'input-error' : '', className].filter(Boolean).join(' ');

    return (
      <div>
        <div style={{ position: 'relative' }}>
          <select ref={ref} className={cls} style={{ paddingRight: '2.5rem' }} {...props}>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={16}
            style={{
              position: 'absolute',
              right: '0.625rem',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--c-fg-muted)',
              pointerEvents: 'none',
            }}
          />
        </div>
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

Select.displayName = 'Select';

export default Select;
