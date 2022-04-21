import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {TodoSelector} from '../../redux/todosSlice';

import styles from './Header.style'

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
