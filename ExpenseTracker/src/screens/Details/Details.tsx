import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackwardIcon, PencilIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Header from '../../components/Header/Header';
import { AppStackParamList } from '../../navigation/types';
import Routes from '../../navigation/Routes';

import styles from './styles';
import { ExpenseProps } from '../../types';
import Button from '../../components/Button/Button';

interface DetailsProps
  extends NativeStackScreenProps<AppStackParamList, Routes.DETAILS> {
  expenses: ExpenseProps[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseProps[]>>;
}
type NavigationProp = NativeStackNavigationProp<AppStackParamList>;
const Details = ({ route, expenses, setExpenses }: DetailsProps) => {
  const navigation = useNavigation<NavigationProp>();

  const { expenseId } = route.params;

  const expense = expenses.find(item => item.id === expenseId);

  if (!expense) {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Expense Details"
          iconLeft={BackwardIcon}
          iconRight={PencilIcon}
          onLeftPress={() => navigation.goBack()}
          onRightPress={() => {
            console.log('Edit Expense');
          }}
        />

        <View style={styles.empty}>
          <Text>Expense not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const deleteExpense = (id: string) => {
    setExpenses(prevExpenses =>
      prevExpenses.filter(expense => expense.id !== id),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Expense Details"
        iconLeft={BackwardIcon}
        iconRight={PencilIcon}
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => {
          navigation.navigate(Routes.ADD, {
            expenseId: expense.id,
          });
        }}
      />

      <View style={styles.content}>
        {/* Summary */}
        <View style={styles.summary}>
          <Text style={styles.icon}>{expense.icon}</Text>

          <Text style={styles.mainTitle}>{expense.title}</Text>

          <Text style={styles.mainAmount}>₹{expense.amount}</Text>
        </View>

        {/* Details */}
        <View style={styles.detailsCard}>
          <View style={styles.row}>
            <Text style={styles.label}>Expense Title</Text>

            <Text style={styles.value}>{expense.title}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Amount</Text>

            <Text style={styles.value}>₹{expense.amount}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Category</Text>

            <Text style={styles.value}>{expense.category}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.row}>
            <Text style={styles.label}>Date</Text>

            <Text style={styles.value}>
              {expense.date.toLocaleDateString('en-IN', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })}
            </Text>
          </View>
        </View>

        {/* Delete Button */}
        <View style={styles.buttonContainer}>
          <Button
            title="Delete Expense"
            onPress={() => deleteExpense(expenseId)}
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Details;
