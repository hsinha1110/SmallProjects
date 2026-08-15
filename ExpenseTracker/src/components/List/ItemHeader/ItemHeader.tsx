import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { ItemHeaderProps } from '../../../types';
import styles from './styles';

const ItemHeader = ({ title, subTitle, onPress }: ItemHeaderProps) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={onPress}>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </Pressable>
    </View>
  );
};

export default ItemHeader;
