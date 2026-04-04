
export interface AvatarProps {
  src?: string;
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = ({ src, name, size = 'md' }: AvatarProps) => {
  const cls = `avatar avatar-${size}`;
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <div className={cls}>
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};

export default Avatar;
