import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeContext';

// Figma: Design System > Theme Switch (82x44, radius 10)
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const btn = (mode) =>
    `flex-1 flex items-center justify-center rounded-sm ${
      theme === mode ? 'bg-raised text-primary' : 'text-secondary'}`;
  return (
    <div className="flex w-[82px] h-[44px] p-[3px] gap-[2px] rounded-md border border-default bg-surface">
      <button type="button" className={btn('light')} onClick={() => setTheme('light')} aria-label="Light mode">
        <Sun size={18} />
      </button>
      <button type="button" className={btn('dark')} onClick={() => setTheme('dark')} aria-label="Dark mode">
        <Moon size={18} />
      </button>
    </div>
  );
}
