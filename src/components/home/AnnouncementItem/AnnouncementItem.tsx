import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useThemeService } from '../../../services/theme.service';
import { KText } from '../../common/KText/KText.component';
import { createStyles } from './AnnouncementItem.styles';
import type { AnnouncementItemProps } from './AnnouncementItem.types';

const AnnouncementItem = ({ item }: AnnouncementItemProps) => {
  const styles = useThemeService(createStyles);

  const handlePress = async () => {
    await WebBrowser.openBrowserAsync(item.ctaUrl);
  };

  return (
    <View
      style={[styles.announcement, { backgroundColor: item.backgroundColor }]}>
      <KText preset="h5" weight="bold">
        {item.intro}
      </KText>
      <KText preset="body1" style={styles.message}>
        {item.message}
      </KText>
      <TouchableOpacity onPress={handlePress}>
        <KText preset="h6" style={styles.ctaLabel}>
          {item.ctaLabel}
        </KText>
      </TouchableOpacity>
    </View>
  );
};

export default AnnouncementItem;
