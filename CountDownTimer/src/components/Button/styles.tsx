import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 150,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    borderWidth: 1,
  },

  start: {
    backgroundColor: '#ECFDF3',
    borderColor: '#BBE7C8',
  },

  pause: {
    backgroundColor: '#FFF8E8',
    borderColor: '#F5E4BD',
  },

  reset: {
    backgroundColor: '#FFF0F1',
    borderColor: '#F5C8CC',
  },

  icon: {
    marginBottom: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
});

export default styles;
