import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: 60,
    borderRadius: 55,
    backgroundColor: '#8B5CF6',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
    gap: 15,
  },

  secondary: {
    backgroundColor: '#25252D',
    borderWidth: 1,
    borderColor: '#44444F',
  },

  danger: {
    backgroundColor: '#EF4444',
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default styles;
