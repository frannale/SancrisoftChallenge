import Ionicons from '@expo/vector-icons/Ionicons';
import type { AVPlaybackStatus, AVPlaybackStatusSuccess } from 'expo-av';
import { ResizeMode, Video } from 'expo-av';
import { Image } from 'expo-image';
import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useThemeService } from '../../../services/theme.service';
import { KText } from '../../common/KText/KText.component';
import { createStyles } from './HeroItem.styles';
import type { HeroItemProps } from './HeroItem.types';

const HeroItem = ({
  item,
  handleNextSlide,
  isCurrent,
  updateCurrentProgress,
}: HeroItemProps) => {
  const styles = useThemeService(createStyles);

  const { title, mobileImageOrVideo, enableBackdropInWorkList, eyebrowImage } =
    item;

  const [videoStatus, setVideoStatus] = useState<
    AVPlaybackStatus | AVPlaybackStatusSuccess
  >({} as AVPlaybackStatus | AVPlaybackStatusSuccess);
  const video = useRef(null);

  useEffect(() => {
    if ('durationMillis' in videoStatus && 'positionMillis' in videoStatus) {
      const positionMillis = videoStatus?.positionMillis ?? 0;
      const durationMillis = videoStatus?.durationMillis ?? 1;
      updateCurrentProgress(positionMillis / durationMillis);
    }
    if ('didJustFinish' in videoStatus && videoStatus.didJustFinish) {
      handleNextSlide();
    }
  }, [videoStatus]);

  return (
    <View>
      {isCurrent && (
        <View style={styles.slideContainer}>
          <View>
            {mobileImageOrVideo.contentType === 'video/mp4' ? (
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: mobileImageOrVideo.url,
                }}
                useNativeControls
                resizeMode={ResizeMode.COVER}
                isLooping
                shouldPlay
                onPlaybackStatusUpdate={status => setVideoStatus(status)}
              />
            ) : (
              <Image
                source={{ uri: mobileImageOrVideo.url }}
                style={styles.video}
              />
            )}
          </View>

          <View style={styles.infoContainer}>
            {eyebrowImage && (
              <Image
                source={eyebrowImage?.url}
                style={[
                  { ...styles.eyebrow },
                  { aspectRatio: eyebrowImage?.width / eyebrowImage?.height },
                ]}
              />
            )}
            <KText preset="h3" weight="bold" style={styles.slideTitle}>
              {title}
            </KText>
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleNextSlide}>
            <Ionicons name="arrow-forward-outline" size={32} color="white" />
          </TouchableOpacity>
          {enableBackdropInWorkList && <View style={styles.darkBackdrop} />}
        </View>
      )}
    </View>
  );
};

export default HeroItem;
