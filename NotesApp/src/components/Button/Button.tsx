import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { ButtonProps } from '../../types';
import styles from './styles';

const Button = ({ icon, onPress, title, style }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      {icon && <View style={styles.icon}>{icon}</View>}

      {title && <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
};

export default Button;
