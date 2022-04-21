import React from 'react';
import {View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import {TodoSelector} from '../../redux/todosSlice';
import styles from './Content.style';

function Content() {
  const todos = useSelector(TodoSelector.selectAll);
  const todosLeft = todos.filter(item => !item.completed);


  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title_left_number}> {todosLeft.length} </Text>
        <Text style={styles.title_left}>
          item{todosLeft.length > 1 && 's'} left
        </Text>
      </View>
      <View style={styles.inner_container}></View>
    </View>
  );
}

export default Content;
