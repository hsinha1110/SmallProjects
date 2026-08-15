import React from 'react';
import { View, Text } from 'react-native';

import { ExpenseProps } from '../../../types';
import styles from './styles';

const ItemExpenses = ({ item }: { item: ExpenseProps }) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Text style={styles.icon}>{item.icon}</Text>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>
      <Text style={styles.amount}>₹{item.amount}</Text>
    </View>
  );
};

export default ItemExpenses;
