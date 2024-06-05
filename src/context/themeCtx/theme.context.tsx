import React, { useCallback, useMemo, useState } from 'react';
import { Appearance } from 'react-native';

import { EPaletteType } from '../../models/Theme';
import { palette } from '../../theme/palette';
import { createCtx } from '../createCtx';
import type {
  IThemeProviderProps,
  TThemeContext,
  TThemeContextState,
} from './theme.types';

const [useContext, ThemeContextProvider] =
  createCtx<TThemeContext>('themeContext');

export const ThemeProvider = ({ children }: IThemeProviderProps) => {
  const isDarkMode = Appearance.getColorScheme() === EPaletteType.DARK;

  const defaultPalette = palette.theme;

  const [themeCtxState, setCtxTheme] = useState<TThemeContextState>({
    brandId: 'main',
    theme: defaultPalette.light,
    isDarkMode,
  });

  const ToggleThemeCallback = useCallback(() => {
    setCtxTheme((prevThemeCtxState): TThemeContextState => {
      if (prevThemeCtxState.isDarkMode) {
        return {
          brandId: prevThemeCtxState.brandId,
          theme: palette.theme.light,
          isDarkMode: false,
        };
      }
      return {
        brandId: prevThemeCtxState.brandId,
        theme: palette.theme.dark,
        isDarkMode: true,
      };
    });
  }, []);

  const ChangeBrandCallback = useCallback(() => {
    setCtxTheme((prevThemeCtxState): TThemeContextState => {
      return {
        ...prevThemeCtxState,
        brandId: 'main',
      };
    });
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: TThemeContext = {
      ...themeCtxState,
      toggleTheme: ToggleThemeCallback,
    };

    return value;
  }, [themeCtxState, ToggleThemeCallback, ChangeBrandCallback]);

  return (
    <ThemeContextProvider value={MemoizedValue}>
      {children}
    </ThemeContextProvider>
  );
};

export const useTheme = useContext;
