import type { TextStyle } from 'react-native';

import { normalizeFont } from './normalize';

export const typography: { [key: string]: TextStyle } = {
  body3: {
    fontSize: normalizeFont(12),
    lineHeight: normalizeFont(16),
    fontWeight: '400',
  },
  body2: {
    fontSize: normalizeFont(14),
    lineHeight: normalizeFont(20),
    fontWeight: '400',
  },
  body1: {
    fontSize: normalizeFont(16),
    lineHeight: normalizeFont(24),
    fontWeight: '400',
  },
  h6: {
    fontSize: normalizeFont(18),
    lineHeight: normalizeFont(28),
    fontWeight: '600',
  },
  h5: {
    fontSize: normalizeFont(20),
    lineHeight: normalizeFont(28),
    fontWeight: '600',
  },
  h4: {
    fontSize: normalizeFont(24),
    lineHeight: normalizeFont(32),
    fontWeight: '600',
  },
  h3: {
    fontSize: normalizeFont(30),
    lineHeight: normalizeFont(36),
    fontWeight: '600',
  },
  h2: {
    fontSize: normalizeFont(36),
    lineHeight: normalizeFont(40),
    fontWeight: '600',
  },
  h1: {
    fontSize: normalizeFont(48),
    lineHeight: normalizeFont(48),
    fontWeight: '600',
  },
};
