import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  descriptionInput: {
    height: 160,
    paddingTop: 14,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    left: 18,
    right: 18,
  },
  button: {
    width: '100%',
    height: 55,
  },
  error: {
    color: '#E53935',
    fontSize: 13,
    marginTop: 4,
    marginHorizontal: 20,
  },
  pinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 14,
  },

  pinContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  pinIcon: {
    fontSize: 18,
  },

  pinText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default styles;
