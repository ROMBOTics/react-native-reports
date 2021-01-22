import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { DynamicStyleSheet, useDynamicValue } from 'react-native-dynamic';

import { StateContext } from '../../context/reports-context';

import type { RangeButtonProps } from './range-selector.props';
import { RangeTypes } from './range-selector.types';
import { spacing, cornerRadius, color } from '../../theme';

const dynamicStyles = new DynamicStyleSheet({
  outerContainer: {
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: color.labelTertiary,
    borderRadius: cornerRadius.small,
  },
  button: {
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    backgroundColor: color.backgroundColor,
    borderRadius: cornerRadius.small,
  },
  buttonLeft: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  buttonRight: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonHighlighted: {
    backgroundColor: color.backgroundColorSecondary,
  },
  title: {
    fontSize: 15,
    color: color.labelSecondary,
  },
  titleHighlighted: {
    color: color.label,
  },
  seperator: {
    width: StyleSheet.hairlineWidth,
    backgroundColor: color.labelTertiary,
  },
});

export function RangeButton(props: RangeButtonProps) {
  const styles = useDynamicValue(dynamicStyles);
  const { onPress, range, selectedRange, isLeft, isRight } = props;
  const isSelected = selectedRange === range;

  const containerStyle = {
    ...styles.button,
    ...(isLeft && styles.buttonLeft),
    ...(isRight && styles.buttonRight),
    ...(isSelected && styles.buttonHighlighted),
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={containerStyle}>
        <Text style={[styles.title, isSelected && styles.titleHighlighted]}>
          {range}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export function RangeSelector() {
  const styles = useDynamicValue(dynamicStyles);
  const context = useContext(StateContext);

  const updateIndex = (range: RangeTypes) => {
    context.setState({
      ...context.state,
      range,
    });
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <RangeButton
          range={RangeTypes.month}
          // eslint-disable-next-line react/destructuring-assignment
          selectedRange={context.state?.range}
          onPress={() => updateIndex(RangeTypes.month)}
          isLeft
        />
        <View style={styles.seperator} />
        <RangeButton
          range={RangeTypes.week}
          // eslint-disable-next-line react/destructuring-assignment
          selectedRange={context.state?.range}
          onPress={() => updateIndex(RangeTypes.week)}
          isRight
        />
      </View>
    </View>
  );
}
