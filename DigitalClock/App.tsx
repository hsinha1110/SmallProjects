import { Text, View, Switch, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const amPm = hours >= 12 ? 'PM' : 'AM';

  const hour12 = hours % 12 || 12;
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Digital Clock</Text>

      <Text style={styles.clock}>
        {is24Hour
          ? `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
              2,
              '0',
            )}:${String(seconds).padStart(2, '0')}`
          : `${String(hour12).padStart(2, '0')}:${String(minutes).padStart(
              2,
              '0',
            )}:${String(seconds).padStart(2, '0')} ${amPm}`}
      </Text>

      <Text style={styles.controlTitle}>Time Format</Text>

      <View style={styles.formatContainer}>
        <Text style={styles.formatText}>24-Hour</Text>

        <Switch value={is24Hour} onValueChange={setIs24Hour} />
      </View>

      <Text style={styles.controlTitle}>Clock Control</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startButton} onPress={handleStart}>
          <Text style={styles.startText}>▶ Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
          <Text style={styles.stopText}>■ Stop</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 40,
    marginBottom: 60,
  },

  clock: {
    fontSize: 48,
    fontWeight: '600',
    color: '#111111',
    marginBottom: 70,
  },

  controlTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: '500',
    color: '#111111',
    marginBottom: 15,
  },

  formatContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 20,
    marginBottom: 30,
  },

  formatText: {
    fontSize: 17,
    color: '#222222',
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 15,
  },

  startButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#2563EB',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stopButton: {
    flex: 1,
    height: 60,
    backgroundColor: '#F1F1F1',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  startText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },

  stopText: {
    color: '#111111',
    fontSize: 18,
    fontWeight: '500',
  },
});
export default App;
