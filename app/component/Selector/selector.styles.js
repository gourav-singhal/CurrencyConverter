import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  full: {
    color: '$textRed',
    fontSize: 20,
    fontWeight: 'normal',
  },
  abbr: {
    color: '$textLight',
    fontSize: 14,
    fontWeight: 'normal',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
    borderBottomColor: '$textLight',
    borderBottomWidth: 1,
  },
  iconContainer: {
    flex: 0.1,
  },
  textContainer: {
    flex: 0.9,
  }
});

export default styles;
