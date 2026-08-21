import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '../../components/Header/Header';
import ProgressCard from '../../components/ProgressCard/ProgressCard';
import ItemHeader from '../../components/List/ItemHeader/ItemHeader';

import { Bars3Icon, BellIcon, PlusIcon } from 'react-native-heroicons/outline';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import styles from './styles';
import Button from '../../components/Button/Button';

import { AppParamsList } from '../../navigation/types';
import Routes from '../../navigation/Routes';

import { HabitProps } from '../../types';

type NavigationProp = NativeStackNavigationProp<AppParamsList>;

interface HomeProps {
  habits: HabitProps[];
  setHabits: React.Dispatch<React.SetStateAction<HabitProps[]>>;
}

const Home = ({ habits, setHabits }: HomeProps) => {
  console.log(habits, '....habits');
  const navigation = useNavigation<NavigationProp>();

  const completedHabits = habits.filter(item => item.completed).length;

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
  const handleAddNavigation = () => {
    navigation.navigate(Routes.ADD);
  };
  const renderItem = ({ item }: { item: HabitProps }) => {
    console.log(item, '.....item');
    return (
      <Pressable
        onPress={() =>
          navigation.navigate(Routes.DETAILS, {
            id: item.id,
          })
        }
        style={styles.habitRow}
      >
        {/* Icon + Name */}
        <View style={styles.habitLeft}>
          <View
            style={[
              styles.iconContainer,
              {
                backgroundColor: `${item.color}40`,
              },
            ]}
          >
            <Text style={styles.icon}>{item.icon}</Text>
          </View>

          <View style={styles.habitContainer}>
            <Text style={styles.habitName}>{item.name}</Text>

            {!!item.description && (
              <Text style={styles.habitDescription}>{item.description}</Text>
            )}
          </View>
        </View>

        {/* Checkbox */}
        <Pressable
          onPress={() => handleComplete(item.id)}
          style={[
            styles.checkbox,
            {
              borderColor: item.completed ? item.color : '#BDBDBD',

              backgroundColor: item.completed ? item.color : 'transparent',
            },
          ]}
        >
          {item.completed && <Text style={styles.check}>✓</Text>}
        </Pressable>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        colorLeft="black"
        colorRight="black"
        title="Habit Tracker"
        leftIcon={Bars3Icon}
        rightIcon={BellIcon}
        onLeftPress={() => {}}
        onRightPress={() => {}}
      />

      <View style={styles.headerStyle}>
        <Text style={styles.headerTitle}>Good Morning Himanshu 👋</Text>

        <Text style={styles.headerSubTitle}>
          Let's build better habits today
        </Text>
      </View>

      <ProgressCard completed={completedHabits} total={habits.length} />

      <ItemHeader
        title="Today's Habits"
        sub_title="View All"
        onPress={handleAddNavigation}
      />

      <FlatList
        data={habits}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          habits.length === 0 ? styles.emptyList : styles.listContent
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No habits found</Text>

            <Text style={styles.emptySubText}>
              Tap + to create your first habit
            </Text>
          </View>
        }
      />

      <Button
        style={styles.fab}
        icon={<PlusIcon size={30} color="#FFFFFF" />}
        onPress={() => handleAddNavigation()}
      />
    </SafeAreaView>
  );
};

export default Home;
