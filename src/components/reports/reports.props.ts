import { ViewStyle } from "react-native"

export interface ReportsProps {
  /**
   * Patient id for fetching report
   */
  patientId: number

  /**
   * Authorization Token for fetching report
   */
  authorizationToken: string

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

  /**
   * api version
   */
  version: string

  /**
   * width for the chart
   */
  width: number
}
