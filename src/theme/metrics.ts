import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const deviceWidth = width < height ? width : height;
const deviceHeight = width < height ? height : width;

export const metrics = {
  deviceWidth,
  deviceHeight,
};
