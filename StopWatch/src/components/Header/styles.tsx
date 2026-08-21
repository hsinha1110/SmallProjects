import { StyleSheet } from 'react-native';
import { moderateScale } from '../../styles/scaling';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  side: {
    width: moderateScale(40),
    alignItems: 'center',
  },

  title: {
    color: '#FFFFFF',
    fontSize: moderateScale(20),
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
});
export default styles;
