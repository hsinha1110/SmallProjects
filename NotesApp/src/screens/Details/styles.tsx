import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#222222',
  },

  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginTop: 24,
    marginBottom: 24,
  },

  description: {
    fontSize: 17,
    lineHeight: 28,
    color: '#444444',
  },

  // Bottom buttons wrapper
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },

  actionButton: {
    height: 50,
    minWidth: 100,
    gap: 10,
    paddingHorizontal: 14,

    backgroundColor: '#000000',
    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyText: {
    fontSize: 16,
    color: '#999999',
  },
});

export default styles;
