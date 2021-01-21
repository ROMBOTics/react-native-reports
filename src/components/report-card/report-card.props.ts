import { ViewStyle } from "react-native"
import { ReportTypes, Report } from "./report-card.types"
import { Range } from '../range-selector/range-selector.types'

export interface ReportCardProps {
  /**
   * Patient id for fetching report
   */
  patientId: number

  /**
   * Report card title
   */
  title: string

  /**
   * Report card type
   */
  type: ReportTypes

  /**
   * Report card type
   */
  range: Range

  /**
   * report object
   */
  report?: Report

  /**
   * is in develop mode
   */
  isDev: boolean

  /**
   * is in dark mode
   */
  isDarkMode: boolean

  /**
   * api version
   */
  version: string

  /**
   * Authorization Token for fetching report
   */
  authorizationToken: string

  /**
   * width for the chart
   */
  width: number

  /**
   * Container style overrides.
   */
  style?: ViewStyle
}
