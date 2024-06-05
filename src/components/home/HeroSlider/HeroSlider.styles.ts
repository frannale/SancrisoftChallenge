import { StyleSheet } from 'react-native';

import type { TThemeMode } from '../../../models/Theme';
import { borderRadius } from '../../../theme/borderRadius';
import { normalizeHorizontal } from '../../../theme/normalize';
import { spaceSizes } from '../../../theme/spaceSizes';

const createStyles = (theme: TThemeMode) =>
  StyleSheet.create({
    container: {
      flex: 6,
    },
    dot: {
      backgroundColor: 'transparent',
      borderRadius: borderRadius.md,
      marginHorizontal: spaceSizes.space4H,
      width: normalizeHorizontal(22),
    },
    progress: {
      backgroundColor: theme.blocks.secondary.text,
    },
    progressUnfilled: {
      backgroundColor: theme.blocks.primary.textAccent,
    },
  });

export { createStyles };
