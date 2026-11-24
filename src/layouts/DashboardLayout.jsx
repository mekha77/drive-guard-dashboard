import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';

export default function DashboardLayout({ title, active = 'overview', children }) {
  return (
    <div className="flex min-h-screen bg-canvas text-primary">
      <Sidebar active={active} />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar title={title} />
        <main className="flex-1 p-xl flex flex-col gap-lg">{children}</main>
      </div>
    </div>
  );
}
