import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { HeaderProps } from '../types';

const Header = ({ iconLeft, title, iconRight }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.side}>{iconLeft}</View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.side}>{iconRight}</View>
    </View>
  );
};

export default Header;
