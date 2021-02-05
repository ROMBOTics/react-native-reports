import type { RangeTypes } from './range-selector.types';

export interface RangeButtonProps {
  range: RangeTypes;
  selectedRange: RangeTypes;
  onPress: () => void;
  isLeft?: boolean;
  isRight?: boolean;
}

export interface RangeSelectorProps {}

export interface RangeSelectorWithThemeOverrideProps
  extends RangeSelectorProps {
  isDarkMode?: boolean;
}
