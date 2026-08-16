import React from 'react';
import {
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const CustomSafeAreaView = ({
  children,
  style,
  edges = ['top'],
  ...props
}: SafeAreaViewProps) => {
  return (
    <SafeAreaView {...props} edges={edges} style={style}>
      {children}
    </SafeAreaView>
  );
};

export default CustomSafeAreaView;
