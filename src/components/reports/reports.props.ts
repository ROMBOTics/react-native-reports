import type { ViewStyle } from 'react-native';
import { ReportCardProps } from '../report-card/report-card.props'

export interface ReportsProps extends ReportCardProps {
  /**
   * Container style overrides.
   */
  containerStyle?: ViewStyle;
}
