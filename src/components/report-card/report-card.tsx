import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  ViewStyle,
  ActivityIndicator,
  StyleSheet,
  Platform,
} from 'react-native';
import { SvgCss } from 'react-native-svg';
import {
  DynamicStyleSheet,
  useDynamicValue,
  ColorSchemeProvider,
  useDarkMode,
} from 'react-native-dynamic';
import axios from 'axios';

import moment from 'moment-timezone';
import { StateContext } from '../../context/reports-context';
import type {
  ReportCardProps,
  ReportCardTitleProps,
} from './report-card.props';
import { Ranges } from '../range-selector/range-selector.types';
import { spacing, metrics, color } from '../../theme';
import { reportsUrls } from '../../network';

const DEFAULT_SVG_HEIGHT = 100;

const axiosInstance = axios.create();

const dynamicStyles = new DynamicStyleSheet({
  container: {},
  title: {
    margin: spacing.medium,
    fontSize: 15,
    color: color.label,
    textAlign: 'center',
  },
  activityIndicatorContainer: {
    padding: spacing.medium,
  },
  svgOverlay: {
    opacity: 0.4,
  },
  emptyReportOverlayTextContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
  },
  emptyReportOverlayText: {
    fontSize: 15,
    color: color.labelSecondary,
    textAlign: 'center',
    fontWeight: '600',
  },
});

export function ReportCardTitle(props: ReportCardTitleProps) {
  const styles = useDynamicValue(dynamicStyles);
  const { text } = props;

  return <Text style={styles.title}>{text}</Text>;
}

/**
 * report to show individual chart
 */
export function ReportCard(props: ReportCardProps) {
  const {
    patientId,
    authorizationToken,
    envId,
    timezone = moment.tz.guess(),
    locale = 'en-us',
    version = 'v1',
    type,
    range: rangeOverride,
    isDarkMode: isDarkModeOverride,
    width = metrics.deviceWidth,
    showTitle,
    title,
    emptyReportOverlayText,
    refresh = false,
    style: styleOverride,
  } = props;
  const styles = useDynamicValue(dynamicStyles);
  const isSystemDarkMode = useDarkMode();
  const isDarkMode =
    typeof isDarkModeOverride === 'boolean'
      ? isDarkModeOverride
      : isSystemDarkMode;
  const containerStyle = { ...styles.container, ...styleOverride } as ViewStyle;

  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState('');
  const [height, setHeight] = useState(DEFAULT_SVG_HEIGHT);
  const [isEmpty, setIsEmpty] = useState(false);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    setShouldRefresh(refresh);
  }, [refresh]);

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
    if (timezone) {
      path = `${path}&timezone=${timezone}`;
    }
    if (locale) {
      path = `${path}&locale=${locale}`;
    }
    path = `${path}&font_scale=${1.2}`;

    // set loading to true
    setIsFetching(true);

    // call backend
    axiosInstance
      .get(path, apiConfig)
      .then((response) => {
        // handle success
        const { data: svgData, headers } = response;
        const { 'x-isempty': isDataEmpty, 'x-svg-height': svgHeight } = headers;

        setData(svgData);
        setHeight(parseInt(svgHeight, 10) || DEFAULT_SVG_HEIGHT);
        setIsEmpty(isDataEmpty.toLowerCase() === 'true');
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
        setShouldRefresh(false);
      });
  }, [
    patientId,
    title,
    range,
    type,
    envId,
    locale,
    timezone,
    isDarkMode,
    width,
    version,
    authorizationToken,
    shouldRefresh,
  ]);

  // const data = context.state.reports[type]
  let formatedSvg = (data || '').replace(/sans-serif/g, '');
  // react-native-svg on android doesnt handle "currentColor", provide label color instead
  if (Platform.OS === 'android') {
    formatedSvg = formatedSvg.replace(
      /currentColor/g,
      isDarkMode ? '#FFFFFFFF' : '#000000FF'
    );
  }

  const renderGraph = () => {
    if (!formatedSvg) {
      return null;
    }

    const showOverlay = isEmpty && emptyReportOverlayText;

    return (
      <View>
        <SvgCss
          style={showOverlay ? styles.svgOverlay : null}
          xml={formatedSvg}
          width="100%"
          height={height}
        />
        {showOverlay && (
          <View style={styles.emptyReportOverlayTextContainer}>
            <Text style={styles.emptyReportOverlayText}>
              {emptyReportOverlayText}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <ColorSchemeProvider mode={isDarkMode ? 'dark' : 'light'}>
      <View style={containerStyle}>
        {showTitle && <ReportCardTitle text={title} />}
        {isFetching ? (
          <View style={styles.activityIndicatorContainer}>
            <ActivityIndicator />
          </View>
        ) : (
          renderGraph()
        )}
      </View>
    </ColorSchemeProvider>
  );
}
