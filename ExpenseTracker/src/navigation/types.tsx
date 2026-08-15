import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Routes from './Routes';

// App Stack
export type AppStackParamList = {
  [Routes.HOME]: undefined;

  [Routes.ADD]: {
    expenseId?: string;
  };

  [Routes.ALL]: undefined;

  [Routes.DETAILS]: {
    expenseId: string;
  };
};

export type AppScreenProps<T extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, T>;
