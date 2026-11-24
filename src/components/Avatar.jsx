// Figma: Design System > Avatar (40x40 circle, first two initials)
export default function Avatar({ name }) {
  const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <span className="w-[40px] h-[40px] shrink-0 rounded-full bg-raised border border-default grid place-items-center text-label text-primary">
      {initials}
    </span>
  );
}
