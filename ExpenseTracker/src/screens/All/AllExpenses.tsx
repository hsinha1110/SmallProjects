import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BackwardIcon } from 'react-native-heroicons/outline';

import Header from '../../components/Header/Header';
import { AllExpenseProps } from '../../types';
import { AppStackParamList } from '../../navigation/types';
import Routes from '../../navigation/Routes';

import styles from './styles';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

const AllExpenses = ({ expenses }: AllExpenseProps) => {
  const navigation = useNavigation<NavigationProp>();

  const total = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="All Expenses"
        iconLeft={BackwardIcon}
        onLeftPress={() => navigation.goBack()}
      />

      <View style={styles.content}>
        {/* Total */}
        <Text style={styles.totalTitle}>Total Expenses</Text>

        <Text style={styles.totalAmount}>₹{total}</Text>

        {/* All Expenses */}
        {expenses.length > 0 ? (
          <FlatList
            data={[...expenses].reverse()}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
              <Pressable
                style={styles.card}
                onPress={() =>
                  navigation.navigate(Routes.DETAILS, {
                    expenseId: item.id,
                  })
                }
              >
                <Text style={styles.icon}>{item.icon}</Text>

                <View style={styles.details}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title}
                  </Text>

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
              </Pressable>
            )}
          />
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>💸</Text>

            <Text style={styles.emptyTitle}>No expenses yet</Text>

            <Text style={styles.emptyText}>
              Add your first expense to see it here.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default AllExpenses;
