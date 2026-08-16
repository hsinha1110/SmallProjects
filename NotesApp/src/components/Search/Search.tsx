import React from 'react';
import { TextInput, View } from 'react-native';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { SearchProps } from '../../types';
import styles from './styles';

const Search = ({
  value,
  onChangeText,
  placeholder = 'Search notes...',
}: SearchProps) => {
  return (
    <View style={styles.container}>
      <MagnifyingGlassIcon size={22} color="#777777" />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999999"
      />
    </View>
  );
};

export default Search;
