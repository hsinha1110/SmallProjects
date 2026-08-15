import React, { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';
import { CustomDatePickerProps } from '../../types';

const CustomDatePicker = ({
  label = 'Date',
  value,
  onChange,
}: CustomDatePickerProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const handleValueChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  const handleDone = () => {
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Pressable style={styles.input} onPress={() => setShowPicker(true)}>
        <Text style={styles.dateText}>
          {value.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </Text>

        <Text style={styles.calendarIcon}>📅</Text>
      </Pressable>

      <Modal
        visible={showPicker}
        transparent
        animationType="fade"
        onRequestClose={handleDone}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Date</Text>

            <DateTimePicker
              value={value}
              mode="date"
              display="spinner"
              onValueChange={handleValueChange}
              onDismiss={() => setShowPicker(false)}
            />

            <Pressable style={styles.doneButton} onPress={handleDone}>
              <Text style={styles.doneText}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomDatePicker;
