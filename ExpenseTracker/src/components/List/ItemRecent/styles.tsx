import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    minHeight: 65,

    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 16,
    paddingVertical: 10,

    marginVertical: 6,

    borderRadius: 12,

    // iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Android
    elevation: 3,
  },

  icon: {
    fontSize: 24,
    marginRight: 14,
  },

  details: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
    marginBottom: 3,
  },

  subtitle: {
    fontSize: 13,
    color: '#888888',
  },

  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },
});

export default styles;
