import { View, Text } from 'react-native';
import React, { ReactNode } from 'react';
import styles from './styles';
import { HeaderProps } from '../types';

const Header = ({ iconRight, title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.side}>{iconRight}</View>
    </View>
  );
};

export default Header;
