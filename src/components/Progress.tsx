
export interface ProgressProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export const Progress = ({ value, size = 'md', label }: ProgressProps) => {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div>
      {label && <span className="form-hint">{label}</span>}
      <div className={`progress-track progress-track-${size}`}>
        <div className="progress-fill" style={{ width: `${clamped}%` }} />
      </div>
    </div>
  );
};

export default Progress;
