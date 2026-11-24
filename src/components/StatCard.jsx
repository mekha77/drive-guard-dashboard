import { TrendingUp, TrendingDown } from 'lucide-react';

// Figma: Stat Card 270x146. tone: neutral | good | bad (or none)
const tones = {
  neutral: { cls: 'text-secondary', Icon: TrendingUp },
  good: { cls: 'text-safe', Icon: TrendingDown },
  bad: { cls: 'text-danger', Icon: TrendingUp },
};

export default function StatCard({ label, value, change, tone }) {
  const t = tones[tone];
  return (
    <div className="flex flex-col gap-xs bg-surface border border-default rounded-lg p-lg">
      <p className="text-overline uppercase text-secondary">{label}</p>
      <p className="text-display-score text-primary">{value}</p>
      <p className={`flex items-center gap-2xs text-body-sm ${t ? t.cls : 'text-secondary'}`}>
        {t && <t.Icon size={14} />}{change}
      </p>
    </div>
  );
}
