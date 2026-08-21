import { Pressable, Text, View } from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';

interface ButtonProps {
  title: string;
  icon: ReactNode;
  onPress: () => void;
  variant?: 'start' | 'pause' | 'reset';
}

const Button = ({
  title,
  icon,
  onPress,
  variant = 'start',
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.container, styles[variant]]}
    >
      <View style={styles.icon}>{icon}</View>

      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;