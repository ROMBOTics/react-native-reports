import { ViewStyle } from "react-native"
import { ReportTypes, Range, Report } from "./report-card.types"

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
   * Container style overrides.
   */
  style?: ViewStyle
}
