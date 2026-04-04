import { ReactNode } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info, X } from 'lucide-react';

export interface AlertProps {
  variant: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const icons = {
  success: CheckCircle2,
  error: XCircle,
  warning: AlertTriangle,
  info: Info,
};

export const Alert = ({ variant, title, children, dismissible, onDismiss }: AlertProps) => {
  const Icon = icons[variant];

  return (
    <div className={`alert alert-${variant}`} role="alert">
      <Icon size={18} />
      <div style={{ flex: 1 }}>
        {title && <div className="alert-title">{title}</div>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button className="alert-dismiss" onClick={onDismiss} aria-label="Dismiss">
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default Alert;
