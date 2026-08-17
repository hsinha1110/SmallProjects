import React from 'react';
import { Text, TextInput, View } from 'react-native';

import styles from './styles';
import { CustomInputProps } from '../types';

const CustomInput = ({ label, error, style, ...props }: CustomInputProps) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TextInput
        {...props}
        style={[styles.input, style, error && styles.errorInput]}
        placeholderTextColor="#999999"
      />

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomInput;
