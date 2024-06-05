import { Dimensions, StyleSheet } from 'react-native';

import { normalizeFont, normalizeHorizontal } from '../../../theme/normalize';
import { spaceSizes } from '../../../theme/spaceSizes';

const { width: PAGE_WIDTH } = Dimensions.get('window');

const createStyles = () =>
  StyleSheet.create({
    slideContainer: {
      position: 'relative',
      width: PAGE_WIDTH,
    },
    video: {
      width: PAGE_WIDTH,
      height: '100%',
    },
    darkBackdrop: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    slideTitle: {
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      lineHeight: normalizeFont(36),
    },
    eyebrow: {
      width: normalizeHorizontal(150),
      height: 'auto',
      marginBottom: spaceSizes.space12V,
    },
    infoContainer: {
      position: 'absolute',
      top: '30%',
      left: spaceSizes.space8H,
      right: spaceSizes.space40H,
      zIndex: 1,
    },
    nextButton: {
      position: 'absolute',
      top: '40%',
      right: spaceSizes.space12H,
      zIndex: 1,
    },
  });

export { createStyles };
