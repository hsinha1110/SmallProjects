import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
  },

  searchContainer: {
    marginTop: 4,
  },

  sectionTitle: {
    marginHorizontal: 16,
    marginTop: 20,
    fontSize: 20,
    fontWeight: '700',
    color: '#222222',
  },

  fab: {
    position: 'absolute',

    right: 20,
    bottom: 24,

    width: 58,
    height: 58,

    borderRadius: 29,

    backgroundColor: '#000000',

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
  card: {
    marginHorizontal: 18,
    marginTop: 20,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222222',
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '300',
    marginTop: 5,
  },
  date: {
    color: 'grey',
    fontWeight: '400',
    marginTop: 5,
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 100,
    gap: 12,
  },
  emptyList: {
    flexGrow: 0.88,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#999999',
  },
});

export default styles;
