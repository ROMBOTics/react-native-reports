/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReportCard } from './report-card';
import type { ReportCardProps } from './report-card.props';
import {
  PainPercentageProps,
  SkippedExericsesProps,
  PainAverageProps,
  CompletionPercentageProps,
  CAMActivityPercentageProps,
  CAMStepsTotalProps,
  CAMMetsAverageProps,
  CAMEnergyPerMinuteAverageProps,
  CAMMotionAverageProps,
  CAMHeartrateAverageProps,
} from './report-card.types';

export function PainPercentageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...PainPercentageProps} />;
}

export function SkippedExericsesCard(props: ReportCardProps) {
  return <ReportCard {...props} {...SkippedExericsesProps} />;
}

export function PainAverageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...PainAverageProps} />;
}

export function CompletionPercentageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CompletionPercentageProps} />;
}

export function CAMActivityPercentageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CAMActivityPercentageProps} />;
}

export function CAMHeartrateAverageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CAMHeartrateAverageProps} />;
}

export function CAMMotionAverageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CAMMotionAverageProps} />;
}

export function CAMEnergyPerMinuteAverageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CAMEnergyPerMinuteAverageProps} />;
}

export function CAMMetsAverageCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CAMMetsAverageProps} />;
}

export function CAMStepsTotalCard(props: ReportCardProps) {
  return <ReportCard {...props} {...CAMStepsTotalProps} />;
}
