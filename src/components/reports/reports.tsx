import React, { useState, useMemo, useContext } from "react"
import { StyleSheet, View, Text } from "react-native"
import { ButtonGroup } from "react-native-elements"

import { ReportsProps } from './reports.props'
import { ReportTypes, Ranges } from '../report-card/report-card.types'
import { ReportCard } from "../report-card/report-card"

import { RangeContext } from '../../context/reports-context'


const styles = StyleSheet.create({
  container: {
  },
  rangeButtonText: {
    textTransform: 'capitalize'
  }
})

export function Reports(props: ReportsProps) {

  const rangeState = useContext(RangeContext)
  const reports = {}

  const rangeButtons = Object.keys(Ranges)
  //const [rangeButtonIndex, setRangeButtonIndex] = useState<number>(0)

  const updateIndex = (selectedIndex) => {
    rangeState.setRange(selectedIndex)
    //setRangeButtonIndex(selectedIndex)
  }

  //const selectedRange = useMemo(() => Ranges[rangeButtons[rangeButtonIndex]], [rangeButtons, rangeButtonIndex])


  return (
    <View testID="reports" style={styles.container}>

      <ButtonGroup
        onPress={updateIndex}
        selectedIndex={rangeState.range}
        buttons={rangeButtons}
        textStyle={styles.rangeButtonText}
        containerStyle={{}}
      />
      {/*<ReportCard
        {...props}
        title="Pain Percentage"
        type={ReportTypes.painPercentage}
        range={selectedRange}
        report={reports[ReportTypes.painPercentage]}
      />
      <ReportCard
        {...props}
        title="Skipped Exericses"
        type={ReportTypes.skippedTotal}
        range={selectedRange}
        report={reports[ReportTypes.skippedTotal]}
      />
      <ReportCard
        {...props}
        title="Pain Average"
        type={ReportTypes.painAverage}
        range={selectedRange}
        report={reports[ReportTypes.painAverage]}
      />
      <ReportCard
        {...props}
        title="Completion %"
        type={ReportTypes.programCompletionPercentage}
        range={selectedRange}
        report={reports[ReportTypes.programCompletionPercentage]}
      />*/}
    </View>
  )
}
