import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  container: {
    color: 'white',
    textAlign: 'right',
    fontSize: 80,
    paddingLeft: 25,
    paddingTop: 80,
  },
  calculatorButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 80,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 10,
  },
});
