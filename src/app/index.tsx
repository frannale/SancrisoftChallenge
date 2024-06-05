import React from 'react';
import { View } from 'react-native';

import { ScreenLayout } from '../components/common/ScreenLayout/ScreenLayout.component';
import { Announcements } from '../components/home/Announcements/Announcements';
import HeroSlider from '../components/home/HeroSlider/HeroSlider';

export const HomeScreen = () => {
  return (
    <ScreenLayout>
      <View style={{ flex: 1 }}>
        <Announcements />
        <HeroSlider />
      </View>
    </ScreenLayout>
  );
};

export default HomeScreen;
