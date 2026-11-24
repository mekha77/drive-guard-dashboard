import { EyeOff, Smartphone, ChevronRight } from 'lucide-react';
import StatusBadge from './StatusBadge';

const typeIcon = { Drowsiness: EyeOff, 'Phone use': Smartphone };
const th = 'px-md text-left text-overline uppercase text-secondary font-semibold';

export default function AlertsTable({ rows }) {
  return (
    <div className="bg-surface border border-default rounded-lg p-lg">
      <div className="flex justify-between items-center mb-md">
        <h3 className="text-h3 text-primary">Recent alerts</h3>
        <button type="button" className="text-label text-secondary hover:text-primary">Open Alert History</button>
      </div>
      <div className="overflow-x-auto rounded-md border border-default">
        <table className="w-full">
          <thead><tr className="h-[44px] bg-raised">
            <th className={th}>Date &amp; time</th><th className={th}>Driver</th><th className={th}>Type</th><th className={th}>Severity</th><th className={th}>Trip</th>
          </tr></thead>
          <tbody>{rows.map((r) => {
            const Icon = typeIcon[r.type];
            return (
              <tr key={r.time} className="h-[56px] border-t border-default hover:bg-raised">
                <td className="px-md text-body-sm text-primary">{r.time}</td>
                <td className="px-md text-body-strong text-primary">{r.driver}</td>
                <td className="px-md text-body-sm text-primary"><span className="inline-flex items-center gap-xs">{Icon && <Icon size={16} />}{r.type}</span></td>
                <td className="px-md"><StatusBadge level={r.level} /></td>
                <td className="px-md"><button type="button" className="inline-flex items-center gap-2xs text-label text-primary">View trip<ChevronRight size={14} /></button></td>
              </tr>
            );
          })}</tbody>
        </table>
      </div>
    </div>
  );
}
