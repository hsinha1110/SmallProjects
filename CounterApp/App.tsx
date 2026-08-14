import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.row}>
        <TouchableOpacity style={styles.increment} onPress={handleIncrement}>
          <Text style={styles.count}>+</Text>
        </TouchableOpacity>
        <Text style={styles.count}>{count}</Text>

        <TouchableOpacity
          style={{
            backgroundColor: 'lightblue',
            padding: 10,
            marginHorizontal: 10,
            borderRadius: 10,
          }}
          onPress={handleDecrement}
        >
          <Text style={styles.count}>-</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={handleReset} style={styles.reset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
  count: { fontSize: 40 },
  increment: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  decrement: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  reset: {
    backgroundColor: 'lightblue',
    padding: 20,
    width: '35%',
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  resetText: {
    fontSize: 25,
  },
});
export default App;
