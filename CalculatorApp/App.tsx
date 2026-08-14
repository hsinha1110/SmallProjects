import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  const [value, setValue] = useState('');
  const [firstValue, setFirstValue] = useState('');
  const [operator, setOperator] = useState('');

  const buttons = [
    ['AC', '⌫', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['00', '0', '.', '='],
  ];

  const handleButtonPress = (button: string) => {
    switch (button) {
      // -----------------------
      // CLEAR
      // -----------------------
      case 'AC':
        setValue('');
        setFirstValue('');
        setOperator('');
        break;

      // -----------------------
      // BACKSPACE
      // -----------------------
      case '⌫':
        setValue(prev => prev.slice(0, -1));
        break;

      // -----------------------
      // PERCENTAGE
      // -----------------------
      case '%':
        if (value !== '') {
          setValue(String(Number(value) / 100));
        }
        break;

      // -----------------------
      // OPERATORS
      // -----------------------
      case '+':
      case '−':
      case '×':
      case '÷':
        if (value === '') {
          return;
        }

        setFirstValue(value);
        setOperator(button);
        setValue('');
        break;

      // -----------------------
      // EQUAL
      // -----------------------
      case '=': {
        if (firstValue === '' || value === '' || operator === '') {
          return;
        }

        const first = Number(firstValue);
        const second = Number(value);

        let result = 0;

        switch (operator) {
          case '+':
            result = first + second;
            break;

          case '−':
            result = first - second;
            break;

          case '×':
            result = first * second;
            break;

          case '÷':
            if (second === 0) {
              setValue('Error');
              return;
            }

            result = first / second;
            break;

          default:
            return;
        }

        setValue(String(result));
        setFirstValue('');
        setOperator('');

        break;
      }

      // -----------------------
      // DEFAULT
      // NUMBER / DECIMAL / 00
      // -----------------------
      default:
        if (button === '.') {
          if (!value.includes('.')) {
            setValue(prev => prev + button);
          }
        } else {
          setValue(prev => prev + button);
        }

        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Calculator</Text>

      {/* Display */}
      <View style={styles.displayContainer}>
        <Text style={styles.expression}>
          {firstValue && operator ? `${firstValue} ${operator}` : ''}
        </Text>

        <Text style={styles.result}>{value || '0'}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map(button => {
              const isOperator = ['÷', '×', '−', '+', '='].includes(button);

              const isTopButton = ['AC', '⌫', '%'].includes(button);

              return (
                <TouchableOpacity
                  key={button}
                  style={[
                    styles.button,
                    isOperator && styles.operatorButton,
                    isTopButton && styles.topButton,
                  ]}
                  activeOpacity={0.7}
                  onPress={() => handleButtonPress(button)}
                >
                  <Text
                    style={[
                      styles.buttonText,
                      isOperator && styles.operatorText,
                      isTopButton && styles.topButtonText,
                    ]}
                  >
                    {button}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    color: '#222',
  },

  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    paddingBottom: 25,
  },

  expression: {
    fontSize: 24,
    color: '#888',
    marginBottom: 8,
  },

  result: {
    fontSize: 48,
    fontWeight: '700',
    color: '#222',
  },

  buttonsContainer: {
    paddingHorizontal: 12,
    paddingBottom: 15,
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  button: {
    flex: 1,
    height: 70,
    marginHorizontal: 5,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: '600',
    color: '#222',
  },

  topButton: {
    backgroundColor: '#E5E5E5',
  },

  topButtonText: {
    color: '#444',
  },

  operatorButton: {
    backgroundColor: '#4636B3',
  },

  operatorText: {
    color: '#FFFFFF',
    fontSize: 28,
  },
});

export default App;
