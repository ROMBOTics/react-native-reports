/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ReportCard } from './report-card';
import type { ReportCardProps } from './report-card.props';
import {
  PainPercentageProps,
  SkippedExericsesProps,
  PainAverageProps,
  CompletionPercentageProps,
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
