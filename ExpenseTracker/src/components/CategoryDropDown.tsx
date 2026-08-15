import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';

import styles from './styles';
import {CategoryDropDownProps} from '../types';

const categories = [
  {
    name: 'Food',
    icon: '🍔',
  },
  {
    name: 'Travel',
    icon: '✈️',
  },
  {
    name: 'Shopping',
    icon: '🛍️',
  },
  {
    name: 'Bills',
    icon: '💵',
  },
];

const CategoryDropDown = ({
  label,
  selectedCategory,
  selectedIcon,
  onSelectCategory,
}: CategoryDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.container}>
        <Pressable
          style={styles.dropdownButton}
          onPress={() => setIsOpen(prev => !prev)}>
          
          <View style={styles.selectedContainer}>
            <Text style={styles.categoryIcon}>
              {selectedIcon || '📋'}
            </Text>

            <Text style={styles.selectedText}>
              {selectedCategory || 'Select Category'}
            </Text>
          </View>

          <Text style={styles.arrow}>
            {isOpen ? '▲' : '▼'}
          </Text>
        </Pressable>

        {isOpen && (
          <View style={styles.dropdownList}>
            {categories.map(item => (
              <Pressable
                key={item.name}
                style={styles.option}
                onPress={() => {
                  onSelectCategory(
                    item.name,
                    item.icon,
                  );

                  setIsOpen(false);
                }}>
                
                <Text style={styles.categoryIcon}>
                  {item.icon}
                </Text>

                <Text style={styles.optionText}>
                  {item.name}
                </Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default CategoryDropDown;