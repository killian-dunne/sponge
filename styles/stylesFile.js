import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const s = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backYellow
  },
  iconContainer: {
    padding: 20,
    paddingBottom: 10,
    alignItems: 'center'
  },
  settingsContainer: {
  },
  listItem: {
    padding: 10,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  mainText: {
    flex: 1, 
    fontSize: 18,
    fontWeight: "900",
    alignSelf: 'center'
  },
  subText: {
    flex: 2,
    color: colors.greyText,
    fontSize: 14,
    fontWeight: "400",
    alignSelf: 'flex-end'
  },
  bottomBorder: {
    borderBottomWidth: 1, 
    borderBottomColor: colors.lightGrey
  }
});
