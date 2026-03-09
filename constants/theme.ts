export const Colors = {
  cream: '#fffce3',
  primary: '#242424',
  accentBlue: '#a8c8f8',
  offwhite: '#f5f5f5',
  muted: '#9e9e9e',
  white: '#ffffff',
  error: '#e53935',
  taskYellow: '#f7e96b',
  taskPink: '#f8c8d4',
  taskGreen: '#c8f0d8',
  taskBlue: '#a8c8f8',
} as const;

export const Typography = {
  heroTitle: { fontSize: 26, fontWeight: '700' as const },
  sectionTitle: { fontSize: 20, fontWeight: '700' as const },
  cardTitle: { fontSize: 16, fontWeight: '600' as const },
  body: { fontSize: 14, fontWeight: '400' as const },
  caption: { fontSize: 12, fontWeight: '400' as const },
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const Radius = {
  sm: 8,
  md: 16,
  lg: 24,
  full: 9999,
} as const;
