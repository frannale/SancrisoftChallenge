import type { ReactNode } from 'react';

import type { TThemeMode } from '../../models/Theme';

export type TThemeContextState = {
  brandId: string;
  isDarkMode: boolean;
  theme: TThemeMode;
};

export type TThemeContext = TThemeContextState & {
  toggleTheme: () => void;
};

export interface IThemeProviderProps {
  children?: ReactNode;
}
