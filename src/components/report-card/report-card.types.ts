import moment from 'moment'

export enum ReportTypes {
  painPercentage = 'patient/exercise/pain/percentage',
  painAverage= 'patient/exercise/pain/average',
  skippedTotal = 'patient/exercise/skipped/total',
  programCompletionPercentage = 'patient/program/completion/percentage'
}

export enum RangeTypes {
  month = 'Month',
  week = 'Week'
}

export interface Range {
  from: Date,
  to: Date
}

export const Ranges = {
  month: {
    from: moment().subtract(1, 'month').toDate(),
    to: moment().toDate(),
  } as Range,
  week: {
    from: moment().subtract(1, 'week').toDate(),
    to: moment().toDate(),
  } as Range,
}

export interface Report {
  isFetching: boolean
  reportType: ReportTypes
  data?: any
}
