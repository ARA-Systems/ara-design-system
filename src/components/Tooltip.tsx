import { ReactNode } from 'react';

export interface TooltipProps {
  content: string;
  children: ReactNode;
  side?: 'top' | 'bottom';
}

export const Tooltip = ({ content, children, side = 'top' }: TooltipProps) => {
  const tipStyle: React.CSSProperties =
    side === 'bottom'
      ? { top: 'calc(100% + 6px)', bottom: 'auto', transform: 'translateX(-50%)' }
      : {};

  const arrowStyle: React.CSSProperties =
    side === 'bottom'
      ? { top: '-4px', bottom: 'auto', transform: 'translateX(-50%) rotate(180deg)' }
      : {};

  return (
    <div className="tooltip-root">
      {children}
      <div className="tooltip-content" style={tipStyle} role="tooltip">
        {content}
        <span className="tooltip-arrow" style={arrowStyle} />
      </div>
    </div>
  );
};

export default Tooltip;
