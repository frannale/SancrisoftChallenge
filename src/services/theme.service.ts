import { useMemo } from 'react';

import { useTheme } from '../context/themeCtx/theme.context';
import type { TThemeMode } from '../models/Theme';

type Generator<T extends object> = (theme: TThemeMode) => T;

export const useThemeService = <T extends object>(fn: Generator<T>) => {
  const { theme } = useTheme();

  const ThemeAwareObject = useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
