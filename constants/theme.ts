export const Colors = {
  // Backgrounds
  backgroundCream: '#fffce3',
  backgroundWhite: '#ffffff',
  backgroundOffWhite: '#fafafa',

  // Primary
  primary: '#242424',

  // Accent
  accentBlue: '#6270f0',
  accentYellow: '#ffe600',

  // Category card backgrounds
  categoryWorks: '#fffce3',
  categorySport: '#e9ffe3',
  categoryHabits: '#e3e6ff',

  // Category icon circle strokes
  categoryWorksStroke: '#fff9c6',
  categorySportStroke: '#c6ffdd',
  categoryHabitsStroke: '#c7c6ff',

  // Text
  textPrimary: '#000000',
  textSecondary: '#606060',
  textMuted: '#757575',
  textOnDark: '#ffffff',

  // Dividers
  divider: '#d7d7d7',

  // Utility
  error: '#e53935',
  white: '#ffffff',
} as const;

export const Typography = {
  hero: { fontSize: 26, fontWeight: '700' as const, lineHeight: 36 },
  heading: { fontSize: 20, fontWeight: '700' as const },
  sectionTitle: { fontSize: 18, fontWeight: '700' as const },
  label: { fontSize: 16, fontWeight: '700' as const },
  body: { fontSize: 16, fontWeight: '500' as const, lineHeight: 21 },
  subtitle: { fontSize: 16, fontWeight: '500' as const, letterSpacing: 0.64, lineHeight: 21 },
  caption: { fontSize: 13, fontWeight: '500' as const },
  buttonSmall: { fontSize: 12, fontWeight: '700' as const },
} as const;

export const Spacing = {
  xs: 8,
  sm: 16,
  md: 24,
  lg: 32,
} as const;

export const Radius = {
  screen: 30,
  taskList: 45,
  taskItem: 16,
  pill: 100,
  categoryCard: 16,
  iconCircle: 50,
  addButton: 26,
} as const;
