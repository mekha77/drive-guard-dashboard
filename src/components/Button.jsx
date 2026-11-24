// Figma: Design System > Button (Primary / Secondary / Danger, Default 48 / Large 64)
const styles = {
  primary:   'bg-accent text-on-accent hover:bg-accent-hover',
  secondary: 'border border-strong text-primary hover:bg-raised',
  danger:    'bg-danger-solid text-on-danger',
};
const sizes = {
  default: 'h-tap-min px-lg rounded-md',
  large:   'h-tap-large px-xl rounded-lg',
};

export default function Button({ variant = 'primary', size = 'default', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-xs text-body-strong
        disabled:opacity-50 disabled:cursor-not-allowed ${styles[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
