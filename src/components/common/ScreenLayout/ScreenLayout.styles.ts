import { StyleSheet } from 'react-native';

import type { TThemeMode } from '../../../models/Theme';

const createStyles = (theme: TThemeMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'visible',
    },
    primaryContainer: {
      backgroundColor: theme.screenLayout.primary.background,
    },
    secondaryContainer: {
      backgroundColor: theme.screenLayout.secondary.background,
    },
    primaryLoadingContainer: {
      backgroundColor: theme.screenLayout.primary.background,
    },
    secondaryLoadingContainer: {
      backgroundColor: theme.screenLayout.secondary.background,
    },
    loaderContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    keyboardAvoidingViewContainer: {
      flex: 1,
      justifyContent: 'center',
    },
  });

export { createStyles };
