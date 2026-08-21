import { Pressable, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  ArrowLeftIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon,
  PauseIcon,
  PlayIcon,
} from 'react-native-heroicons/solid';

import styles from './styles';
import Button from '../../components/Button/Button';

const Home = () => {
  const totalMinutes = [1, 5, 10, 15, 30];

  const [time, setTime] = useState(1 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedTime, setSelectedTime] = useState(totalMinutes[0]);
  // Time calculation
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  // Countdown
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTime(prev => {
        if (prev === 0) {
          setIsRunning(false);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  // Start
  const handleStart = () => {
    setIsRunning(true);
  };

  // Pause
  const handlePause = () => {
    setIsRunning(false);
  };

  // Reset
  const handleReset = () => {
    setIsRunning(false);
    setTime(1 * 60);
  };

  // Select minutes
  const handleSelectTime = (item: number) => {
    setIsRunning(false);
    setSelectedTime(item);
    setTime(item * 60);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header
        title="Countdown Timer"
        iconRight={<EllipsisVerticalIcon size={26} color="#000" />}
        iconLeft={<ArrowLeftIcon size={26} color="#000" />}
      />

      {/* Timer */}
      <View style={styles.counterContainer}>
        <View style={styles.timeColumn}>
          <Text style={styles.counterTitle}>
            {String(minutes).padStart(2, '0')}
          </Text>

          <Text style={styles.labelText}>Minutes</Text>
        </View>

        <Text style={styles.colon}>:</Text>

        <View style={styles.timeColumn}>
          <Text style={styles.counterTitle}>
            {String(seconds).padStart(2, '0')}
          </Text>

          <Text style={styles.labelText}>Seconds</Text>
        </View>
      </View>

      {/* Presets */}
      <View style={styles.presetsContainer}>
        {totalMinutes.map(item => (
          <Pressable
            key={item}
            onPress={() => handleSelectTime(item)}
            style={[
              styles.presetButton,
              {
                backgroundColor: selectedTime === item ? '#4F5CF0' : '#FFFFFF',
              },
            ]}
          >
            <Text
              style={[
                styles.presetText,
                {
                  color: selectedTime === item ? '#FFFFFF' : '#111827',
                },
              ]}
            >
              {item} Min
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Start Pause Reset */}
      <View style={styles.buttons}>
        <Button
          title="Start"
          variant="start"
          icon={<PlayIcon size={40} color="#16A34A" />}
          onPress={handleStart}
        />

        <Button
          title="Pause"
          variant="pause"
          icon={<PauseIcon size={40} color="#F97316" />}
          onPress={handlePause}
        />

        <Button
          title="Reset"
          variant="reset"
          icon={<ArrowPathIcon size={40} color="#EF4444" />}
          onPress={handleReset}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Countdown Timer</Text>

        <Text style={styles.infoText}>
          When the timer reaches 00:00, the countdown will stop.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
