import { StyleProp, ViewStyle } from 'react-native';

export interface HeaderProps {
  title: string;
  subtitle?: string;
  iconLeft?: React.ComponentType<{
    size?: number;
    color?: string;
  }>;

  iconRight?: React.ComponentType<{
    size?: number;
    color?: string;
  }>;

  onLeftPress?: () => void;
  onRightPress?: () => void;
}

export interface SearchProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export interface ButtonProps {
  icon?: React.ReactNode;
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface NotesProps {
  id: number;
  title: string;
  description: string;
  date: Date;
  pinned: boolean;
  noteId: undefined;
}
