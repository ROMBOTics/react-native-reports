import { ViewStyle } from "react-native"

export interface ReportsProps {
  /**
   * Patient id for fetching report
   */
  patientId: number

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
