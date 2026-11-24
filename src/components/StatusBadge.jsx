import { CircleCheck, TriangleAlert, CircleAlert } from 'lucide-react';

// Figma: Design System > Status Badge, Size=Small (fixed 128x28, text first then icon)
const levels = {
  LOW:    { cls: 'bg-safe-solid text-on-safe',       label: 'Low',    Icon: CircleCheck },
  MEDIUM: { cls: 'bg-warning-solid text-on-warning', label: 'Medium', Icon: TriangleAlert },
  HIGH:   { cls: 'bg-danger-solid text-on-danger',   label: 'High',   Icon: CircleAlert },
};

export default function StatusBadge({ level, score }) {
  const { cls, label, Icon } = levels[level];
  return (
    <span className={`inline-flex items-center justify-center gap-xs w-badge h-badge rounded-full text-label ${cls}`}>
      {score != null ? `${score} · ${label}` : label}
      <Icon size={14} />
    </span>
  );
}
