
export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

export const Spinner = ({ size = 'md' }: SpinnerProps) => {
  return <div className={`spinner spinner-${size}`} />;
};

export default Spinner;
