import React, {useState} from 'react';
import {TextInput, View, Keyboard} from 'react-native';
import {nanoid} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';

import {addTodo, deleteAllTodo} from '../../redux/todosSlice';
import ButtonCard from '../Button/Button';
import {TodoSelector} from '../../redux/todosSlice';
import styles from './input.style'


function Input() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const total = useSelector(TodoSelector.selectTotal);

  const handleAddTodo = () => {
    if (!text) {
      return false;
    }

    const todoItems = {id: nanoid(), text, completed: false};
    dispatch(addTodo(todoItems));
    setText('');
    Keyboard.dismiss();
  };

  const handleRemoveAll = () => {
    dispatch(deleteAllTodo());
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter the task"
        placeholderTextColor="#bdbdbd"
        value={text}
        onChangeText={item => setText(item)}
        multiline
      />
      <View style={styles.button_container}>
        {total > 0 && (
          <ButtonCard title="Delete All" onPress={handleRemoveAll} />
        )}
        <ButtonCard title="Add" onPress={handleAddTodo} />
      </View>
    </View>
  );
}

export default Input;