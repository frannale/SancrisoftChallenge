import { StyleSheet } from 'react-native';

import type { TThemeMode } from '../../../models/Theme';
import { normalizeFont } from '../../../theme/normalize';

export const createStyles = (theme: TThemeMode) =>
  // Copy this styles with typhography and replace with this, when Text componente is deprecated
  StyleSheet.create({
    base: {
      color: theme.blocks.primary.text,
    },
    primary: {
      color: theme.blocks.primary.text,
    },
    secondary: {
      color: theme.blocks.secondary.text,
    },
    primaryAccent: {
      color: theme.blocks.primary.textAccent,
    },
    secondaryAccent: {
      color: theme.blocks.secondary.textAccent,
    },
    body3: {
      fontSize: normalizeFont(12),
      lineHeight: normalizeFont(16),
      fontWeight: '400',
    },
    body2: {
      fontSize: normalizeFont(14),
      lineHeight: normalizeFont(16),
      fontWeight: '400',
    },
    body1: {
      fontSize: normalizeFont(16),
      lineHeight: normalizeFont(20),
      fontWeight: '400',
      letterSpacing: 0.02,
    },
    h6: {
      fontSize: normalizeFont(16),
      lineHeight: normalizeFont(16),
      fontWeight: '600',
      letterSpacing: -0.02,
    },
    h5: {
      fontSize: normalizeFont(20),
      lineHeight: normalizeFont(20),
      fontWeight: '600',
      letterSpacing: -0.03,
    },
    h4: {
      fontSize: normalizeFont(24),
      lineHeight: normalizeFont(24),
      fontWeight: '600',
      letterSpacing: -0.03,
    },
    h3: {
      fontSize: normalizeFont(32),
      lineHeight: normalizeFont(32),
      fontWeight: '600',
      letterSpacing: -0.04,
    },
    h2: {
      fontSize: normalizeFont(40),
      lineHeight: normalizeFont(40),
      fontWeight: '600',
      letterSpacing: -0.04,
    },
    h1: {
      fontSize: normalizeFont(48),
      lineHeight: normalizeFont(48),
      fontWeight: '600',
      letterSpacing: -0.05,
    },
    subtitle1: {
      fontSize: normalizeFont(20),
      lineHeight: normalizeFont(30),
      fontWeight: '400',
    },
    subtitle2: {
      fontSize: normalizeFont(20),
      lineHeight: normalizeFont(30),
      fontWeight: '400',
    },
    caption: {
      fontSize: normalizeFont(10),
      lineHeight: normalizeFont(11),
    },
    button: {
      fontSize: 14,
    },
    overline: {
      fontSize: 0,
    },
    regular: {
      fontWeight: 'normal',
    },
    semibold: {
      fontWeight: 'normal',
    },
    bold: {
      fontWeight: 'bold',
    },
    extrabold: {
      fontWeight: 'bold',
    },
  });
