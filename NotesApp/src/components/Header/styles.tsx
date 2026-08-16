import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#FFFFFF',
  },

  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  iconButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 1,
  },

  centerTitle: {
    alignItems: 'center',
  },

  leftTitle: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222222',
  },

  subtitle: {
    marginTop: 2,
    fontSize: 14,
    color: '#777777',
  },
});

export default styles;
