import React from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {
  BellIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  MoonIcon,
  PencilIcon,
} from 'react-native-heroicons/outline';

import {HabitProps} from '../../types';

import styles from './styles';

interface ProfileProps {
  habits: HabitProps[];
  setHabits: React.Dispatch<
    React.SetStateAction<HabitProps[]>
  >;
}

const Profile = ({
  habits,
  setHabits,
}: ProfileProps) => {
  // -----------------------------
  // HABIT STATISTICS
  // -----------------------------

  const totalHabits = habits.length;

  const completedHabits = habits.filter(
    item => item.completed,
  ).length;

  const pendingHabits =
    totalHabits - completedHabits;

  const progress =
    totalHabits > 0
      ? Math.round(
          (completedHabits / totalHabits) * 100,
        )
      : 0;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* =========================
            HEADER
        ========================== */}

        <Text style={styles.headerTitle}>
          Profile
        </Text>

        <Text style={styles.headerSubtitle}>
          Manage your profile and preferences
        </Text>

        {/* =========================
            PROFILE CARD
        ========================== */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              H
            </Text>
          </View>

          <View style={styles.profileInfo}>
            <Text style={styles.name}>
              Himanshu
            </Text>

            <Text style={styles.email}>
              Keep building better habits
            </Text>
          </View>

          <Pressable
            style={styles.editButton}
            onPress={() => {}}
          >
            <PencilIcon
              size={20}
              color="#5B32D6"
            />
          </Pressable>
        </View>

        {/* =========================
            YOUR PROGRESS
        ========================== */}

        <Text style={styles.sectionTitle}>
          Your Progress
        </Text>

        <View style={styles.statsContainer}>
          {/* Total Habits */}

          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              {totalHabits}
            </Text>

            <Text style={styles.statLabel}>
              Habits
            </Text>
          </View>

          {/* Completed */}

          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              {completedHabits}
            </Text>

            <Text style={styles.statLabel}>
              Completed
            </Text>
          </View>

          {/* Progress */}

          <View style={styles.statCard}>
            <Text style={styles.statValue}>
              {progress}%
            </Text>

            <Text style={styles.statLabel}>
              Progress
            </Text>
          </View>
        </View>

        {/* =========================
            EXTRA STATUS
        ========================== */}

        <View style={styles.summaryCard}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Total Habits
            </Text>

            <Text style={styles.summaryValue}>
              {totalHabits}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Completed
            </Text>

            <Text style={styles.summaryValue}>
              {completedHabits}
            </Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>
              Pending
            </Text>

            <Text style={styles.summaryValue}>
              {pendingHabits}
            </Text>
          </View>
        </View>

        {/* =========================
            SETTINGS
        ========================== */}

        <Text style={styles.sectionTitle}>
          Settings
        </Text>

        <View style={styles.menuContainer}>
          {/* Settings */}

          <Pressable
            style={styles.menuItem}
            onPress={() => {}}
          >
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <Cog6ToothIcon
                  size={21}
                  color="#5B32D6"
                />
              </View>

              <Text style={styles.menuText}>
                Settings
              </Text>
            </View>

            <ChevronRightIcon
              size={20}
              color="#999999"
            />
          </Pressable>

          {/* Notifications */}

          <Pressable
            style={styles.menuItem}
            onPress={() => {}}
          >
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <BellIcon
                  size={21}
                  color="#5B32D6"
                />
              </View>

              <Text style={styles.menuText}>
                Notifications
              </Text>
            </View>

            <ChevronRightIcon
              size={20}
              color="#999999"
            />
          </Pressable>

          {/* Appearance */}

          <Pressable
            style={styles.menuItem}
            onPress={() => {}}
          >
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <MoonIcon
                  size={21}
                  color="#5B32D6"
                />
              </View>

              <Text style={styles.menuText}>
                Appearance
              </Text>
            </View>

            <ChevronRightIcon
              size={20}
              color="#999999"
            />
          </Pressable>

          {/* About */}

          <Pressable
            style={[
              styles.menuItem,
              styles.lastMenuItem,
            ]}
            onPress={() => {}}
          >
            <View style={styles.menuLeft}>
              <View style={styles.menuIcon}>
                <InformationCircleIcon
                  size={21}
                  color="#5B32D6"
                />
              </View>

              <Text style={styles.menuText}>
                About
              </Text>
            </View>

            <ChevronRightIcon
              size={20}
              color="#999999"
            />
          </Pressable>
        </View>

        {/* =========================
            VERSION
        ========================== */}

        <Text style={styles.version}>
          Habit Tracker v1.0.0
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;