import React, { useState, useEffect, useContext } from "react"
import { Text, View, ViewStyle, ActivityIndicator, StyleSheet } from "react-native"
import { SvgCss } from 'react-native-svg'
import axios from 'axios';

import { StateContext } from '../../context/reports-context'
import { ReportCardProps } from "./report-card.props"
import { Ranges } from '../range-selector/range-selector.types'
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
 * report to show individual chart
 */
export function ReportCard(props: ReportCardProps) {
  const {
    patientId, authorizationToken, isDev, version = 'v1',
    type, range: rangeOverride, isDarkMode, width = metrics.deviceWidth,
    title, style: styleOverride
  } = props
  const containerStyle = {...styles.container, ...styleOverride} as ViewStyle

  const [isFetching, setIsFetching] = useState(false);

  const context = useContext(StateContext)
  const range = rangeOverride || Ranges[context.state.range]

  const updateReport = (data: string) => {
    context.setState({
      ...context.state,
      reports: {
        ...context.state.reports,
        [type]: data
      }
    })
  }

  useEffect(() => {
    // api config
    const apiConfig = {
      baseURL: isDev ? "http://localhost:3000/local/api" : "https://svc.rombot.com/reports/api",
      headers: {
        'Accept': 'image/svg+xml',
        'Authorization': `jwt ${authorizationToken}`
      }
    };

    //construct path
    let path = `${version}/${type}?for_identity=com.rombot.patient:${patientId}`
    if (range) {
      path = `${path}&from=${range.from.toISOString()}`
      path = `${path}&to=${range.to.toISOString()}`
    }
    path = `${path}&dark=${isDarkMode}`
    if (width) {
      path = `${path}&width=${width}`
    }
    path = `${path}&font_scale=${1.2}`

    // set loading to true
    setIsFetching(true)

    // call backend
    axios.get(path, apiConfig)
      .then((response) => {
        updateReport(response.data)
        // handle success
        console.log();
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        setIsFetching(false)
      });
  }, [patientId, title, range, type, isDev, isDarkMode, width, version ])


  const data = context.state.reports[type]
  const formatedSvg = (data || "").replaceAll("sans-serif", "")


  console.log({ [title]: formatedSvg })

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
