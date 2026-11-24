import DashboardLayout from '../layouts/DashboardLayout';
import StatCard from '../components/StatCard';
import RiskChart from '../components/RiskChart';
import TopDrivers from '../components/TopDrivers';
import AlertsTable from '../components/AlertsTable';
import { kpis, riskTrend, topDrivers, recentAlerts } from '../data/overview';

// A2 Overview (static data, no server yet)
export default function Overview() {
  return (
    <DashboardLayout title="Overview">
      <div className="grid grid-cols-4 gap-md">{kpis.map((k) => <StatCard key={k.label} {...k} />)}</div>
      <div className="flex gap-md items-start">
        <RiskChart data={riskTrend} className="flex-[712]" />
        <TopDrivers drivers={topDrivers} className="flex-[400]" />
      </div>
      <AlertsTable rows={recentAlerts} />
    </DashboardLayout>
  );
}
