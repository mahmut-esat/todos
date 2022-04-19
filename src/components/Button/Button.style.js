import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 5,
    margin: 5,
    backgroundColor: '#7e57c2',
    width: Dimensions.get('window').width / 3.2,
    borderRadius: 7,
    alignItems:"center",
    justifyContent:"center"
  },
  text: {
    textAlign: 'center',
    color: '#eceff1',
    fontSize: 20,
    fontWeight: '700',
  },
});
