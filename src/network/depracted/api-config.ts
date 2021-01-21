import Config from "react-native-config"

/**
 * The options used to configure the API.
 */
export interface ApiConfig {

  /**
   * The URL of the notification backend live.
   */
  reportsUrlLive: string

  /**
   * The URL of the notification backend dev.
   */
  reportsUrlDev: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: ApiConfig = {
  reportsUrlLive: "https://svc.rombot.com/reports/api",
  reportsUrlDev: "https://svc.rombot.dev/reports/api",
  timeout: 10000,
}