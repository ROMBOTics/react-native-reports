import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  ViewStyle,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { SvgCss } from 'react-native-svg';
import axios from 'axios';

import { StateContext } from '../../context/reports-context';
import type { ReportCardProps } from './report-card.props';
import { Ranges } from '../range-selector/range-selector.types';
import { spacing, metrics } from '../../theme';
import { reportsUrls } from '../../network';

const styles = StyleSheet.create({
  container: {},
  title: {
    margin: spacing.medium,
    textAlign: 'center',
  },
});

/**
 * report to show individual chart
 */
// eslint-disable-next-line import/prefer-default-export
export function ReportCard(props: ReportCardProps) {
  const {
    patientId,
    authorizationToken,
    envId,
    version = 'v1',
    type,
    range: rangeOverride,
    isDarkMode,
    width = metrics.deviceWidth,
    title,
    style: styleOverride,
  } = props;
  const containerStyle = { ...styles.container, ...styleOverride } as ViewStyle;

  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState('');

  const context = useContext(StateContext);
  // eslint-disable-next-line react/destructuring-assignment
  const range = rangeOverride || Ranges[context.state?.range];

  // update state through context, race condition to be solved. for now use local state
  /* const updateReport = (data: string) => {
    context.setState({
      ...context.state,
      reports: {
        ...context.state.reports,
        [type]: data
      }
    })
  } */

  useEffect(() => {
    // api config
    const apiConfig = {
      baseURL: reportsUrls[envId],
      headers: {
        Accept: 'image/svg+xml',
        Authorization: `jwt ${authorizationToken}`,
      },
    };

    // construct path
    let path = `${version}/${type}?for_identity=com.rombot.patient:${patientId}`;
    if (range) {
      path = `${path}&from=${range.from.toISOString()}`;
      path = `${path}&to=${range.to.toISOString()}`;
    }
    path = `${path}&dark=${isDarkMode}`;
    if (width) {
      path = `${path}&width=${width}`;
    }
    path = `${path}&font_scale=${1.2}`;

    // set loading to true
    setIsFetching(true);

    // call backend
    axios
      .get(path, apiConfig)
      .then((response) => {
        // handle success
        setData(response.data);
        // updateReport(response.data)
      })
      .catch((error) => {
        // handle error todo: add handle error prop
        // eslint-disable-next-line no-console
        console.log(error);
      })
      .then(() => {
        // always executed
        setIsFetching(false);
      });
  }, [
    patientId,
    title,
    range,
    type,
    envId,
    isDarkMode,
    width,
    version,
    authorizationToken,
  ]);

  // const data = context.state.reports[type]
  const formatedSvg = (data || '').replace(/sans-serif/g, '');

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{title}</Text>
      {
        // eslint-disable-next-line no-nested-ternary
        isFetching ? (
          <ActivityIndicator />
        ) : formatedSvg ? (
          <SvgCss xml={formatedSvg} width="100%" height="300" />
        ) : null
      }
    </View>
  );
}
