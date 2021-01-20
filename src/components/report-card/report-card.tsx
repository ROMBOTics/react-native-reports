import React, { useEffect } from "react"
import { Text, View, ViewStyle, ActivityIndicator, StyleSheet } from "react-native"
import { ReportCardProps } from "./report-card.props"
import { SvgCss } from 'react-native-svg'

import { useDispatch } from 'react-redux'

//import { getReport } from '../../../../../store/report'

import { spacing, metrics } from "../../theme"

const styles = StyleSheet.create({
  container: {
  },
  title: {
    margin: spacing.medium,
    textAlign: 'center'
  },
})

/**
 * List item show patient information
 */
export function ReportCard(props: ReportCardProps) {
  const dispatch = useDispatch()
  const { patientId, title, range, type, report, style: styleOverride } = props
  const { data, isFetching } = report || {}

  const containerStyle = {...styles.container, ...styleOverride} as ViewStyle

  /*useEffect(() => {
    dispatch(getReport(patientId, type, range, false, metrics.deviceWidth))
  }, [dispatch, patientId, title, range, type])*/

  const formatedSvg = (data || "")
    .replaceAll("sans-serif", "")

  // console.log({ [title]: formatedSvg })

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      {isFetching ? (
        <ActivityIndicator/>
      ) : (
        formatedSvg ? <SvgCss xml={formatedSvg} width="100%" height="300" /> : null
      )}
    </View>
  )
}
