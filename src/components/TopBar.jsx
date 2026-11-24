import { Search, Calendar, Bell } from 'lucide-react';
import ThemeSwitch from './ThemeSwitch';

// Figma: Top Bar 72 high. Search and bell are visual only for now.
export default function TopBar({ title }) {
  const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  return (
    <header className="h-[72px] shrink-0 flex items-center gap-md px-xl border-b border-default">
      <h1 className="flex-1 text-h2 text-primary">{title}</h1>
      <label className="flex items-center gap-xs w-[260px] h-[44px] px-md rounded-md border border-default bg-surface text-secondary">
        <Search size={16} />
        <input placeholder="Search drivers" aria-label="Search drivers" className="flex-1 min-w-0 bg-transparent outline-none text-body-sm text-primary placeholder:text-secondary" />
      </label>
      <button type="button" className="flex items-center gap-xs h-[44px] px-md rounded-md border border-default bg-surface text-label text-primary">
        <Calendar size={16} />Today, {today}
      </button>
      <ThemeSwitch />
      <button type="button" aria-label="Notifications" className="relative w-[44px] h-[44px] grid place-items-center rounded-md border border-default bg-surface text-primary">
        <Bell size={18} /><span className="absolute top-[11px] right-[12px] w-[7px] h-[7px] rounded-full bg-danger-solid" />
      </button>
    </header>
  );
}
