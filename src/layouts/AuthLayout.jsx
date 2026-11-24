import { useTheme } from '../theme/ThemeContext';
import roadDark from '../assets/road-dark.svg';
import roadLight from '../assets/road-light.svg';
import Brand from '../components/Brand';
import ThemeSwitch from '../components/ThemeSwitch';

// Shared by A1, A1.1 ... A1.5: road background, hero text, theme switch, and the card.
export default function AuthLayout({ children }) {
  const { theme } = useTheme();
  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas">
      <img src={theme === 'light' ? roadLight : roadDark} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute left-3xl top-[56px] w-[600px]">
        <Brand />
        <h2 className="mt-[96px] text-[44px] leading-[52px] font-bold tracking-tight text-primary">See risk before it becomes an accident.</h2>
        <p className="mt-sm text-body-lg text-secondary">Live drowsiness and phone-use alerts for your whole fleet.</p>
      </div>
      <div className="absolute right-3xl top-[54px]"><ThemeSwitch /></div>
      {/* Position of this badge: adjust left/bottom to match Figma */}
      <div className="absolute bottom-[56px] left-[30%] flex items-center gap-xs h-[34px] px-md rounded-full bg-surface border border-default text-caption text-primary">
        <span className="w-[6px] h-[6px] rounded-full bg-safe" />Driver awake · Safe
      </div>
      <div className="absolute right-[118px] top-1/2 -translate-y-1/2 w-[482px] p-[40px] rounded-xl bg-surface/40 backdrop-blur-xl border border-default">
        {children}
      </div>
    </div>
  );
}
