import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

import type { ReportsProps } from './reports.props';

import { ReportCard } from '../report-card/report-card';
import { ReportTypes } from '../report-card/report-card.types';
import { RangeSelector } from '../range-selector/range-selector';

import { spacing } from '../../theme';

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 15,
    fontWeight: '500',
  },
  report: {
    marginTop: spacing.medium,
  },
});

// eslint-disable-next-line import/prefer-default-export
export function Reports(props: ReportsProps) {
  const { containerStyle: styleOverride, ...cardProps } = props;
  cardProps.showTitle = true;
  const containerStyle = { ...styles.container, ...styleOverride } as ViewStyle;
  return (
    <View style={containerStyle}>
      <RangeSelector />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...cardProps}
        style={styles.report}
        title="Pain Percentage"
        type={ReportTypes.painPercentage}
      />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...cardProps}
        style={styles.report}
        title="Skipped Exericses"
        type={ReportTypes.skippedTotal}
      />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...cardProps}
        style={styles.report}
        title="Pain Average"
        type={ReportTypes.painAverage}
      />
      <ReportCard
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...cardProps}
        style={styles.report}
        title="Completion %"
        type={ReportTypes.programCompletionPercentage}
      />
    </View>
  );
}
