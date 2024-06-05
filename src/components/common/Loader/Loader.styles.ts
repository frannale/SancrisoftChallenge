import { StyleSheet } from 'react-native';

import type { TThemeMode } from '../../../models/Theme';

export const createStyles = (theme: TThemeMode) =>
  StyleSheet.create({
    color: {
      color: theme.blocks.primary.text,
    },
    secundaryColor: {
      color: theme.blocks.secondary.text,
    },
  });
