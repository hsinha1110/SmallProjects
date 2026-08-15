import React from 'react';
import { View, Text } from 'react-native';

import { ExpenseProps } from '../../../types';
import styles from './styles';

const ItemRecent = ({ item }: { item: ExpenseProps }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.icon}>{item.icon}</Text>

      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.subtitle}>
          {item.category} •{' '}
          {item.date.toLocaleDateString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
      </View>

      <Text style={styles.amount}>₹{item.amount}</Text>
    </View>
  );
};
export default ItemRecent;
