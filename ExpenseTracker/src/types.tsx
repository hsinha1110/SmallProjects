import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface ExpenseProps {
  id: string;
  title: string;
  amount: number;
  icon: string;
  category: string;
  date: Date;
}

export interface ItemHeaderProps {
  title: string;
  subTitle: string;
  onPress: () => void;
}

export interface HeaderProps {
  title: string;
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
export interface ButtonProps {
  icon?: React.ReactNode;
  title?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}
export interface CustomInputProps extends TextInputProps {
  label?: string;
  error?: string;
}
export interface CategoryDropDownProps {
  label: string;

  selectedCategory: string;
  selectedIcon: string;

  onSelectCategory: (category: string, icon: string) => void;
}
export interface CustomDatePickerProps {
  label?: string;
  value: Date;
  onChange: (date: Date) => void;
}

export interface HomeProps {
  expenses: ExpenseProps[];
}
export interface AllExpenseProps {
  expenses: ExpenseProps[];
}
