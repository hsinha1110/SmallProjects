import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { ButtonProps } from '../../types';
import styles from './styles';

const Button = ({ icon, onPress, title, style }: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={styles.icon}
      >
        {icon}
      </View>
    </Pressable>
  );
};

export default Button;
