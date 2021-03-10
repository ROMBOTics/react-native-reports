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
  activityPercentage = 'patient/cam/activity/percentage',
  heartrateAverage = 'patient/cam/heartrate/average',
  motionAverage = 'patient/cam/motion/average',
  energyPerMinuteAverage = 'patient/cam/energy-per-minute/average',
  metsAverage = 'patient/cam/mets/average',
  stepsTotal = 'patient/cam/steps/total',
}

export const CAMActivityPercentageProps = {
  title: 'Activity Percentage',
  type: CAMReportTypes.activityPercentage,
};

export const CAMHeartrateAverageProps = {
  title: 'Heartrate',
  type: CAMReportTypes.heartrateAverage,
};

export const CAMMotionAverageProps = {
  title: 'Motion',
  type: CAMReportTypes.motionAverage,
};

export const CAMEnergyPerMinuteAverageProps = {
  title: 'Energy Per Minute',
  type: CAMReportTypes.energyPerMinuteAverage,
};

export const CAMMetsAverageProps = {
  title: 'METs',
  type: CAMReportTypes.metsAverage,
};

export const CAMStepsTotalProps = {
  title: 'Steps',
  type: CAMReportTypes.stepsTotal,
};

export interface Report {
  isFetching: boolean;
  reportType: ReportTypes;
  data?: any;
}
