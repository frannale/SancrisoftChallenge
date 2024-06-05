import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useThemeService } from '../../../services/theme.service';
import { normalizeFont } from '../../../theme/normalize';
import { Loader } from '../Loader/Loader.component';
import { createStyles } from './ScreenLayout.styles';
import type { ScreenLayoutProps } from './ScreenLayout.types';

export const ScreenLayout = ({
  children,
  isLoading,
  isError,
}: ScreenLayoutProps) => {
  const styles = useThemeService(createStyles);
  const insets = useSafeAreaInsets();

  const shouldShowContent = !isLoading && !isError;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}>
      {isLoading && (
        <View style={styles.loaderContainer}>
          <Loader size={normalizeFont(48)} />
        </View>
      )}

      {shouldShowContent && children}
    </View>
  );
};
