import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingBottom: 30,
  },

  // Habit Icon
  habitIconContainer: {
    width: 110,
    height: 110,
    borderRadius: 55,

    marginTop: 35,

    alignItems: 'center',
    justifyContent: 'center',
  },

  habitIcon: {
    fontSize: 58,
  },

  // Habit Name
  habitName: {
    marginTop: 18,

    fontSize: 27,
    fontWeight: '800',

    color: '#111827',

    textAlign: 'center',
  },

  description: {
    marginTop: 8,

    fontSize: 15,
    color: '#596174',

    textAlign: 'center',
  },

  // Status
  statusCard: {
    width: '100%',

    marginTop: 48,
    padding: 20,

    borderRadius: 16,

    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.07,
    shadowRadius: 8,

    elevation: 3,
  },

  statusTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  statusRow: {
    marginTop: 25,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  checkCircle: {
    width: 32,
    height: 32,

    borderRadius: 16,

    alignItems: 'center',
    justifyContent: 'center',
  },

  statusText: {
    marginLeft: 10,

    fontSize: 17,
    fontWeight: '700',
  },

  message: {
    marginTop: 25,

    fontSize: 15,
    color: '#596174',

    textAlign: 'center',
  },

  // Buttons
  actions: {
    width: '100%',

    marginTop: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  editButton: {
    flex: 1,

    height: 54,

    marginRight: 8,

    borderWidth: 1.5,
    borderColor: '#5B32D6',
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  editText: {
    marginLeft: 8,

    fontSize: 15,
    fontWeight: '700',

    color: '#5B32D6',
  },

  deleteButton: {
    flex: 1,

    height: 54,

    marginLeft: 8,

    borderWidth: 1.5,
    borderColor: '#EF4444',
    borderRadius: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  deleteText: {
    marginLeft: 8,

    fontSize: 15,
    fontWeight: '700',

    color: '#EF4444',
  },

  notFound: {
    flex: 1,

    textAlign: 'center',
    textAlignVertical: 'center',

    fontSize: 18,
    fontWeight: '600',
  },
  notFoundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});

export default styles;
