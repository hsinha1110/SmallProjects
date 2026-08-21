import React, { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackwardIcon, TrashIcon } from 'react-native-heroicons/outline';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import { habitsData, habitColors } from '../../constants/Data';
import { HabitProps } from '../../types';

import Header from '../../components/Header/Header';
import CustomInput from '../../components/Input/CustomInput';
import Button from '../../components/Button/Button';
import ItemHeader from '../../components/List/ItemHeader/ItemHeader';

import styles from './styles';

import { MainStackParamList } from '../../navigation/types';
import Routes from '../../navigation/Routes';

type AddProps = NativeStackScreenProps<
  MainStackParamList,
  typeof Routes.ADD
> & {
  habits: HabitProps[];
  setHabits: React.Dispatch<React.SetStateAction<HabitProps[]>>;
};

type AddRouteProp = RouteProp<MainStackParamList, typeof Routes.ADD>;

type NavigationProp = NativeStackNavigationProp<MainStackParamList>;

const AddHabits = ({ habits, setHabits, navigation }: AddProps) => {
  const route = useRoute<AddRouteProp>();

  const [habitName, setHabitName] = useState('');
  const [description, setDescription] = useState('');

  const [habitNameError, setHabitNameError] = useState('');

  const [selectedIcon, setSelectedIcon] = useState<string>(habitsData[0].icon);

  const [selectedColor, setSelectedColor] = useState<string>(
    habitColors[0].color,
  );

  const habitId = route.params?.id;

  const editingHabit =
    habitId !== undefined
      ? habits.find(item => item.id === habitId)
      : undefined;

  const editingMode = !!editingHabit;

  useEffect(() => {
    if (!editingHabit) {
      return;
    }

    setHabitName(editingHabit.name);
    setDescription(editingHabit.description);
    setSelectedIcon(editingHabit.icon);
    setSelectedColor(editingHabit.color);
  }, [editingHabit]);

  const handleDelete = () => {
    setHabits(habits => habits.filter(item => item.id !== habitId));
    navigation.navigate(Routes.BOTTOM_NAVIGATION, { screen: Routes.HOME });
  };
  const checkValidations = () => {
    setHabitNameError('');

    if (!habitName.trim()) {
      setHabitNameError('Please Enter Habit');
      return;
    }

    handleSaveHabit();
  };

  const handleSaveHabit = () => {
    if (habitId !== undefined) {
      setHabits(prevHabits =>
        prevHabits.map(habit =>
          habit.id === habitId
            ? {
                ...habit,
                name: habitName.trim(),
                description: description.trim(),
                icon: selectedIcon,
                color: selectedColor,
              }
            : habit,
        ),
      );
    } else {
      const newHabit: HabitProps = {
        id: Date.now(),
        name: habitName.trim(),
        description: description.trim(),
        icon: selectedIcon,
        color: selectedColor,
        completed: false,
      };

      setHabits(prevHabits => [...prevHabits, newHabit]);
    }

    navigation.goBack();
  };

  const renderIconItem = ({ item }: { item: (typeof habitsData)[number] }) => {
    const isSelected = selectedIcon === item.icon;

    return (
      <Pressable
        onPress={() => setSelectedIcon(item.icon)}
        style={[
          styles.iconContainer,
          {
            borderWidth: isSelected ? 2 : 0,
            borderColor: isSelected ? item.color : 'transparent',

            backgroundColor: `${item.color}40`,
          },
        ]}
      >
        <Text style={styles.icon}>{item.icon}</Text>
      </Pressable>
    );
  };

  const renderColorItem = ({
    item,
  }: {
    item: (typeof habitColors)[number];
  }) => {
    const isSelected = selectedColor === item.color;

    return (
      <Pressable
        onPress={() => setSelectedColor(item.color)}
        style={[styles.colorOuter, isSelected && styles.colorOuterSelected]}
      >
        <View
          style={[
            styles.colorCircle,
            {
              backgroundColor: item.color,
            },
          ]}
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        colorRight={editingMode ? 'red' : 'black'}
        colorLeft={'black'}
        title={editingMode ? 'Edit Habit' : 'Add Habit'}
        leftIcon={BackwardIcon}
        rightIcon={TrashIcon}
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => handleDelete()}
      />

      {/* Habit Name */}

      <CustomInput
        label="Habit Name"
        placeholder="e.g Drink Water"
        value={habitName}
        onChangeText={text => {
          setHabitName(text);

          if (text.trim()) {
            setHabitNameError('');
          }
        }}
        error={habitNameError}
      />

      {/* Description */}

      <CustomInput
        label="Description (optional)"
        placeholder="Enter description"
        value={description}
        multiline
        numberOfLines={8}
        textAlignVertical="top"
        onChangeText={setDescription}
        style={styles.descriptionInput}
      />

      {/* Choose Icon */}

      <View style={styles.listContainer}>
        <ItemHeader title="Choose Icon" onPress={() => {}} />

        <FlatList
          data={habitsData}
          numColumns={4}
          keyExtractor={item => item.id.toString()}
          renderItem={renderIconItem}
          scrollEnabled={false}
          contentContainerStyle={styles.iconList}
          columnWrapperStyle={styles.iconRow}
        />

        {/* Choose Color */}

        <ItemHeader title="Choose Color" onPress={() => {}} />

        <FlatList
          data={habitColors}
          numColumns={4}
          keyExtractor={item => item.id}
          renderItem={renderColorItem}
          scrollEnabled={false}
          contentContainerStyle={styles.colorList}
        />
      </View>

      {/* Save / Update */}

      <View style={styles.buttonContainer}>
        <Button
          title={editingMode ? 'Update Habit' : 'Save Habit'}
          onPress={checkValidations}
          style={[
            styles.button,
            {
              backgroundColor: editingMode ? '#35A241' : '#5B32D6',
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default AddHabits;
