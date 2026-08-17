import { View, Text, Pressable } from 'react-native';
import React from 'react';
interface ItemHeaderProps {
  title: string;
  sub_title?: string;
  onPress: () => void;
}
const ItemHeader = ({ title, sub_title, onPress }: ItemHeaderProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#5B32D6' }}>
        {sub_title}
      </Text>
    </Pressable>
  );
};

export default ItemHeader;
