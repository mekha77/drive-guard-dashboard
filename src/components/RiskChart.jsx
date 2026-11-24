import { useMemo } from 'react';
import {
  ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, LabelList,
} from 'recharts';
import { useTheme } from '../theme/ThemeContext';

// Recharts draws SVG and can't read Tailwind class names,
// so we read the colors from tokens.css again whenever the theme changes.
const readColor = (name) =>
  `rgb(${getComputedStyle(document.documentElement).getPropertyValue(name).trim().split(/\s+/).join(',')})`;

// Figma: A2 Overview > Chart/Line (712x310)
export default function RiskChart({ data, className = '' }) {
  const { theme } = useTheme();
  const c = useMemo(() => ({
    line: readColor('--text-primary'),
    grid: readColor('--border-default'),
    axis: readColor('--text-secondary'),
    danger: readColor('--danger-default'),
  }), [theme]); // eslint-disable-line react-hooks/exhaustive-deps
  const tick = { fill: c.axis, fontSize: 12 };

  return (
    <div className={`bg-surface border border-default rounded-lg p-lg ${className}`}>
      <div className="flex justify-between items-center mb-md">
        <h3 className="text-h3 text-primary">Fleet risk trend · last 8 weeks</h3>
        <span className="text-caption text-secondary">Avg. score per week</span>
      </div>
      <ResponsiveContainer width="100%" height={216}>
        <LineChart data={data} margin={{ top: 20, right: 16, left: 0, bottom: 0 }}>
          <CartesianGrid vertical={false} stroke={c.grid} />
          <XAxis dataKey="week" tick={tick} tickLine={false} axisLine={false} />
          <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} width={32}
                 tick={tick} tickLine={false} axisLine={false} />
          <ReferenceLine y={70} stroke={c.danger} strokeDasharray="4 4"
            label={{ value: 'High risk ≥ 70', position: 'insideTopLeft', fill: c.danger, fontSize: 12 }} />
          <Line dataKey="score" type="linear" stroke={c.line} strokeWidth={2}
                dot={{ r: 3, fill: c.line }} isAnimationActive={false}>
            <LabelList dataKey="score"
              content={(p) => (p.index === data.length - 1
                ? <text x={p.x} y={p.y - 8} textAnchor="middle" fill={c.line} fontSize={12}>{p.value}</text>
                : null)} />
          </Line>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
