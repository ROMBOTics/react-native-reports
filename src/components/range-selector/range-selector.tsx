

import React, { useContext } from "react"
import { StyleSheet, View, Text} from "react-native"

import { StateContext } from '../../context/reports-context'

import { RangeButtonProps } from './range-selector.props'
import { Range, Ranges, RangeTypes } from './range-selector.types'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    margin: 16,
    fontSize: 19,
    color: 'gray'
  },
  highlight: {
    fontSize: 19,
    color: 'black'
  },
})



export function RangeButton(props: RangeButtonProps) {
  const {onPress, range, selectedRange} = props
  const isSelected = selectedRange === range

  return (
    <Text style={[styles.title, isSelected && styles.highlight]} onPress={onPress}>{range}</Text>
  )
}

export function RangeSelector() {

  const context = useContext(StateContext)

  const updateIndex = (range: RangeTypes) => {
    context.setState({
      range
    })
  }

  return (
    <View style={styles.container}>
      <RangeButton
        range={RangeTypes.month}
        selectedRange={context.state.range}
        onPress={() => updateIndex(RangeTypes.month)}
      />
      <RangeButton
        range={RangeTypes.week}
        selectedRange={context.state.range}
        onPress={() => updateIndex(RangeTypes.week)}
      />
    </View>
  )
}
