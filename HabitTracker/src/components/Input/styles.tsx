import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 6,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: 16,
    color: 'black',
    fontWeight: '500',
    backgroundColor: '#FFFFFF',
  },

  errorInput: {
    borderColor: '#FF0000',
  },

  error: {
    marginTop: 4,
    fontSize: 12,
    color: '#FF0000',
  },
});

export default styles;
