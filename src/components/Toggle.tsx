import { ChangeEventHandler } from 'react';

export interface ToggleProps {
  label?: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
}

export const Toggle = ({ label, checked, onChange, disabled }: ToggleProps) => {
  return (
    <label className="toggle-label">
      <label className="toggle-root">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="toggle-track" />
        <span className="toggle-thumb" />
      </label>
      {label && <span>{label}</span>}
    </label>
  );
};

export default Toggle;
