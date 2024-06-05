import type {
  StyleProp,
  TextProps as BaseTextProps,
  TextStyle,
} from 'react-native';

export interface KTextProps extends BaseTextProps {
  preset:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'body3'
    | 'caption'
    | 'button'
    | 'overline';
  style?: StyleProp<TextStyle>;
  weight?: TextFontWeight;
  variant?: 'primary' | 'primaryAccent' | 'secondary' | 'secondaryAccent';
}

export type TextFontWeight = 'regular' | 'semibold' | 'bold' | 'extrabold';
