import { useQuery } from '@apollo/client';
import { Skeleton } from 'moti/skeleton';
import React, { useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import * as Progress from 'react-native-progress';
import { interpolate, useSharedValue } from 'react-native-reanimated';
import type {
  ICarouselInstance,
  TAnimationStyle,
} from 'react-native-reanimated-carousel';
import Carousel, { Pagination } from 'react-native-reanimated-carousel';

// eslint-disable-next-line import/no-duplicates
import { GET_HERO_SLIDER } from '../../../graphql/queries';
import type { GetHeroSliderResponse } from '../../../models/home/HeroSlider';
import { useThemeService } from '../../../services/theme.service';
import { normalizeHorizontal } from '../../../theme/normalize';
import HeroItem from '../HeroItem/HeroItem';
import { createStyles } from './HeroSlider.styles';

const { width: PAGE_WIDTH, height: PAGE_HEIGHT } = Dimensions.get('window');

const HeroSlider = () => {
  const styles = useThemeService(createStyles);
  const [currentVideoProgress, setCurrentVideoProgress] = useState(0);
  const carouselRef = useRef<ICarouselInstance | null>(null);
  const progress = useSharedValue<number>(0);

  const { loading, data } = useQuery<GetHeroSliderResponse>(GET_HERO_SLIDER);

  const handleNextSlide = () => {
    carouselRef.current?.next();
  };

  const onPressPagination = (index: number) => {
    const count = index - progress.value;
    carouselRef.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count,
      animated: true,
    });
  };

  const animationStyle: TAnimationStyle = React.useCallback((value: number) => {
    'worklet';

    const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
    const translateX = interpolate(
      value,
      [-2, 0, 1],
      [-PAGE_WIDTH, 0, PAGE_WIDTH],
    );

    return {
      transform: [{ translateX }],
      zIndex,
    };
  }, []);

  const sliderItems = data?.caseStudyCollection?.items ?? [];

  return (
    <View style={styles.container}>
      {loading && (
        <Skeleton width="100%" colorMode="light" height={PAGE_HEIGHT} />
      )}
      {sliderItems.length > 0 && (
        <View style={styles.container}>
          <Carousel
            ref={carouselRef}
            scrollAnimationDuration={1500}
            width={PAGE_WIDTH}
            height={PAGE_HEIGHT}
            data={sliderItems}
            autoPlay={false}
            onSnapToItem={index => onPressPagination(index)}
            onProgressChange={progress}
            pagingEnabled
            customAnimation={animationStyle}
            renderItem={({ item, index }) => (
              <HeroItem
                item={item}
                handleNextSlide={handleNextSlide}
                isCurrent={index === carouselRef.current?.getCurrentIndex()}
                updateCurrentProgress={value => {
                  setCurrentVideoProgress(value);
                }}
              />
            )}
          />
          <Pagination.Basic
            progress={progress}
            data={sliderItems ?? []}
            dotStyle={styles.dot}
            onPress={onPressPagination}
            size={15}
            renderItem={(item, index) => {
              const currentIndex = carouselRef.current?.getCurrentIndex() ?? 0;

              const itemProgress =
                index < currentIndex
                  ? 1
                  : index > currentIndex
                    ? 0
                    : currentVideoProgress;

              return (
                <View style={{ flex: 1 }}>
                  <Progress.Bar
                    useNativeDriver
                    color={styles.progress.backgroundColor}
                    unfilledColor={styles.progressUnfilled.backgroundColor}
                    borderColor={styles.progressUnfilled.backgroundColor}
                    progress={itemProgress}
                    width={normalizeHorizontal(22)}
                    height={15}
                    style={{ borderRadius: 0, padding: 0 }}
                  />
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default HeroSlider;
