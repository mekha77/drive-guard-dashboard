import { useTheme } from '../theme/ThemeContext';
import markDark from '../assets/logo-mark-dark.svg';
import markLight from '../assets/logo-mark-light.svg';

// Figma: Design System > Brand (122x40). The words are text, not an image.
export default function Brand() {
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-sm h-[40px]">
      <img src={theme === 'light' ? markLight : markDark} alt="" className="w-[35px] h-[35px]" />
      <span className="font-brand text-wordmark uppercase text-primary tracking-[0.18em]">Drive<br />Guard</span>
    </div>
  );
}
