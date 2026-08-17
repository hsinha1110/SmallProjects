import React, { useMemo, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Bars3Icon,
  MagnifyingGlassIcon,
  PlusIcon,
} from 'react-native-heroicons/outline';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';

import { HabitProps } from '../../types';
import { MainStackParamList } from '../../navigation/types';
import Routes from '../../navigation/Routes';

import styles from './styles';

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

interface HabitsProps {
  habits: HabitProps[];
  setHabits: React.Dispatch<React.SetStateAction<HabitProps[]>>;
}

type FilterType = 'All' | 'Completed' | 'Pending';

const Habits = ({ habits, setHabits }: HabitsProps) => {
  const navigation = useNavigation<NavigationProp>();

  const [selectedFilter, setSelectedFilter] = useState<FilterType>('All');

  const filters: FilterType[] = ['All', 'Completed', 'Pending'];

  // -----------------------------
  // FILTER HABITS
  // -----------------------------

  const filteredHabits = useMemo(() => {
    if (selectedFilter === 'Completed') {
      return habits.filter(item => item.completed);
    }

    if (selectedFilter === 'Pending') {
      return habits.filter(item => !item.completed);
    }

    return habits;
  }, [habits, selectedFilter]);

  // -----------------------------
  // COMPLETE HABIT
  // -----------------------------

  const handleComplete = (id: number) => {
    setHabits(prevHabits =>
      prevHabits.map(item =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item,
      ),
    );
  };

  // -----------------------------
  // HABIT ITEM
  // -----------------------------

  const renderItem = ({ item }: { item: HabitProps }) => {
    return (
      <Pressable
        style={styles.habitRow}
        onPress={() =>
          navigation.navigate(Routes.DETAILS, {
            id: item.id,
          })
        }
      >
        {/* Icon */}

        <View style={styles.habitLeft}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: `${item.color}20`,
              },
            ]}
          >
            <Text style={styles.icon}>{item.icon}</Text>
          </View>

          {/* Name + Description */}

          <View style={styles.habitInfo}>
            <Text style={styles.habitName}>{item.name}</Text>

            {!!item.description && (
              <Text style={styles.habitDescription} numberOfLines={1}>
                {item.description}
              </Text>
            )}
          </View>
        </View>

        {/* Checkbox */}

        <Pressable
          style={[
            styles.checkbox,
            {
              borderColor: item.completed ? item.color : '#BDBDBD',

              backgroundColor: item.completed ? item.color : 'transparent',
            },
          ]}
          onPress={() => handleComplete(item.id)}
        >
          {item.completed && <Text style={styles.check}>✓</Text>}
        </Pressable>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}

      <Header
        title="All Habits"
        leftIcon={Bars3Icon}
        rightIcon={MagnifyingGlassIcon}
        onLeftPress={() => {}}
        onRightPress={() => {}}
      />

      {/* Filters */}

      <View style={styles.filterContainer}>
        {filters.map(filter => {
          const isSelected = selectedFilter === filter;

          return (
            <Pressable
              key={filter}
              onPress={() => setSelectedFilter(filter)}
              style={[
                styles.filterButton,
                isSelected && styles.filterButtonActive,
              ]}
            >
              <Text
                style={[
                  styles.filterText,
                  isSelected && styles.filterTextActive,
                ]}
              >
                {filter}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Habit List */}

      <FlatList
        data={filteredHabits}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          filteredHabits.length === 0 ? styles.emptyList : styles.listContent
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>
              {selectedFilter === 'Completed' ? '✓' : '📝'}
            </Text>

            <Text style={styles.emptyText}>
              {selectedFilter === 'All'
                ? 'No habits found'
                : selectedFilter === 'Completed'
                ? 'No completed habits'
                : 'No pending habits'}
            </Text>

            <Text style={styles.emptySubText}>
              {selectedFilter === 'All'
                ? 'Tap + to create your first habit'
                : 'Complete or add some habits to see them here'}
            </Text>
          </View>
        }
      />

      {/* Floating Button */}

      <Button
        style={styles.fab}
        icon={<PlusIcon size={30} color="#FFFFFF" />}
        onPress={() => navigation.navigate(Routes.ADD)}
      />
    </SafeAreaView>
  );
};

export default Habits;
