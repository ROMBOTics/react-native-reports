import { RangeTypes } from './range-selector.types'

export interface RangeButtonProps {
  range: RangeTypes,
  selectedRange: RangeTypes
  onPress: () => void
}