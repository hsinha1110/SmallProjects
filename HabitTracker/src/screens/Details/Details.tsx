import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ArrowLeftIcon,
  EllipsisHorizontalIcon,
  PencilIcon,
  TrashIcon,
  CheckIcon,
} from 'react-native-heroicons/outline';

import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';
import Header from '../../components/Header/Header';

import { AppParamsList } from '../../navigation/types';
import Routes from '../../navigation/Routes';
import { HabitProps } from '../../types';

type NavigationProp = NativeStackNavigationProp<AppParamsList>;

interface DetailsProps {
  habits: HabitProps[];
  setHabits: React.Dispatch<React.SetStateAction<HabitProps[]>>;
}

const Details = ({ habits, setHabits }: DetailsProps) => {
  const route = useRoute<any>();
  const navigation = useNavigation<NavigationProp>();

  const { id } = route.params;

  // ✅ Actual state se habit find karo
  const habit = habits.find(item => item.id === id);

  console.log(id, '....id');
  console.log(habit, '....habit');
  const handleEdit = (habitId: number) => {
    navigation.navigate(Routes.ADD, {
      id: habitId,
    });
  };
  if (!habit) {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          title="Habit Details"
          leftIcon={ArrowLeftIcon}
          onLeftPress={() => navigation.goBack()}
        />

        <View style={styles.notFoundContainer}>
          <Text style={styles.notFound}>Habit not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const handleDelete = () => {
    setHabits(prevHabits => prevHabits.filter(item => item.id !== habit.id));
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Habit Details"
        leftIcon={ArrowLeftIcon}
        rightIcon={EllipsisHorizontalIcon}
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => {}}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Habit Icon */}
        <View
          style={[
            styles.habitIconContainer,
            {
              backgroundColor: `${habit.color}20`,
            },
          ]}
        >
          <Text style={styles.habitIcon}>{habit.icon}</Text>
        </View>

        {/* Habit Name */}
        <Text style={styles.habitName}>{habit.name}</Text>

        {/* Description */}
        {!!habit.description && (
          <Text style={styles.description}>{habit.description}</Text>
        )}

        {/* Status Card */}
        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>Status</Text>

          <View style={styles.statusRow}>
            <View
              style={[
                styles.checkCircle,
                {
                  backgroundColor: habit.completed ? habit.color : '#BDBDBD',
                },
              ]}
            >
              <CheckIcon size={20} color="#FFFFFF" strokeWidth={3} />
            </View>

            <Text
              style={[
                styles.statusText,
                {
                  color: habit.completed ? habit.color : '#777777',
                },
              ]}
            >
              {habit.completed ? 'Completed' : 'Pending'}
            </Text>
          </View>

          <Text style={styles.message}>
            {habit.completed
              ? 'Great job! Keep it up 💪'
              : 'Complete this habit today 💪'}
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          {/* Edit */}
          <Pressable
            style={styles.editButton}
            onPress={() => {
              handleEdit(id);
            }}
          >
            <PencilIcon size={20} color="#5B32D6" />

            <Text style={styles.editText}>Edit Habit</Text>
          </Pressable>

          {/* Delete */}
          <Pressable style={styles.deleteButton} onPress={handleDelete}>
            <TrashIcon size={20} color="#EF4444" />

            <Text style={styles.deleteText}>Delete Habit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
