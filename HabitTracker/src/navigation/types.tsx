import Routes from './Routes';

export type AppParamsList = {
  [Routes.ADD]: {
    id: number;
  };

  [Routes.HABITS]: undefined;
  [Routes.HOME]: undefined;
  [Routes.PROFILE]: undefined;

  [Routes.DETAILS]: {
    id?: number;
  };
};

// Bottom Tab
export type BottomTabParamList = {
  [Routes.HOME]: undefined;
  [Routes.HABITS]: undefined;
  [Routes.PROFILE]: undefined;
};

// Main Stack
export type MainStackParamList = {
  [Routes.BOTTOM_NAVIGATION]: {
    screen?: keyof BottomTabParamList;
  };

  [Routes.ADD]: {
    id?: number;
  };

  [Routes.DETAILS]: {
    id: number;
  };
};
