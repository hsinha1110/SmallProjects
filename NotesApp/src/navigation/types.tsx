import Routes from './Routes';

export type AppStackParamList = {
  [Routes.HOME]: undefined;
  [Routes.ADD_NOTES]: {
    noteId?: number;
  };
  [Routes.ALL_NOTES]: undefined;

  [Routes.DETAILS]: {
    noteId: number;
  };
};
