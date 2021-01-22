import { DynamicValue } from 'react-native-dynamic';
import { palette } from './palette';

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
// eslint-disable-next-line import/prefer-default-export
export const color = {
  backgroundColor: new DynamicValue('#FFFFFFFF', '#000000FF'),
  backgroundColorSecondary: new DynamicValue('#F2F2F7FF', '#1C1C1EFF'),
  backgroundColorTertiary: new DynamicValue('#FFFFFFFF', '#2C2C2EFF'),

  label: new DynamicValue('#000000FF', '#FFFFFFFF'),
  labelSecondary: new DynamicValue('#3C3C4399', '#EBEBF599'),
  labelTertiary: new DynamicValue('#3C3C434D', '#EBEBF54D'),
  labelQuaternary: new DynamicValue('#3C3C432E', '#EBEBF52E'),

  placeholder: new DynamicValue('#3C3C434D', '#EBEBF54D'),

  separator: new DynamicValue('#3C3C434A', '#54545899'),
  separatorOpaque: new DynamicValue('#C6C6C8FF', '#38383AFF'),

  branding: new DynamicValue('#00cccc', '#00cccc'),
  red: new DynamicValue('#ff3b30ff', '#ff453aff'),

  transparent: 'rgba(0, 0, 0, 0)',

  /**
   * The palette is available to use, but prefer using the name.
   */
  palette,
  /**
   * The screen background.
   */
  background: palette.white,
  /**
   * The main tinting color.
   */
  primary: palette.orange,
  /**
   * The main tinting color, but darker.
   */
  primaryDarker: palette.orangeDarker,
  /**
   * A subtle color used for borders and lines.
   */
  line: palette.offWhite,
  /**
   * The default color of text in many components.
   */
  text: palette.white,
  /**
   * Secondary information.
   */
  dim: palette.lightGrey,
  /**
   * Error messages and icons.
   */
  error: palette.angry,

  /**
   * Storybook background for Text stories, or any stories where
   * the text color is color.text, which is white by default, and does not show
   * in Stories against the default white background
   */
  storybookDarkBg: palette.black,

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookTextColor: palette.black,
};
