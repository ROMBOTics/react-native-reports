export enum ReportTypes {
  painPercentage = 'patient/exercise/pain/percentage',
  painAverage = 'patient/exercise/pain/average',
  skippedTotal = 'patient/exercise/skipped/total',
  programCompletionPercentage = 'patient/program/completion/percentage',
}

export const PainPercentageProps = {
  title: 'Pain Percentage',
  type: ReportTypes.painPercentage,
};

export const SkippedExericsesProps = {
  title: 'Skipped Exericses',
  type: ReportTypes.skippedTotal,
};

export const PainAverageProps = {
  title: 'Pain Average',
  type: ReportTypes.painAverage,
};

export const CompletionPercentageProps = {
  title: 'Completion %',
  type: ReportTypes.programCompletionPercentage,
};

export enum CAMReportTypes {
  activityPercentage = 'cam/activity/percentage',
}

export const CAMActivityPercentageProps = {
  title: 'Activity Percentage',
  type: CAMReportTypes.activityPercentage,
};

export interface Report {
  isFetching: boolean;
  reportType: ReportTypes;
  data?: any;
}
