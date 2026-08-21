import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0F',
  },

  timerContainer: {
    marginTop: moderateScale(100),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  timeColumn: {
    alignItems: 'center',
  },

  timeText: {
    fontSize: moderateScale(50),
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
    fontSize: moderateScale(50),
    color: '#8B5CF6',
    fontWeight: 'bold',
  },

  buttonContainer: {
    marginTop: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
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

    paddingVertical: moderateScale(15),
    paddingHorizontal: moderateScale(20),

    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },

  lapText: {
    color: '#FFFFFF',
    fontSize: moderateScale(18),
  },

  lapsContainer: {
    paddingHorizontal: moderateScale(20),
    paddingBottom: moderateScale(20),
  },
  buttonSecond: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: moderateScale(20),
  },
});

export default styles;
