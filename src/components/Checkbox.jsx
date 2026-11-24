// "Keep me signed in" is a switch in Figma. Kept the name Checkbox from the guide.
export default function Checkbox({ label, ...props }) {
  return (
    <label className="flex items-center gap-xs cursor-pointer text-label text-primary">
      <input type="checkbox" className="peer sr-only" {...props} />
      <span className="relative w-[40px] h-[24px] rounded-full bg-raised border border-default transition-colors
        peer-checked:bg-accent peer-focus-visible:ring-2 peer-focus-visible:ring-focus
        after:content-[''] after:absolute after:top-[3px] after:left-[3px] after:w-[16px] after:h-[16px]
        after:rounded-full after:bg-secondary after:transition-transform
        peer-checked:after:translate-x-[16px] peer-checked:after:bg-canvas" />
      {label}
    </label>
  );
}
