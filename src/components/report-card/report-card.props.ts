import type { ViewStyle } from 'react-native';
import type { ReportTypes, CAMReportTypes, Report } from './report-card.types';
import type { Range } from '../range-selector/range-selector.types';

export interface ReportCardTitleProps {
  /**
   * Report card title
   */
  text: string;
}

export interface ReportCardProps {
  /**
   * Patient id for fetching report
   */
  patientId: number;

  /**
   * Report card title
   */
  title: string;

  /**
   * Report card type
   */
  type: ReportTypes | CAMReportTypes;

  /**
   * Report range
   */
  range?: Range;

  /**
   * report object
   */
  report?: Report;

  /**
   * environment id
   */
  envId: string;

  /**
   * is in dark mode
   */
  isDarkMode: boolean;

  /**
   * api version
   */
  version: string;

  /**
   * Authorization Token for fetching report
   */
  authorizationToken: string;

  /**
   * width for the chart
   */
  width: number;

  /**
   * optional flag to show title
   */
  showTitle?: boolean;

  /**
   * optional text overlay when report has no data
   */
  emptyReportOverlayText?: string;

  /**
   * optional flag to refresh chart
   */
  refresh?: boolean;

  /**
   * Container style overrides.
   */
  style?: ViewStyle;
}
