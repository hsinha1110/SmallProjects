import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  counterContainer: {
    marginTop: 70,
    marginHorizontal: 20,
    paddingVertical: 70,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',

    backgroundColor: '#F8FAFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#E8EEFC',
  },

  timeColumn: {
    alignItems: 'center',
  },

  counterTitle: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#111827',
  },

  colon: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#111827',
    marginHorizontal: 8,
  },

  labelText: {
    fontSize: 18,
    color: '#6B7280',
    marginTop: 5,
  },

  presetsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    marginTop: 30,
    paddingHorizontal: 10,
  },

  presetButton: {
    paddingVertical: 15,
    paddingHorizontal: 12,

    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDE2EE',
  },

  presetText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  infoContainer: {
    marginHorizontal: 20,
    marginTop: 40,
    padding: 20,

    borderRadius: 20,

    backgroundColor: '#EEF4FF',
    borderWidth: 1,
    borderColor: '#D8E5FF',
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E3A8A',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 22,
  },
});

export default styles;
