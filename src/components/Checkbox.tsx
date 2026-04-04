import { forwardRef, ChangeEventHandler } from 'react';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  id: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, checked, onChange, disabled, id }, ref) => {
    return (
      <label className="checkbox-label" htmlFor={id}>
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span>{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
