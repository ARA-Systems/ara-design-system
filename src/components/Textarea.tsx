import { forwardRef, TextareaHTMLAttributes } from 'react';
import { AlertCircle } from 'lucide-react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ error, hint, className, ...props }, ref) => {
    const cls = ['textarea', error ? 'input-error' : '', className].filter(Boolean).join(' ');

    return (
      <div>
        <textarea ref={ref} className={cls} {...props} />
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

Textarea.displayName = 'Textarea';

export default Textarea;
