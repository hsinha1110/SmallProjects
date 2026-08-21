import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  Cog6ToothIcon,
  FlagIcon,
  PlayIcon,
  StopIcon,
} from 'react-native-heroicons/solid';

import styles from './styles';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

const StopWatch = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [laps, setLaps] = useState<number[]>([]);

  // Time Calculation
  const milliseconds = Math.floor((timer % 1000) / 10);
  const seconds = Math.floor(timer / 1000) % 60;
  const minutes = Math.floor(timer / 60000) % 60;
  const hours = Math.floor(timer / 3600000);

  // Timer
  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTimer(prev => prev + 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  // Start / Resume
  const handleStart = () => {
    setIsRunning(true);
  };

  // Stop
  const handleStop = () => {
    setIsRunning(false);
  };

  // Lap
  const handleLaps = () => {
    setLaps(prev => [timer, ...prev]);
  };
  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
    setLaps([]);
  };
  // Format Lap Time
  const formatTime = (time: number) => {
    const milliseconds = Math.floor((time % 1000) / 10);
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000);

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0',
    )}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(
      2,
      '0',
    )}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header
        onPress={() => {
          console.log('Settings pressed');
        }}
        title="Stopwatch"
        iconRight={<Cog6ToothIcon size={26} color="#fff" />}
      />

      {/* Timer */}
      <View style={styles.timerContainer}>
        {/* Hours */}
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>{String(hours).padStart(2, '0')}</Text>

          <Text style={styles.labelText}>hr</Text>
        </View>

        <Text style={styles.timeText}>:</Text>

        {/* Minutes */}
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>
            {String(minutes).padStart(2, '0')}
          </Text>

          <Text style={styles.labelText}>min</Text>
        </View>

        <Text style={styles.timeText}>:</Text>

        {/* Seconds */}
        <View style={styles.timeColumn}>
          <Text style={styles.timeText}>
            {String(seconds).padStart(2, '0')}
          </Text>

          <Text style={styles.labelText}>sec</Text>
        </View>

        {/* Milliseconds */}
        <View style={styles.milliseconds}>
          <Text style={styles.timeText}>.</Text>

          <Text style={styles.millisecondText}>
            {String(milliseconds).padStart(2, '0')}
          </Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Start */}
        {!isRunning && timer === 0 && (
          <Button
            title="Start"
            icon={<PlayIcon size={30} color="#fff" />}
            onPress={handleStart}
          />
        )}

        {/* Lap + Stop */}
        {isRunning && (
          <View style={styles.buttons}>
            <Button
              title="Lap"
              variant="secondary"
              icon={<FlagIcon size={25} color="#fff" />}
              onPress={handleLaps}
            />

            <Button
              title="Stop"
              variant="danger"
              icon={<StopIcon size={25} color="#fff" />}
              onPress={handleStop}
            />
          </View>
        )}

        {/* Resume */}
        <View
          style={styles.buttonSecond}
        >
          {!isRunning && timer > 0 && (
            <Button
              title="Resume"
              icon={<PlayIcon size={30} color="#fff" />}
              onPress={handleStart}
            />
          )}

          {!isRunning && timer > 0 && (
            <Button
              variant="secondary"
              title="Reset"
              icon={<PlayIcon size={30} color="#fff" />}
              onPress={handleReset}
            />
          )}
        </View>
      </View>

      {/* Laps */}
      {laps.length > 0 && (
        <FlatList
          data={laps}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.lapsContainer}
          renderItem={({ item, index }) => (
            <View style={styles.lapRow}>
              <Text style={styles.lapText}>Lap {laps.length - index}</Text>

              <Text style={styles.lapText}>{formatTime(item)}</Text>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default StopWatch;
