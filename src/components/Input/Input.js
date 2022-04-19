import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Keyboard} from 'react-native';
import {nanoid} from '@reduxjs/toolkit';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteAllTodo} from '../../redux/todosSlice';
import ButtonCard from '../Button/Button';
import {TodoSelector} from '../../redux/todosSlice';

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

const styles = StyleSheet.create({
  container: {},

  input: {
    position: 'relative',
    margin: 10,
    fontSize: 20,
    color: '#4d2c91',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#d1c4e9',
    borderTopStartRadius: 20,
    borderTopEndRadius: 10,
  },
  button_container: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
