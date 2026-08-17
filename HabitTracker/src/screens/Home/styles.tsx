import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  habitContainer: {
    marginStart: 14,
  },
  listContent: {
    paddingBottom: 20,
  },

  habitRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginHorizontal: 18,
    paddingVertical: 10,
  },

  habitLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconContainer: {
    width: 40,
    height: 40,

    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 22,
  },

  habitName: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  habitDescription: {
    fontSize: 14,
    fontWeight: '500',
    color: 'grey',
    marginTop: 5,
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  fab: {
    position: 'absolute',

    right: 20,
    bottom: 0,

    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#5B32D6',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerStyle: {
    marginHorizontal: 24,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
  },
  headerSubTitle: {
    fontSize: 16,
    color: 'grey',
    marginTop: 10,
  },
  emptyList: {
    flexGrow: 1,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  emptyText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222',
    textAlign: 'center',
  },

  emptySubText: {
    marginTop: 8,
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
});

export default styles;
