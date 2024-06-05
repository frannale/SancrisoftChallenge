import { StyleSheet } from 'react-native';

import type { TThemeMode } from '../../../models/Theme';
import { spaceSizes } from '../../../theme/spaceSizes';

const createStyles = (theme: TThemeMode) =>
  StyleSheet.create({
    announcement: {
      padding: spaceSizes.space12H,
    },
    message: {
      marginVertical: spaceSizes.space4V,
    },
    ctaLabel: {
      color: theme.info.dark,
      textDecorationLine: 'underline',
    },
  });

export { createStyles };
