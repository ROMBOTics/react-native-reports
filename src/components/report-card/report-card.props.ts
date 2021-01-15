import { ViewStyle } from "react-native"
import { ReportTypes, Range, Report } from "../../../../../store/types"

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
   * Container style overrides.
   */
  style?: ViewStyle
}
