import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0F',
  },

  timerContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  timeColumn: {
    alignItems: 'center',
  },

  timeText: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  labelText: {
    fontSize: 18,
    color: '#999999',
  },

  milliseconds: {
    flexDirection: 'row',
  },

  millisecondText: {
    fontSize: 50,
    color: '#8B5CF6',
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  lapsList: {
    flex: 1,
    marginTop: 20,
  },

  lapRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingVertical: 15,
    paddingHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  lapText: {
    color: '#FFFFFF',
    fontSize: 18,
  },

  lapsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
});

export default styles;
