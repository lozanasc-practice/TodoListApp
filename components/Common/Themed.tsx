/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { useFonts as useHeader, Rubik_700Bold } from '@expo-google-fonts/rubik';
import { useFonts as useBody, Mulish_600SemiBold } from '@expo-google-fonts/mulish';
import { useFonts as useAccent, Prompt_300Light } from '@expo-google-fonts/prompt';

 import { 
  Text as DefaultText, 
  View as DefaultView, 
  TextInput as DefaultTextInput,
  Button as DefaultButton, 
} from 'react-native';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';

export const useThemeColor =(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark) => {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type ButtonProps = ThemeProps & DefaultButton['props'];

// ? Header text component
// * Rubik
export const  HeadingText = (props: TextProps) => {

  const [fontsLoaded] = useHeader({
    Rubik_700Bold
  })

  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'heading');

  return <DefaultText style={[{ color, fontFamily: 'Rubik_700Bold' }, style]} {...otherProps} />;
}
// ? Body text component
// * Mulish
export const  BodyText = (props: TextProps) => {

  const [fontsLoaded] = useBody({
    Mulish_600SemiBold
  })

  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'body');

  return <DefaultText style={[{ color, fontFamily: 'Mulish_600SemiBold' }, style]} {...otherProps} />;
}
// ? Accent text component
// * Prompt
export const  AccentText = (props: TextProps) => {

  const [fontsLoaded] = useAccent({
    Prompt_300Light
  })

  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'accent');

  return <DefaultText style={[{ color, fontFamily: 'Prompt_300Light'}, style]} {...otherProps} />;
}


export const View = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const BaseContainer = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'baseBg');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export const FooterContainer = (props: ViewProps) => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'footerBg');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

