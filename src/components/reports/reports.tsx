import React, { useContext } from "react"
import { StyleSheet, View, Text} from "react-native"

import { StateContext } from '../../context/reports-context'

import { ReportsProps } from './reports.props'

import { ReportCard } from "../report-card/report-card"
import { ReportTypes } from '../report-card/report-card.types'
import { RangeSelector } from '../range-selector/range-selector'
import { Ranges, RangeTypes } from '../range-selector/range-selector.types'


const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 15,
    fontWeight: '500'
  },
})

export function Reports(props: ReportsProps) {

  const context = useContext(StateContext)


  const updateIndex = (range: RangeTypes) => {
    context.setState({
      range
    })
  }

  const selectedRange = Ranges[context.state.range]

  return (
    <View style={styles.container}>
      <RangeSelector/>
      <ReportCard
        {...props}
        title="Pain Percentage"
        type={ReportTypes.painPercentage}
        range={selectedRange}
        report={context.state.reports[ReportTypes.painPercentage]}
      />
    </View>
  )
}

/*export function Reports(props: ReportsProps) {

  const state = useContext(StateContext)


  const updateIndex = (range: RangeTypes) => {
    state.setState({
      range
    })
  }

  const selectedRange = Ranges[state.state.range]

  return (
    <View style={styles.container}>
      
    </View>
  )
}*/

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
