import { ReactNode } from 'react';

export interface ButtonProps {
  onPress: () => void;
  title: string;
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
}
export interface HeaderProps {
  iconRight: ReactNode;
  title: string;
  onPress: () => void;
}
