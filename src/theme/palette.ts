import type { TThemeMode } from '../models/Theme';

const basePalette: TThemeMode = {
  blocks: {
    primary: {
      background: '#F5F5F5',
      text: '#171839',
      textAccent: '#5E64A2',
      border: '#7179A6',
      disableBackground: '#D0D7EF',
      disableText: '#A1A9C9',
      backgroundHighlight: '#FBFBFB',
    },
    secondary: {
      background: '#171839',
      text: '#F5F7FF',
      textAccent: '#989DC7',
      border: '#7179A6',
      disableBackground: '#A1A9C9',
      disableText: '#B6C1D6',
      backgroundHighlight: '#262951',
    },
  },
  header: {
    background: '#212121',
  },
  skeleton: {
    primary: {
      highlight: '#DDE3E8',
      background: '#F7F8FF',
    },
    secondary: {
      highlight: '#7179A6',
      background: '#171839',
    },
  },
  screenLayout: {
    primary: {
      background: '#F5F5F5',
    },
    secondary: {
      background: '#171839',
    },
  },
  icon: {
    primary: {
      fill: '#F5F7FF',
      shape: '#262951',
      disableFill: '#DADCE3',
      disableShape: '#A1A9C9',
      border: '#7179A6',
    },
    secondary: {
      fill: '#262951',
      shape: '#F5F7FF',
      disableFill: '#DADCE3',
      disableShape: '#A1A9C9',
      border: '#F5F7FF',
    },
  },
  button: {
    primary: {
      background: '#419EE9',
      text: '#F5F7FF',
      disableBackground: '#D0D7EF',
      disableText: '',
      border: 'transparent',
      disableBorder: 'transparent',
    },
    secondary: {
      background: 'transparent',
      text: '#548FBD',
      disableBackground: '#D0D7EF',
      disableText: '#9FACC6',
      border: '#1F5B89',
      disableBorder: 'transparent',
    },
    tertiary: {
      background: '#FFB74D',
      text: '#000000',
      disableBackground: '#D0D7EF',
      disableText: '#9FACC6',
      border: 'transparent',
      disableBorder: 'transparent',
    },
  },
  chip: {
    primary: {
      background: '#419EE9',
      text: '#F5F7FF',
      disableBackground: '#D0D7EF',
      disableText: '',
      border: 'transparent',
      disableBorder: 'transparent',
      iconColor: '#6ABCFB',
    },
    secondary: {
      background: 'transparent',
      text: '#6ABCFB',
      border: '#6ABCFB',
      iconColor: '#6ABCFB',
      disableBackground: '#D0D7EF',
      disableText: '',
      disableBorder: 'transparent',
    },
  },
  warning: {
    fill: '#F1E4AE',
    text: '#4D2E00',
    dark: '#FF9500',
  },
  error: {
    fill: '#F9B1B1',
    text: '#9F2828',
    dark: '#FE3B3B',
  },
  info: {
    fill: '#A4D6EB',
    text: '#0C3241',
    dark: '#003285',
  },
  success: {
    fill: '#A0EABB',
    text: '#091C13',
    dark: '#9BCF53',
  },
  gradients: {
    primary: [
      '#A56C0B',
      '#DFC25B',
      '#F8E67D',
      '#D6B64F',
      '#C9A33D',
      '#CEAA44',
      '#DDC058',
      '#F5E279',
      '#F8E67D',
    ],
    secondary: [
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
      '#7179A6',
    ],
    tertiary: [
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
      'white',
    ],
  },
};

export const palette = {
  brandId: 'main',
  theme: {
    dark: {
      ...basePalette,
      type: 'dark',
    },

    light: {
      ...basePalette,
      type: 'light',
    },
  },
};
