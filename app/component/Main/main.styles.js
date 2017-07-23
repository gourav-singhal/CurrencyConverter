import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$backgroundColor',
  },
  firstContainer: {
    flex: 0.5,
    backgroundColor: '$textRed',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },
  secondContainer: {
    flex: 0.5,
    backgroundColor: '$textWhite',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
  },
  firstText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '$textWhite',
  },
  secondText: {
    fontSize: 40,
    fontWeight: '400',
    color: '$textWhite',
  },
  thirdText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '$textLight',
  },
  fourthText: {
    fontSize: 14,
    fontWeight: 'normal',
    color: '$textLight',
  },
  fifthText: {
    fontSize: 40,
    fontWeight: '400',
    color: '$textRed',
  },
  sixthText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '$textRed',
  },
  iconContainer: {
    position: 'absolute',
    top: height/2 - 50,
    left: width/2 - 50,
    zIndex: 99999,
    backgroundColor: '$textLight',
  },
  inputContainer: {
    flexDirection: 'row',
  },
  text: {
    height: 40,
    width: 100,
    borderBottomColor: '$textLight',
    borderBottomWidth: 1,
    color: '$textLight',
  },
  iconEnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
});

export default styles;
