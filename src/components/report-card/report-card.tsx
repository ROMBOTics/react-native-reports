import React, { useState, useEffect } from "react"
import { Text, View, ViewStyle, ActivityIndicator, StyleSheet } from "react-native"
import { ReportCardProps } from "./report-card.props"
import { SvgCss } from 'react-native-svg'
import axios from 'axios';

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
  const [isFetching, setIsFetching] = useState(false);

  console.log({props})

  const { patientId, title, range, type, report, isDev, width = metrics.deviceWidth, version = 'v1', authorizationToken, style: styleOverride } = props
  const containerStyle = {...styles.container, ...styleOverride} as ViewStyle

  useEffect(() => {
    const config = {
      baseURL: isDev ? "http://localhost:3000/local/api" : "https://svc.rombot.com/reports/api",
      headers: {
        'Accept': 'image/svg+xml',
        'Authorization': `jwt ${authorizationToken}`
      }
    };
    let path = `${version}/${type}?for_identity=com.rombot.patient:${patientId}`
    if (range) {
      path = `${path}&from=${range.from.toISOString()}`
      path = `${path}&to=${range.to.toISOString()}`
    }
    path = `${path}&dark=${false}`
    if (width) {
      path = `${path}&width=${width}`
    }
    path = `${path}&font_scale=${1.2}`
    setIsFetching(true)
    axios.get(path, config)
      .then((response) => {
        // handle success
        console.log(response.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        // always executed
        setIsFetching(false)
      });
  }, [patientId, title, range, type, report, isDev, width, version ])


  const data = ""

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
