export interface MediaInfo {
  url: string;
  contentType: string;
  width: number;
  height: number;
}

export interface HeroItem {
  title: string;
  eyebrowImage: MediaInfo;
  eyebrowText: string;
  targetUrl: string;
  mobileImageOrVideo: MediaInfo;
  enableBackdropInWorkList: boolean;
}

interface HeroItemCollection {
  items: HeroItem[];
}

export interface GetHeroSliderResponse {
  caseStudyCollection: HeroItemCollection;
}
