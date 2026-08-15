import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 16,
  },

  dropdownButton: {
    height: 50,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  selectedText: {
    fontSize: 16,
    color: '#222222',
  },

  categoryIcon: {
    fontSize: 20,
    marginRight: 10,
  },

  arrow: {
    fontSize: 12,
    color: '#666666',
  },

  dropdownList: {
    marginTop: 5,

    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    overflow: 'hidden',

    elevation: 4,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  option: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  optionText: {
    fontSize: 15,
    color: '#333333',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222222',

    marginBottom: 6,
    marginHorizontal: 18,
  },
});

export default styles;
