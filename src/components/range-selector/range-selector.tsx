import React, { useContext } from "react"
import {StyleSheet, View, Text} from "react-native"

import { RangeContext } from '../../context/reports-context'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 19,
    color: 'gray'
  },
  highlight: {
    fontSize: 19,
    color: 'black'
  }
})

export function RangeSelector() {

  const rangeState = useContext(RangeContext)


  const updateIndex = (selectedIndex) => {
    rangeState.setRange(selectedIndex)
  }

  return (
    <View style={styles.container}>

      <Text style={[styles.title, rangeState.range === 0 && styles.highlight]} onPress={() => updateIndex(0)}>{"month"}</Text>
      <Text style={[styles.title, rangeState.range === 1 && styles.highlight]} onPress={() => updateIndex(1)}>{"week"}</Text>
    </View>
  )
}

/*import React, { useContext } from "react"
import { StyleSheet} from "react-native"
import { ButtonGroup } from "react-native-elements"

import {  Ranges } from '../report-card/report-card.types'

import { RangeContext } from '../../context/reports-context'


const styles = StyleSheet.create({
  container: {
  },
  rangeButtonText: {
    textTransform: 'capitalize'
  }
})

export function RangeSelector() {

  const rangeState = useContext(RangeContext)

  const rangeButtons = Object.keys(Ranges)

  const updateIndex = (selectedIndex) => {
    rangeState.setRange(selectedIndex)
  }

  return (
    <ButtonGroup
      onPress={updateIndex}
      selectedIndex={rangeState.range}
      buttons={rangeButtons}
      textStyle={styles.rangeButtonText}
      containerStyle={{}}
    />
  )
}*/
