import React, { useContext } from "react"
import { StyleSheet, View, Text} from "react-native"
import { ButtonGroup } from "react-native-elements"

import { StateContext } from '../../context/reports-context'

import { ReportsProps } from './reports.props'

import { ReportCard } from "../report-card/report-card"
import { Ranges, RangeTypes, ReportTypes } from '../report-card/report-card.types'

export function Reports(props: ReportsProps) {

  const state = useContext(StateContext)


  const updateIndex = (range: RangeTypes) => {
    state.setState({
      range
    })
  }

  const container = {
    flexDirection: 'row'
  }
  const  title = {
    fontSize: 19,
    color: 'gray'
  }
  const highlight = {
    fontSize: 19,
    color: 'black'
  }

  const selectedRange = Ranges[state.state.range]

  return (
    <View style={container}>
      <Text style={[title, state.state.range === RangeTypes.month && highlight]} onPress={() => updateIndex(RangeTypes.month)}>{"month"}</Text>
      <Text style={[title, state.state.range === RangeTypes.week && highlight]} onPress={() => updateIndex(RangeTypes.week)}>{"week"}</Text>
      <ReportCard
        {...props}
        title="Pain Percentage"
        type={ReportTypes.painPercentage}
        range={selectedRange}
        report={state.state.reports[ReportTypes.painPercentage]}
      />
    </View>
  )
}

/*import React, { useState, useMemo, useContext } from "react"
import { StyleSheet, View, Text } from "react-native"

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
    <View style={styles.container}>

      <ReportCard
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
      />
    </View>
  )
}*/
