import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    marginHorizontal: 20,
  },

  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
  },

  subTitle: {
    fontWeight: '400',
    color: 'grey',
    fontSize: 16,
  },

  fab: {
    position: 'absolute',

    right: 20,
    bottom: 40,

    width: 60,
    height: 60,

    borderRadius: 16,
    backgroundColor: '#000',

    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 55,
    marginBottom: 12,
  },

  emptyTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#222222',
  },

  emptyText: {
    marginTop: 6,
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },

  addExpenseButton: {
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: '#222222',
  },

  addExpenseText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default styles;
