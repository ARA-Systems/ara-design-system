
export interface DividerProps {
  label?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const Divider = ({ label, orientation = 'horizontal' }: DividerProps) => {
  if (label) {
    return (
      <div className="divider" data-orientation={orientation}>
        {label}
      </div>
    );
  }
  return <div className="divider-line" data-orientation={orientation} />;
};

export default Divider;
