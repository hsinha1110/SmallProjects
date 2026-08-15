import { ExpenseProps } from '../types';

export const expenseData: ExpenseProps[] = [
  {
    id: '1',
    title: 'Food',
    amount: 3200,
    icon: '🍔',
    category: 'Food',
    date: new Date(),
  },
  {
    id: '2',
    title: 'Travel',
    amount: 2500,
    icon: '✈️',
    category: 'Travel',
    date: new Date(),
  },
  {
    id: '3',
    title: 'Shopping',
    amount: 1200,
    icon: '🛍️',
    category: 'Shopping',
    date: new Date(),
  },
  {
    id: '4',
    title: 'Bills',
    amount: 3300,
    icon: '💵',
    category: 'Bills',
    date: new Date(),
  },
];
