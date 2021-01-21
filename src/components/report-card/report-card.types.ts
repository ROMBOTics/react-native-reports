export enum ReportTypes {
  painPercentage = 'patient/exercise/pain/percentage',
  painAverage = 'patient/exercise/pain/average',
  skippedTotal = 'patient/exercise/skipped/total',
  programCompletionPercentage = 'patient/program/completion/percentage',
}

export interface Report {
  isFetching: boolean;
  reportType: ReportTypes;
  data?: any;
}
