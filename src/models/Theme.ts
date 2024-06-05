import type { palette } from '../theme/palette';

export type TPalette = typeof palette;

export enum EPaletteType {
  DARK = 'dark',
  LIGHT = 'light',
}

export type ThemeVariant = 'primary' | 'secondary';

interface ThemeBlock {
  background: string;
  text: string;
  textAccent: string;
  border: string;
  disableBackground: string;
  disableText: string;
  backgroundHighlight: string;
}

export type TThemeMode = {
  blocks: {
    primary: ThemeBlock;
    secondary: ThemeBlock;
  };
  screenLayout: {
    primary: {
      background: string;
    };
    secondary: {
      background: string;
    };
  };
  header: {
    background: string;
  };
  skeleton: {
    primary: {
      highlight: string;
      background: string;
    };
    secondary: {
      highlight: string;
      background: string;
    };
  };
  icon: {
    primary: {
      fill: string;
      shape: string;
      disableFill: string;
      disableShape: string;
      border: string;
    };
    secondary: {
      fill: string;
      shape: string;
      disableFill: string;
      disableShape: string;
      border: string;
    };
  };
  chip: {
    primary: {
      background: string;
      text: string;
      disableBackground: string;
      disableText: string;
      border: string;
      disableBorder: string;
      iconColor: string;
    };
    secondary: {
      background: string;
      text: string;
      border: string;
      iconColor: string;
      disableBackground: string;
      disableText: string;
      disableBorder: string;
    };
  };
  button: {
    primary: {
      background: string;
      text: string;
      disableBackground: string;
      disableText: string;
      border: string;
      disableBorder: string;
    };
    secondary: {
      background: string;
      text: string;
      disableBackground: string;
      disableText: string;
      border: string;
      disableBorder: string;
    };
    tertiary: {
      background: string;
      text: string;
      disableBackground: string;
      disableText: string;
      border: string;
      disableBorder: string;
    };
  };
  warning: {
    fill: string;
    text: string;
    dark: string;
  };
  error: {
    fill: string;
    text: string;
    dark: string;
  };
  info: {
    fill: string;
    text: string;
    dark: string;
  };
  success: {
    fill: string;
    text: string;
    dark: string;
  };
  gradients: {
    primary: string[];
    secondary: string[];
    tertiary: string[];
  };
};
