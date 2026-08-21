import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {ButtonProps} from '../types';

const Button = ({
  onPress,
  title,
  icon,
  variant = 'primary',
}: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        variant === 'secondary' && styles.secondary,
        variant === 'danger' && styles.danger,
      ]}
    >
      <View style={styles.icon}>{icon}</View>

      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

export default Button;