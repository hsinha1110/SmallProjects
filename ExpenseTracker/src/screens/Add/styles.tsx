import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 18,
    right: 18,
  },
  button: {
    width: '100%',
    height: 55,
  },
  error: {
    color: '#E53935',
    fontSize: 13,
    marginTop: 4,
    marginHorizontal: 20,
  },
});
export default styles;
