import React from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';
import {HeaderProps} from '../../types';
import CustomSafeAreaView from '../SafeAreaView/CustomSafeAreaView';

const Header = ({
  title,
  subtitle,
  iconLeft: LeftIcon,
  iconRight: RightIcon,
  onLeftPress,
  onRightPress,
}: HeaderProps) => {
  const hasLeftIcon = !!LeftIcon;
  const hasRightIcon = !!RightIcon;

  return (
    <CustomSafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>

        {hasLeftIcon && (
          <Pressable
            style={styles.iconButton}
            onPress={onLeftPress}>
            <LeftIcon size={24} color="#000" />
          </Pressable>
        )}

        <View
          style={[
            styles.titleContainer,
            hasLeftIcon && hasRightIcon
              ? styles.centerTitle
              : styles.leftTitle,
          ]}>
          <Text style={styles.title}>{title}</Text>

          {subtitle && (
            <Text style={styles.subtitle}>{subtitle}</Text>
          )}
        </View>

        {hasRightIcon && (
          <Pressable
            style={styles.iconButton}
            onPress={onRightPress}>
            <RightIcon size={24} color="#000" />
          </Pressable>
        )}

      </View>
    </CustomSafeAreaView>
  );
};

export default Header;