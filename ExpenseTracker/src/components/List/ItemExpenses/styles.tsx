import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 120,

    backgroundColor: '#FFFFFF',

    marginLeft: 16,
    marginVertical: 8,

    paddingHorizontal: 16,
    paddingVertical: 18,

    borderRadius: 18,

    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 4,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    fontSize: 36,
    marginRight: 12,
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    fontSize: 13,
    color: '#888888',
  },

  amount: {
    fontSize: 22,
    fontWeight: '600',
    color: '#666666',
  },
});

export default styles;
