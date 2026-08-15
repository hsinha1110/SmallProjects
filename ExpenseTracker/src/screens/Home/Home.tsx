import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PlusIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../../components/Header/Header';
import ItemExpenses from '../../components/List/ItemExpenses/ItemExpenses';
import ItemHeader from '../../components/List/ItemHeader/ItemHeader';
import ItemRecent from '../../components/List/ItemRecent/ItemRecent';
import Button from '../../components/Button/Button';

import { AppStackParamList } from '../../navigation/types';
import Routes from '../../navigation/Routes';
import { Bars3Icon, Cog6ToothIcon } from 'react-native-heroicons/outline';
import styles from './styles';
import { HomeProps } from '../../types';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

const Home = ({ expenses }: HomeProps) => {
  const navigation = useNavigation<NavigationProp>();

  const total = expenses.reduce((total, expense) => total + expense.amount, 0);

  const handleNavigation = () => {
    navigation.navigate(Routes.ADD, {});
  };

  const recentExpenses = [...expenses].reverse().slice(0, 3);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Expense Tracker"
        iconLeft={Bars3Icon}
        iconRight={Cog6ToothIcon}
        onLeftPress={() => {}}
        onRightPress={() => {}}
      />

      <View style={styles.content}>
        {expenses.length > 0 && (
          <>
            <Text style={styles.title}>Total Expenses</Text>

            <Text style={styles.subTitle}>₹{total}</Text>
          </>
        )}

        {expenses.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>💸</Text>

            <Text style={styles.emptyTitle}>No Expenses</Text>

            <Text style={styles.emptyText}>
              You haven't added any expenses yet.
            </Text>

            <Pressable
              style={styles.addExpenseButton}
              onPress={handleNavigation}
            >
              <Text style={styles.addExpenseText}>Add Expense</Text>
            </Pressable>
          </View>
        ) : (
          <>
            {/* Expense Cards */}
            <FlatList
              horizontal
              style={{ flexGrow: 0 }}
              showsHorizontalScrollIndicator={false}
              data={expenses}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate(Routes.DETAILS, {
                      expenseId: item.id,
                    })
                  }
                >
                  <ItemExpenses item={item} />
                </Pressable>
              )}
            />

            {/* Recent Header */}
            <ItemHeader
              title="Recent Expenses"
              subTitle="View All"
              onPress={() => navigation.navigate(Routes.ALL)}
            />

            {/* Recent Expenses */}
            <FlatList
              data={recentExpenses}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate(Routes.DETAILS, {
                      expenseId: item.id,
                    })
                  }
                >
                  <ItemRecent item={item} />
                </Pressable>
              )}
            />
          </>
        )}
      </View>

      {/* Floating Add Button */}
      <Button
        style={styles.fab}
        icon={<PlusIcon size={30} color="white" />}
        onPress={handleNavigation}
      />
    </SafeAreaView>
  );
};

export default Home;
