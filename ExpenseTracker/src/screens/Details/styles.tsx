import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  summary: {
    alignItems: 'center',
    paddingVertical: 30,
  },

  icon: {
    fontSize: 55,
    marginBottom: 10,
  },

  mainTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#222222',
  },

  mainAmount: {
    marginTop: 6,
    fontSize: 22,
    fontWeight: '600',
    color: '#666666',
  },

  detailsCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 16,

    paddingHorizontal: 16,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },

  row: {
    minHeight: 58,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: 15,
    color: '#888888',
  },

  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222222',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  emptyIcon: {
    fontSize: 50,
    marginBottom: 12,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    textAlign: 'center',
  },

  emptySubText: {
    marginTop: 6,
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    left: 18,
    right: 18,
  },
  button: {
    width: '100%',
    height: 55,
    backgroundColor: '#E53935',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
