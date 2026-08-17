import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 20,
    marginTop: 20,
    padding: 20,
    borderRadius: 18,

    backgroundColor: '#F8F5FF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftContent: {
    flex: 1,
    marginRight: 15,
  },

  heading: {
    fontSize: 15,
    fontWeight: '600',
    color: '#5B32D6',
  },

  count: {
    marginTop: 12,
    fontSize: 28,
    fontWeight: '800',
    color: '#171717',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#555555',
  },

  progressBackground: {
    height: 6,
    marginTop: 25,

    width: '100%',
    borderRadius: 10,

    backgroundColor: '#E6DFFF',
    overflow: 'hidden',
  },

  progress: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#5B32D6',
  },

  circleContainer: {
    width: 75,
    height: 75,

    alignItems: 'center',
    justifyContent: 'center',
  },

  percentageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },

  percentage: {
    fontSize: 18,
    fontWeight: '800',
    color: '#171717',
  },
});
export default styles;
