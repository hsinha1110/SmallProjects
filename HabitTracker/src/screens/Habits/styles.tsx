import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  filterContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 16,
    marginBottom: 10,
    gap: 10,
  },

  filterButton: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E2E8',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },

  filterButtonActive: {
    backgroundColor: '#5B32D6',
    borderColor: '#5B32D6',
  },

  filterText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#666666',
  },

  filterTextActive: {
    color: '#FFFFFF',
  },

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 120,
  },

  habitRow: {
    minHeight: 76,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  habitLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },

  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  icon: {
    fontSize: 27,
  },

  habitInfo: {
    flex: 1,
  },

  habitName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#171717',
  },

  habitDescription: {
    marginTop: 4,
    fontSize: 13,
    color: '#777777',
  },

  checkbox: {
    width: 25,
    height: 25,
    borderRadius: 13,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  check: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  emptyList: {
    flexGrow: 1,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  emptyIcon: {
    fontSize: 38,
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222222',
    textAlign: 'center',
  },

  emptySubText: {
    marginTop: 7,
    fontSize: 14,
    lineHeight: 20,
    color: '#888888',
    textAlign: 'center',
  },

  fab: {
    position: 'absolute',
    right: 22,
    bottom: 25,
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#5B32D6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});

export default styles;
