import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  side: {
    width: 45,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  rightSide: {
    alignItems: 'flex-end',
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
  },

  iconButton: {
    width: 40,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
