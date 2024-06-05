import React from 'react';
import { Text as TextReactNative } from 'react-native';

import { useThemeService } from '../../../services/theme.service';
import { createStyles } from './KText.styles';
import type { KTextProps } from './KText.types';

export const KText = ({
  preset,
  style,
  weight = 'regular',
  variant = 'secondary',
  ...rest
}: KTextProps) => {
  const styles = useThemeService(createStyles);

  return (
    <TextReactNative
      style={[{ ...styles[preset], ...styles[variant] }, style, styles[weight]]}
      {...rest}
    />
  );
};
