import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {deleteTodo, changeTodoCompleted} from '../../redux/todosSlice';

const TodoCard = ({todo}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditPage = () => {
    navigation.navigate('Edit', todo);
  };

  const handleComplete = () => {
    dispatch(
      changeTodoCompleted({
        id: todo.id,
        changes: {completed: !todo.completed},
      }),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.check_container}>
        <BouncyCheckbox
          size={30}
          fillColor="#7e57c2"
          unfillColor="#d1c4e9"
          text={todo.text}
          textStyle={{color: '#7e57c2'}}
          iconStyle={{borderColor: '#e6e6e6'}}
          isChecked={todo.completed}
          onPress={() => handleComplete()}
          onLongPress={() => handleDelete(todo.id)}
        />
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={handleEditPage}>
          <Icon
            name="playlist-edit"
            size={40}
            color="#7e57c2"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(todo.id)}>
          <Icon name="delete" size={40} color="#7e57c2" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    marginHorizontal: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#d1c4e9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  check_container: {
    flex: 1,
  },
  button_container: {
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    padding: 5,
    marginLeft: 32,
    marginRight: 2,
  },
});
