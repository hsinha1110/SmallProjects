import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const styles = StyleSheet.create({
  container: {
    width: '40%',
    height: moderateScale(60),
    borderRadius: moderateScale(55),
    backgroundColor: '#8B5CF6',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    alignSelf: 'center',
    gap: moderateScale(15),
  },

  secondary: {
    backgroundColor: '#25252D',
    borderWidth: 1,
    borderColor: '#44444F',
  },

  danger: {
    backgroundColor: '#EF4444',
  },

  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: moderateScale(20),
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default styles;
