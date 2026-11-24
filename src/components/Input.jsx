import { useId } from 'react';
import { TriangleAlert } from 'lucide-react';

// Figma: Design System > Input. Label above, field, one line under it (hint or error).
export default function Input({ label, icon: Icon, error, hint, className = '', ...props }) {
  const id = useId();
  return (
    <div className={`flex flex-col gap-2xs ${className}`}>
      <label htmlFor={id} className="text-label text-primary">{label}</label>
      <div className={`flex items-center gap-xs h-tap-min px-md rounded-md border bg-canvas/60 text-secondary
        focus-within:text-primary focus-within:ring-1 focus-within:ring-focus
        ${error ? 'border-danger' : 'border-default focus-within:border-accent'}`}>
        {Icon && <Icon size={18} />}
        <input id={id} aria-invalid={!!error}
          className="flex-1 min-w-0 bg-transparent outline-none text-body text-primary placeholder:text-secondary" {...props} />
        {error && <TriangleAlert size={18} className="text-danger" />}
      </div>
      {error
        ? <p role="alert" className="text-caption text-danger">{error}</p>
        : hint && <p className="text-caption text-secondary">{hint}</p>}
    </div>
  );
}
