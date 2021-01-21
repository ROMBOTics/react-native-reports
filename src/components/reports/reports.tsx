import React from "react"
import { StyleSheet, View} from "react-native"

import { ReportsProps } from './reports.props'

import { ReportCard } from "../report-card/report-card"
import { ReportTypes } from '../report-card/report-card.types'
import { RangeSelector } from '../range-selector/range-selector'


const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 15,
    fontWeight: '500'
  },
})

export function Reports(props: ReportsProps) {

  return (
    <View style={styles.container}>
      <RangeSelector/>
      <ReportCard
        {...props}
        title="Pain Percentage"
        type={ReportTypes.painPercentage}
      />
      <ReportCard
        {...props}
        title="Skipped Exericses"
        type={ReportTypes.skippedTotal}
      />
      <ReportCard
        {...props}
        title="Pain Average"
        type={ReportTypes.painAverage}
      />
      <ReportCard
        {...props}
        title="Completion %"
        type={ReportTypes.programCompletionPercentage}
      />
    </View>
  )
}
