import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoSelector} from '../../redux/todosSlice';

function Header() {
  
  const total = useSelector(TodoSelector.selectTotal)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>to do list </Text>
      <Text style={styles.total}> ({total})</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    justifyContent:"space-evenly",
    flexDirection:"row",
    alignItems:"center"
  },
  title: {
    fontStyle: 'italic',
    fontWeight: '400',
    color: '#d1c4e9',
    fontSize: 75,
    textAlign: 'center',
    position: 'relative',
  },
  total: {
    fontWeight: 'bold',
    color: '#d1c4e9',
    fontSize: 55,
    textAlign: 'center',
    position: 'relative',
  },

});
