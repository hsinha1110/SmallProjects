import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import styles from './styles';
import { ProgressCardProps } from '../types';

const ProgressCard = ({ completed, total }: ProgressCardProps) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  // Circular progress
  const size = 100;
  const strokeWidth = 6;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.card}>
      {/* Left Content */}
      <View style={styles.leftContent}>
        <Text style={styles.heading}>Today's Progress</Text>

        <Text style={styles.count}>
          {completed} / {total}
        </Text>

        <Text style={styles.subtitle}>habits completed</Text>

        {/* Horizontal Progress */}
        <View style={styles.progressBackground}>
          <View
            style={[
              styles.progress,
              {
                width: `${percentage}%`,
              },
            ]}
          />
        </View>
      </View>

      {/* Circular Progress */}
      <View style={styles.circleContainer}>
        <Svg width={size} height={size}>
          {/* Background Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E9E2FF"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Progress Circle */}
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#5B32D6"
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            rotation="-90"
            origin={`${size / 2}, ${size / 2}`}
          />
        </Svg>

        <View style={styles.percentageContainer}>
          <Text style={styles.percentage}>{percentage}%</Text>
        </View>
      </View>
    </View>
  );
};

export default ProgressCard;
