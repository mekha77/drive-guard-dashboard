/*
  Drive Guard Tailwind config (Tailwind CSS v3).
  Colors read the CSS variables in src/styles/tokens.css, so Dark and Light switch by themselves:
  write bg-surface, not bg-[#141414], and never use dark: for colors.

  Examples:
    <div className="bg-canvas text-primary">
    <div className="bg-surface border border-default rounded-lg p-lg">
    <span className="bg-danger-solid text-on-danger rounded-full h-badge w-badge">82 · High</span>
    <p className="text-overline uppercase text-secondary">Trips today</p>
*/

const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', 'html:not(.light)'],
  theme: {
    extend: {
      colors: {
        canvas: v('bg-canvas'),
        surface: v('bg-surface'),
        raised: v('bg-raised'),
        accent: {
          DEFAULT: v('accent-default'),
          hover: v('accent-hover'),
          subtle: v('accent-subtle'),
        },
        safe: { DEFAULT: v('safe-default'), subtle: v('safe-subtle'), solid: v('safe-solid') },
        warning: { DEFAULT: v('warning-default'), subtle: v('warning-subtle'), solid: v('warning-solid') },
        danger: { DEFAULT: v('danger-default'), subtle: v('danger-subtle'), solid: v('danger-solid') },
        info: { solid: v('info-solid') },
        lens: v('brand-lens'),
      },
      textColor: {
        primary: v('text-primary'),
        secondary: v('text-secondary'),
        'on-accent': v('text-on-accent'),
        'accent-text': v('accent-text'),
        'on-safe': v('text-on-safe'),
        'on-warning': v('text-on-warning'),
        'on-danger': v('text-on-danger'),
        'on-info': v('text-on-info'),
      },
      borderColor: {
        default: v('border-default'),
        strong: v('border-strong'),
      },
      ringColor: {
        focus: v('focus-ring'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        brand: ['Syncopate', 'sans-serif'],
      },
      // [size, { lineHeight, letterSpacing, fontWeight }] from the Figma text styles
      fontSize: {
        'display-alert': ['56px', { lineHeight: '60px', letterSpacing: '-0.56px', fontWeight: '700' }],
        'display-timer': ['48px', { lineHeight: '56px', fontWeight: '600' }],
        'display-score': ['40px', { lineHeight: '44px', letterSpacing: '-0.4px', fontWeight: '700' }],
        h1: ['32px', { lineHeight: '40px', letterSpacing: '-0.32px', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '32px', fontWeight: '600' }],
        h3: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        body: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-strong': ['16px', { lineHeight: '24px', fontWeight: '600' }],
        'body-sm': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label-lg': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        label: ['14px', { lineHeight: '20px', fontWeight: '500' }],
        caption: ['12px', { lineHeight: '16px', fontWeight: '500' }],
        overline: ['12px', { lineHeight: '16px', letterSpacing: '0.72px', fontWeight: '600' }],
        wordmark: ['15px', { lineHeight: '16px', fontWeight: '700' }],
      },
      spacing: {
        '2xs': '4px',
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        'tap-min': '48px',
        'tap-large': '64px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
        full: '999px',
      },
      width: { badge: '128px' },
      height: { badge: '28px' },
    },
  },
  plugins: [],
};
