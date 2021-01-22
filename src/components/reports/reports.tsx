import React from 'react';
import { StyleSheet, View } from 'react-native';

import type { ReportsProps } from './reports.props';

import { ReportCard } from '../report-card/report-card';
import { ReportTypes } from '../report-card/report-card.types';
import { RangeSelector } from '../range-selector/range-selector';

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
});

// eslint-disable-next-line import/prefer-default-export
export function Reports(props: ReportsProps) {
  return (
    <View style={styles.container}>
      <RangeSelector />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        title="Pain Percentage"
        type={ReportTypes.painPercentage}
      />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        title="Skipped Exericses"
        type={ReportTypes.skippedTotal}
      />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        title="Pain Average"
        type={ReportTypes.painAverage}
      />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        title="Completion %"
        type={ReportTypes.programCompletionPercentage}
      />
    </View>
  );
}
