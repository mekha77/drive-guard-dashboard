import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutGrid, Users, Bell, ChartColumn, SlidersHorizontal, ChevronDown, LogOut } from 'lucide-react';
import Brand from './Brand';
import Avatar from './Avatar';
import { admin } from '../data/overview';

// Figma: Sidebar 248 wide. Only Overview opens a page; the others are placeholders.
const items = [
  { key: 'overview', label: 'Overview', Icon: LayoutGrid, to: '/overview' },
  { key: 'drivers', label: 'Drivers', Icon: Users },
  { key: 'alerts', label: 'Alerts', Icon: Bell },
  { key: 'reports', label: 'Reports', Icon: ChartColumn },
  { key: 'settings', label: 'Settings', Icon: SlidersHorizontal, chevron: true },
];

export default function Sidebar({ active }) {
  const navigate = useNavigate();
  const base = 'relative flex items-center gap-sm h-[44px] px-md rounded-md text-label text-left w-full';
  return (
    <aside className="w-[248px] shrink-0 sticky top-0 h-screen flex flex-col gap-lg py-lg px-md border-r border-default bg-canvas">
      <div className="px-sm"><Brand /></div>
      <nav className="flex-1 flex flex-col gap-xs">
        {items.map(({ key, label, Icon, to, chevron }) => key === active ? (
          <NavLink key={key} to={to} className={`${base} bg-raised text-primary before:absolute before:left-0 before:top-[10px] before:bottom-[10px] before:w-[3px] before:rounded-full before:bg-accent`}>
            <Icon size={18} />{label}
          </NavLink>
        ) : (
          <button key={key} type="button" className={`${base} text-secondary hover:bg-raised hover:text-primary`}>
            <Icon size={18} />{label}{chevron && <ChevronDown size={16} className="ml-auto" />}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-sm px-sm">
        <Avatar name={admin.name} />
        <div className="flex-1 min-w-0 leading-tight">
          <p className="text-label text-primary">{admin.name}</p>
          <p className="text-caption text-secondary truncate">{admin.role} · {admin.company}</p>
        </div>
        <button type="button" onClick={() => navigate('/login')} aria-label="Sign out" className="text-secondary hover:text-primary"><LogOut size={18} /></button>
      </div>
    </aside>
  );
}
