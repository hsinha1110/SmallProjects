import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { HeaderProps } from '../../types';
import styles from './styles';

const Header = ({
  title,
  iconLeft: LeftIcon,
  iconRight: RightIcon,
  onLeftPress,
  onRightPress,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onLeftPress} style={styles.iconButton}>
        {LeftIcon && <LeftIcon size={24} color="#000" />}
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <Pressable onPress={onRightPress} style={styles.iconButton}>
        {RightIcon && <RightIcon size={24} color="#000" />}
      </Pressable>
    </View>
  );
};

export default Header;
