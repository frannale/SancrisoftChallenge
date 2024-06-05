import { gql } from '@apollo/client';

export const GET_ANNOUNCEMENTS = gql`
  query {
    announcementCollection {
      items {
        backgroundColor
        ctaLabel
        ctaUrl
        intro
        message
      }
    }
  }
`;

export const GET_HERO_SLIDER = gql`
  query {
    caseStudyCollection {
      items {
        title
        eyebrowText
        eyebrowImage {
          url
          width
          height
        }
        mobileImageOrVideo {
          url
          contentType
        }
        enableBackdropInWorkList
      }
    }
  }
`;
