import { ChevronRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function TopDrivers({ drivers, className = '' }) {
  return (
    <div className={`bg-surface border border-default rounded-lg p-lg ${className}`}>
      <div className="flex justify-between items-center mb-md">
        <h3 className="text-h3 text-primary">Highest-risk drivers</h3>
        <button type="button" className="text-label text-secondary hover:text-primary">View all</button>
      </div>
      <div className="flex flex-col gap-sm">
        {drivers.map((d) => (
          <div key={d.name} className="flex items-center justify-between gap-sm p-md rounded-md border border-default hover:bg-raised">
            <div className="flex flex-col gap-2xs items-start">
              <p className="text-body-strong text-primary">{d.name}</p>
              <p className="text-caption text-secondary">{d.trips} trips · {d.alerts} alerts</p>
              <StatusBadge level={d.level} score={d.score} />
            </div>
            <ChevronRight size={18} className="text-secondary" />
          </div>
        ))}
      </div>
    </div>
  );
}
