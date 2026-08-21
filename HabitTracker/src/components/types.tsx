import { StyleProp, ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string;
  colorLeft: string;
  colorRight: string;
  leftIcon?: React.ComponentType<{
    size?: number;
    color?: string;
  }>;

  rightIcon?: React.ComponentType<{
    size?: number;
    color?: string;
  }>;

  onLeftPress?: () => void;
  onRightPress?: () => void;
}
export interface CircularProgressProps {
  percentage: number;
}
export interface ProgressCardProps {
  completed: number;
  total: number;
}
export interface ButtonProps {
  icon?: React.ReactNode;
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

import { TextInputProps } from 'react-native';

export interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
}
