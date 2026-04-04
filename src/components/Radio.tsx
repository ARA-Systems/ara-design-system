import { forwardRef, ChangeEventHandler } from 'react';

export interface RadioProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  name: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, value, checked, onChange, disabled, name }, ref) => {
    return (
      <label className="radio-label">
        <input
          ref={ref}
          type="radio"
          className="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span>{label}</span>
      </label>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
