import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
  },

  totalTitle: {
    marginHorizontal: 16,
    marginTop: 14,

    fontSize: 26,
    fontWeight: '700',
    color: '#111111',
  },

  totalAmount: {
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 14,

    fontSize: 24,
    fontWeight: '500',
    color: '#777777',
  },

  list: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },

  card: {
    minHeight: 78,

    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,

    backgroundColor: '#FFFFFF',
    borderRadius: 14,

    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  icon: {
    fontSize: 30,
    marginRight: 14,
  },

  details: {
    flex: 1,
  },

  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222222',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#888888',
  },

  amount: {
    marginLeft: 10,
    fontSize: 17,
    fontWeight: '700',
    color: '#222222',
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#333333',
  },

  emptyText: {
    marginTop: 6,
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },
});

export default styles;
