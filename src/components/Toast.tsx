import { ReactNode, createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { CheckCircle2, XCircle, AlertTriangle, Info } from 'lucide-react';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning';

export interface ToastItem {
  id: string;
  title: string;
  message?: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  toast: (opts: { title: string; message?: string; variant?: ToastVariant }) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const variantIcons: Record<ToastVariant, ReactNode> = {
  default: <Info size={16} />,
  success: <CheckCircle2 size={16} />,
  error: <XCircle size={16} />,
  warning: <AlertTriangle size={16} />,
};

export interface ToastComponentProps {
  item: ToastItem;
}

export const Toast = ({ item }: ToastComponentProps) => (
  <div className={`toast toast-${item.variant}`} role="status">
    <span className="toast-icon">{variantIcons[item.variant]}</span>
    <div className="toast-body">
      <div className="toast-title">{item.title}</div>
      {item.message && <div className="toast-message">{item.message}</div>}
    </div>
  </div>
);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const toast = useCallback(({ title, message, variant = 'default' }: { title: string; message?: string; variant?: ToastVariant }) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const item: ToastItem = { id, title, message, variant };
    setToasts((prev) => [...prev, item]);
    const timer = setTimeout(() => dismiss(id), 4000);
    timers.current.set(id, timer);
  }, [dismiss]);

  useEffect(() => {
    const map = timers.current;
    return () => { map.forEach((t) => clearTimeout(t)); };
  }, []);

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="toast-viewport">
        {toasts.map((item) => (
          <Toast key={item.id} item={item} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
};

export default Toast;
