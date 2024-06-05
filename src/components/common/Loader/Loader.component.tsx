import React from 'react';
import { ActivityIndicator } from 'react-native';

import { useThemeService } from '../../../services/theme.service';
import { createStyles } from './Loader.styles';
import type { LoaderProps } from './Loader.types';

export const Loader = ({
  size = 48,
  color,
  variant = 'primary',
}: LoaderProps) => {
  const styles = useThemeService(createStyles);
  return (
    <ActivityIndicator
      animating
      size={size}
      color={
        color ??
        (variant === 'primary'
          ? styles.color.color
          : styles.secundaryColor.color)
      }
    />
  );
};
