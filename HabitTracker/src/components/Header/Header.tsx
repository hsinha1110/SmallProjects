import React from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles';
import { HeaderProps } from '../types';

const Header = ({
  title,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onLeftPress,
  onRightPress,
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Left */}
      <View style={styles.side}>
        {LeftIcon && (
          <Pressable style={styles.iconButton} onPress={onLeftPress}>
            <LeftIcon size={24} color="#222222" />
          </Pressable>
        )}
      </View>

      {/* Center */}
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>

      {/* Right */}
      <View style={[styles.side, styles.rightSide]}>
        {RightIcon && (
          <Pressable style={styles.iconButton} onPress={onRightPress}>
            <RightIcon size={24} color="#222222" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default Header;
