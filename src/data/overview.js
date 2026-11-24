// Sample data for A2 Overview. Same numbers as the Figma screen.
// No server this week: the page reads these constants directly.

export const kpis = [
  { label: 'Trips today',         value: 128, change: '+14 vs last Tuesday', tone: 'neutral' },
  { label: 'Average risk · Low',  value: 34,  change: 'Down 3 vs last week', tone: 'good' },
  { label: 'Alerts today',        value: 47,  change: 'Up 9 vs yesterday',   tone: 'bad' },
  { label: 'Drivers on the road', value: 52,  change: 'of 60 on shift today' },
];

export const riskTrend = [
  { week: 'Sep 1', score: 38 }, { week: 'Sep 8', score: 44 }, { week: 'Sep 15', score: 42 },
  { week: 'Sep 22', score: 52 }, { week: 'Sep 29', score: 60 }, { week: 'Oct 6', score: 57 },
  { week: 'Oct 13', score: 66 }, { week: 'Oct 20', score: 74 },
];

export const topDrivers = [
  { name: 'Omar Khaled',  trips: 41, alerts: 19, score: 82, level: 'HIGH' },
  { name: 'Youssef Ali',  trips: 37, alerts: 14, score: 74, level: 'HIGH' },
  { name: 'Sara Mahmoud', trips: 29, alerts: 9,  score: 61, level: 'MEDIUM' },
  { name: 'Karim Nabil',  trips: 33, alerts: 8,  score: 58, level: 'MEDIUM' },
];

export const recentAlerts = [
  { time: '20 Oct, 08:57', driver: 'Omar Khaled',  type: 'Drowsiness', level: 'HIGH' },
  { time: '20 Oct, 08:51', driver: 'Sara Mahmoud', type: 'Phone use',  level: 'MEDIUM' },
];

export const admin = { name: 'Mona Adel', role: 'Fleet manager', company: 'Nile Fleet' };
