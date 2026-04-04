
export type SkeletonVariant = 'text' | 'title' | 'avatar' | 'rect';

export interface SkeletonProps {
  className?: string;
  variant?: SkeletonVariant;
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const normalizeSize = (val: string | number | undefined): string | undefined => {
  if (val === undefined) return undefined;
  return typeof val === 'number' ? `${val}px` : val;
};

export const Skeleton = ({ className, variant = 'text', width, height, lines }: SkeletonProps) => {
  const cls = ['skeleton', `skeleton-${variant}`, className].filter(Boolean).join(' ');
  const style: React.CSSProperties = {
    ...(width !== undefined ? { width: normalizeSize(width) } : {}),
    ...(height !== undefined ? { height: normalizeSize(height) } : {}),
  };

  if (variant === 'text' && lines && lines > 1) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cls}
            style={{ ...style, width: i === lines - 1 ? '70%' : normalizeSize(width) ?? '100%' }}
          />
        ))}
      </div>
    );
  }

  return <div className={cls} style={style} />;
};

export default Skeleton;
