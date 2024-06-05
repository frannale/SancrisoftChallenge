import type { HeroItem } from '../../../models/home/HeroSlider';

export interface HeroItemProps {
  item: HeroItem;
  handleNextSlide: () => void;
  isCurrent: boolean;
  updateCurrentProgress: (progress: number) => void;
}
