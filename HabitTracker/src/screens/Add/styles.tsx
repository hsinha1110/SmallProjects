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

  // -------------------------
  // ICON SECTION
  // -------------------------

  iconList: {
    paddingHorizontal: 15,
    paddingBottom: 8,
  },

  iconRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  iconContainer: {
    width: 80,
    height: 80,

    borderRadius: 16,

    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    fontSize: 38,
  },

  // -------------------------
  // COLOR SECTION
  // -------------------------
  listContainer: { marginTop: 4 },
  colorList: {
    paddingHorizontal: 12,
    paddingTop: 0,
    paddingBottom: 10,
  },

  colorOuter: {
    width: 60,
    height: 60,

    borderRadius: 30,
    marginVertical: 10,
    marginRight: 60,

    alignItems: 'center',
    justifyContent: 'center',
  },

  colorOuterSelected: {
    borderWidth: 2,
  },

  colorCircle: {
    width: 50,
    height: 50,

    borderRadius: 25,
  },

  // -------------------------
  // BUTTON
  // -------------------------

  buttonContainer: {
    marginTop: 'auto',
    paddingHorizontal: 18,
    paddingBottom: 20,
  },

  button: {
    width: '100%',
    height: 55,
  },
});

export default styles;
