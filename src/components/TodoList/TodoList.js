import React from 'react';
import {ScrollView, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {TodoSelector} from '../../redux/todosSlice';
import TodoCard from '../TodoCard/TodoCard';

function TodoList({item}) {
  const todosItems = useSelector(TodoSelector.selectAll);

  console.log(todosItems)
  return (
    <ScrollView>
      {todosItems.map(item => (
        <TodoCard key={todosItems.id} todo={item} />
      ))}
      <Text>{item}</Text>
    </ScrollView>
  );
}

export default TodoList;
