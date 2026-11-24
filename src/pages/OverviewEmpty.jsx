import { TrendingUp, ShieldCheck } from 'lucide-react';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/Button';
import { admin } from '../data/overview';

const steps = [
  ['Add your drivers', 'We text each driver a link to install the app.'],
  ['Drivers finish setup', 'They allow the camera and place the phone on the dashboard mount.'],
  ['First trip', 'Trips, alerts and risk scores show up here automatically.'],
];
const Empty = ({ title, Icon, head, text }) => (
  <div className="flex flex-col bg-surface border border-default rounded-lg p-lg min-h-[280px]">
    <h3 className="text-h3 text-primary">{title}</h3>
    <div className="flex-1 flex flex-col items-center justify-center gap-xs text-center">
      <span className="w-[44px] h-[44px] rounded-md bg-raised border border-default grid place-items-center text-secondary"><Icon size={20} /></span>
      <p className="text-h3 text-primary">{head}</p>
      <p className="text-body-sm text-secondary max-w-[320px]">{text}</p>
    </div>
  </div>
);

// A2.3 Overview – Empty
export default function OverviewEmpty() {
  return (
    <DashboardLayout title="Overview">
      <div>
        <h2 className="text-h2 text-primary">Welcome to Drive Guard, {admin.name.split(' ')[0]}</h2>
        <p className="mt-2xs text-body text-secondary">Your dashboard fills up once your drivers start their first trips.</p>
      </div>
      <div className="bg-surface border border-default rounded-lg p-lg">
        <h3 className="text-h3 text-primary mb-md">Get your fleet set up</h3>
        {steps.map(([t, d], i) => (
          <div key={t} className="flex items-center gap-md py-md border-t border-default">
            <span className="w-[28px] h-[28px] rounded-full border border-strong grid place-items-center text-label text-primary">{i + 1}</span>
            <div className="flex-1"><p className="text-body-strong text-primary">{t}</p><p className="text-body-sm text-secondary">{d}</p></div>
            {i === 0 && <Button>Add drivers</Button>}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-md">
        <Empty title="Fleet risk trend" Icon={TrendingUp} head="No trend yet" text="You’ll see the weekly risk trend after the first week of trips." />
        <Empty title="Recent alerts" Icon={ShieldCheck} head="No alerts — that’s good" text="Drowsiness and phone-use alerts will be listed here as they happen." />
      </div>
    </DashboardLayout>
  );
}
