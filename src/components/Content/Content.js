import React, {useState} from 'react';
import {View, Text} from 'react-native';
import ContentCard from './ContentCard';
import {useDispatch, useSelector} from 'react-redux';

import {deleteAllCompleted, TodoSelector} from '../../redux/todosSlice';
import styles from './Content.style'

function Content() {
  const dispatch = useDispatch();
  const todos = useSelector(TodoSelector.selectAll);
  const todosLeft = todos.filter(item => !item.completed);

  // const handleDeleteCompleted = id => {
  //   dispatch(deleteAllCompleted(id));
  // };

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Text style={styles.title_left_number}> {todosLeft.length} </Text>
        <Text style={styles.title_left}>item{todosLeft.length > 1 && 's'} left</Text>
      </View>
      <View style={styles.inner_container}>
        {/* <ContentCard
          text={'All'}
          onPress={() => useSelector(TodoSelector.selectAll)}
        />
        <ContentCard text="Active" onPress={null} />
        <ContentCard text="Completed" onPress={null} />
        <ContentCard
          text="Clear Completed"
          onPress={() => dispatch(deleteAllCompleted([
            todos.id,
            todos.completed=true
          ]))}
        /> */}
      </View>
    </View>
  );
}

export default Content;

