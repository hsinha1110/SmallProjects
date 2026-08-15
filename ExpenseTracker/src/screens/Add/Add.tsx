import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackwardIcon, Cog6ToothIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import Header from '../../components/Header/Header';
import CustomInput from '../../components/Input/CustomInput';
import CategoryDropDown from '../../components/CategoryDropDown';
import CustomDatePicker from '../../components/DatePicker/CustomDatePicker';
import Button from '../../components/Button/Button';

import Routes from '../../navigation/Routes';
import { ExpenseProps } from '../../types';
import { AppStackParamList } from '../../navigation/types';
import styles from './styles';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

interface AddExtraProps {
  expenses: ExpenseProps[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseProps[]>>;
}

type AddProps = NativeStackScreenProps<AppStackParamList, Routes.ADD> &
  AddExtraProps;

const Add = ({ route, expenses, setExpenses }: AddProps) => {
  const navigation = useNavigation<NavigationProp>();

  // --------------------------------
  // Form values
  // --------------------------------
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const [icon, setIcon] = useState('');

  // --------------------------------
  // Errors
  // --------------------------------
  const [titleError, setTitleError] = useState('');
  const [amountError, setAmountError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const [dateError, setDateError] = useState('');

  // --------------------------------
  // Edit mode
  // --------------------------------
  const expenseId = route.params?.expenseId;

  const editingExpense = expenseId
    ? expenses.find(item => item.id === expenseId)
    : undefined;

  const isEditMode = !!editingExpense;

  // --------------------------------
  // Fill form when editing
  // --------------------------------
  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount.toString());
      setCategory(editingExpense.category);
      setIcon(editingExpense.icon);
      setDate(editingExpense.date);
    }
  }, [editingExpense]);

  // --------------------------------
  // Validation
  // --------------------------------
  const checkValidation = () => {
    let isValid = true;

    setTitleError('');
    setAmountError('');
    setCategoryError('');
    setDateError('');

    if (!title.trim()) {
      setTitleError('Please enter expense title');
      isValid = false;
    }

    if (!amount.trim()) {
      setAmountError('Please enter amount');
      isValid = false;
    } else if (Number.isNaN(Number(amount))) {
      setAmountError('Please enter a valid amount');
      isValid = false;
    } else if (Number(amount) <= 0) {
      setAmountError('Amount must be greater than 0');
      isValid = false;
    }

    if (!category) {
      setCategoryError('Please select category');
      isValid = false;
    }

    if (!date) {
      setDateError('Please select date');
      isValid = false;
    }

    return isValid;
  };

  // --------------------------------
  // Save / Update
  // --------------------------------
  const saveExpense = () => {
    if (!checkValidation()) {
      return;
    }

    if (isEditMode && editingExpense) {
      // UPDATE
      setExpenses(prevExpenses =>
        prevExpenses.map(expense =>
          expense.id === editingExpense.id
            ? {
                ...expense,
                title: title.trim(),
                amount: Number(amount),
                category,
                date,
                icon,
              }
            : expense,
        ),
      );
    } else {
      // ADD
      const newExpense: ExpenseProps = {
        id: Date.now().toString(),
        title: title.trim(),
        amount: Number(amount),
        category,
        date,
        icon,
      };

      setExpenses(prev => [...prev, newExpense]);
    }

    navigation.navigate(Routes.HOME);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={isEditMode ? 'Edit Expense' : 'Add Expense'}
        iconLeft={BackwardIcon}
        iconRight={Cog6ToothIcon}
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => {}}
      />

      <CustomInput
        label="Expense Title"
        placeholder="Enter expense title"
        value={title}
        onChangeText={text => {
          setTitle(text);

          if (text.trim()) {
            setTitleError('');
          }
        }}
        error={titleError}
      />

      <CustomInput
        label="Amount"
        placeholder="₹ 0"
        value={amount}
        onChangeText={text => {
          setAmount(text);

          if (text.trim() && !Number.isNaN(Number(text)) && Number(text) > 0) {
            setAmountError('');
          }
        }}
        keyboardType="numeric"
        error={amountError}
      />

      <CategoryDropDown
        label="Category"
        selectedCategory={category}
        selectedIcon={icon}
        onSelectCategory={(selectedCategory, selectedIcon) => {
          setCategory(selectedCategory);
          setIcon(selectedIcon);
          setCategoryError('');
        }}
      />

      {categoryError ? <Text style={styles.error}>{categoryError}</Text> : null}

      <CustomDatePicker
        label="Date"
        value={date}
        onChange={selectedDate => {
          setDate(selectedDate);
          setDateError('');
        }}
      />

      {dateError ? <Text style={styles.error}>{dateError}</Text> : null}

      <View style={styles.buttonContainer}>
        <Button
          title={isEditMode ? 'Update Expense' : 'Add Expense'}
          onPress={saveExpense}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default Add;
