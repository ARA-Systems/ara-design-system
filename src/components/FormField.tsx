import { ReactNode } from 'react';
import { AlertCircle } from 'lucide-react';

export interface FormFieldProps {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export const FormField = ({ label, required, hint, error, children }: FormFieldProps) => {
  return (
    <div className="form-field">
      <label className={`form-label${required ? ' form-label-required' : ''}`}>
        {label}
      </label>
      {children}
      {hint && !error && <span className="form-hint">{hint}</span>}
      {error && (
        <span className="form-error-msg">
          <AlertCircle size={14} />
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;
