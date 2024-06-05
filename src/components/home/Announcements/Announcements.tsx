import { useQuery } from '@apollo/client';
import { Skeleton } from 'moti/skeleton';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import { GET_ANNOUNCEMENTS } from '../../../graphql/queries';
import type { GetAnnouncementsResponse } from '../../../models/home/Announcement';
import { normalizeFont, normalizeVertical } from '../../../theme/normalize';
import AnnouncementItem from '../AnnouncementItem/AnnouncementItem';

const { width: PAGE_WIDTH } = Dimensions.get('window');

export const Announcements = () => {
  const { loading, data } =
    useQuery<GetAnnouncementsResponse>(GET_ANNOUNCEMENTS);

  return (
    <View style={{ flex: 1 }}>
      {loading && (
        <Skeleton
          width="100%"
          colorMode="light"
          height={normalizeVertical(100)}
        />
      )}
      {data?.announcementCollection && (
        <Carousel
          width={PAGE_WIDTH}
          scrollAnimationDuration={1000}
          height={normalizeVertical(100)}
          data={data?.announcementCollection.items}
          modeConfig={{
            parallaxScrollingOffset: normalizeFont(105),
          }}
          autoPlay
          autoPlayInterval={5000}
          mode="parallax"
          renderItem={({ item, index }) => (
            <AnnouncementItem key={index} item={item} />
          )}
        />
      )}
    </View>
  );
};
