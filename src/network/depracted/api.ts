import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import { DataTypes } from "../components/types" 

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup = () => {
    this.apisauce = create({
      baseURL: "",
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  updateAuthorization = (token: string) => {
    this.apisauce.setHeader('Authorization', `jwt ${token}`)
  }

  handleError = (error: Error) => {
    console.log({ error })
  }

  getReports = async (patientId: number, reportType: DataTypes.ReportTypes, range: DataTypes.Range, dark = true, width, version = 'v1'): Promise<DataTypes.Report> => {
    this.apisauce.setHeader('Accept', 'image/svg+xml')
    this.apisauce.setBaseURL(this.config.reportsUrl)

    let path = `${version}/${reportType}?for_identity=com.rombot.patient:${patientId}`
    if (range) {
      path = `${path}&from=${range.from.toISOString()}`
      path = `${path}&to=${range.to.toISOString()}`
    }
    path = `${path}&dark=${false}`
    if (width) {
      path = `${path}&width=${width}`
    }
    path = `${path}&font_scale=${1.2}`

    const response: ApiResponse<any> = await this.apisauce.get(path)

    // reset to default
    this.apisauce.setHeader('Accept', 'application/json')
    if (!response.ok) {
      this.handleError(response.originalError)
      return {
        apiState: getApiProblem(response),
        reportType,
      }
    }

    try {
      const rawReport = response.data

      return {
        apiState: new ApiTypes.ApiState(ApiTypes.ApiStates.SUCCESSFUL),
        reportType,
        data: rawReport
      }
    } catch (error) {
      this.handleError(error)
      return {
        apiState: new ApiTypes.ApiState(ApiTypes.ApiStates.BAD_DATA),
        reportType
      }
    }
  }
}
